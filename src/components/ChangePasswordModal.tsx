import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, Eye, EyeOff, X, CheckCircle2, AlertCircle } from "lucide-react";
import { apiService } from "../services/apiService";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  username: string;
  userName: string;
  className?: string;
  school?: string;
  onSuccess?: (message: string) => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
  userId,
  username,
  userName,
  onSuccess
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = newPassword.trim();
    if (!trimmed) {
      setError("Vui lòng nhập mật khẩu mới.");
      return;
    }

    if (trimmed.length < 3) {
      setError("Mật khẩu mới phải có ít nhất 3 ký tự.");
      return;
    }

    if (trimmed !== confirmPassword.trim()) {
      setError("Mật khẩu xác nhận không trùng khớp.");
      return;
    }

    setIsLoading(true);
    try {
      await apiService.updateUserPassword(userId, trimmed);
      onSuccess?.(`Đã cập nhật mật khẩu cho tài khoản @${username} thành công!`);
      setNewPassword("");
      setConfirmPassword("");
      onClose();
    } catch (err: any) {
      setError(err?.message || "Có lỗi xảy ra khi đổi mật khẩu.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-md bg-[#12161c]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.8)] overflow-hidden font-sans text-slate-100"
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.04]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[var(--lamp-focus-glow)] border border-[var(--lamp-accent)]/35 text-[var(--lamp-accent)] flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Đổi mật khẩu tài khoản
                </h3>
                <p className="text-[11px] font-mono text-slate-400">
                  {userName} (@{username})
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {error && (
              <div className="p-3 bg-rose-500/15 border border-rose-400/40 rounded-xl flex items-start gap-2 text-xs text-rose-200">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                Mật khẩu mới <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Nhập mật khẩu mới..."
                  required
                  autoFocus
                  className="w-full pl-3.5 pr-10 py-2.5 bg-white/[0.05] border border-white/15 rounded-xl text-xs font-mono font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[var(--lamp-accent)] focus:ring-2 focus:ring-[var(--lamp-focus-glow)] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                Xác nhận mật khẩu mới <span className="text-rose-400">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Nhập lại mật khẩu mới..."
                required
                className="w-full px-3.5 py-2.5 bg-white/[0.05] border border-white/15 rounded-xl text-xs font-mono font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[var(--lamp-accent)] focus:ring-2 focus:ring-[var(--lamp-focus-glow)] transition"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-slate-300 bg-white/8 hover:bg-white/15 border border-white/10 transition cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="lamp-accent-btn px-4 py-2 rounded-xl text-xs font-mono font-black transition cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Đang lưu...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Lưu mật khẩu</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
