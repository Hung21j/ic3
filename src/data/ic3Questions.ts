import { QuestionType } from "../types";

export interface IC3Question {
  id: string;
  // levelId xác định cấp độ của câu hỏi:
  // - "level-1": Máy tính cơ bản
  // - "level-2": Các ứng dụng cốt lõi
  // - "level-3": Cuộc sống trực tuyến
  levelId: "level-1" | "level-2" | "level-3";
  
  // subsetId xác định đề thi hoặc chuyên mục cụ thể:
  // - "GM1": Đề GM1
  // - "GM2": Đề GM2
  // - "OT1": Đề OT1
  // - "OT2": Đề OT2
  // - "OT3": Đề OT3
  // - "OT4": Đề OT4
  // - "OT5": Đề OT5
  // (Đề "Tổng hợp FULL" sẽ tự động hiển thị tất cả các câu hỏi của cấp độ đó)
  subsetId: "GM1" | "GM2" | "OT1" | "OT2" | "OT3" | "OT4" | "OT5";
  
  questionNumber?: number;
  type: QuestionType; // "multiple_choice" hoặc "yes_no" hoặc "matching"
  text: string;
  image?: string; // Hình ảnh câu hỏi đề bài minh họa (nếu có)
  options?: string[]; // Danh sách đáp án lựa chọn (cho dạng multiple_choice)

    // Dạng Đúng / Sai nhiều phát biểu
  statements?: {
    text: string;
    correct: "True" | "False";
  }[];
  correctAnswerText?: string; // Hiển thị lời giải / đáp án đúng (tùy chọn)
  correctKeys?: string[]; // Phím đáp án đúng (ví dụ: ["B"] cho trắc nghiệm, ["True"] hoặc ["False"] cho Đúng/Sai)
  pairs?: { 
    left: string; 
    right: string;
    leftImage?: string; // Hình ảnh gắn với vế trái (thuật ngữ/đối tượng)
    rightImage?: string; // Hình ảnh gắn với vế phải (định nghĩa/thẻ kéo thả)
  }[]; // Cấu trúc ghép nối nếu có
  explanation?: string; // Lời giải thích / chú giải
  order?: number; // Thứ tự câu hỏi do Admin thiết lập
  isCustom?: boolean; // Đánh dấu câu hỏi tự tạo
}

/**
 * HƯỚNG DẪN THÊM CÂU HỎI MỚI:
 * -----------------------------------------------------
 * Bạn chỉ cần thêm một đối tượng {} vào mảng IC3_QUESTIONS dưới đây.
 * Đảm bảo điền đầy đủ các trường:
 * - id: "lễ_hội_gì_độc_nhất" (không được trùng lặp)
 * - levelId: "level-1", "level-2" hoặc "level-3"
 * - subsetId: "GM1", "GM2", "OT1", "OT2", "OT3", "OT4", "OT5"
 * - type: "multiple_choice" hoặc "yes_no"
 * - text: "Nội dung câu hỏi..."
 * - options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"] (chỉ cần thiết nếu type là "multiple_choice")
 * - correctAnswerText: "Phần hiển thị đáp án đúng..."
 * - correctKeys: ["Phím đáp án đúng"] (Ví dụ: ["A"] hoặc ["True"])
 * - explanation: "Giải thích lý do lựa chọn đáp án này..."
 * -----------------------------------------------------
 */
export const IC3_QUESTIONS: IC3Question[] = [

  ];
