import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  Trash2, 
  Lightbulb, 
  GitCommit,
  CheckCircle,
  FileText,
  Bookmark,
  ListRestart,
  Activity,
  Cpu,
  Database,
  Layers,
  ArrowRight,
  GraduationCap,
  ArrowLeft
} from "lucide-react";
import QuestionInputForm from "./components/QuestionInputForm";
import QuestionResultView from "./components/QuestionResultView";
import SolvedHistoryList from "./components/SolvedHistoryList";
import IC3QuestionBank from "./components/IC3QuestionBank";
import ProgramSelectMenu from "./components/ProgramSelectMenu";
import AuthPage from "./components/AuthPage";
import AdminDashboard from "./components/AdminDashboard";
import { SolvedResponse, SavedQuestion, QuestionType, User } from "./types";
import { IC3Question } from "./data/ic3Questions";
import { apiService } from "./services/apiService";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, LogOut, KeyRound } from "lucide-react";
import { ChangePasswordModal } from "./components/ChangePasswordModal";
import { firestoreService } from "./services/firestoreService";
import UserDropdownMenu from "./components/UserDropdownMenu";

// Academic/solving status indicators during analysis
const STATUS_INDICATORS = [
  "OCR Scanning: Reading inputs and capturing structural data...",
  "Context mapping: Classifying question style dynamics...",
  "Core reasoning: Evaluating peer-reviewed mechanics & logic theorems...",
  "Double checking calculus: verifying mathematical operations...",
  "Pairing matching coordinates: confirming column alignments...",
  "Synthesizing structured output format...",
];

// In-app problem presets so users can instantly experience the solver
const PROBLEM_PRESETS = [
  {
    id: "preset-mcq",
    title: "Thermodynamics MCQ",
    type: "multiple_choice" as QuestionType,
    text: "Which of the following describes the thermodynamic process where no heat is transferred into or out of the system?",
    options: ["Isothermal", "Isobaric", "Adiabatic", "Isochoric"]
  },
  {
    id: "preset-yesno",
    title: "Database Constraint (True/False)",
    type: "yes_no" as QuestionType,
    text: "True or False: In a relational database, a primary key can contain null values under default configurations."
  },
  {
    id: "preset-matching",
    title: "Cell Organelle Matches",
    type: "matching" as QuestionType,
    text: "Review and pair the organelles to their correct physiological function:\nOrganelle List:\n1. Mitochondria\n2. Ribosomes\n3. Lysosomes\n\nFunctional Roles:\nA. Protein translation synthesis\nB. Chemical waste digestion & breakdown\nC. Cellular respiration & ATP energy generation"
  },
  {
    id: "preset-calc",
    title: "Calculus Solve",
    type: "general" as QuestionType,
    text: "Find the derivative of the function f(x) = x * ln(x) with respect to x, and find the valuation profile of f'(e)."
  }
];

export const IC3_LEVELS = [
  {
    id: "level-1",
    name: "Level 1: Máy tính cơ bản",
    englishName: "Computing Fundamentals",
    description: "Tìm hiểu cấu trúc máy tính, phần cứng, phần mềm, hệ điều hành (Windows), cách quản lý tệp tin thư mục và an toàn dữ liệu.",
    skills: ["Phần cứng & Thiết bị", "Hệ điều hành Windows", "Quản lý tệp tin / Thư mục", "Khái niệm bảo mật cơ bản"],
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    hoverBorder: "hover:border-emerald-400 hover:bg-emerald-50/10",
    buttonColor: "bg-emerald-600 hover:bg-emerald-500",
    ringColor: "ring-emerald-500/20",
    iconBg: "bg-emerald-600"
  },
  {
    id: "level-2",
    name: "Level 2: Các ứng dụng cốt lõi",
    englishName: "Key Applications",
    description: "Khám phá sâu các phần mềm văn phòng thông dụng nhất, kỹ năng soạn thảo văn bản và biểu diễn bảng số liệu.",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Đồ họa & Quản lý cơ sở dữ liệu"],
    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
    hoverBorder: "hover:border-indigo-400 hover:bg-indigo-50/10",
    buttonColor: "bg-indigo-600 hover:bg-indigo-500",
    ringColor: "ring-indigo-500/20",
    iconBg: "bg-indigo-600"
  },
  {
    id: "level-3",
    name: "Level 3: Cuộc sống trực tuyến",
    englishName: "Living Online",
    description: "Nắm vững môi trường mạng máy tính, giao tiếp thư điện tử điện tử, lướt web an toàn và quy tắc công dân số.",
    skills: ["Mạng máy tính & Internet", "Thư điện tử (Email)", "Trình duyệt & Tìm kiếm nâng cao", "Hành vi mạng & Công dân số"],
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    hoverBorder: "hover:border-amber-400 hover:bg-amber-50/10",
    buttonColor: "bg-amber-600 hover:bg-amber-500",
    ringColor: "ring-amber-500/20",
    iconBg: "bg-amber-600"
  }
];

export const SPARK_LEVELS = [
  {
    id: "spark-level-1",
    name: "Spark Level 1: Máy tính căn bản",
    englishName: "Computing Fundamentals",
    description: "Làm quen với các bộ phận máy tính, thiết bị vào/ra, cách bật/tắt máy đúng chuẩn và thành thạo thao tác chuột, bàn phím.",
    skills: ["Nhận biết thiết bị phần cứng", "Thao tác chuột & Bàn phím", "Màn hình nền Desktop", "Bảo quản máy tính an toàn"],
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    hoverBorder: "hover:border-emerald-400 hover:bg-emerald-50/10",
    buttonColor: "bg-emerald-600 hover:bg-emerald-500",
    ringColor: "ring-emerald-500/20",
    iconBg: "bg-emerald-600"
  },
  {
    id: "spark-level-2",
    name: "Spark Level 2: Các ứng dụng cốt lõi",
    englishName: "Key Applications",
    description: "Thực hành soạn thảo văn bản đơn giản (Word), tập gõ tiếng Việt, vẽ tranh mỹ thuật và làm quen bài thuyết trình vui nhộn.",
    skills: ["Tập gõ văn bản & Chữ hoa/thường", "Tập vẽ & Tô màu hình khối Paint", "Lưu bài làm (Ctrl+S)", "Chèn tranh ảnh trực quan"],
    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
    hoverBorder: "hover:border-indigo-400 hover:bg-indigo-50/10",
    buttonColor: "bg-indigo-600 hover:bg-indigo-500",
    ringColor: "ring-indigo-500/20",
    iconBg: "bg-indigo-600"
  },
  {
    id: "spark-level-3",
    name: "Spark Level 3: Cuộc sống trực tuyến",
    englishName: "Living Online",
    description: "Khám phá mạng Internet an toàn cho học sinh thiếu nhi, sử dụng trình duyệt web, tìm kiếm học tập và ứng xử văn minh số.",
    skills: ["Trình duyệt web & Tìm kiếm an toàn", "Bảo vệ thông tin cá nhân", "Ứng xử lịch sự trên mạng", "Thời gian dùng thiết bị hợp lý"],
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    hoverBorder: "hover:border-amber-400 hover:bg-amber-50/10",
    buttonColor: "bg-amber-600 hover:bg-amber-500",
    ringColor: "ring-amber-500/20",
    iconBg: "bg-amber-600"
  }
];

export default function App() {
  const [activeResult, setActiveResult] = useState<SolvedResponse | null>(null);
  const [activeItem, setActiveItem] = useState<SavedQuestion | null>(null);
  const [history, setHistory] = useState<SavedQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Authentication & View Management
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<"student" | "admin">("student");
  const [customQuestions, setCustomQuestions] = useState<IC3Question[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<"gs6" | "spark" | null>(() => {
    const saved = localStorage.getItem("student_program_ic3");
    return (saved === "gs6" || saved === "spark") ? saved : null;
  });
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [showUserChangePassword, setShowUserChangePassword] = useState(false);
  const [userToast, setUserToast] = useState<string | null>(null);

  // Level-specific accent configurations to tie the theme color all the way from Level Selection
  const isL1 = selectedLevel?.includes("Level 1");
  const isL2 = selectedLevel?.includes("Level 2");
  const isL3 = selectedLevel?.includes("Level 3");
  const accentBgLogo = isL1 ? "bg-emerald-600" : isL2 ? "bg-indigo-600" : "bg-amber-600";
  const accentBorderForm = isL1 ? "focus:border-emerald-500" : isL2 ? "focus:border-indigo-500" : "focus:border-amber-500";
  const accentSaveBtn = isL1 
    ? "text-emerald-700 hover:text-emerald-800 bg-emerald-50 border border-emerald-150" 
    : isL2 
      ? "text-indigo-600 hover:text-indigo-700 bg-indigo-50 border border-indigo-150" 
      : "text-amber-700 hover:text-amber-800 bg-amber-50 border border-amber-150";
  const accentChangeLvlBtn = isL1 
    ? "bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 text-emerald-600" 
    : isL2 
      ? "bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 text-indigo-605" 
      : "bg-amber-50 border border-amber-100 hover:bg-amber-100 text-amber-600";

  const loadCustomQuestions = async () => {
    try {
      const q = await apiService.getCustomQuestions();
      setCustomQuestions(q);
    } catch (e) {
      console.warn("Could not load custom questions:", e);
    }
  };

  const handleLogout = async () => {
    await apiService.logout();
    setCurrentUser(null);
    setCurrentView("student");
  };

  const handleSelectProgram = (program: "gs6" | "spark") => {
    setSelectedProgram(program);
    localStorage.setItem("student_program_ic3", program);
    setSelectedLevel(null);
    localStorage.removeItem("student_level_ic3");
  };

  const handleSwitchProgram = () => {
    setSelectedProgram(null);
    localStorage.removeItem("student_program_ic3");
    setSelectedLevel(null);
    localStorage.removeItem("student_level_ic3");
  };

  const handleAuthSuccess = (user: User) => {
    setCurrentUser(user);
    if (user.role === "admin") {
      setCurrentView("admin");
    } else {
      setCurrentView("student");
    }
  };
  
  useEffect(() => {
    apiService.setActiveSession(null);
  }, []);

  // Load custom questions, level and history
  useEffect(() => {
    loadCustomQuestions();

    const savedProg = localStorage.getItem("student_program_ic3");
    if (savedProg === "gs6" || savedProg === "spark") {
      setSelectedProgram(savedProg);
    }

    const savedLevel = localStorage.getItem("student_level_ic3");
    if (savedLevel) {
      setSelectedLevel(savedLevel);
    }

    const saved = localStorage.getItem("question_solver_history");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setHistory(parsed);
        if (parsed.length > 0) {
          setActiveItem(parsed[0]);
          setActiveResult(parsed[0].result);
        }
      } catch (err) {
        console.error("Localstorage load error", err);
      }
    }
  }, []);

  // Sync back to localstorage
  const saveHistoryToStorage = (updatedHistory: SavedQuestion[]) => {
    localStorage.setItem("question_solver_history", JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
  };

  // Rotating loading captions
  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setStatusText(STATUS_INDICATORS[0]);
      interval = setInterval(() => {
        index = (index + 1) % STATUS_INDICATORS.length;
        setStatusText(STATUS_INDICATORS[index]);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (!currentUser) return;
  
    const checkRemoteLogout = async () => {
      try {
        const users = await firestoreService.getCloudUsers();
  
        const cloudUser = users.find(
          (item) => item.user.id === currentUser.id
        );
  
        if (!cloudUser) {
          await apiService.logout();
          setCurrentUser(null);
          setCurrentView("student");
          return;
        }
  
        const localVersion = currentUser.sessionVersion || 0;
        const cloudVersion = cloudUser.user.sessionVersion || 0;
  
        if (cloudVersion > localVersion) {
          await apiService.logout();
  
          setCurrentUser(null);
          setCurrentView("student");
  
          alert(
            "Tài khoản của bạn đã được quản trị viên đăng xuất."
          );
        }
      } catch (err) {
        console.warn("Remote logout check failed:", err);
      }
    };
  
    const interval = setInterval(checkRemoteLogout, 3000);
  
    return () => clearInterval(interval);
  }, [currentUser]);

  // Request analysis & solutions from full-stack backend
  const handleSolve = async (payload: {
    questionText: string;
    questionType: QuestionType | "auto";
    image: string | null;
    options: string[];
  }) => {
    setIsLoading(true);
    setError(null);
    setActiveResult(null);
    setActiveItem(null);

    try {
      const response = await fetch("/api/solve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `HTTP solve failure. Status: ${response.status}`);
      }

      const resData = await response.json();
      if (!resData.success || !resData.result) {
        throw new Error(resData.error || "Solving pipeline returned an incomplete answer.");
      }

      const result: SolvedResponse = resData.result;
      
      // Build a history model
      const newSavedItem: SavedQuestion = {
        id: "q-" + Date.now(),
        timestamp: new Date().toISOString(),
        questionText: payload.questionText || `Image solved: ${result.topic || "Academic question"}`,
        image: payload.image || undefined,
        type: result.questionType,
        result
      };

      // Prepend to history and save
      const updatedHistory = [newSavedItem, ...history.slice(0, 49)]; //cap at 50 elements
      saveHistoryToStorage(updatedHistory);
      
      setActiveItem(newSavedItem);
      setActiveResult(result);

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to solve. Please double check backend configurations.");
    } finally {
      setIsLoading(false);
    }
  };

  // Preset trigger handler
  const handlePresetSelect = (preset: typeof PROBLEM_PRESETS[0]) => {
    handleSolve({
      questionText: preset.text,
      questionType: preset.type,
      image: null,
      options: preset.options || []
    });
  };

  // History item select trigger
  const handleSelectHistory = (item: SavedQuestion) => {
    setActiveItem(item);
    setActiveResult(item.result);
    // Scroll to display details cleanly
    document.getElementById("solver-workspace")?.scrollIntoView({ behavior: "smooth" });
  };

  // History item single delete
  const handleDeleteHistory = (id: string) => {
    const updated = history.filter((x) => x.id !== id);
    saveHistoryToStorage(updated);
    if (activeItem?.id === id) {
      setActiveItem(null);
      setActiveResult(null);
    }
  };

  // Clear all history
  const handleClearAllHistory = () => {
    if (confirm("Are you sure you want to wipe all history records?")) {
      saveHistoryToStorage([]);
      setActiveItem(null);
      setActiveResult(null);
    }
  };

  const startNewQuery = () => {
    setActiveItem(null);
    setActiveResult(null);
    setError(null);
    // Focus or scroll back
    document.getElementById("solver-workspace")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!currentUser) {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  }

  if (currentUser.role === "admin" && currentView === "admin") {
    return (
      <AdminDashboard
        currentUser={currentUser}
        onLogout={handleLogout}
        onSwitchToStudentView={() => setCurrentView("student")}
        onQuestionsUpdated={loadCustomQuestions}
      />
    );
  }

  if (!selectedProgram) {
    return (
      <>
        <ProgramSelectMenu
          currentUser={currentUser}
          onSelectProgram={handleSelectProgram}
          onLogout={handleLogout}
          onOpenChangePassword={() => setShowUserChangePassword(true)}
          onOpenAdmin={currentUser.role === "admin" ? () => setCurrentView("admin") : undefined}
        />

        {/* Change password modal for student in Program Selection */}
        <ChangePasswordModal
          isOpen={showUserChangePassword}
          onClose={() => setShowUserChangePassword(false)}
          userId={currentUser.id}
          username={currentUser.username}
          userName={currentUser.name}
          className={currentUser.className}
          school={currentUser.school}
          onSuccess={(msg) => {
            setUserToast(msg);
            setTimeout(() => setUserToast(null), 4000);
          }}
        />
      </>
    );
  }

  const activeProgramLevels = selectedProgram === "spark" ? SPARK_LEVELS : IC3_LEVELS;
  const isSparkProgram = selectedProgram === "spark";

  if (!selectedLevel) {
    return (
      <div className="min-h-screen bg-[#f0f3f8] text-slate-900 flex items-center justify-center p-4 md:p-8 font-sans select-none border-4 md:border-8 border-slate-300">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-5xl w-full bg-white border-2 border-slate-300 rounded-3xl p-6 md:p-8 space-y-6 md:space-y-8 shadow-sm relative overflow-hidden"
        >
          {/* Subtle decoration lines */}
          <div className={`absolute top-0 left-0 right-0 h-2 ${isSparkProgram ? "bg-emerald-600" : "bg-indigo-700"}`} />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-slate-200 pb-5">
            <div className="flex items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-black uppercase tracking-widest font-mono px-2 py-0.5 rounded-md border ${
                    isSparkProgram 
                      ? "bg-emerald-50 text-emerald-800 border-emerald-300" 
                      : "bg-indigo-50 text-indigo-700 border-indigo-200"
                  }`}>
                    BƯỚC 2: CHỌN CẤP ĐỘ {isSparkProgram ? "IC3 SPARK" : "IC3 GS6"}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-slate-700 font-semibold leading-relaxed">
                  Xin chào <strong className="text-slate-950 font-black">{currentUser.name}</strong>
                  {currentUser.className && <> (Lớp <strong className="text-slate-950 font-black">{currentUser.className}</strong>)</>}
                  {currentUser.school && <> • <span className="text-slate-800 font-bold">{currentUser.school}</span></>}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2.5 self-end md:self-center">
              <UserDropdownMenu
                currentUser={currentUser}
                selectedProgram={selectedProgram}
                selectedLevel={null}
                onSwitchProgram={handleSwitchProgram}
                onChangePassword={() => setShowUserChangePassword(true)}
                onOpenAdmin={currentUser.role === "admin" ? () => setCurrentView("admin") : undefined}
                onLogout={handleLogout}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeProgramLevels.map((level) => (
              <motion.div
                key={level.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  localStorage.setItem("student_level_ic3", level.name);
                  setSelectedLevel(level.name);
                }}
                className={`bg-white hover:bg-[#f8fafc] border-2 border-slate-300 hover:border-emerald-600 rounded-2xl p-5 flex flex-col justify-between transition-all cursor-pointer relative overflow-hidden group select-none shadow-xs hover:shadow-md ${level.hoverBorder}`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className={`px-2.5 py-1 text-[11px] font-black border rounded-md uppercase font-mono ${level.badgeColor}`}>
                      {level.id.replace("spark-", "").replace("-", " ")}
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-400 group-hover:bg-emerald-600 transition-colors" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                      {level.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 font-mono italic">
                      {level.englishName}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold">
                    {level.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block font-mono">
                      Chủ đề trọng tâm:
                    </span>
                    <ul className="space-y-1.5">
                      {level.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="text-xs md:text-sm text-slate-800 flex items-center gap-2 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                          <span className="truncate">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-auto">
                  <button
                    className={`w-full py-2.5 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider text-white transition duration-200 ${level.buttonColor}`}
                  >
                    BẮT ĐẦU
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center text-xs text-slate-500 font-mono border-t border-slate-300 pt-4 flex items-center justify-center gap-2">
            <span>Chương trình ôn luyện {isSparkProgram ? "IC3 SPARK" : "IC3 GS6"} chuẩn quốc tế Certiport Hoa Kỳ.</span>
          </div>
        </motion.div>

        {/* Change password modal for student in Level Selection */}
        <ChangePasswordModal
          isOpen={showUserChangePassword}
          onClose={() => setShowUserChangePassword(false)}
          userId={currentUser.id}
          username={currentUser.username}
          userName={currentUser.name}
          className={currentUser.className}
          school={currentUser.school}
          onSuccess={(msg) => {
            setUserToast(msg);
            setTimeout(() => setUserToast(null), 4000);
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f3f8] flex flex-col font-sans text-slate-900 border-4 md:border-8 border-slate-300">
      
      {/* 🚀 Visual Header Bar - Soft Surface, High Contrast */}
      <header className="app-header h-14 sm:h-16 bg-white border-b-2 border-slate-300 px-3 sm:px-6 md:px-8 flex items-center justify-between gap-2 shadow-xs z-20 shrink-0 select-none flex-nowrap">
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className={`text-[10px] font-black uppercase font-mono px-1.5 py-0.5 rounded border ${
                isSparkProgram 
                  ? "bg-emerald-50 text-emerald-800 border-emerald-300" 
                  : "bg-slate-100 text-slate-800 border-slate-300"
              }`}>
                {isSparkProgram ? "SPARK" : "GS6"}
              </span>
              <h1 className="text-xs sm:text-base font-black tracking-tight text-slate-900 leading-none">
                ÔN TẬP IC3
              </h1>
            </div>
          </div>
        </div>

        {/* Header Profile Dashboard Integration via Unified Dropdown */}
        <div className="app-header__actions flex items-center gap-2 shrink-0">
          <UserDropdownMenu
            currentUser={currentUser}
            selectedProgram={selectedProgram}
            selectedLevel={selectedLevel}
            onSwitchProgram={handleSwitchProgram}
            onSwitchLevel={() => {
              setSelectedLevel(null);
              localStorage.removeItem("student_level_ic3");
            }}
            onChangePassword={() => setShowUserChangePassword(true)}
            onOpenAdmin={currentUser.role === "admin" ? () => setCurrentView("admin") : undefined}
            onLogout={handleLogout}
          />
        </div>
      </header>

      {/* 🔮 Center Focused Layout Main Workspace - Single Column */}
      <main className="app-main flex-1 overflow-y-auto bg-[#f0f3f8] py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full space-y-6">
          
          {/* 1. Main Focused Question Bank Display - Expanded */}
          {selectedLevel && (
            <div className="shadow-sm rounded-2xl overflow-hidden bg-white border-2 border-slate-300">
              <IC3QuestionBank 
                selectedLevel={selectedLevel}
                selectedProgram={selectedProgram || "gs6"}
                currentUser={currentUser}
                customQuestions={customQuestions}
                onOpenAdminDashboard={currentUser.role === "admin" ? () => setCurrentView("admin") : undefined}
                onSwitchProgram={handleSwitchProgram}
                onSwitchLevel={() => {
                  setSelectedLevel(null);
                  localStorage.removeItem("student_level_ic3");
                }}
                onSelectQuestionToSolve={(data) => {
                  handleSolve({
                    questionText: data.questionText || data.question || "",
                    questionType: data.questionType,
                    image: data.image,
                    options: (data.options || []).map((o) => (typeof o === "string" ? o : `${o.key}. ${o.text}`))
                  });
                }}
                isLoading={isLoading}
              />
            </div>
          )}

          {/* 2. Interactive AI Explanation Block (Placed cleanly underneath the active card) */}
          <AnimatePresence mode="wait">
            
            {/* Loading detailed solve state */}
            {isLoading && (
              <motion.div 
                key="loading-ai"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-xl border border-slate-200 p-8 text-center flex flex-col items-center justify-center min-h-[220px] space-y-4 shadow-md"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin" />
                  <Sparkles className="absolute inset-0 m-auto w-3.5 h-3.5 text-indigo-500 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest font-mono">
                    HỆ THỐNG TRÍ TUỆ ĐANG PHÂN TÍCH...
                  </h3>
                  <p className="text-xs text-indigo-600 font-bold mt-1 max-w-md mx-auto leading-relaxed">
                    {statusText}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error state fallback */}
            {error && !isLoading && (
              <motion.div 
                key="error-state"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-rose-50 border border-rose-200 rounded-xl p-5 shadow-sm space-y-3"
              >
                <div className="flex gap-3">
                  <div className="p-1.5 bg-rose-100 text-rose-600 rounded">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-rose-800 uppercase tracking-wider font-mono">
                      CÓ LỖI XẢY RA KHI GIẢI BẰNG AI
                    </h3>
                    <p className="text-xs text-rose-700 leading-relaxed font-semibold mt-1">
                      {error}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setError(null)}
                  className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
                >
                  Bỏ qua lỗi này
                </button>
              </motion.div>
            )}

            {/* Active Rendered Explanation outputs */}
            {activeResult && !isLoading && (
              <motion.div 
                key="ai-result-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 relative"
              >
                {/* Float Close Button for the Result screen */}
                <div className="flex justify-end pr-1">
                  <button
                    onClick={() => {
                      setActiveResult(null);
                      setActiveItem(null);
                    }}
                    className="bg-slate-205 border border-slate-300 text-slate-650 hover:bg-red-50 hover:text-red-700 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm transition"
                  >
                    Đóng giải thích AI [X]
                  </button>
                </div>

                <div className="shadow-lg rounded-xl overflow-hidden border border-indigo-100">
                  <QuestionResultView 
                    result={activeResult} 
                    student={{ name: currentUser.name, className: currentUser.className }} 
                  />
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </main>

      {/* 🚀 Distraction-Free Simple Footer */}
      <footer className="h-10 bg-slate-800 text-slate-200 flex items-center justify-between px-6 text-xs uppercase tracking-wider font-semibold font-mono shrink-0 select-none">
        <span>{currentUser.className ? `${currentUser.className} // ` : ""}{currentUser.name}</span>        
        
      </footer>

      {/* Change Password Modal for logged-in user */}
      <ChangePasswordModal
        isOpen={showUserChangePassword}
        onClose={() => setShowUserChangePassword(false)}
        userId={currentUser.id}
        username={currentUser.username}
        userName={currentUser.name}
        className={currentUser.className}
        school={currentUser.school}
        onSuccess={(msg) => {
          setUserToast(msg);
          setTimeout(() => setUserToast(null), 4000);
        }}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {userToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-12 right-6 z-50 bg-emerald-600 text-white py-2.5 px-4 rounded-xl shadow-lg text-xs font-bold font-mono flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{userToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
