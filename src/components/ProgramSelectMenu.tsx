import React from "react";
import { motion } from "motion/react";
import { ArrowRight, GraduationCap } from "lucide-react";
import { User } from "../types";
import gs6Logo from "../assets/gs6_b4829e48.png";
import sparkLogo from "../assets/spark_05b29717.png";
import UserDropdownMenu from "./UserDropdownMenu";
import LampAmbientBackground from "./LampAmbientBackground";
import { LampColor } from "../utils/lampTheme";

interface ProgramSelectMenuProps {
  currentUser: User;
  lampColor?: LampColor;
  onChangeLampColor?: (color: LampColor) => void;
  onSelectProgram: (program: "gs6" | "spark") => void;
  onLogout: () => void;
  onOpenChangePassword: () => void;
  onOpenAdmin?: () => void;
}

export default function ProgramSelectMenu({
  currentUser,
  lampColor = "amber",
  onChangeLampColor,
  onSelectProgram,
  onLogout,
  onOpenChangePassword,
  onOpenAdmin
}: ProgramSelectMenuProps) {
  return (
    <div
      className="lamp-inner-root min-h-screen flex items-center justify-center p-4 md:p-8 font-sans select-none"
      data-color={lampColor}
    >
      <LampAmbientBackground color={lampColor} />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="inner-foreground max-w-5xl w-full bg-[#12161c]/75 backdrop-blur-2xl border border-white/12 rounded-3xl p-6 md:p-10 space-y-8 shadow-[0_28px_70px_rgba(0,0,0,0.6)] relative"
      >
        {/* Subtle glowing accent bar */}
        <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-transparent via-[var(--lamp-accent)] to-transparent opacity-90" />

        {/* Top Header & Student Info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-white/10 pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-widest bg-[var(--lamp-focus-glow)] text-[var(--lamp-glow)] border border-[var(--lamp-accent)]/35 font-mono">
                BƯỚC 1: LỰA CHỌN CHƯƠNG TRÌNH
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 font-semibold leading-relaxed">
              Xin chào <strong className="text-white font-black">{currentUser.name}</strong>
              {currentUser.className && (
                <>
                  {" "}
                  (Lớp <strong className="text-[var(--lamp-glow)] font-black">{currentUser.className}</strong>)
                </>
              )}
              {currentUser.school && (
                <>
                  {" "}
                  • <span className="text-slate-300 font-bold">{currentUser.school}</span>
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-end md:self-center shrink-0">
            <UserDropdownMenu
              currentUser={currentUser}
              selectedProgram={null}
              selectedLevel={null}
              lampColor={lampColor}
              onChangeLampColor={onChangeLampColor}
              onSwitchProgram={() => {}}
              onChangePassword={onOpenChangePassword}
              onOpenAdmin={currentUser.role === "admin" ? onOpenAdmin : undefined}
              onLogout={onLogout}
            />
          </div>
        </div>

        {/* Two Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ================= CARD 1: GS6 ================= */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.15 }}
            onClick={() => onSelectProgram("gs6")}
            className="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/12 hover:border-[var(--lamp-accent)] rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all cursor-pointer shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_50px_var(--beam-color)] relative overflow-hidden"
          >
            {/* Top decorative badge */}
            <div className="flex justify-between items-start gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-black uppercase font-mono tracking-wider bg-[var(--lamp-focus-glow)] text-[var(--lamp-glow)] border border-[var(--lamp-accent)]/35 rounded-lg">
                CHƯƠNG TRÌNH GS6
              </span>
              <span className="px-2.5 py-0.5 text-[11px] font-bold font-mono text-slate-300 bg-white/[0.06] rounded-md border border-white/10">
                THCS / THPT / ĐH
              </span>
            </div>

            {/* GS6 Image Banner */}
            <div className="w-full h-36 sm:h-44 bg-white/95 rounded-2xl border border-white/20 flex items-center justify-center p-4 relative group-hover:border-[var(--lamp-accent)]/70 transition-colors shadow-inner">
              <img
                src={gs6Logo}
                alt="IC3 Digital Literacy Certification Global Standard 6"
                onError={(e) => {
                  e.currentTarget.src = "/assets/aistudio/gs6_b4829e48.png";
                }}
                className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="space-y-4 pt-5 flex-1 flex flex-col">
              <div>
                <h3 className="text-xl font-black text-white group-hover:text-[var(--lamp-glow)] transition-colors flex items-center gap-2">
                  <span>IC3 GS6</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-400 font-semibold mt-1">
                  Chuẩn tin học quốc tế đánh giá toàn diện kỹ năng công nghệ thông tin và truyền thông hiện đại.
                </p>
              </div>

              {/* Levels breakdown */}
              <div className="space-y-2 pt-3 border-t border-white/10">
                <ul className="space-y-2">
                  <li className="text-xs md:text-sm text-slate-200 flex items-start gap-2.5 font-medium">
                    <span className="w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      <strong className="text-white">Level 1:</strong> Máy tính cơ bản, phần cứng, hệ điều hành Windows
                    </span>
                  </li>
                  <li className="text-xs md:text-sm text-slate-200 flex items-start gap-2.5 font-medium">
                    <span className="w-5 h-5 rounded-md bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span>
                      <strong className="text-white">Level 2:</strong> Các ứng dụng cốt lõi (Word, Excel, PowerPoint)
                    </span>
                  </li>
                  <li className="text-xs md:text-sm text-slate-200 flex items-start gap-2.5 font-medium">
                    <span className="w-5 h-5 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      <strong className="text-white">Level 3:</strong> Cuộc sống trực tuyến, mạng Internet và an toàn bảo mật
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <button
                type="button"
                className="lamp-accent-btn w-full py-3.5 px-4 rounded-2xl text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BẮT ĐẦU</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* ================= CARD 2: SPARK ================= */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.15 }}
            onClick={() => onSelectProgram("spark")}
            className="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/12 hover:border-[var(--lamp-accent)] rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all cursor-pointer shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_50px_var(--beam-color)] relative overflow-hidden"
          >
            {/* Top decorative badge */}
            <div className="flex justify-between items-start gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-black uppercase font-mono tracking-wider bg-[var(--lamp-focus-glow)] text-[var(--lamp-glow)] border border-[var(--lamp-accent)]/35 rounded-lg">
                CHƯƠNG TRÌNH SPARK
              </span>
              <span className="px-2.5 py-0.5 text-[11px] font-bold font-mono text-slate-300 bg-white/[0.06] rounded-md border border-white/10">
                TIỂU HỌC &amp; KHỞI ĐẦU
              </span>
            </div>

            {/* Spark Image Banner */}
            <div className="w-full h-36 sm:h-44 bg-white/95 rounded-2xl border border-white/20 flex items-center justify-center p-4 relative group-hover:border-[var(--lamp-accent)]/70 transition-colors shadow-inner">
              <img
                src={sparkLogo}
                alt="IC3 Spark Digital Literacy"
                onError={(e) => {
                  e.currentTarget.src = "/assets/aistudio/spark_05b29717.png";
                }}
                className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="space-y-4 pt-5 flex-1 flex flex-col">
              <div>
                <h3 className="text-xl font-black text-white group-hover:text-[var(--lamp-glow)] transition-colors flex items-center gap-2">
                  <span>IC3 SPARK</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-400 font-semibold mt-1">
                  Chương trình chuẩn kỹ năng số quốc tế dành riêng cho lứa tuổi thiếu nhi và học sinh tiểu học.
                </p>
              </div>

              {/* Levels breakdown */}
              <div className="space-y-2 pt-3 border-t border-white/10">
                <ul className="space-y-2">
                  <li className="text-xs md:text-sm text-slate-200 flex items-start gap-2.5 font-medium">
                    <span className="w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      <strong className="text-white">Spark Level 1:</strong> Máy tính căn bản, thao tác chuột, bàn phím
                    </span>
                  </li>
                  <li className="text-xs md:text-sm text-slate-200 flex items-start gap-2.5 font-medium">
                    <span className="w-5 h-5 rounded-md bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span>
                      <strong className="text-white">Spark Level 2:</strong> Các ứng dụng chính (Soạn thảo Word, Vẽ hình Paint)
                    </span>
                  </li>
                  <li className="text-xs md:text-sm text-slate-200 flex items-start gap-2.5 font-medium">
                    <span className="w-5 h-5 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      <strong className="text-white">Spark Level 3:</strong> Cuộc sống trực tuyến &amp; An toàn Internet thiếu nhi
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <button
                type="button"
                className="lamp-accent-btn w-full py-3.5 px-4 rounded-2xl text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BẮT ĐẦU</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer info note */}
        <div className="text-center text-xs text-slate-400 font-mono border-t border-white/10 pt-5 flex items-center justify-center gap-2 flex-wrap">
          <GraduationCap className="w-4 h-4 text-[var(--lamp-accent)]" />
          <span>Hệ thống dữ liệu đề thi bám sát cấu trúc đề khảo thí chuẩn của Certiport Hoa Kỳ.</span>
        </div>
      </motion.div>
    </div>
  );
}
