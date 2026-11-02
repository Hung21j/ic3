import React from "react";
import { motion } from "motion/react";
import { 
  KeyRound, 
  ShieldCheck, 
  LogOut, 
  Sparkles, 
  BookOpen, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Laptop, 
  Compass, 
  Award,
  MousePointer,
  Paintbrush,
  ShieldAlert
} from "lucide-react";
import { User } from "../types";
import gs6Logo from "../assets/gs6_b4829e48.png";
import sparkLogo from "../assets/spark_05b29717.png";

interface ProgramSelectMenuProps {
  currentUser: User;
  onSelectProgram: (program: "gs6" | "spark") => void;
  onLogout: () => void;
  onOpenChangePassword: () => void;
  onOpenAdmin?: () => void;
}

export default function ProgramSelectMenu({
  currentUser,
  onSelectProgram,
  onLogout,
  onOpenChangePassword,
  onOpenAdmin
}: ProgramSelectMenuProps) {
  return (
    <div className="min-h-screen bg-[#f0f3f8] text-slate-900 flex items-center justify-center p-4 md:p-8 font-sans select-none border-4 md:border-8 border-slate-300">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="max-w-5xl w-full bg-white border-2 border-slate-300 rounded-3xl p-6 md:p-10 space-y-8 shadow-sm relative overflow-hidden"
      >
        {/* Subtle accent line */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 via-indigo-600 to-emerald-500" />

        {/* Top Header & Student Info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 border-b-2 border-slate-200 pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-widest bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
                BƯỚC 1: LỰA CHỌN CHƯƠNG TRÌNH HỌC & THI
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight text-slate-950 uppercase font-mono">
              HỆ THỐNG ÔN LUYỆN CHỨNG CHỈ IC3
            </h1>
            <p className="text-xs md:text-sm text-slate-700 font-semibold leading-relaxed">
              Xin chào <strong className="text-slate-950 font-black">{currentUser.name}</strong>
              {currentUser.className && <> (Lớp <strong className="text-slate-950 font-black">{currentUser.className}</strong>)</>}
              {currentUser.school && <> • <span className="text-slate-800 font-bold">{currentUser.school}</span></>}
            </p>
          </div>
          
          <div className="flex items-center gap-2.5 self-start md:self-center flex-wrap">
            <button
              type="button"
              onClick={onOpenChangePassword}
              className="px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-bold font-mono bg-[#f1f5f9] hover:bg-[#e2e8f0] border border-slate-300 text-slate-900 transition flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
              title="Đổi mật khẩu tài khoản"
            >
              <KeyRound className="w-4 h-4 text-indigo-600" />
              <span>Đổi mật khẩu</span>
            </button>

            {currentUser.role === "admin" && onOpenAdmin && (
              <button
                type="button"
                onClick={onOpenAdmin}
                className="px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-bold font-mono bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Trang Quản Trị</span>
              </button>
            )}

            <button
              type="button"
              onClick={onLogout}
              className="px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-bold font-mono bg-[#f1f5f9] hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300 border border-slate-300 text-slate-800 transition flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>

        {/* Two Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* ================= CARD 1: GS6 ================= */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.15 }}
            onClick={() => onSelectProgram("gs6")}
            className="group bg-white hover:bg-[#fcfdfd] border-2 border-slate-300 hover:border-emerald-600 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all cursor-pointer shadow-sm hover:shadow-xl relative overflow-hidden ring-4 ring-transparent hover:ring-emerald-500/10"
          >
            {/* Top decorative badge */}
            <div className="flex justify-between items-start gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-black uppercase font-mono tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg">
                CHƯƠNG TRÌNH GS6
              </span>
              <span className="px-2.5 py-0.5 text-[11px] font-bold font-mono text-slate-600 bg-slate-100 rounded-md border border-slate-200">
                THCS / THPT / ĐH
              </span>
            </div>

            {/* GS6 Image Banner */}
            <div className="w-full h-36 sm:h-44 bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-2xl border-2 border-slate-200 flex items-center justify-center p-4 relative group-hover:border-emerald-300 transition-colors">
              <img 
                src={gs6Logo} 
                alt="IC3 Digital Literacy Certification Global Standard 6" 
                onError={(e) => { e.currentTarget.src = "/assets/aistudio/gs6_b4829e48.png"; }}
                className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="space-y-4 pt-5 flex-1 flex flex-col">
              <div>
                <h3 className="text-xl font-black text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                  <span>IC3 GS6</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 border border-emerald-300 px-2 py-0.5 rounded-full font-mono">
                    Global Standard 6
                  </span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 font-semibold mt-1">
                  Chuẩn tin học quốc tế đánh giá toàn diện kỹ năng công nghệ thông tin và truyền thông hiện đại.
                </p>
              </div>

              {/* Levels breakdown */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 font-mono block">
                  3 Cấp độ ôn luyện chuẩn:
                </span>
                <ul className="space-y-2">
                  <li className="text-xs md:text-sm text-slate-800 flex items-start gap-2.5 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span><strong>Level 1:</strong> Máy tính cơ bản, phần cứng, hệ điều hành Windows</span>
                  </li>
                  <li className="text-xs md:text-sm text-slate-800 flex items-start gap-2.5 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-indigo-100 border border-indigo-300 text-indigo-800 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span><strong>Level 2:</strong> Các ứng dụng cốt lõi (Word, Excel, PowerPoint)</span>
                  </li>
                  <li className="text-xs md:text-sm text-slate-800 flex items-start gap-2.5 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-100 border border-amber-300 text-amber-800 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span><strong>Level 3:</strong> Cuộc sống trực tuyến, mạng Internet và an toàn bảo mật</span>
                  </li>
                </ul>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 mt-auto">
                <span className="px-2 py-1 text-[11px] font-bold font-mono bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  ⚡ 5 Đề OT1-OT5
                </span>
                <span className="px-2 py-1 text-[11px] font-bold font-mono bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  🎯 Đề GM1 - GM2
                </span>
                <span className="px-2 py-1 text-[11px] font-bold font-mono bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  ⏱️ Chế độ Thi & Luyện tập
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <button
                type="button"
                className="w-full py-3.5 px-4 rounded-2xl text-xs md:text-sm font-black uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 group-hover:bg-emerald-600 shadow-md transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VÀO HỌC & THI GS6</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* ================= CARD 2: SPARK ================= */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.15 }}
            onClick={() => onSelectProgram("spark")}
            className="group bg-white hover:bg-[#fcfdfd] border-2 border-slate-300 hover:border-[#10b981] rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all cursor-pointer shadow-sm hover:shadow-xl relative overflow-hidden ring-4 ring-transparent hover:ring-emerald-400/10"
          >
            {/* Top decorative badge */}
            <div className="flex justify-between items-start gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-black uppercase font-mono tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-lg">
                CHƯƠNG TRÌNH SPARK
              </span>
              <span className="px-2.5 py-0.5 text-[11px] font-bold font-mono text-emerald-800 bg-emerald-50 rounded-md border border-emerald-200">
                TIỂU HỌC & KHỞI ĐẦU
              </span>
            </div>

            {/* Spark Image Banner */}
            <div className="w-full h-36 sm:h-44 bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-2xl border-2 border-slate-200 flex items-center justify-center p-4 relative group-hover:border-emerald-300 transition-colors">
              <img 
                src={sparkLogo} 
                alt="IC3 Spark Digital Literacy" 
                onError={(e) => { e.currentTarget.src = "/assets/aistudio/spark_05b29717.png"; }}
                className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="space-y-4 pt-5 flex-1 flex flex-col">
              <div>
                <h3 className="text-xl font-black text-slate-950 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                  <span>IC3 SPARK</span>
                  <span className="text-xs font-bold text-slate-800 bg-slate-200/80 border border-slate-300 px-2 py-0.5 rounded-full font-mono">
                    For Young Learners
                  </span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 font-semibold mt-1">
                  Chương trình chuẩn kỹ năng số quốc tế dành riêng cho lứa tuổi thiếu nhi và học sinh tiểu học.
                </p>
              </div>

              {/* Levels breakdown */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 font-mono block">
                  3 Cấp độ ôn luyện Spark:
                </span>
                <ul className="space-y-2">
                  <li className="text-xs md:text-sm text-slate-800 flex items-start gap-2.5 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span><strong>Spark Level 1:</strong> Máy tính căn bản, thao tác chuột, bàn phím</span>
                  </li>
                  <li className="text-xs md:text-sm text-slate-800 flex items-start gap-2.5 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-indigo-100 border border-indigo-300 text-indigo-800 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span><strong>Spark Level 2:</strong> Các ứng dụng chính (Soạn thảo Word, Vẽ hình Paint)</span>
                  </li>
                  <li className="text-xs md:text-sm text-slate-800 flex items-start gap-2.5 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-100 border border-amber-300 text-amber-800 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span><strong>Spark Level 3:</strong> Cuộc sống trực tuyến & An toàn Internet thiếu nhi</span>
                  </li>
                </ul>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 mt-auto">
                <span className="px-2 py-1 text-[11px] font-bold font-mono bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  👶 Thân thiện lứa tuổi
                </span>
                <span className="px-2 py-1 text-[11px] font-bold font-mono bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  🧩 Kéo thả & Ghép cặp
                </span>
                <span className="px-2 py-1 text-[11px] font-bold font-mono bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  ✨ Chấm điểm & Giải thích
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <button
                type="button"
                className="w-full py-3.5 px-4 rounded-2xl text-xs md:text-sm font-black uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VÀO HỌC & THI SPARK</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Footer info note */}
        <div className="text-center text-xs text-slate-600 font-mono border-t border-slate-200 pt-5 flex items-center justify-center gap-2 flex-wrap">
          <GraduationCap className="w-4 h-4 text-indigo-600" />
          <span>Hệ thống dữ liệu đề thi bám sát cấu trúc đề khảo thí chuẩn của Certiport Hoa Kỳ.</span>
        </div>
      </motion.div>
    </div>
  );
}
