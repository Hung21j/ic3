import React, { useState, useRef, useEffect } from "react";
import { 
  ChevronDown, 
  ArrowLeft, 
  KeyRound, 
  ShieldCheck, 
  LogOut, 
  GraduationCap,
  Layers,
  Sparkles
} from "lucide-react";
import { User } from "../types";

interface UserDropdownMenuProps {
  currentUser: User;
  selectedProgram?: "gs6" | "spark" | null;
  selectedLevel?: string | null;
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
  onSwitchProgram,
  onSwitchLevel,
  onChangePassword,
  onOpenAdmin,
  onLogout,
  align = "right"
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
  const isSpark = selectedProgram === "spark";

  const getLevelDisplay = (lvl: string) => {
    if (lvl.toLowerCase().includes("level 1")) return "Level 1";
    if (lvl.toLowerCase().includes("level 2")) return "Level 2";
    if (lvl.toLowerCase().includes("level 3")) return "Level 3";
    return lvl;
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Trigger Button - Mobile Compact & High Contrast */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`flex items-center gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border-2 transition shadow-xs cursor-pointer select-none active:scale-95 shrink-0 ${
          isOpen
            ? "bg-slate-100 border-indigo-600 text-slate-900 ring-2 ring-indigo-300/60"
            : "bg-white hover:bg-slate-50 border-slate-300 text-slate-800 hover:border-slate-400"
        }`}
        title="Menu tài khoản & Thao tác"
      >
        {/* User Avatar Circle */}
        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono font-black text-xs sm:text-sm text-white shrink-0 shadow-xs ${
          currentUser.role === "admin" 
            ? "bg-amber-600" 
            : isSpark 
              ? "bg-emerald-600" 
              : "bg-indigo-600"
        }`}>
          {currentUser.name ? currentUser.name.trim().charAt(0).toUpperCase() : "U"}
        </div>

        {/* User Info Label (Compact on small phones, full on larger) */}
        <div className="text-left leading-tight hidden sm:block">
          <p className="text-xs sm:text-sm font-black text-slate-950 max-w-[110px] sm:max-w-[150px] truncate">
            {currentUser.name}
          </p>
          <p className="text-[10px] sm:text-[11px] font-bold text-slate-500 font-mono truncate">
            {currentUser.className ? `Lớp ${currentUser.className}` : currentUser.role === "admin" ? "Quản trị viên" : "Học sinh"}
          </p>
        </div>

        {/* Dropdown Chevron */}
        <ChevronDown 
          className={`w-4 h-4 text-slate-600 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-indigo-600" : ""
          }`} 
        />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-xs" 
            onClick={() => setIsOpen(false)} 
          />
          <div 
            className={`fixed right-3 top-16 sm:inset-auto sm:absolute sm:top-full sm:right-0 sm:mt-2 w-72 max-w-[calc(100vw-24px)] bg-white rounded-2xl shadow-2xl border-2 border-slate-300 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 select-none overflow-hidden`}
          >
          {/* User Profile Card Header */}
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 -mt-2 mb-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono font-black text-slate-500 uppercase tracking-wider">
                Tài khoản
              </span>
              <span className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-full border ${
                currentUser.role === "admin" 
                  ? "bg-amber-100 text-amber-900 border-amber-300" 
                  : "bg-emerald-100 text-emerald-900 border-emerald-300"
              }`}>
                {currentUser.role === "admin" ? "Admin" : "Học sinh"}
              </span>
            </div>

            <p className="text-sm font-black text-slate-900 mt-1 truncate">
              {currentUser.name}
            </p>

            <p className="text-xs font-semibold text-slate-600 font-mono mt-0.5 truncate">
              {currentUser.className ? `Lớp ${currentUser.className}` : ""} {currentUser.school ? `• ${currentUser.school}` : ""}
            </p>

            {programLabel && (
              <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-700 bg-white border border-slate-200 rounded-lg px-2.5 py-1">
                <span className="text-slate-400">Đang học:</span>
                <span className={`font-black uppercase ${isSpark ? "text-emerald-700" : "text-indigo-700"}`}>
                  {programLabel}
                </span>
                {selectedLevel && (
                  <>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-800 font-black">{getLevelDisplay(selectedLevel)}</span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Action List */}
          <div className="px-1.5 space-y-1">
            {/* 1. Đổi chương trình */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onSwitchProgram();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono text-slate-800 hover:bg-slate-100 transition text-left cursor-pointer active:scale-98"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="font-black text-slate-900">Đổi chương trình</div>
                <div className="text-[10px] text-slate-500 font-sans">Chọn giữa IC3 GS6 & IC3 SPARK</div>
              </div>
            </button>

            {/* 2. Đổi Level (nếu đang ở trong màn hình làm bài) */}
            {onSwitchLevel && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onSwitchLevel();
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono text-indigo-800 hover:bg-indigo-50 transition text-left cursor-pointer active:scale-98"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 border border-indigo-200">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <div className="font-black text-indigo-950">Đổi Level</div>
                  <div className="text-[10px] text-indigo-600 font-sans">Chuyển sang Level khác</div>
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
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono text-slate-800 hover:bg-slate-100 transition text-left cursor-pointer active:scale-98"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-100 text-indigo-700 flex items-center justify-center shrink-0 border border-slate-200">
                <KeyRound className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="font-black text-slate-900">Đổi mật khẩu</div>
                <div className="text-[10px] text-slate-500 font-sans">Cập nhật mật khẩu tài khoản</div>
              </div>
            </button>

            {/* 4. Trang Quản Trị (dành cho Admin) */}
            {currentUser.role === "admin" && onOpenAdmin && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenAdmin();
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono text-amber-900 hover:bg-amber-50 transition text-left cursor-pointer active:scale-98"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <div className="font-black text-amber-950">Trang Quản Trị</div>
                  <div className="text-[10px] text-amber-700 font-sans">Quản lý câu hỏi & người dùng</div>
                </div>
              </button>
            )}
          </div>

          <div className="my-1.5 border-t border-slate-200" />

          {/* 5. Đăng xuất */}
          <div className="px-1.5">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onLogout();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono text-rose-700 hover:bg-rose-50 transition text-left cursor-pointer active:scale-98"
            >
              <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200">
                <LogOut className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="font-black text-rose-900">Đăng xuất</div>
                <div className="text-[10px] text-rose-600 font-sans">Thoát khỏi phiên làm việc</div>
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
