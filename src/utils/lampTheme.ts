export type LampColor = "amber" | "cyan" | "rose" | "mint" | "moonlight";

export interface LampColorOption {
  id: LampColor;
  name: string;
  label: string;
  hex: string;
}

export const LAMP_COLOR_OPTIONS: LampColorOption[] = [
  { id: "amber", name: "Hổ phách", label: "Ánh sáng hổ phách (Ấm)", hex: "#ffab3d" },
  { id: "cyan", name: "Xanh Cyber", label: "Ánh sáng xanh lam (Cyber)", hex: "#00f0ff" },
  { id: "rose", name: "Hồng Sunset", label: "Ánh sáng hồng (Hoàng hôn)", hex: "#ff3385" },
  { id: "mint", name: "Ngọc lục", label: "Ánh sáng bạc hà (Ngọc lục)", hex: "#00e676" },
  { id: "moonlight", name: "Ánh trăng", label: "Ánh sáng trăng (Trắng mát)", hex: "#d8e5ff" }
];

export const PARTICLE_THEMES: Record<LampColor, { fill: string; glow: string }> = {
  amber: { fill: "255, 205, 120", glow: "255, 185, 80" },
  cyan: { fill: "140, 245, 255", glow: "0, 240, 255" },
  rose: { fill: "255, 160, 200", glow: "255, 51, 133" },
  mint: { fill: "160, 255, 200", glow: "0, 230, 118" },
  moonlight: { fill: "220, 235, 255", glow: "200, 220, 255" }
};

export const LAMP_COLOR_STORAGE_KEY = "ic3_lamp_color_theme";

export function getStoredLampColor(): LampColor {
  try {
    const saved = localStorage.getItem(LAMP_COLOR_STORAGE_KEY) as LampColor | null;
    if (saved && PARTICLE_THEMES[saved]) {
      return saved;
    }
  } catch {
    // ignore storage access issues
  }
  return "amber";
}

export function saveLampColor(color: LampColor): void {
  try {
    localStorage.setItem(LAMP_COLOR_STORAGE_KEY, color);
  } catch {
    // ignore storage access issues
  }
}
