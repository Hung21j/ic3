import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ArrowLeft,
  KeyRound,
  ShieldCheck,
  LogOut,
  GraduationCap,
  Palette
} from "lucide-react";
import { User } from "../types";
import { LampColor, LAMP_COLOR_OPTIONS } from "../utils/lampTheme";

interface UserDropdownMenuProps {
  currentUser: User;
  selectedProgram?: "gs6" | "spark" | null;
  selectedLevel?: string | null;
  lampColor?: LampColor;
  onChangeLampColor?: (color: LampColor) => void;
  onSwitchProgram: () => void;
  onSwitchLevel?: () => void;
  onChangePassword: () => void;
  onOpenAdmin?: () => void;
  onLogout: () => void;
  align?: "left" | "right";
}

export const UserDropdownMenu: React.FC<UserDropdownMenuProps> = ({
  currentUser,
  selectedProgram,
  selectedLevel,
  lampColor = "amber",
  onChangeLampColor,
  onSwitchProgram,
  onSwitchLevel,
  onChangePassword,
  onOpenAdmin,
  onLogout
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const programLabel = selectedProgram === "spark" ? "IC3 SPARK" : selectedProgram === "gs6" ? "IC3 GS6" : null;
  const activeColorMeta = LAMP_COLOR_OPTIONS.find((c) => c.id === lampColor) || LAMP_COLOR_OPTIONS[0];

  const getLevelDisplay = (lvl: string) => {
    if (lvl.toLowerCase().includes("level 1")) return "Level 1";
    if (lvl.toLowerCase().includes("level 2")) return "Level 2";
    if (lvl.toLowerCase().includes("level 3")) return "Level 3";
    return lvl;
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`flex items-center gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border transition shadow-sm cursor-pointer select-none active:scale-95 shrink-0 backdrop-blur-md ${
          isOpen
            ? "bg-white/12 border-[var(--lamp-accent)] text-white ring-2 ring-[var(--lamp-focus-glow)]"
            : "bg-white/6 hover:bg-white/10 border-white/15 text-slate-100 hover:border-white/25"
        }`}
        title="Menu tài khoản & Bảng màu giao diện"
      >
        {/* User Avatar Circle */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono font-black text-xs sm:text-sm shrink-0 shadow-xs lamp-accent-btn">
          {currentUser.name ? currentUser.name.trim().charAt(0).toUpperCase() : "U"}
        </div>

        {/* User Info Label */}
        <div className="text-left leading-tight hidden sm:block">
          <p className="text-xs sm:text-sm font-black text-white max-w-[110px] sm:max-w-[155px] truncate">
            {currentUser.name}
          </p>
          <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 font-mono truncate">
            {currentUser.className
              ? `Lớp ${currentUser.className}`
              : currentUser.role === "admin"
              ? "Quản trị viên"
              : "Học sinh"}
          </p>
        </div>

        {/* Dropdown Chevron */}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-[var(--lamp-accent)]" : "text-slate-400"
          }`}
        />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed right-3 top-16 sm:inset-auto sm:absolute sm:top-full sm:right-0 sm:mt-2 w-76 max-w-[calc(100vw-24px)] bg-[#12161c]/95 backdrop-blur-2xl rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.75)] border border-white/15 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 select-none overflow-hidden text-slate-100">
            {/* User Profile Card Header */}
            <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 -mt-2 mb-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono font-black text-slate-400 uppercase tracking-wider">
                  Tài khoản
                </span>
                <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-full border border-[var(--lamp-accent)]/40 bg-[var(--lamp-focus-glow)] text-[var(--lamp-glow)]">
                  {currentUser.role === "admin" ? "Admin" : "Học sinh"}
                </span>
              </div>

              <p className="text-sm font-black text-white mt-1 truncate">
                {currentUser.name}
              </p>

              {(currentUser.className || currentUser.school) && (
                <p className="text-xs font-semibold text-slate-400 font-mono mt-0.5 truncate">
                  {currentUser.className ? `Lớp ${currentUser.className}` : ""}{" "}
                  {currentUser.school ? `• ${currentUser.school}` : ""}
                </p>
              )}

              {programLabel && (
                <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-200 bg-white/[0.05] border border-white/10 rounded-lg px-2.5 py-1">
                  <span className="text-slate-400">Đang học:</span>
                  <span className="font-black uppercase text-[var(--lamp-accent)]">
                    {programLabel}
                  </span>
                  {selectedLevel && (
                    <>
                      <span className="text-white/25">•</span>
                      <span className="text-white font-black">{getLevelDisplay(selectedLevel)}</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Integrated 5-Color Lamp Theme Palette inside Student Menu */}
            {onChangeLampColor && (
              <div className="px-3 pb-2.5 mb-1.5 border-b border-white/10">
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-mono font-bold text-slate-300 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-[var(--lamp-accent)]" />
                    <span>Bảng màu ánh sáng</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[var(--lamp-glow)]">
                    {activeColorMeta.name}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2">
                  {LAMP_COLOR_OPTIONS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      data-color={c.id}
                      onClick={() => onChangeLampColor(c.id)}
                      className={`lamp-menu-dot ${lampColor === c.id ? "active" : ""}`}
                      title={c.label}
                      aria-label={c.label}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Action List */}
            <div className="px-1.5 space-y-1">
              {/* 1. Đổi chương trình */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onSwitchProgram();
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono text-slate-200 hover:bg-white/[0.08] transition text-left cursor-pointer active:scale-98"
              >
                <div className="w-7 h-7 rounded-lg bg-white/10 text-[var(--lamp-accent)] flex items-center justify-center shrink-0 border border-white/10">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <div className="font-black text-white">Đổi chương trình</div>
                  <div className="text-[10px] text-slate-400 font-sans">Chọn giữa IC3 GS6 &amp; IC3 SPARK</div>
                </div>
              </button>

              {/* 2. Đổi Level */}
              {onSwitchLevel && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onSwitchLevel();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono text-slate-200 hover:bg-white/[0.08] transition text-left cursor-pointer active:scale-98"
                >
                  <div className="w-7 h-7 rounded-lg bg-[var(--lamp-focus-glow)] text-[var(--lamp-accent)] flex items-center justify-center shrink-0 border border-[var(--lamp-accent)]/30">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-black text-white">Đổi Level</div>
                    <div className="text-[10px] text-slate-400 font-sans">Chuyển sang Level khác</div>
                  </div>
                </button>
              )}

              {/* 3. Đổi mật khẩu */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onChangePassword();
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono text-slate-200 hover:bg-white/[0.08] transition text-left cursor-pointer active:scale-98"
              >
                <div className="w-7 h-7 rounded-lg bg-white/10 text-slate-200 flex items-center justify-center shrink-0 border border-white/10">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <div className="font-black text-white">Đổi mật khẩu</div>
                  <div className="text-[10px] text-slate-400 font-sans">Cập nhật mật khẩu tài khoản</div>
                </div>
              </button>

              {/* 4. Trang Quản Trị */}
              {currentUser.role === "admin" && onOpenAdmin && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono text-amber-200 hover:bg-amber-500/15 transition text-left cursor-pointer active:scale-98"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-black text-amber-200">Trang Quản Trị</div>
                    <div className="text-[10px] text-amber-300/75 font-sans">Quản lý câu hỏi &amp; người dùng</div>
                  </div>
                </button>
              )}
            </div>

            <div className="my-1.5 border-t border-white/10" />

            {/* 5. Đăng xuất */}
            <div className="px-1.5">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onLogout();
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono text-rose-300 hover:bg-rose-500/15 transition text-left cursor-pointer active:scale-98"
              >
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0 border border-rose-400/30">
                  <LogOut className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <div className="font-black text-rose-200">Đăng xuất</div>
                  <div className="text-[10px] text-rose-300/75 font-sans">Thoát khỏi phiên làm việc</div>
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDropdownMenu;
