import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Lock,
  User as UserIcon,
  School,
  GraduationCap,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  ListOrdered,
  RefreshCw,
  ChevronDown,
  Volume2,
  VolumeX
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { apiService } from "../services/apiService";
import { User } from "../types";
import {
  LampColor,
  LAMP_COLOR_OPTIONS,
  PARTICLE_THEMES,
  getStoredLampColor,
  saveLampColor
} from "../utils/lampTheme";

gsap.registerPlugin(Draggable);

interface AuthPageProps {
  onAuthSuccess: (user: User) => void;
  lampColor?: LampColor;
  onChangeLampColor?: (color: LampColor) => void;
}

const ANCHOR_X = 245;
const ANCHOR_Y = 212;
const REST_X = 245;
const REST_Y = 300;
const MAX_STRETCH = 120;
const TRIGGER_PULL = 32;

export default function AuthPage({
  onAuthSuccess,
  lampColor,
  onChangeLampColor
}: AuthPageProps) {
  // Interactive Lamp States
  const [isOn, setIsOn] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [currentColor, setCurrentColor] = useState<LampColor>(() => lampColor || getStoredLampColor());

  useEffect(() => {
    if (lampColor && lampColor !== currentColor) {
      setCurrentColor(lampColor);
    }
  }, [lampColor]);

  // Mode: "list" (Học sinh: School -> Class -> Name -> Password) or "login" (Giáo viên: manual username/password)
  const [mode, setMode] = useState<"login" | "list">("list");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Manual Login Form States
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Directory Dropdown Login States
  const [students, setStudents] = useState<User[]>([]);
  const [isLoadingStudents, setIsLoadingStudents] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [listPassword, setListPassword] = useState("");
  const [showListPassword, setShowListPassword] = useState(false);

  // Field for student who does not find their name in list
  const [isManualUsernameMode, setIsManualUsernameMode] = useState(false);
  const [manualUsername, setManualUsername] = useState("");

  // DOM & Animation Refs
  const rootRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cordBeadRef = useRef<SVGGElement | null>(null);
  const elasticCordRef = useRef<SVGPathElement | null>(null);
  const shadeAssemblyRef = useRef<SVGGElement | null>(null);
  const bulbGlowRef = useRef<SVGCircleElement | null>(null);
  const filamentRef = useRef<SVGPathElement | null>(null);
  const formStageRef = useRef<HTMLDivElement | null>(null);
  const loginCardRef = useRef<HTMLDivElement | null>(null);

  // Mutable refs for GSAP/canvas loops without stale closures
  const isOnRef = useRef(isOn);
  const isSoundEnabledRef = useRef(isSoundEnabled);
  const currentColorRef = useRef<LampColor>(currentColor);
  const isSimulatingPullRef = useRef(false);
  const twangAmpRef = useRef(0);
  const twangStartTimeRef = useRef(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    isOnRef.current = isOn;
  }, [isOn]);

  useEffect(() => {
    isSoundEnabledRef.current = isSoundEnabled;
  }, [isSoundEnabled]);

  useEffect(() => {
    currentColorRef.current = currentColor;
  }, [currentColor]);

  // Web Audio Synthesizer
  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }
  }, []);

  const playElasticPluckSound = useCallback((pullDist: number, turningOn: boolean) => {
    if (!isSoundEnabledRef.current) return;
    try {
      initAudio();
      const audioCtx = audioCtxRef.current;
      if (!audioCtx) return;

      const now = audioCtx.currentTime;

      // Pluck tone
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();
      osc.type = "triangle";

      const startFreq = 480 + Math.min(260, pullDist * 3);
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.12);

      oscGain.gain.setValueAtTime(0.4, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(oscGain);
      oscGain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.15);

      // Switch snap
      if (pullDist >= TRIGGER_PULL) {
        const snap = audioCtx.createOscillator();
        const snapGain = audioCtx.createGain();
        snap.type = "sine";
        snap.frequency.setValueAtTime(turningOn ? 1800 : 1500, now + 0.02);
        snap.frequency.exponentialRampToValueAtTime(320, now + 0.06);

        snapGain.gain.setValueAtTime(0.35, now + 0.02);
        snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);

        snap.connect(snapGain);
        snapGain.connect(audioCtx.destination);
        snap.start(now + 0.02);
        snap.stop(now + 0.07);

        if (turningOn) {
          const hum = audioCtx.createOscillator();
          const humGain = audioCtx.createGain();
          hum.type = "sine";
          hum.frequency.setValueAtTime(120, now + 0.05);
          humGain.gain.setValueAtTime(0.001, now);
          humGain.gain.linearRampToValueAtTime(0.06, now + 0.08);
          humGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

          hum.connect(humGain);
          humGain.connect(audioCtx.destination);
          hum.start(now + 0.05);
          hum.stop(now + 0.38);
        }
      }
    } catch (e) {
      console.warn("AudioContext error:", e);
    }
  }, [initAudio]);

  const playColorSwitchSound = useCallback(() => {
    if (!isSoundEnabledRef.current) return;
    try {
      initAudio();
      const audioCtx = audioCtxRef.current;
      if (!audioCtx) return;
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch {
      // ignore audio error
    }
  }, [initAudio]);

  const renderElasticString = useCallback((curX: number, curY: number) => {
    const elasticCord = elasticCordRef.current;
    if (!elasticCord) return;

    let twangOffset = 0;
    if (twangAmpRef.current > 0.05) {
      const elapsed = performance.now() - twangStartTimeRef.current;
      twangOffset = Math.sin(elapsed * 0.05) * twangAmpRef.current;
    }

    const midX = (ANCHOR_X + curX) / 2 + twangOffset;
    const midY = (ANCHOR_Y + curY) / 2;

    const stretchRatio = Math.max(1, (curY - ANCHOR_Y) / (REST_Y - ANCHOR_Y));
    const strokeWidth = Math.max(1.6, 2.6 / Math.sqrt(stretchRatio));

    elasticCord.setAttribute("d", `M ${ANCHOR_X} ${ANCHOR_Y} Q ${midX} ${midY} ${curX} ${curY}`);
    elasticCord.setAttribute("stroke-width", strokeWidth.toFixed(2));
  }, []);

  const applyLampVisualState = useCallback((targetState: boolean) => {
    const root = rootRef.current;
    const loginCard = loginCardRef.current;
    const filament = filamentRef.current;
    const bulbGlow = bulbGlowRef.current;
    if (!root) return;

    const beamEls = root.querySelectorAll(".svg-light-beam, .ambient-glow, .shade-reflector-on");
    gsap.killTweensOf([bulbGlow, filament, beamEls, loginCard]);
    gsap.set(beamEls, { clearProps: "opacity,visibility" });

    if (targetState) {
      if (filament && bulbGlow) {
        gsap.timeline()
          .to(filament, { stroke: "#fff", duration: 0.05 })
          .to(bulbGlow, { opacity: 0.95, duration: 0.1, ease: "power2.out" });
      }

      if (loginCard) {
        gsap.fromTo(
          loginCard,
          { y: 24, scale: 0.96, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
        );

        const staggerTargets = loginCard.querySelectorAll(
          ".card-header, .auth-tabs, .form-group, .submit-btn"
        );
        if (staggerTargets.length > 0) {
          gsap.fromTo(
            staggerTargets,
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.04, ease: "power2.out", delay: 0.08 }
          );
        }
      }
    } else {
      if (bulbGlow) gsap.set(bulbGlow, { opacity: 0, clearProps: "opacity" });
      if (filament) gsap.set(filament, { stroke: "#555", filter: "none", clearProps: "all" });
      if (loginCard) {
        gsap.set(loginCard, { rotateX: 0, rotateY: 0, clearProps: "all" });
      }
    }
  }, []);

  const handleElasticRelease = useCallback((curX: number, curY: number) => {
    const cordBead = cordBeadRef.current;
    const shadeAssembly = shadeAssemblyRef.current;
    const pullDist = curY - REST_Y;
    const isTriggered = pullDist >= TRIGGER_PULL;

    let nextState = isOnRef.current;
    if (isTriggered) {
      nextState = !isOnRef.current;
      isOnRef.current = nextState;
      setIsOn(nextState);
      requestAnimationFrame(() => applyLampVisualState(nextState));
    }

    playElasticPluckSound(pullDist, nextState);

    if (cordBead) {
      gsap.to(cordBead, {
        x: REST_X,
        y: REST_Y,
        duration: 1.15,
        ease: "elastic.out(2.2, 0.16)",
        onUpdate: () => {
          const bx = Number(gsap.getProperty(cordBead, "x"));
          const by = Number(gsap.getProperty(cordBead, "y"));
          renderElasticString(bx, by);
        }
      });
    }

    twangAmpRef.current = (curX - REST_X) * 0.4 + pullDist * 0.3;
    twangStartTimeRef.current = performance.now();
    const twangObj = { val: twangAmpRef.current };
    gsap.to(twangObj, {
      val: 0,
      duration: 0.9,
      ease: "power2.out",
      onUpdate: () => {
        twangAmpRef.current = twangObj.val;
      }
    });

    if (shadeAssembly) {
      gsap.to(shadeAssembly, {
        rotation: 0,
        duration: 0.7,
        ease: "back.out(2.2)",
        transformOrigin: "215px 175px"
      });
    }
  }, [applyLampVisualState, playElasticPluckSound, renderElasticString]);

  const performSimulatedPull = useCallback(() => {
    if (isSimulatingPullRef.current) return;
    const cordBead = cordBeadRef.current;
    const shadeAssembly = shadeAssemblyRef.current;
    if (!cordBead) return;

    isSimulatingPullRef.current = true;
    initAudio();

    gsap.to(cordBead, {
      y: REST_Y + 50,
      duration: 0.22,
      ease: "power2.in",
      onUpdate: () => {
        const by = Number(gsap.getProperty(cordBead, "y"));
        renderElasticString(REST_X, by);
      },
      onComplete: () => {
        handleElasticRelease(REST_X, REST_Y + 50);
        setTimeout(() => {
          isSimulatingPullRef.current = false;
        }, 500);
      }
    });

    if (shadeAssembly) {
      gsap.to(shadeAssembly, {
        rotation: 1.8,
        duration: 0.22,
        ease: "power2.in",
        transformOrigin: "230px 188px"
      });
    }
  }, [handleElasticRelease, initAudio, renderElasticString]);

  // Setup GSAP Draggable & Dust Particle Canvas
  useEffect(() => {
    const cordBead = cordBeadRef.current;
    const shadeAssembly = shadeAssemblyRef.current;

    if (cordBead) {
      gsap.set(cordBead, { x: REST_X, y: REST_Y });
      renderElasticString(REST_X, REST_Y);
    }

    const draggables = cordBead
      ? Draggable.create(cordBead, {
          type: "x,y",
          bounds: {
            minY: REST_Y,
            maxY: REST_Y + MAX_STRETCH,
            minX: REST_X - 45,
            maxX: REST_X + 45
          },
          cursor: "grab",
          activeCursor: "grabbing",
          onPress() {
            initAudio();
            twangAmpRef.current = 0;
          },
          onDrag() {
            renderElasticString(this.x, this.y);
            const pullDist = this.y - REST_Y;
            const shadeTilt = (pullDist / MAX_STRETCH) * 1.8;
            if (shadeAssembly) {
              gsap.set(shadeAssembly, {
                rotation: shadeTilt,
                transformOrigin: "215px 175px"
              });
            }
          },
          onRelease() {
            handleElasticRelease(this.x, this.y);
          },
          onClick() {
            performSimulatedPull();
          }
        })
      : [];

    // Canvas Dust Particles
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let width = 0;
    let height = 0;
    let rafId = 0;

    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      pulseSpeed: number;
      pulse: number;
    }

    const createParticle = (w: number, h: number): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.4) * 0.35,
      vy: -Math.random() * 0.4 - 0.15,
      alpha: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      pulse: Math.random() * Math.PI
    });

    const resizeCanvas = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const particles: Particle[] = Array.from({ length: 60 }, () =>
      createParticle(width || window.innerWidth, height || window.innerHeight)
    );

    const renderParticles = () => {
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        const theme = PARTICLE_THEMES[currentColorRef.current] || PARTICLE_THEMES.amber;
        const lampActive = isOnRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += p.pulseSpeed;
          if (p.y < 0) p.y = height;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;

          const currentAlpha = (Math.sin(p.pulse) * 0.3 + 0.7) * p.alpha;
          const factor = lampActive ? 1 : 0.08;
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${theme.fill}, ${currentAlpha * factor})`;
          if (lampActive) {
            ctx.shadowBlur = 7;
            ctx.shadowColor = `rgba(${theme.glow}, 0.5)`;
          }
          ctx.fill();
          ctx.restore();
        }
      }
      rafId = requestAnimationFrame(renderParticles);
    };

    renderParticles();

    return () => {
      draggables.forEach((d) => d.kill());
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
      gsap.killTweensOf([cordBead, shadeAssembly, loginCardRef.current]);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
    };
  }, [handleElasticRelease, initAudio, performSimulatedPull, renderElasticString]);

  const handleColorSelect = (color: LampColor) => {
    if (color === currentColor) return;
    setCurrentColor(color);
    saveLampColor(color);
    onChangeLampColor?.(color);
    playColorSwitchSound();

    if (isOn && rootRef.current) {
      const beamEls = rootRef.current.querySelectorAll(".svg-light-beam, .ambient-glow");
      gsap.fromTo(
        beamEls,
        { opacity: 0.65 },
        {
          opacity: 1,
          duration: 0.45,
          ease: "power1.out",
          onComplete: () => {
            gsap.set(beamEls, { clearProps: "opacity,visibility" });
          }
        }
      );
    }
  };

  const handleSoundToggle = () => {
    setIsSoundEnabled((prev) => {
      const next = !prev;
      if (next) initAudio();
      return next;
    });
  };

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isOn || !loginCardRef.current || !formStageRef.current) return;
    if (document.activeElement?.tagName === "SELECT") return;

    const rect = formStageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(loginCardRef.current, {
      rotateX: -(y / rect.height) * 7,
      rotateY: (x / rect.width) * 7,
      duration: 0.5,
      ease: "power1.out",
      transformPerspective: 900
    });
  };

  const handleStageMouseLeave = () => {
    if (!loginCardRef.current) return;
    gsap.to(loginCardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power2.out"
    });
  };

  // Fetch student directory added by admin
  const loadStudentDirectory = async () => {
    setIsLoadingStudents(true);
    try {
      const studentList = await apiService.getStudentsForLogin();
      setStudents(studentList);
    } catch (e) {
      console.warn("Could not load student list for login:", e);
    } finally {
      setIsLoadingStudents(false);
    }
  };

  useEffect(() => {
    loadStudentDirectory();
  }, []);

  // Filtered lists for cascaded dropdowns
  const uniqueSchools = Array.from(
    new Set(students.map((s) => s.school?.trim()).filter(Boolean) as string[])
  ).sort((a, b) => a.localeCompare(b, "vi"));

  const uniqueClasses = Array.from(
    new Set(
      students
        .filter((s) => s.school?.trim() === selectedSchool.trim())
        .map((s) => s.className?.trim())
        .filter(Boolean) as string[]
    )
  ).sort((a, b) => a.localeCompare(b, "vi", { numeric: true }));

  const filteredStudents = students
    .filter(
      (s) =>
        s.school?.trim() === selectedSchool.trim() &&
        s.className?.trim() === selectedClass.trim()
    )
    .sort((a, b) => a.name.localeCompare(b.name, "vi"));

  const selectedStudent = students.find((s) => s.id === selectedStudentId);

  // Handle Manual Username/Password Login Submit
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!loginUsername.trim() || !loginPassword) {
      setError("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await apiService.login(loginUsername, loginPassword);
      onAuthSuccess(res.user);
    } catch (err: any) {
      setError(err.message || "Đăng nhập thất bại. Kiểm tra lại thông tin tài khoản.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Dropdown List Login Submit (School -> Class -> Name -> Password OR Manual Username fallback)
  const handleListLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isManualUsernameMode) {
      if (!manualUsername.trim()) {
        setError("Vui lòng nhập tên đăng nhập của học sinh.");
        return;
      }
      if (!listPassword) {
        setError("Vui lòng nhập mật khẩu tài khoản học sinh.");
        return;
      }

      setIsLoading(true);
      try {
        const res = await apiService.login(manualUsername.trim(), listPassword);
        onAuthSuccess(res.user);
      } catch (err: any) {
        setError(err.message || "Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại.");
      } finally {
        setIsLoading(false);
      }
      return;
    }

    if (!selectedSchool) {
      setError("Vui lòng chọn trường học từ danh sách.");
      return;
    }
    if (!selectedClass) {
      setError("Vui lòng chọn lớp học từ danh sách.");
      return;
    }
    if (!selectedStudentId || !selectedStudent) {
      setError("Vui lòng chọn họ và tên học sinh hoặc chuyển sang tự nhập tên đăng nhập.");
      return;
    }
    if (!listPassword) {
      setError("Vui lòng nhập mật khẩu tài khoản học sinh.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await apiService.login(selectedStudent.username, listPassword);
      onAuthSuccess(res.user);
    } catch (err: any) {
      setError(err.message || "Mật khẩu không chính xác. Vui lòng kiểm tra lại.");
    } finally {
      setIsLoading(false);
    }
  };

  const isListSubmitDisabled =
    isLoading ||
    !listPassword ||
    (isManualUsernameMode
      ? !manualUsername.trim()
      : !selectedSchool || !selectedClass || !selectedStudentId);

  return (
    <div
      ref={rootRef}
      className="lamp-auth-root"
      data-on={isOn ? "true" : "false"}
      data-color={currentColor}
    >
      <div className="ambient-glow" />
      <canvas ref={canvasRef} id="dustCanvas" />

      {/* Top Quick Controls: Lamp Color Palette & Sound Toggle */}
      <div className="quick-controls">
        <div className="color-palette" title="Chọn màu ánh sáng đèn">
          {LAMP_COLOR_OPTIONS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`color-dot-btn ${currentColor === c.id ? "active" : ""}`}
              data-color={c.id}
              onClick={() => handleColorSelect(c.id)}
              aria-label={c.label}
              title={c.label}
            />
          ))}
        </div>

        <button
          type="button"
          className="sound-toggle"
          onClick={handleSoundToggle}
          title={isSoundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
          aria-label={isSoundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
        >
          {isSoundEnabled ? (
            <Volume2 className="sound-icon" />
          ) : (
            <VolumeX className="sound-icon" />
          )}
        </button>
      </div>

      <main className="scene-container">
        {/* Interactive Pull-Cord Desk Lamp */}
        <div className="lamp-stage">
          <div className="lamp-wrapper">
            <svg className="lamp-svg" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="metalArm" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3e434a" />
                  <stop offset="50%" stopColor="#7a828e" />
                  <stop offset="100%" stopColor="#24272c" />
                </linearGradient>

                <linearGradient id="brassJoint" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffe299" />
                  <stop offset="45%" stopColor="#c99738" />
                  <stop offset="85%" stopColor="#805915" />
                  <stop offset="100%" stopColor="#f5d38a" />
                </linearGradient>

                <linearGradient id="shadeExterior" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#343840" />
                  <stop offset="40%" stopColor="#21252a" />
                  <stop offset="100%" stopColor="#121417" />
                </linearGradient>

                <linearGradient id="shadeHighlight" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="42%" stopColor="#ffffff" stopOpacity="0.16" />
                  <stop offset="72%" stopColor="#ffffff" stopOpacity="0.025" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="shadeRim" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ffd584" />
                  <stop offset="50%" stopColor="#e2ab46" />
                  <stop offset="100%" stopColor="#996a1a" />
                </linearGradient>

                <radialGradient id="reflectorOff" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#2c3036" />
                  <stop offset="55%" stopColor="#1a1d22" />
                  <stop offset="100%" stopColor="#0e1012" />
                </radialGradient>

                <radialGradient id="reflectorOn" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="35%" stopColor="var(--lamp-glow, #ffe194)" stopOpacity="0.85" />
                  <stop offset="70%" stopColor="var(--lamp-accent, #ffab3d)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2a2015" stopOpacity="0.85" />
                </radialGradient>

                <linearGradient id="volumetricBeam" x1="0%" y1="0%" x2="90%" y2="70%">
                  <stop offset="0%" stopColor="var(--beam-start, rgba(255, 220, 130, 0.45))" />
                  <stop offset="25%" stopColor="var(--beam-mid, rgba(255, 195, 90, 0.22))" />
                  <stop offset="65%" stopColor="var(--beam-far, rgba(255, 175, 60, 0.08))" />
                  <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                </linearGradient>

                <filter id="bulbGlowFilter" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur1" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="beamSoftFilter" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
              </defs>

              <ellipse className="desk-shadow" cx="190" cy="460" rx="90" ry="16" fill="rgba(0, 0, 0, 0.55)" />

              <g className="light-beam-group">
                <polygon
                  className="svg-light-beam"
                  points="182,185 308,225 820,480 340,510"
                  fill="url(#volumetricBeam)"
                  filter="url(#beamSoftFilter)"
                />
              </g>

              <g className="lamp-base-group">
                <ellipse cx="190" cy="445" rx="72" ry="14" fill="#15171a" />
                <ellipse cx="190" cy="443" rx="70" ry="12" fill="url(#metalArm)" />
                <ellipse cx="190" cy="441" rx="66" ry="10" fill="#1c1f24" />
                <ellipse
                  cx="190"
                  cy="439"
                  rx="60"
                  ry="7"
                  fill="none"
                  stroke="#8e949f"
                  strokeOpacity=".22"
                  strokeWidth=".8"
                />
                <circle cx="190" cy="439" r="15" fill="url(#brassJoint)" />
                <circle cx="190" cy="439" r="7" fill="#15171a" />
                <circle cx="190" cy="439" r="3.2" fill="#747b86" />
              </g>

              <g className="lamp-arm-lower">
                <line
                  x1="186"
                  y1="439"
                  x2="156"
                  y2="295"
                  stroke="url(#metalArm)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                <line
                  x1="194"
                  y1="439"
                  x2="164"
                  y2="295"
                  stroke="url(#metalArm)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 188 420 Q 175 360 163 305"
                  stroke="#606670"
                  strokeWidth="2"
                  strokeDasharray="3,3"
                  fill="none"
                  opacity="0.6"
                />
              </g>

              <g className="lamp-elbow-joint">
                <circle cx="160" cy="295" r="13" fill="url(#brassJoint)" />
                <circle cx="160" cy="295" r="6" fill="#1c1f24" />
                <circle cx="160" cy="295" r="3.3" fill="#858b94" />
                <line x1="155" y1="295" x2="165" y2="295" stroke="url(#brassJoint)" strokeWidth="2" />
              </g>

              <g className="lamp-arm-upper">
                <line
                  x1="160"
                  y1="295"
                  x2="215"
                  y2="175"
                  stroke="url(#metalArm)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M 190 439 Q 168 360 160 295 Q 190 230 215 175"
                  stroke="#101114"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              <g className="lamp-neck">
                <circle cx="215" cy="175" r="11" fill="url(#brassJoint)" />
                <rect
                  x="209"
                  y="162"
                  width="16"
                  height="15"
                  rx="3"
                  fill="url(#metalArm)"
                  transform="rotate(25, 217, 169)"
                />
              </g>

              <g
                className="lamp-shade-assembly cursor-pointer"
                ref={shadeAssemblyRef}
                onClick={performSimulatedPull}
              >
                <path
                  className="lamp-shade-body"
                  d="M 182.3 184.6 C 188 135, 220 112, 248 115 C 275 118, 298 155, 307.7 225.4 A 66 22 18 0 1 182.3 184.6 Z"
                  fill="url(#shadeExterior)"
                  stroke="#16181b"
                  strokeWidth="1.8"
                />

                <path
                  className="shade-enamel-highlight"
                  d="M 187 181 C 193 139, 221 119, 247 120 C 267 122, 286 144, 297 178 C 271 163, 224 153, 187 181 Z"
                  fill="url(#shadeHighlight)"
                />
                <path
                  d="M 204 148 C 216 125, 235 119, 251 122"
                  fill="none"
                  stroke="#aeb5c2"
                  strokeOpacity=".17"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />

                <ellipse
                  className="shade-reflector-off"
                  cx="245"
                  cy="205"
                  rx="66"
                  ry="22"
                  transform="rotate(18, 245, 205)"
                  fill="url(#reflectorOff)"
                />

                <ellipse
                  className="shade-reflector-on"
                  cx="245"
                  cy="205"
                  rx="66"
                  ry="22"
                  transform="rotate(18, 245, 205)"
                  fill="url(#reflectorOn)"
                />

                <ellipse
                  className="reflector-detail"
                  cx="245"
                  cy="205"
                  rx="49"
                  ry="14"
                  transform="rotate(18, 245, 205)"
                  fill="none"
                  stroke="#fff3ce"
                  strokeOpacity=".16"
                  strokeWidth=".8"
                />

                <ellipse
                  cx="245"
                  cy="205"
                  rx="66"
                  ry="22"
                  transform="rotate(18, 245, 205)"
                  fill="none"
                  stroke="rgba(255, 213, 132, 0.25)"
                  strokeWidth="1"
                />

                <path
                  className="shade-rim-trim"
                  d="M 182.3 184.6 A 66 22 18 0 0 307.7 225.4"
                  stroke="url(#shadeRim)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                <g className="bulb-unit">
                  <ellipse
                    className="bulb-glass"
                    cx="245"
                    cy="195"
                    rx="14"
                    ry="17"
                    transform="rotate(18, 245, 195)"
                    fill="rgba(255, 255, 255, 0.08)"
                    stroke="rgba(255, 255, 255, 0.25)"
                    strokeWidth="1"
                  />
                  <path
                    d="M 239 190 Q 242 181 247 183"
                    fill="none"
                    stroke="#fff"
                    strokeOpacity=".55"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    ref={filamentRef}
                    className="bulb-filament"
                    d="M 241 189 Q 245 183 249 189"
                    stroke="#555"
                    strokeWidth="1.8"
                    fill="none"
                  />
                  <circle
                    ref={bulbGlowRef}
                    className="bulb-glow-core"
                    cx="245"
                    cy="188"
                    r="11"
                    fill="var(--lamp-glow, #ffe194)"
                    filter="url(#bulbGlowFilter)"
                    opacity="0"
                  />
                </g>

                <g className="cord-socket-grommet">
                  <rect
                    x="242"
                    y="206"
                    width="6"
                    height="6"
                    rx="1.5"
                    fill="url(#brassJoint)"
                    stroke="#68420e"
                    strokeWidth="0.8"
                  />
                  <circle cx="245" cy="212" r="3" fill="#ffe299" stroke="#7a5513" strokeWidth="0.8" />
                  <circle cx="245" cy="212" r="1.3" fill="#181105" />
                </g>
              </g>

              {/* Pull String System */}
              <g className="pull-cord-system">
                <path
                  ref={elasticCordRef}
                  className="elastic-cord-path"
                  d="M 245 212 L 245 300"
                  stroke="#e8bb54"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />

                <g ref={cordBeadRef} className="cord-bead-group">
                  <circle className="bead-aura" cx="0" cy="0" r="16" fill="var(--lamp-accent)" opacity="0" />
                  <path
                    className="bead-shape"
                    d="M -4 -8 L 4 -8 L 7 6 C 7 10, -7 10, -7 6 Z"
                    fill="url(#brassJoint)"
                    stroke="#7a5513"
                    strokeWidth="0.8"
                  />
                  <ellipse cx="2" cy="0" rx="2" ry="4" fill="#fff" opacity="0.5" />
                  <circle cx="0" cy="0" r="32" fill="transparent" />
                </g>
              </g>
            </svg>
          {/*
            // <div className="cord-tooltip">
            //   <span>Kéo dây đèn để đăng nhập</span>
            //   <div className="tooltip-arrow" />
            // </div> */}
          </div>
        </div>

        {/* Illuminated Glassmorphism Login Form Stage */}
        <div
          ref={formStageRef}
          className="form-stage"
          onMouseMove={handleStageMouseMove}
          onMouseLeave={handleStageMouseLeave}
        >
          <div ref={loginCardRef} className="login-card">
            <div className="card-header">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-[var(--lamp-accent)]" />
                </div>
                <div>
                  <h1 className="card-title">HỆ THỐNG ÔN THI IC3</h1>
                  <p className="card-subtitle">Cổng đăng nhập học sinh &amp; giáo viên</p>
                </div>
              </div>
            </div>

            {/* Mode Switch Tabs: HỌC SINH vs GIÁO VIÊN */}
            <div className="auth-tabs" data-active={mode}>
              <button
                type="button"
                className={`auth-tab ${mode === "list" ? "active" : ""}`}
                onClick={() => {
                  setMode("list");
                  setError(null);
                }}
              >
                <ListOrdered className="w-4 h-4 shrink-0" />
                <span>HỌC SINH</span>
              </button>
              <button
                type="button"
                className={`auth-tab ${mode === "login" ? "active" : ""}`}
                onClick={() => {
                  setMode("login");
                  setError(null);
                }}
              >
                <Lock className="w-4 h-4 shrink-0" />
                <span>GIÁO VIÊN</span>
              </button>
              <div className="tab-slider" />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-400/35 text-rose-200 text-xs md:text-sm font-semibold flex items-center gap-2.5"
              >
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{error}</span>
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {mode === "list" ? (
                /* ================= FORM ĐĂNG NHẬP HỌC SINH ================= */
                <motion.form
                  key="list-form"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleListLoginSubmit}
                >
                  {/* 1. Trường học */}
                  <div className="form-group">
                    <div className="label-row">
                      <label htmlFor="schoolSelect">1. Trường học</label>
                      <button
                        type="button"
                        onClick={loadStudentDirectory}
                        disabled={isLoadingStudents}
                        className="accent-link"
                        title="Làm mới danh sách học sinh"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isLoadingStudents ? "animate-spin" : ""}`} />
                        <span>Làm mới</span>
                      </button>
                    </div>
                    <div className="input-wrapper">
                      <School className="field-icon" />
                      <select
                        id="schoolSelect"
                        required={!isManualUsernameMode}
                        value={selectedSchool}
                        onChange={(e) => {
                          setSelectedSchool(e.target.value);
                          setSelectedClass("");
                          setSelectedStudentId("");
                          setListPassword("");
                          setError(null);
                        }}
                      >
                        <option value="">-- Chọn Trường học --</option>
                        {uniqueSchools.map((sch) => (
                          <option key={sch} value={sch}>
                            {sch}
                          </option>
                        ))}
                      </select>
                      <span className="select-chevron">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* 2. Lớp học */}
                  <div className="form-group">
                    <label htmlFor="classSelect">2. Lớp học</label>
                    <div className={`input-wrapper ${!selectedSchool ? "is-disabled" : ""}`}>
                      <GraduationCap className="field-icon" />
                      <select
                        id="classSelect"
                        required={!isManualUsernameMode}
                        disabled={!selectedSchool}
                        value={selectedClass}
                        onChange={(e) => {
                          setSelectedClass(e.target.value);
                          setSelectedStudentId("");
                          setListPassword("");
                          setError(null);
                        }}
                      >
                        <option value="">
                          {selectedSchool ? "-- Chọn Lớp học --" : "-- Vui lòng chọn trường trước --"}
                        </option>
                        {uniqueClasses.map((cls) => (
                          <option key={cls} value={cls}>
                            Lớp {cls}
                          </option>
                        ))}
                      </select>
                      <span className="select-chevron">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* 3. Tên đăng nhập */}
                  <div className="form-group">
                    <div className="label-row">
                      <label htmlFor={isManualUsernameMode ? "manualUsernameInput" : "studentSelect"}>
                        3. Tên đăng nhập
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setIsManualUsernameMode(!isManualUsernameMode);
                          if (!isManualUsernameMode) {
                            setSelectedStudentId("");
                          } else {
                            setManualUsername("");
                          }
                          setError(null);
                        }}
                        className="accent-link"
                      >
                        {isManualUsernameMode ? "← Quay lại chọn danh sách" : "Nhập tên →"}
                      </button>
                    </div>

                    {!isManualUsernameMode ? (
                      <div className={`input-wrapper ${!selectedClass ? "is-disabled" : ""}`}>
                        <UserIcon className="field-icon" />
                        <select
                          id="studentSelect"
                          required={!isManualUsernameMode}
                          disabled={!selectedClass}
                          value={selectedStudentId}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (val === "__manual__") {
                              setIsManualUsernameMode(true);
                              setSelectedStudentId("");
                            } else {
                              setSelectedStudentId(val);
                            }
                            setListPassword("");
                            setError(null);
                          }}
                        >
                          <option value="">
                            {selectedClass ? "-- Chọn Họ và tên học sinh --" : "-- Vui lòng chọn lớp trước --"}
                          </option>
                          {filteredStudents.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name} ({s.username})
                            </option>
                          ))}
                        </select>
                        <span className="select-chevron">
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </div>
                    ) : (
                      <div className="input-wrapper">
                        <UserIcon className="field-icon" />
                        <input
                          id="manualUsernameInput"
                          type="text"
                          required
                          autoFocus
                          value={manualUsername}
                          onChange={(e) => {
                            setManualUsername(e.target.value);
                            setError(null);
                          }}
                          placeholder="Nhập tên đăng nhập (VD: hs_nguyenvanan)..."
                        />
                      </div>
                    )}
                  </div>

                  {/* 4. Mật khẩu */}
                  <div className="form-group">
                    <label htmlFor="listPasswordInput">4. Mật khẩu</label>
                    <div
                      className={`input-wrapper ${
                        (isManualUsernameMode ? !manualUsername.trim() : !selectedStudentId) ? "is-disabled" : ""
                      }`}
                    >
                      <Lock className="field-icon" />
                      <input
                        id="listPasswordInput"
                        type={showListPassword ? "text" : "password"}
                        required
                        disabled={isManualUsernameMode ? !manualUsername.trim() : !selectedStudentId}
                        value={listPassword}
                        onChange={(e) => setListPassword(e.target.value)}
                        placeholder={
                          isManualUsernameMode
                            ? manualUsername.trim()
                              ? "Nhập mật khẩu tài khoản..."
                              : "Vui lòng nhập tên đăng nhập trước"
                            : selectedStudentId
                            ? "Nhập mật khẩu..."
                            : "Vui lòng chọn học sinh trước"
                        }
                      />
                      <button
                        type="button"
                        disabled={isManualUsernameMode ? !manualUsername.trim() : !selectedStudentId}
                        onClick={() => setShowListPassword(!showListPassword)}
                        className="eye-toggle"
                        aria-label="Hiện/ẩn mật khẩu"
                      >
                        {showListPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button type="submit" disabled={isListSubmitDisabled} className="submit-btn">
                    <span className="btn-glow-layer" />
                    {isLoading ? (
                      <span className="btn-content">
                        <span className="btn-spinner" />
                        <span>Đang xác thực...</span>
                      </span>
                    ) : (
                      <span className="btn-content">
                        <span>ĐĂNG NHẬP</span>
                        <ArrowRight className="btn-arrow" />
                      </span>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* ================= FORM ĐĂNG NHẬP GIÁO VIÊN ================= */
                <motion.form
                  key="login-form"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleLoginSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="teacherUsername">Tên đăng nhập (Username)</label>
                    <div className="input-wrapper">
                      <UserIcon className="field-icon" />
                      <input
                        id="teacherUsername"
                        type="text"
                        required
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                        placeholder="Nhập tên đăng nhập"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="teacherPassword">Mật khẩu (Password)</label>
                    <div className="input-wrapper">
                      <Lock className="field-icon" />
                      <input
                        id="teacherPassword"
                        type={showPassword ? "text" : "password"}
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="eye-toggle"
                        aria-label="Hiện/ẩn mật khẩu"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button type="submit" disabled={isLoading} className="submit-btn">
                    <span className="btn-glow-layer" />
                    {isLoading ? (
                      <span className="btn-content">
                        <span className="btn-spinner" />
                        <span>Đang xác thực...</span>
                      </span>
                    ) : (
                      <span className="btn-content">
                        <span>ĐĂNG NHẬP HỆ THỐNG</span>
                        <ArrowRight className="btn-arrow" />
                      </span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
