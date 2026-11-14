import { IC3Question } from "./ic3Questions";

/**
 * Ngân hàng câu hỏi chuẩn IC3 SPARK (dành cho học sinh Tiểu học và THCS khởi đầu)
 * Gồm 3 Cấp độ chuẩn quốc tế:
 * - Spark Level 1: Máy tính căn bản (Computing Fundamentals)
 * - Spark Level 2: Các ứng dụng cốt lõi (Key Applications - Soạn thảo văn bản, Đồ họa Paint, Bảng tính cơ bản)
 * - Spark Level 3: Cuộc sống trực tuyến & An toàn số (Living Online - Internet, An toàn mạng cho thiếu nhi)
 */

export const SPARK_LEVEL1_QUESTIONS: IC3Question[] = [
  // ===================== OT1: LEVEL 1 (MÁY TÍNH CĂN BẢN - 30 CÂU CHUẨN ĐỀ THI) =====================
  {
    id: "spark-l1-ot1-01",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 1,
    order: 1,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, hình ảnh nào sau đây là hình ảnh của một chiếc Laptop?",
    image: "/images/s-lv1-ot1-1.jpg",
    options: [
      { key: "A", text: "Hình chiếc máy tính xách tay" },
      { key: "B", text: "Máy tính bảng" },
      { key: "C", text: "Điện thoại thông minh" },
      { key: "D", text: "Máy tính để bàn" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Hình chiếc máy tính xách tay",
    explanation: "Máy tính xách tay (Laptop) là máy tính cá nhân nhỏ gọn, có màn hình gập và pin tích hợp, cho phép mang theo và làm việc di động."
  },
  {
    id: "spark-l1-ot1-02",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 2,
    order: 2,
    type: "multiple_choice",
    text: "Bạn hãy cho biết phần mềm nào sau đây là hệ điều hành?",
    options: [
      { key: "A", text: "Google" },
      { key: "B", text: "Apple iPad" },
      { key: "C", text: "Microsoft Windows" },
      { key: "D", text: "Microsoft Word" }
    ],
    correctKeys: ["C"],
    correctAnswerText: "C. Microsoft Windows",
    explanation: "Microsoft Windows là hệ điều hành (Operating System). Google là công cụ tìm kiếm, iPad là thiết bị phần cứng, Word là phần mềm soạn thảo văn bản."
  },
  {
    id: "spark-l1-ot1-03",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 3,
    order: 3,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, loại phần cứng (Hardware) nào gửi dữ liệu đến máy tính?",
    options: [
      { key: "A", text: "Nhập (Input)" },
      { key: "B", text: "Lưu trữ (Storage)" },
      { key: "C", text: "Màn hình (Monitor)" },
      { key: "D", text: "Xuất (Output)" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Nhập (Input)",
    explanation: "Thiết bị nhập (Input) như bàn phím, chuột, micro gửi dữ liệu và tín hiệu vào máy tính để xử lý."
  },
  {
    id: "spark-l1-ot1-04",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 4,
    order: 4,
    type: "multiple_choice",
    text: "Bạn cần kết nối máy tính bảng với Internet. Bạn nên sử dụng phương tiện gì dưới đây?",
    options: [
      { key: "A", text: "Cáp màn hình (A monitor cable)" },
      { key: "B", text: "Cáp máy in (A printer cable)" },
      { key: "C", text: "Bluetooth" },
      { key: "D", text: "Wi-Fi" }
    ],
    correctKeys: ["D"],
    correctAnswerText: "D. Wi-Fi",
    explanation: "Mạng không dây Wi-Fi là phương thức tiêu chuẩn và thuận tiện nhất để kết nối máy tính bảng với Internet."
  },
  {
    id: "spark-l1-ot1-05",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 5,
    order: 5,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, phần mềm nào dưới đây là phần mềm ứng dụng?",
    options: [
      { key: "A", text: "iOS" },
      { key: "B", text: "Windows" },
      { key: "C", text: "Microsoft Word" },
      { key: "D", text: "Flash drive" }
    ],
    correctKeys: ["C"],
    correctAnswerText: "C. Microsoft Word",
    explanation: "Microsoft Word là phần mềm ứng dụng (Application Software). iOS và Windows là hệ điều hành, Flash drive là phần cứng lưu trữ."
  },
  {
    id: "spark-l1-ot1-06",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 6,
    order: 6,
    type: "multiple_choice",
    text: "Hình ảnh này cho biết loại thiết bị máy tính nào?",
    image: "/images/s-lv1-ot1-6.png",
    options: [
      { key: "A", text: "Máy tính xách tay (Laptop computer)" },
      { key: "B", text: "Máy tính để bàn (Desktop computer)" },
      { key: "C", text: "Điện thoại thông minh (Smartphone)" },
      { key: "D", text: "Máy tính bảng (Tablet)" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Máy tính xách tay (Laptop computer)",
    explanation: "Máy tính xách tay (Laptop) tích hợp màn hình, bàn phím và pin sạc nhỏ gọn để mang đi di động."
  },
  {
    id: "spark-l1-ot1-07",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 7,
    order: 7,
    type: "multiple_choice",
    text: "Máy tính để bàn có thể sử dụng loại thiết bị nào để kết nối Internet?",
    options: [
      { key: "A", text: "Thiết bị Wi-Fi (A Wi-Fi Device)" },
      { key: "B", text: "Một thiết bị lưu trữ (A Storage Device)" },
      { key: "C", text: "Một thiết bị đa phương tiện (A Media Device)" },
      { key: "D", text: "Một thiết bị hiển thị (A Display Device)" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Thiết bị Wi-Fi (A Wi-Fi Device)",
    explanation: "Máy tính để bàn có thể dùng card hoặc USB thu phát sóng Wi-Fi (Wi-Fi Device) để kết nối mạng Internet không dây."
  },
  {
    id: "spark-l1-ot1-08",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 8,
    order: 8,
    type: "multiple_choice",
    text: "Bạn đang học trực tuyến tại thư viện công cộng. Bạn cần sạc pin máy tính xách tay để hoàn thành công việc của mình... Bạn nên làm gì để vừa sạc pin máy tính và vừa tiếp tục làm việc?",
    options: [
      { key: "A", text: "Di chuyển đến khu vực có sẵn một ổ cắm để sạc pin máy tính và tiếp tục buổi học" },
      { key: "B", text: "Học cho đến khi hết pin máy tính để không làm phiền bất cứ ai" },
      { key: "C", text: "Rút phích cắm của điện thoại ở đồng bàn để có thể sử dụng ổ cắm gần đó" },
      { key: "D", text: "Sử dụng dây nối dài kéo cáp khắp thư viện để bạn không phải thay đổi chỗ ngồi" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Di chuyển đến khu vực có sẵn một ổ cắm để sạc pin máy tính và tiếp tục buổi học",
    explanation: "Chủ động di chuyển đến vị trí có ổ cắm điện sẵn sàng là giải pháp vừa an toàn vừa lịch sự ở nơi công cộng."
  },
  {
    id: "spark-l1-ot1-09",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 9,
    order: 9,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, hai thiết bị nào sau đây là thiết bị ngoại vi? (Chọn 2)",
    options: [
      { key: "A", text: "Chuột (Mouse)" },
      { key: "B", text: "Bàn phím (Keyboard)" },
      { key: "C", text: "Bộ sạc (Charger)" },
      { key: "D", text: "Thùng máy (CPU case)" }
    ],
    correctKeys: ["A", "B"],
    correctAnswerText: "A. Chuột (Mouse) | B. Bàn phím (Keyboard)",
    explanation: "Chuột và bàn phím là các thiết bị ngoại vi nhập dữ liệu chuẩn của máy tính."
  },
  {
    id: "spark-l1-ot1-10",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 10,
    order: 10,
    type: "multiple_choice",
    text: "Thuật ngữ cho phần mềm chạy trên điện thoại hoặc máy tính bảng là gì?",
    options: [
      { key: "A", text: "Icon (Biểu tượng)" },
      { key: "B", text: "Widget (Tiện ích)" },
      { key: "C", text: "App (Ứng dụng)" },
      { key: "D", text: "Program (Chương trình)" }
    ],
    correctKeys: ["C"],
    correctAnswerText: "C. App (Ứng dụng)",
    explanation: "App (viết tắt của Application) là thuật ngữ chuyên dùng cho ứng dụng trên điện thoại thông minh và máy tính bảng."
  },
  {
    id: "spark-l1-ot1-11",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 11,
    order: 11,
    type: "yes_no",
    text: "Bạn hãy xác định mỗi mục sau là Phần cứng (Hardware) hay Phần mềm (Software):",
    trueColumnLabel: "Phần cứng",
    falseColumnLabel: "Phần mềm",
    statements: [
      { text: "Máy in (Printer)", correct: "True" },
      { text: "Cơ sở dữ liệu (Database)", correct: "False" },
      { text: "Chuột (Mouse)", correct: "True" },
      { text: "Bàn phím (Keyboard)", correct: "True" },
      { text: "Thư điện tử (Email)", correct: "False" }
    ],
    correctAnswerText: "1. Phần cứng\n2. Phần mềm\n3. Phần cứng\n4. Phần cứng\n5. Phần mềm",
    explanation: "Phần cứng là các thiết bị vật lý có thể chạm vào được (Máy in, Chuột, Bàn phím). Phần mềm là các dữ liệu và chương trình số (Cơ sở dữ liệu, Thư điện tử)."
  },
  {
    id: "spark-l1-ot1-12",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 12,
    order: 12,
    type: "matching",
    text: "Di chuyển từng định nghĩa từ danh sách bên phải sang phần thuật ngữ mà nó xác định ở bên trái:",
    pairs: [
      { left: "Thiết bị (Device)", right: "Thiết bị được phát minh cho một mục đích cụ thể" },
      { left: "Phần cứng (Hardware)", right: "Các bộ phận của máy tính mà bạn có thể chạm vào" },
      { left: "Công nghệ di động (Mobile)", right: "Công nghệ di chuyển nơi người dùng đến" },
      { left: "Chương trình (Program)", right: "Hướng dẫn mà máy tính làm theo" }
    ],
    correctAnswerText: "Thiết bị (Device) ➔ Thiết bị được phát minh cho một mục đích cụ thể\nPhần cứng (Hardware) ➔ Các bộ phận của máy tính mà bạn có thể chạm vào\nCông nghệ di động (Mobile) ➔ Công nghệ di chuyển nơi người dùng đến\nChương trình (Program) ➔ Hướng dẫn mà máy tính làm theo",
    explanation: "Các định nghĩa nền tảng về thiết bị công nghệ, phần cứng, công nghệ di động và chương trình máy tính."
  },
  {
    id: "spark-l1-ot1-13",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 13,
    order: 13,
    type: "multiple_choice",
    text: "Thiết bị nào có bàn di chuột (Touchpad) tích hợp để trỏ và nhập?",
    options: [
      { key: "A", text: "Desktop computer" },
      { key: "B", text: "Tablet" },
      { key: "C", text: "Laptop computer" },
      { key: "D", text: "Smartphone" }
    ],
    correctKeys: ["C"],
    correctAnswerText: "C. Laptop computer",
    explanation: "Máy tính xách tay (Laptop computer) tích hợp bàn di chuột Touchpad bên dưới bàn phím để điều khiển trỏ chuột mà không cần chuột rời."
  },
  {
    id: "spark-l1-ot1-14",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 14,
    order: 14,
    type: "multiple_choice",
    text: "An cần sạc điện thoại vào ban đêm để có thể sử dụng nó vào sáng hôm sau. Đâu là nơi an toàn để An giữ điện thoại của mình trong khi đang sạc?",
    options: [
      { key: "A", text: "Dưới gối nằm của An" },
      { key: "B", text: "Trên kệ trong phòng tắm" },
      { key: "C", text: "Trên sàn nhà" },
      { key: "D", text: "Trên bàn làm việc của An" }
    ],
    correctKeys: ["D"],
    correctAnswerText: "D. Trên bàn làm việc của An",
    explanation: "Bàn làm việc là bề mặt cứng, phẳng, khô ráo và thoáng khí, giúp tản nhiệt an toàn cho điện thoại khi sạc."
  },
  {
    id: "spark-l1-ot1-15",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 15,
    order: 15,
    type: "multiple_choice",
    text: "Bạn muốn tìm một trò chơi được cài đặt trên máy tính của mình. Trên thanh tác vụ (Taskbar) được hiển thị, bạn nên nhấp vào đâu để tìm trò chơi?",
    image: "/images/s-lv1-ot1-15.png",
    options: [
      { key: "A", text: "Nút Start" },
      { key: "B", text: "ô tìm kiếm" },
      { key: "C", text: "Ứng dụng MS Edge" },
      { key: "D", text: "Thư mục File Explorer" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Ô tìm kiếm 'Type here to search'",
    explanation: "Hộp 'Type here to search' cho phép bạn gõ tên phần mềm hoặc trò chơi để tìm kiếm nhanh trong toàn bộ hệ thống."
  },
  {
    id: "spark-l1-ot1-16",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 16,
    order: 16,
    type: "multiple_choice",
    text: "Thiết bị đầu vào (Input device) nào sau đây được tích hợp vào điện thoại thông minh?",
    options: [
      { key: "A", text: "Bàn di chuột (Touchpad)" },
      { key: "B", text: "Bộ sạc pin (Charger)" },
      { key: "C", text: "Tai nghe (Earbuds)" },
      { key: "D", text: "Màn hình cảm ứng (Touchscreen)" }
    ],
    correctKeys: ["D"],
    correctAnswerText: "D. Màn hình cảm ứng (Touchscreen)",
    explanation: "Màn hình cảm ứng (Touchscreen) vừa hiển thị hình ảnh vừa tiếp nhận các thao tác chạm, vuốt của ngón tay để nhập dữ liệu."
  },
  {
    id: "spark-l1-ot1-17",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 17,
    order: 17,
    type: "multiple_choice",
    text: "Phát biểu nào sau đây là đúng về một phần mềm ứng dụng trên máy tính để bàn?",
    options: [
      { key: "A", text: "Máy tính của bạn phải được kết nối với Internet để chạy nó" },
      { key: "B", text: "Bạn có thể đăng nhập vào nó từ bất kỳ thiết bị nào" },
      { key: "C", text: "Phần mềm phải được cài đặt trên máy tính của bạn trước khi bạn có thể khởi chạy nó" },
      { key: "D", text: "Phần mềm không yêu cầu bất kỳ dung lượng lưu trữ nào trên máy tính của bạn" }
    ],
    correctKeys: ["C"],
    correctAnswerText: "C. Phần mềm phải được cài đặt trên máy tính của bạn trước khi bạn có thể khởi chạy nó",
    explanation: "Phần mềm ứng dụng cục bộ (Desktop app) cần được cài đặt các tệp tin thực thi vào ổ đĩa của máy tính trước khi khởi chạy."
  },
  {
    id: "spark-l1-ot1-18",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 18,
    order: 18,
    type: "multiple_choice",
    text: "Bạn cần sử dụng máy tính bảng (Tablet) của mình trong giờ học nhưng bộ sạc của bạn không hoạt động. Bạn nên làm gì để tiếp tục tham gia trên máy tính của mình?",
    options: [
      { key: "A", text: "Buộc bộ sạc điện thoại vào máy tính bảng ngay cả khi không tương thích" },
      { key: "B", text: "Bí mật chuyển đổi bộ sạc với bạn bè trong giờ giải lao" },
      { key: "C", text: "Hãy để máy tính bảng tắt nguồn và không tham gia bài học" },
      { key: "D", text: "Hãy cho giáo viên của bạn biết rằng bộ sạc của bạn không hoạt động" }
    ],
    correctKeys: ["D"],
    correctAnswerText: "D. Hãy cho giáo viên của bạn biết rằng bộ sạc của bạn không hoạt động",
    explanation: "Báo ngay với thầy cô giáo là cách giải quyết đúng đắn, an toàn và có trách nhiệm nhất trong môi trường học đường."
  },
  {
    id: "spark-l1-ot1-19",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 19,
    order: 19,
    type: "multiple_choice",
    text: "Tùy chọn nào sau đây là ví dụ về thiết bị đầu vào được tích hợp sẵn trên máy tính?",
    options: [
      { key: "A", text: "Chuột (Mouse)" },
      { key: "B", text: "Tai nghe (Headphones)" },
      { key: "C", text: "Màn hình cảm ứng (Touchscreen)" },
      { key: "D", text: "Máy in (Printer)" }
    ],
    correctKeys: ["C"],
    correctAnswerText: "C. Màn hình cảm ứng (Touchscreen)",
    explanation: "Màn hình cảm ứng (Touchscreen) được tích hợp trực tiếp trên thân máy tính xách tay hoặc máy tính bảng để nhận thao tác chạm đầu vào."
  },
  {
    id: "spark-l1-ot1-20",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 20,
    order: 20,
    type: "multiple_choice",
    text: "Tùy chọn nào sau đây là một tập tin (File)?",
    options: [
      { key: "A", text: "Một thư mục ảnh từ một chuyến đi thực địa" },
      { key: "B", text: "Một liên kết đến trang web trường học của bạn" },
      { key: "C", text: "Tài liệu chứa danh sách bài tập cần làm của bạn" },
      { key: "D", text: "Buổi phát trực tiếp sự kiện thể thao" }
    ],
    correctKeys: ["C"],
    correctAnswerText: "C. Tài liệu chứa danh sách bài tập cần làm của bạn",
    explanation: "Tài liệu văn bản lưu danh sách bài tập là một tập tin (File) độc lập lưu trong máy tính."
  },
  {
    id: "spark-l1-ot1-21",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 21,
    order: 21,
    type: "multiple_choice",
    text: "Bạn sẽ tìm thấy lệnh đóng (Close) trên thẻ (Tab) nào sau đây trong các ứng dụng văn phòng?",
    image: "/images/s-lv1-ot1-21.png",
    options: [
      { key: "A", text: "Thẻ File" },
      { key: "B", text: "Thẻ Home" },
      { key: "C", text: "Thẻ Insert" },
      { key: "D", text: "Thẻ Design" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Thẻ File",
    explanation: "Thẻ File (Backstage View) quản lý toàn bộ các thao tác tệp: New, Open, Save, Print và Close (Đóng tệp)."
  },
  {
    id: "spark-l1-ot1-22",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 22,
    order: 22,
    type: "multiple_choice",
    text: "Máy tính để bàn có thể sử dụng loại thiết bị nào để kết nối internet?",
    options: [
      { key: "A", text: "Một thiết bị lưu trữ" },
      { key: "B", text: "Một thiết bị hiển thị" },
      { key: "C", text: "Một thiết bị đa phương tiện" },
      { key: "D", text: "Một thiết bị Wi-Fi (A Wi-Fi device)" }
    ],
    correctKeys: ["D"],
    correctAnswerText: "D. Một thiết bị Wi-Fi (A Wi-Fi device)",
    explanation: "Thiết bị Wi-Fi (như USB Wi-Fi hoặc Card mạng không dây) giúp máy tính để bàn kết nối vào mạng không dây."
  },
  {
    id: "spark-l1-ot1-23",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 23,
    order: 23,
    type: "multiple_choice",
    text: "Thuật ngữ cho thời gian bạn dành để làm những việc như: Xem TV, chơi game, nhắn tin điện thoại, nghiên cứu trên máy tính?",
    options: [
      { key: "A", text: "Thời gian sử dụng thiết bị (Screen time)" },
      { key: "B", text: "Tương tác trực tuyến (Online interaction)" },
      { key: "C", text: "Cân bằng truyền thông (Media balance)" },
      { key: "D", text: "Thời gian tập trung (Focus time)" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Thời gian sử dụng thiết bị (Screen time)",
    explanation: "Screen time (thời gian trước màn hình) đo lường tổng thời lượng mà mắt nhìn vào các màn hình thiết bị điện tử."
  },
  {
    id: "spark-l1-ot1-24",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 24,
    order: 24,
    type: "yes_no",
    text: "Đối với mỗi phát biểu về việc bảo quản và vận chuyển máy tính xách tay, hãy chọn Đúng hoặc Sai:",
    trueColumnLabel: "Đúng",
    falseColumnLabel: "Sai",
    statements: [
      { text: "Máy tính xách tay có thể được giữ trong xe một cách an toàn", correct: "False" },
      { text: "Máy tính xách tay được vận chuyển an toàn trong túi đựng chống sốc", correct: "True" },
      { text: "Máy tính xách tay có thể bị hỏng nếu tiếp xúc với nhiệt độ khắc nghiệt", correct: "True" }
    ],
    correctAnswerText: "1. Sai\n2. Đúng\n3. Đúng",
    explanation: "Không để laptop trong xe ô tô đóng kín dưới nắng nóng vì pin và màn hình có thể bị hỏng. Luôn sử dụng túi chống sốc khi di chuyển."
  },
  {
    id: "spark-l1-ot1-25",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 25,
    order: 25,
    type: "multiple_choice",
    text: "Học sinh mới cần tạo một trang Web với mật khẩu là 'orange'... Bạn nên nói gì với họ để nâng cao độ bảo mật?",
    options: [
      { key: "A", text: "Sử dụng tên thú cưng của họ làm mật khẩu" },
      { key: "B", text: "Chia sẻ mật khẩu với bạn bè trong trường hợp họ quên nó" },
      { key: "C", text: "Sử dụng số và ký hiệu trong mật khẩu" },
      { key: "D", text: "Tạo mật khẩu ngắn để dễ nhớ" }
    ],
    correctKeys: ["C"],
    correctAnswerText: "C. Sử dụng số và ký hiệu trong mật khẩu",
    explanation: "Mật khẩu an toàn cần kết hợp cả chữ in hoa, chữ thường, số và ký tự đặc biệt (ví dụ: Or@nge#2026)."
  },
  {
    id: "spark-l1-ot1-26",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 26,
    order: 26,
    type: "multiple_choice",
    text: "Phần thông tin nào là an toàn để chia sẻ trực tuyến?",
    options: [
      { key: "A", text: "Tên trường và lớp của bạn" },
      { key: "B", text: "Màu sắc yêu thích của bạn" },
      { key: "C", text: "Địa chỉ nhà riêng của bạn" },
      { key: "D", text: "Công viên ưa thích gần nhà bạn" }
    ],
    correctKeys: ["B"],
    correctAnswerText: "B. Màu sắc yêu thích của bạn",
    explanation: "Màu sắc yêu thích là sở thích cá nhân vô hại, không làm lộ vị trí hay danh tính nhạy cảm."
  },
  {
    id: "spark-l1-ot1-27",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 27,
    order: 27,
    type: "yes_no",
    text: "Đối với mỗi mật khẩu, hãy xác định đó là Mật khẩu Mạnh hay Mật khẩu Yếu:",
    trueColumnLabel: "Mạnh",
    falseColumnLabel: "Yếu",
    statements: [
      { text: "W3*ud28x", correct: "True" },
      { text: "1234567890", correct: "False" },
      { text: "ILoveC@ndy2", correct: "True" }
    ],
    correctAnswerText: "1. Mạnh\n2. Yếu\n3. Mạnh",
    explanation: "Mật khẩu mạnh kết hợp chữ hoa, thường, chữ số và ký tự đặc biệt. Dãy số liên tiếp 1234567890 là mật khẩu rất yếu."
  },
  {
    id: "spark-l1-ot1-28",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 28,
    order: 28,
    type: "multiple_choice",
    text: "Bạn nhận được một email từ cửa hàng yêu thích nói rằng bạn đã giành được 1000 đô la... Điều gì sẽ khiến bạn quan tâm và nghi ngờ về email này?",
    options: [
      { key: "A", text: "Cửa hàng có thể đã nhầm lẫn vì bạn không nhớ đã tham gia cuộc thi" },
      { key: "B", text: "Tiền ở dạng quà tặng chỉ có thể sử dụng tại một địa điểm" },
      { key: "C", text: "Cửa hàng có thể muốn bạn tham gia vào một chiến dịch quảng cáo" },
      { key: "D", text: "Email có thể là từ một kẻ lừa đảo đang cố gắng thu thập thông tin cá nhân của bạn" }
    ],
    correctKeys: ["D"],
    correctAnswerText: "D. Email có thể là từ một kẻ lừa đảo đang cố gắng thu thập thông tin cá nhân của bạn",
    explanation: "Đây là hình thức lừa đảo trực tuyến (phishing) phổ biến bằng cách hứa hẹn phần thưởng giả để đánh cắp thông tin tài khoản."
  },
  {
    id: "spark-l1-ot1-29",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 29,
    order: 29,
    type: "multiple_choice",
    text: "Bạn nên làm gì nếu bạn bị người khác có hành vi trực tuyến tiêu cực hoặc không phù hợp đối với mình?",
    options: [
      { key: "A", text: "Yêu cầu người lạ dừng hành vi và cãi nhau với họ" },
      { key: "B", text: "Nói với người lạ rằng bạn không thích hành vi của họ" },
      { key: "C", text: "Trò chuyện với người lạ để giữ họ trực tuyến" },
      { key: "D", text: "Nói với cha mẹ hoặc giáo viên của bạn" }
    ],
    correctKeys: ["D"],
    correctAnswerText: "D. Nói với cha mẹ hoặc giáo viên của bạn",
    explanation: "Học sinh luôn cần tìm sự giúp đỡ từ người lớn đáng tin cậy (cha mẹ, thầy cô) khi gặp phải hành vi tiêu cực hoặc quấy rối trên mạng."
  },
  {
    id: "spark-l1-ot1-30",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 30,
    order: 30,
    type: "multiple_choice",
    text: "Nhóm nào là thích hợp và an toàn nhất cho bạn bè trực tuyến?",
    options: [
      { key: "A", text: "Những người bạn gặp khi chơi trò chơi trực tuyến" },
      { key: "B", text: "Những người bạn biết trong cuộc sống thực" },
      { key: "C", text: "Những người thực hiện giao hàng đến nhà bạn" },
      { key: "D", text: "Bất kỳ ai gửi lời mời kết bạn ngẫu nhiên" }
    ],
    correctKeys: ["B"],
    correctAnswerText: "B. Những người bạn biết trong cuộc sống thực",
    explanation: "Chỉ nên kết bạn trên mạng xã hội với những người mà bạn đã quen biết rõ ràng ngoài đời thực."
  },

  // ===================== OT2: LEVEL 1 (MÁY TÍNH CĂN BẢN) =====================
  {
    id: "spark-l1-ot2-01",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 1,
    order: 31,
    type: "multiple_choice",
    text: "Ai đó bạn gặp trực tuyến, yêu cầu bạn cung cấp tên và địa chỉ của bạn để họ gửi cho bạn lời mời dự tiệc sinh nhật. Bạn nên làm gì?",
    options: [
      { key: "A", text: "Cung cấp tên và địa chỉ của bạn" },
      { key: "B", text: "Từ chối cung cấp tên hoặc địa chỉ của bạn" },
      { key: "C", text: "Cung cấp tên của bạn nhưng không cho biết địa chỉ của bạn" },
      { key: "D", text: "Đề nghị gặp tại bữa tiệc" }
    ],
    correctKeys: ["B"],
    correctAnswerText: "A. CPU (Bộ vi xử lý trung tâm)",
    explanation: "CPU (Central Processing Unit) là bộ xử lý trung tâm, điều hành và xử lý mọi tác vụ của hệ thống máy tính."
  },
  {
    id: "spark-l1-ot2-02",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 2,
    order: 32,
    type: "multiple_choice",
    text: "Thông tin cá nhân nào bạn Không nên chia sẻ trực tuyến?",
    options: [
      { key: "A", text: "Tuổi" },
      { key: "B", text: "Địa chỉ" },
      { key: "C", text: "Lớp" },
      { key: "D", text: "Tên" }
    ],
    correctKeys: ["B"],
    correctAnswerText: "B. Máy tính xách tay (Laptop)",
    explanation: "Laptop là máy tính xách tay tích hợp màn hình, bàn phím, bàn rê chuột và pin nhỏ gọn."
  },
  {
    id: "spark-l1-ot2-03",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 3,
    order: 33,
    type: "multiple_choice",
    text: "Hãy xem xét những gì bạn biết về bản chất công khai và lâu dài của nội dung trực tuyến. Nội dung nào Không an toàn để chia sẻ trực tuyến?",
    options: [
      { key: "A", text: "Danh sách những cuốn sách yêu thích của bạn" },
      { key: "B", text: "Vị trí GPS của công viên bên cạnh ngôi nhà của bạn" },
      { key: "C", text: "Một bức ảnh về bữa tối ngon miệng của bạn" },
      { key: "D", text: "Một bức ảnh về dự án nghệ thuật hoàn toàn tuyệt vời của bạn" }
    ],
    correctKeys: ["B"],
    explanation: "Bàn phím và Micro đưa dữ liệu vào máy (Input). Màn hình và Loa xuất dữ liệu ra cho người dùng (Output)."
  },
  {
    id: "spark-l1-ot2-04",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 4,
    order: 34,
    type: "multiple_choice",
    text: "Lưng mẹ bạn đau khi bà ngồi vào bàn làm việc để sử dụng máy tính. Mẹ yêu cầu bạn cho lời khuyên về cách có tư thế tốt. Bạn nên nói gì với mẹ?",
    options: [
      { key: "A", text: "Nâng màn hình máy tính lên trên tầm mắt để phải ngước nhìn lên nó" },
      { key: "B", text: "Bắt chéo chân và ngả người ra sau" },
      { key: "C", text: "Nghiêng về phía màn hình máy tính" },
      { key: "D", text: "Ngồi thẳng lưng và chân phẳng trên sàn nhà" }
    ],
    correctKeys: ["D"],
    explanation: "Đây là 4 kỹ năng thao tác chuột cơ bản mà học sinh cần thuần thục khi dùng máy tính."
  },
  {
    id: "spark-l1-ot2-05",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 5,
    order: 35,
    type: "multiple_choice",
    text: "Khi nào thì có thể nói chuyện với người lạ trực tuyến?",
    options: [
      { key: "A", text: "Bất cứ lúc nào" },
      { key: "B", text: "Cuối tuần" },
      { key: "C", text: "Không bao giờ" },
      { key: "D", text: "Ban ngày" }
    ],
    correctKeys: ["C"],
    correctAnswerText: "B. Caps Lock",
    explanation: "Phím Caps Lock khi bật sáng đèn sẽ giúp mọi ký tự chữ cái gõ ra đều là chữ in hoa."
  },

  {
    id: "spark-l1-ot2-06",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 6,
    order: 36,
    type: "yes_no",
    text: "Bạn đang truy cập Internet và cửa sổ hiển thị bật lên. Bạn cần quyết định những gì bạn có thể làm một cách an toàn. Đối với mỗi hành động, hãy chọn Có nếu nên làm hoặc Không nếu không nên làm.",
    image: "/images/s-lv1-ot2-6.jpg",
    statements: [
      {
        text: "Nhập địa chỉ email và mật khẩu thông thường của bạn",
        correct: "False"
      },
      {
        text: "Đồng ý với các điều khoản và điều kiện",
        correct: "False"
      },
      {
        text: "Nhấp vào Get More Free Games!!! để nhận thêm game miễn phí",
        correct: "False"
      }
    ]
  },
  {
    id: "spark-l1-ot2-07",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 7,
    order: 37,
    type: "multiple_choice",
    text: "Bạn có một máy tính, một màn hình và một bàn phím trong phòng của bạn. Tại sao bạn nên che bàn phím khi không sử dụng nó?",
    options: [
      { key: "A", text: "Để bảo vệ bàn phím khỏi ánh sáng mặt trời" },
      { key: "B", text: "Để bảo vệ bàn phím khỏi nhiệt độ ấm áp" },
      { key: "C", text: "Để bảo vệ bàn phím khỏi nhiệt độ lạnh" },
      { key: "D", text: "Để bảo vệ bàn phím khỏi bụi" }
    ],
    correctKeys: ["D"]
  },

  {
    id: "spark-l1-ot2-08",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 8,
    order: 38,
    type: "yes_no",
    text: "Các tư thế tốt khi sử dụng máy tính là gì? Chọn Có hoặc Không cho mỗi tư thế dưới đây.",
    statements: [
      {
        text: "Giữ chân trên sàn",
        correct: "True"
      },
      {
        text: "Cúi người về phía trước để xem màn hình",
        correct: "False"
      },
      {
        text: "Bắt chéo chân dưới bàn làm việc",
        correct: "False"
      },
      {
        text: "Thư giãn vai của bạn",
        correct: "True"
      }
    ]
  },
  {
    id: "spark-l1-ot2-09",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 9,
    order: 39,
    type: "multiple_choice",
    text: "Ai trong số những người này là bạn an toàn nhất để có trên mạng?",
    options: [
      { key: "A", text: "Một người mà bạn đi học với người đó và chơi trò chơi trực tuyến vào cuối tuần" },
      { key: "B", text: "Một người gửi tin nhắn trực tiếp trên mạng xã hội yêu cầu số điện thoại của bạn" },
      { key: "C", text: "Ai đó gửi email cho bạn nói rằng bạn đã giành được giải thưởng và cần gửi lại thông tin cá nhân" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot2-10",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 10,
    order: 40,
    type: "multiple_choice",
    text: "Cách an toàn nhất để sạc thiết bị di động là gì?",
    options: [
      { key: "A", text: "Đặt thiết bị di động bên ngoài trong ngày và sạc nó dưới ánh nắng trực tiếp" },
      { key: "B", text: "Đặt thiết bị trên sàn và cắm cáp sạc của một thiết bị khác" },
      { key: "C", text: "Đặt ở nơi an toàn gần ổ cắm và cắm cáp sạc đi kèm với thiết bị" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l1-ot2-11",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 11,
    order: 41,
    type: "multiple_choice",
    text: "Những yếu tố nào sau đây làm cho thiết bị có thể bị hỏng? (Chọn tất cả các đáp án đúng)",
    options: [
      { key: "A", text: "Thực phẩm (Food)" },
      { key: "B", text: "Cơ vệ sinh" },
      { key: "C", text: "Mưa (Rain)" },
      { key: "D", text: "Ngón tay (Fingers)" }
    ],
    correctKeys: ["A", "C", "D"]
  },
  {
    id: "spark-l1-ot2-12",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 12,
    order: 42,
    type: "multiple_choice",
    text: "Bạn gặp một người trong phòng trò chuyện chơi game trực tuyến. Họ yêu cầu bạn cung cấp địa chỉ nhà của bạn. Bạn nên kết luận điều gì từ yêu cầu của họ?",
    options: [
      { key: "A", text: "Họ tò mò về nơi bạn sống" },
      { key: "B", text: "Họ muốn gửi cho bạn một cái gì đó" },
      { key: "C", text: "Họ muốn đến thăm bạn" },
      { key: "D", text: "Họ không phải là một người bạn trực tuyến thích hợp" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot2-13",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 13,
    order: 43,
    type: "multiple_choice",
    text: "Thông tin nào Không nên được chia sẻ trực tuyến? (Chọn 3)",
    options: [
      { key: "A", text: "Bài hát em yêu thích (Favourite song)" },
      { key: "B", text: "Ngày sinh (Birthdate)" },
      { key: "C", text: "Tuổi (Age)" },
      { key: "D", text: "Địa chỉ nhà (Home address)" }
    ],
    correctKeys: ["B", "C", "D"]
  },
  {
    id: "spark-l1-ot2-14",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 14,
    order: 44,
    type: "multiple_choice",
    text: "Bạn gửi ảnh của bạn và gia đình của bạn cho một người bạn cùng lớp. Bạn cùng lớp đăng ảnh lên mạng xã hội của họ. Bạn có thể làm gì để xóa ảnh vĩnh viễn khỏi internet?",
    options: [
      { key: "A", text: "Bạn không thể xóa ảnh mãi mãi, vì internet là công khai và vĩnh viễn" },
      { key: "B", text: "Đăng nhập vào máy tính của bạn cùng lớp và cố gắng xóa các bức ảnh" },
      { key: "C", text: "Báo bạn cùng lớp của bạn gỡ ảnh xuống nếu không bạn sẽ không còn là bạn của họ nữa" },
      { key: "D", text: "Gửi yêu cầu hỗ trợ đến dịch vụ khách hàng của ứng dụng truyền thông xã hội" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot2-15",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 15,
    order: 45,
    type: "multiple_choice",
    text: "Trong cửa sổ trình duyệt được hiển thị, bạn nên nhấp hoặc nhấn vào đâu để truy cập các trang khác của trang Web Net PC?",
    image: "/images/s-lv1-ot2-15.jpg",
    options: [
      { key: "B", text: "Thanh địa chỉ URL (http://netpc)" },
      { key: "D", text: "Khu vực chứa các liên kết trang: Home | About | Search | Store | Contact" },
      { key: "C", text: "Cài đặt trình duyệt" },
      { key: "A", text: "Cửa sổ trình duyệt" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot2-16",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 16,
    order: 46,
    type: "multiple_choice",
    text: "Bạn cần đóng (Close) cửa sổ trình duyệt hiển thị. Bạn nên nhấp hoặc nhấn vào biểu tượng nào?",
    image: "/images/s-lv1-ot2-16.jpg",
    options: [
      { key: "C", text: "Biểu tượng dấu 'X' ở góc trên bên phải trên cùng" },
      { key: "A", text: "Nút mũi tên qua trái" },
      { key: "D", text: "Biểu tượng dấu 3 gạch" },
      { key: "B", text: "Biểu tượng dấu +" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l1-ot2-17",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 17,
    order: 47,
    type: "multiple_choice",
    text: "Bằng cách sử dụng tính năng Bookmarks/Favorites của trình duyệt web, bạn có thể lưu lưu gì?",
    options: [
      { key: "A", text: "Cookie trang web (Webpage cookies)" },
      { key: "B", text: "Cài đặt trang web (Webpage settings)" },
      { key: "C", text: "Liên kết trang web (Webpage links)" },
      { key: "D", text: "Hình ảnh trang web (Webpage images)" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l1-ot2-18",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 18,
    order: 48,
    type: "multiple_choice",
    text: "Bạn thường tìm thấy điều gì trong ứng dụng máy tính để bàn và trên các trang web?",
    options: [
      { key: "A", text: "Thanh địa chỉ" },
      { key: "B", text: "Đoạn văn bản" },
      { key: "C", text: "Nút đặt hàng" },
      { key: "D", text: "Giỏ hàng" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot2-19",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 19,
    order: 49,
    type: "multiple_choice",
    text: "Nhi thích đọc các bài báo trực tuyến. Cô ấy chỉ muốn đọc các bài báo dựa trên sự thật, không phải ý kiến. Câu hỏi nào có thể giúp Nhi xác định các bài báo dựa trên thực tế?",
    options: [
      { key: "A", text: "Kiểu phông chữ nào đã được sử dụng?" },
      { key: "B", text: "Bài viết dài bao nhiêu?" },
      { key: "C", text: "Bài viết có hình ảnh không?" },
      { key: "D", text: "Ai đã viết bài báo?" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot2-20",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 20,
    order: 50,
    type: "multiple_choice",
    text: "Bạn cần truy cập một trang web khác. Trên trang web được hiển thị, bạn nên nhập URL mới vào đâu?",
    image: "/images/s-lv1-ot2-20.jpg",
    options: [
      { key: "A", text: "Thẻ new tab" },
      { key: "B", text: "Thanh địa chỉ" },
      { key: "C", text: "Biểu tượng dấu 3 gạch ngang" },
      { key: "D", text: "Thanh tìm kiếm" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot2-21",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 21,
    order: 51,
    type: "multiple_choice",
    text: "Tên của khu vực ở đầu cửa sổ trình duyệt hiển thị URL trang web được gọi là gì?",
    image: "/images/s-lv1-ot2-21.jpg",
    options: [
      { key: "A", text: "Thanh tiêu đề (Title bar)" },
      { key: "B", text: "Thanh địa chỉ (Address bar)" },
      { key: "C", text: "Bookmark/Favorite" },
      { key: "D", text: "Thẻ trình duyệt (Tab)" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot2-22",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 22,
    order: 52,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, công cụ nào của trình duyệt cho phép truy cập vào các trang web yêu thích?",
    options: [
      { key: "A", text: "Bookmarks" },
      { key: "B", text: "Settings" },
      { key: "C", text: "Back" },
      { key: "D", text: "Home" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot2-23",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 23,
    order: 53,
    type: "matching",
    text: "Ghép nối thuật ngữ và định nghĩa tương ứng:",
    pairs: [
      {
        left: "Trang web (Web page)",
        right: "Một tài liệu với văn bản và hình ảnh mà bạn nhìn thấy và đọc trên internet"
      },
      {
        left: "Trình duyệt web (Web browser)",
        right: "Phần mềm bạn sử dụng để xem mọi thứ trên Internet"
      },
      {
        left: "Công cụ tìm kiếm (Search engine)",
        right: "Phần mềm bạn sử dụng để tìm mọi thứ trên internet"
      }
    ]
  },
  {
    id: "spark-l1-ot2-24",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 24,
    order: 54,
    type: "yes_no",
    text: "Xác định tuyên bố là Thực tế hay Ý kiến:",
    trueColumnLabel: "Ý kiến (Opinion)",
    falseColumnLabel: "Thực tế (Fact)",
    statements: [
      {
        text: "Nhà hàng có một khu trò chơi điện tử thực sự thú vị",
        correct: "True"
      },
      {
        text: "Nhà hàng có các món tráng miệng ngon nhất",
        correct: "True"
      },
      {
        text: "Nhà hàng chỉ cách trường học một dãy nhà",
        correct: "False"
      },
      {
        text: "Nhà hàng có mười loại pizza khác nhau",
        correct: "False"
      }
    ]
  },
  {
    id: "spark-l1-ot2-25",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 25,
    order: 55,
    type: "multiple_choice",
    text: "Cách nhanh nhất để lưu trang web bạn đang xem để bạn có thể quay lại sau là gì?",
    options: [
      { key: "A", text: "Lưu địa chỉ trang web trong một tập tin" },
      { key: "B", text: "Lưu trang web vào màn hình máy tính của bạn" },
      { key: "C", text: "Tạo dấu trang (Bookmark)" },
      { key: "D", text: "Viết địa chỉ trang web trên một tờ giấy" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l1-ot2-26",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 26,
    order: 56,
    type: "multiple_choice",
    text: "Một giáo viên báo học sinh của mình nghiên cứu cùng một chủ đề trên máy tính bảng của họ trong 30 phút tiếp theo. Khi giáo viên hỏi một học sinh xem bạn ấy có thực hiện nghiên cứu hay không, bạn ấy nói có. Làm thế nào giáo viên có thể tìm ra liệu học sinh có nói sự thật hay không?",
    options: [
      { key: "A", text: "Bằng cách hỏi những học sinh khác ngồi gần trong thời gian nghiên cứu" },
      { key: "B", text: "Bằng cách kiểm tra lịch sử trình duyệt của học sinh" },
      { key: "C", text: "Bằng cách kiểm tra thời lượng pin còn lại của máy tính bảng" },
      { key: "D", text: "Bằng cách kiểm tra xem có bất kỳ thẻ trình duyệt nào được mở trên máy tính bảng hay không" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot2-27",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 27,
    order: 57,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, tùy chọn nào dưới đây cho phép truy cập và duyệt thông tin trên internet?",
    options: [
      { key: "A", text: "Internet Explorer" },
      { key: "B", text: "Cloud Storage (Lưu trữ đám mây)" },
      { key: "C", text: "Server (Máy chủ)" },
      { key: "D", text: "Client (Máy khách)" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot2-28",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 28,
    order: 58,
    type: "yes_no",
    text: "Xác định xem hành động có phải là định dạng văn bản hay không:",
    statements: [
      {
        text: "In đậm văn bản",
        correct: "True"
      },
      {
        text: "Xóa một phần của đoạn văn bản",
        correct: "False"
      },
      {
        text: "Thay đổi kích cỡ và màu sắc của văn bản",
        correct: "True"
      }
    ]
  },
  {
    id: "spark-l1-ot2-29",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 29,
    order: 59,
    type: "multiple_choice",
    text: "Em hãy cho biết, tài liệu điện tử có đặc điểm gì?",
    options: [
      { key: "A", text: "Không có điều nào ở trên" },
      { key: "B", text: "Giúp bảo vệ môi trường bằng cách giảm lãng phí giấy" },
      { key: "C", text: "Là những tài liệu đã được in và phân phối" },
      { key: "D", text: "Phải luôn luôn được in" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot2-30",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 30,
    order: 60,
    type: "multiple_choice",
    text: "Nhi đang viết một báo cáo trên máy tính của mình. Bạn ấy được yêu cầu thụt lề dòng đầu tiên của mỗi đoạn một nửa inch. Nhi nên nhấn phím nào để thụt lề chính xác dòng đầu tiên?",
    image: "/images/s-lv1-ot2-30.jpg",
    options: [
      { key: "A", text: "Phím Tab" },
      { key: "B", text: "Phím Caps Lock" },
      { key: "C", text: "Phím Shift" },
      { key: "D", text: "Phím Spacebar (Thanh khoảng trắng)" }
    ],
    correctKeys: ["A"]
  },
  // ===================== OT3 / GM1: LEVEL 1 (MÁY TÍNH CĂN BẢN) =====================
  {
    id: "spark-l1-ot3-q1",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 1,
    type: "multiple_choice",
    text: "Bạn nên sử dụng ứng dụng nào để hiển thị ảnh, bản đồ và video từ kỳ nghỉ hè của mình cho các bạn trong lớp học của bạn xem?",
    options: [
      { key: "A", text: "Tài liệu (Document)" },
      { key: "B", text: "Trang tính (Spreadsheet)" },
      { key: "C", text: "Bài trình chiếu (Slide Presentation)" },
      { key: "D", text: "Áp phích (Poster)" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l1-ot3-q2",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 2,
    type: "multiple_choice",
    text: "Nhi muốn tham gia một trang mạng xã hội mới nổi tiếng. Để đăng ký, cô ấy phải điền vào một biểu mẫu trực tuyến. Nhi nên giữ phím nào trong khi gõ để chỉ viết hoa chữ cái đầu tiên trong tên của cô ấy?",
    image: "/imgaes/s-lv1-ot3-2.jpg",
    options: [
      { key: "A", text: "Phím Shift (SHIFT)" },
      { key: "B", text: "Phím Enter" },
      { key: "C", text: "Phím Capslock" },
      { key: "D", text: "Phím Ecs" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot3-q3",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 3,
    type: "multiple_choice",
    text: "Em hãy cho biết, cần sử dụng phần mềm ứng dụng nào để tạo ra các chữ cái tiểu chuẩn thay vì sử dụng máy đánh chữ?",
    options: [
      { key: "A", text: "Một ứng dụng CAD" },
      { key: "B", text: "Một ứng dụng trình chiếu" },
      { key: "C", text: "Một ứng dụng xử lý văn bản" },
      { key: "D", text: "Một ứng dụng bảng tính" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l1-ot3-q4",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 4,
    type: "multiple_choice",
    text: "Em hãy cho biết, đây là loại tập tin gì? (kèm hình ảnh hồ sơ cá nhân/CV)",
    image: "/images/s-lv1-ot3-4.jpg",
    options: [
      { key: "A", text: "Một trang web (A web page)" },
      { key: "B", text: "Một bài trình chiếu (A presentation)" },
      { key: "C", text: "Một trang tính (A spreadsheet)" },
      { key: "D", text: "Một tài liệu (A document)" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot3-q5",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 5,
    type: "multiple_choice",
    text: "Em hãy cho biết, tổ hợp phím nào sau đây được sử dụng để chọn tất cả văn bản trong cùng một tài liệu?",
    options: [
      { key: "A", text: "ALT + A" },
      { key: "B", text: "CTRL + A" },
      { key: "C", text: "SHIFT + A" },
      { key: "D", text: "TAB + A" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot3-q6",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 6,
    type: "multiple_choice",
    text: "Bạn đang tạo một áp phích trên máy tính. Bạn muốn thay đổi giao diện của các chữ cái và số trong tiêu đề áp phích. Bạn nên thay đổi điều gì?",
    options: [
      { key: "A", text: "Phông chữ (The Font)" },
      { key: "B", text: "Lề (The Margin)" },
      { key: "C", text: "Kích thước trang (The Page size)" },
      { key: "D", text: "Dãn cách đoạn văn (The Paragraph spacing)" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot3-q7",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 7,
    type: "multiple_choice",
    text: "Trolling là gì?",
    options: [
      { key: "A", text: "Cố gắng làm cho ai đó tức giận bằng cách đăng những điều có ý nghĩa về họ" },
      { key: "B", text: "Chia sẻ thông tin cá nhân về ai đó mà không có sự cho phép của họ" },
      { key: "C", text: "Đăng nhập vào trang cá nhân của người khác và mạo danh người đó" },
      { key: "D", text: "Cố tình bỏ ai đó ra ngoài" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot3-q8",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 8,
    type: "yes_no",
    text: "Tùy chọn nào sau đây là Đúng? (Chọn Có nếu đáp án đúng và Không nếu đáp án sai).",
    statements: [
      { text: "Trực tuyến là mãi mãi", correct: "True" },
      { text: "Bạn có thể xóa vĩnh viễn các tin nhắn độc hại hoặc các bài đăng trên mạng xã hội khỏi internet", correct: "False" },
      { text: "Thông tin cá nhân như địa chỉ và số điện thoại không nên được đăng trực tuyến", correct: "True" },
      { text: "Bạn nên gửi tin nhắn riêng cho bạn cùng lớp bằng mật khẩu của mình trong trường hợp bạn quên mật khẩu", correct: "False" }
    ]
  },
  {
    id: "spark-l1-ot3-q9",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 9,
    type: "multiple_choice",
    text: "Bạn nhập tên của mình vào một công cụ tìm kiếm. Kết quả tìm kiếm bao gồm các ảnh mà bạn đã xóa khỏi trang web nơi bạn đã đăng chúng. Điều này có nghĩa là gì?",
    options: [
      { key: "A", text: "Dữ liệu công cụ tìm kiếm không được cập nhật gần đây" },
      { key: "B", text: "Bạn cần làm mới trang kết quả tìm kiếm" },
      { key: "C", text: "Chủ sở hữu trang web vẫn chưa xóa xong ảnh" },
      { key: "D", text: "Thông tin được đăng trực tuyến có thể được sao chép hoặc chia sẻ bởi những người khác" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot3-q10",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 10,
    type: "multiple_choice",
    text: "Tùy chọn nào đại diện cho một đặc điểm của công dân kỹ thuật số tốt?",
    options: [
      { key: "A", text: "Sử dụng P@ssword làm mật khẩu cho tất cả các tài khoản của bạn" },
      { key: "B", text: "Lan truyền tin đồn trên mạng xã hội" },
      { key: "C", text: "Chia sẻ vị trí của bạn trên phương tiện truyền thông xã hội" },
      { key: "D", text: "Biết giả sử mọi thứ bạn đăng sẽ được người khác nhìn thấy và chia sẻ" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot3-q11",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 11,
    type: "multiple_choice",
    text: "Bạn thấy những bình luận ác ý trong một cuộc trò chuyện trong nhóm trực tuyến. Là một công dân tốt của thời đại kỷ nguyên số, bạn nên nói gì?",
    options: [
      { key: "A", text: "Những bình luận này sẽ trực tuyến mãi mãi" },
      { key: "B", text: "Chúng ta chỉ nên đăng những bình luận ác ý trong một cuộc trò chuyện riêng tư" },
      { key: "C", text: "Bình luận ác ý là OK nếu chúng bị xóa sau khi nhóm đọc chúng" },
      { key: "D", text: "Bạn có thể đăng những bình luận ác ý nếu người khác không nhìn thấy chúng" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot3-q12",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 12,
    type: "yes_no",
    text: "Đối với mỗi phát biểu về việc đăng thông tin trên internet, bạn hãy chọn đáp án Đúng hoặc Sai cho mỗi phát biểu dưới đây.",
    statements: [
      { text: "Sẽ không ai nhìn thấy nội dung bạn đã đăng ngoại trừ những người theo dõi bạn", correct: "False" },
      { text: "Xóa một hình ảnh hoặc video khỏi phương tiện truyền thông xã hội sẽ xóa nó vĩnh viễn", correct: "False" },
      { text: "Những gì bạn đăng trên internet có thể ảnh hưởng đến những gì mọi người nghĩ về bạn", correct: "True" }
    ]
  },
  {
    id: "spark-l1-ot3-q13",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 13,
    type: "multiple_choice",
    text: "Ai đó đã đăng một bình luận xấu tính trên mạng xã hội hỏi về bạn An. Bạn ấy đã xóa bình luận, nhưng chính người đó đã viết những bình luận ác ý hơn. Một thuật ngữ cho người đã viết các ý kiến có nghĩa là gì?",
    options: [
      { key: "A", text: "Bắt nạt trên mạng (A cyberbully)" },
      { key: "B", text: "Một người mạo danh - lừa đảo (A catfish)" },
      { key: "C", text: "Một kẻ lừa đảo (A scammer)" },
      { key: "D", text: "Một hacker (A hacker)" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot3-q14",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 14,
    type: "multiple_choice",
    text: "Khi ai đó sử dụng công nghệ để gây ác ý với người khác, việc họ đang làm được gọi là gì?",
    options: [
      { key: "A", text: "Trolling" },
      { key: "B", text: "Là một người hành động" },
      { key: "C", text: "Là một người ngoài cuộc" },
      { key: "D", text: "Bắt nạt trên mạng (Cyberbullying)" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot3-q15",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 15,
    type: "multiple_choice",
    text: "Hành động nào là một ví dụ về bắt nạt trên mạng?",
    options: [
      { key: "A", text: "Bị bỏ rơi khỏi cuộc trò chuyện vào bữa trưa" },
      { key: "B", text: "Thích một bài đăng trên phương tiện truyền thông xã hội của một người bạn cùng lớp mà bạn không biết" },
      { key: "C", text: "Đăng tin nhắn ác ý về ai đó trên phương tiện truyền thông xã hội" },
      { key: "D", text: "Tạo niềm vui cho một người bạn cùng lớp vào giờ ra chơi" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l1-ot3-q16",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 16,
    type: "multiple_choice",
    text: "Bạn đang trò chuyện trực tuyến với một người bạn và một cuộc tranh cãi nảy sinh. Bạn nên làm gì?",
    options: [
      { key: "A", text: "Rời khỏi cuộc trò chuyện" },
      { key: "B", text: "Nhờ một người bạn khác hỗ trợ bạn" },
      { key: "C", text: "Tìm bằng chứng để giành chiến thắng trong cuộc tranh luận" },
      { key: "D", text: "Phớt lờ bạn bè của bạn cho đến khi họ ngừng nói chuyện" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot3-q17",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 17,
    type: "multiple_choice",
    text: "Quyền riêng tư kỹ thuật số là gì?",
    options: [
      { key: "A", text: "Trở thành bạn bè trực tuyến chỉ với những người bạn biết trong thế giới thực" },
      { key: "B", text: "Bảo vệ thông tin được lưu trữ hoặc chia sẻ trực tuyến" },
      { key: "C", text: "Sử dụng mật khẩu phức tạp" },
      { key: "D", text: "Che camera trên máy tính xách tay khi không sử dụng" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot3-q18",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 18,
    type: "yes_no",
    text: "Đối với mỗi phát biểu về tương tác kỹ thuật số, hãy chọn Đúng hoặc Sai.",
    statements: [
      { text: "Thật an toàn khi chia sẻ tên đầy đủ và vị trí của bạn với bạn bè trực tuyến của bạn", correct: "False" },
      { text: "Một công dân kỹ thuật số tốt sẽ xin phép trước khi chia sẻ ảnh của người khác", correct: "True" },
      { text: "Bạn có thể đưa ra những nhận xét ác ý trực tuyến miễn là bạn không nói trực tiếp", correct: "False" }
    ]
  },
  {
    id: "spark-l1-ot3-q19",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 19,
    type: "multiple_choice",
    text: "Bạn là đội trưởng của đội bóng đá. Bạn cần thay mặt đội bóng hỏi huấn luyện viên của mình một câu hỏi khẩn cấp. Bạn nên đặt URGENT ở đâu để đảm bảo rằng huấn luyện viên của bạn nhận được thông báo và mở email một cách nhanh chóng?",
    image: "/images/s-lv1-ot3-19.jpg",
    options: [
      { key: "A", text: "Vị trí A" },
      { key: "B", text: "Vị trí B" },
      { key: "C", text: "Vị trí C" },
      { key: "D", text: "Vị trí D" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot3-q20",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 20,
    type: "multiple_choice",
    text: "Nhi đã xây dựng một mô hình lớp học của mình như một bài tập về nhà. Bạn ấy muốn đưa nó cho anh của bạn ấy, người sống ở xa. Bạn ấy muốn chỉ cho anh ấy nơi bạn ấy ngồi và nói với anh ấy về giáo viên của bạn ấy và bạn bè của mình. Nhi nên thể hiện và nói với anh mình những điều này như thế nào?",
    options: [
      { key: "A", text: "Trong cuộc trò chuyện video" },
      { key: "B", text: "Trong thông điệp email" },
      { key: "C", text: "Trong tin nhắn văn bản" },
      { key: "D", text: "Trong một bài đăng trên mạng xã hội" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot3-q21",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 21,
    type: "multiple_choice",
    text: "Bạn đang nói chuyện với bạn bè trên thiết bị kỹ thuật số của mình. Với sự trợ giúp của camera tích hợp, bạn có thể chủ động nhìn thấy bạn bè của mình và bạn bè của bạn có thể nhìn thấy bạn. Bạn và bạn bè của bạn đang sử dụng hình thức giao tiếp kỹ thuật số nào?",
    options: [
      { key: "A", text: "Gửi thư điện tử (Email)" },
      { key: "B", text: "Trò chuyện video (Video chat)" },
      { key: "C", text: "Gọi điện thoại (Phone call)" },
      { key: "D", text: "Tin nhắn văn bản (Text message)" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot3-q22",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 22,
    type: "multiple_choice",
    text: "Bạn của bạn đã gửi một tin nhắn điện tử ngắn từ điện thoại của bạn ấy đến điện thoại của bạn. Tin nhắn chứa các chữ cái, số và biểu tượng cảm xúc. Bạn của bạn đã sử dụng hình thức giao tiếp kỹ thuật số nào?",
    options: [
      { key: "A", text: "Gọi điện thoại" },
      { key: "B", text: "Tin nhắn văn bản" },
      { key: "C", text: "Thông báo cập nhật" },
      { key: "D", text: "Trò chuyện Video" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot3-q23",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 23,
    type: "matching",
    text: "Nối mỗi từ với định nghĩa thích hợp:",
    pairs: [
      { left: "Lời chào (Greeting)", right: "Điều đầu tiên được đọc trong một cuộc giao tiếp. Có thể không chính thức hoặc trang trọng tùy thuộc vào đối tượng" },
      { left: "Nội dung thư (Message Body)", right: "Nơi bạn nhập thông điệp thực sự bạn muốn gửi" },
      { left: "Người nhận (Recipient)", right: "Người nhận thư (Địa chỉ email bạn nhập vào trường To:)" },
      { left: "Dòng chủ đề (Subject line)", right: "Nêu chủ đề của email bằng một vài từ" }
    ]
  },
  {
    id: "spark-l1-ot3-q24",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 24,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, điều gì sau đây là một lợi thế của việc sử dụng email thay vì tin nhắn tức thời?",
    options: [
      { key: "A", text: "Có thể đính kèm hình ảnh" },
      { key: "B", text: "Có thể chống lại virus" },
      { key: "C", text: "Hỗ trợ biểu tượng cảm xúc (Emoticons)" },
      { key: "D", text: "Người nhận không cần phải online ngay lúc email được gửi" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot3-q25",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 25,
    type: "multiple_choice",
    text: "An cần gửi email cảm ơn đến giáo viên của mình nhưng bạn ấy không biết nên sử dụng phông chữ nào. Phông chữ nào thích hợp nhất cho thông báo này?",
    image: "/images/s-lv1-ot3-25.png",
    options: [
      { key: "A", text: "Câu A" },
      { key: "B", text: "Câu B" },
      { key: "C", text: "Câu C" },
      { key: "D", text: "Câu D" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot3-q26",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 26,
    type: "yes_no",
    text: "Hầu hết các thư và email đều có lời chào và lời kết thúc. Bạn hãy chọn cụm từ tương ứng đúng với thể loại câu phù hợp.",
    statements: [
      { text: "Những lời chúc tốt đẹp nhất (Best wishes)", correct: "True" },
      { text: "Trân trọng (Sincerely yours)", correct: "True" },
      { text: "Cô An thân mến (Dear miss An)", correct: "False" },
      { text: "Xin chào (Good morning)", correct: "False" }
    ],
    trueColumnLabel: "Câu kết thúc (Closing statements)",
    falseColumnLabel: "Câu chào hỏi (Greetings)"
  },
  {
    id: "spark-l1-ot3-q27",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 27,
    type: "multiple_choice",
    text: "Bạn đang thực hiện một dự án nhóm về động vật. Bạn cần gửi hai bức ảnh và hai đoạn văn về thằn lằn cho bạn cùng lớp của bạn, người đang làm áp phích cho nhóm. Bạn nên gửi thông tin cho bạn cùng lớp của mình như thế nào?",
    options: [
      { key: "A", text: "Gửi bằng cách đăng trên phương tiện truyền thông xã hội" },
      { key: "B", text: "Trò chuyện video" },
      { key: "C", text: "Gửi bằng email" },
      { key: "D", text: "Gửi bằng tin nhắn văn bản" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l1-ot3-q28",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 28,
    type: "multiple_choice",
    text: "Bạn cần gửi một email cho giáo viên của bạn. Bạn nên đặt địa chỉ email của giáo viên ở đâu?",
    image: "/images/s-lv1-ot3-28.jpg",
    options: [
      { key: "A", text: "Vị trí A" },
      { key: "B", text: "Vị trí B" },
      { key: "C", text: "Vị trí C" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot3-q29",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 29,
    type: "multiple_choice",
    text: "Rian đang gửi cho cô Dũng một email. Bạn ấy biết có năm phần quan trọng cần đưa vào email. Lời chào là phần nào?",
    image: "/images/s-lv1-ot3-29.jpg",
    options: [
      { key: "A", text: "Vị trí A" },
      { key: "B", text: "Vị trí B" },
      { key: "C", text: "Vị trí C" },
      { key: "D", text: "Vị trí D" },
      { key: "E", text: "Vị trí E" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l1-ot3-q30",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 30,
    type: "multiple_choice",
    text: "Nhi đang gặp bạn mình sau giờ học để học nhóm. Vào cuối giờ học, giáo viên của Nhi yêu cầu bạn ấy ở lại vài phút để giúp dọn dẹp bàn học. Nhi sẽ đến muộn để gặp bạn mình. Cách nhanh nhất để Nhi nói với bạn mình rằng bạn ấy sẽ đến muộn vài phút là gì?",
    options: [
      { key: "A", text: "Gửi tin nhắn văn bản (Text message)" },
      { key: "B", text: "Gửi email" },
      { key: "C", text: "Đăng trên phương tiện truyền thông xã hội (Post on social media)" },
      { key: "D", text: "Trò chuyện video (Video chat)" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l1-ot3-q31",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 31,
    type: "multiple_choice",
    text: "Giáo viên của bạn gửi một email để nhắc phụ huynh rằng sẽ có một bài kiểm tra vào ngày mai. Bạn muốn sắp xếp một buổi học nhóm trước khi đến lớp. Bạn nhắn tin cho một người bạn, gọi cho người khác và trò chuyện video với người bạn thứ ba để sắp xếp thời gian và địa điểm học nhóm. Quy trình nào đang được sử dụng để gửi và nhận thông tin?",
    options: [
      { key: "A", text: "Thời gian sử dụng thiết bị (Screen time)" },
      { key: "B", text: "Cộng tác (Collaboration)" },
      { key: "C", text: "Bắt nạt trên mạng (Cyberbullying)" },
      { key: "D", text: "Truyền thông kỹ thuật số (Digital communication)" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot3-q32",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 32,
    type: "multiple_choice",
    text: "Hoạt động nào là một ví dụ về sự hợp tác?",
    options: [
      { key: "A", text: "Chạy một cuộc đua để đánh bại thời gian tốt nhất của bạn" },
      { key: "B", text: "Làm bài kiểm tra trong lớp học của bạn" },
      { key: "C", text: "Làm việc trong một dự án nhóm với các bạn cùng lớp" },
      { key: "D", text: "Ăn trưa trong nhà ăn" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l1-ot3-q33",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 33,
    type: "multiple_choice",
    text: "Bạn và hai người bạn cùng lớp đang làm việc cùng nhau trong một dự án. Nhiệm vụ của bạn là tạo ra một áp phích với thông tin về cá mập. Bạn sẽ in ra những bức ảnh của cá mập. Một người bạn sẽ mua bảng áp phích và dính dán dấu và người kia sẽ lắp ráp áp phích. Mục tiêu của nhóm là gì?",
    options: [
      { key: "A", text: "Để thực hiện công việc nhanh nhất có thể" },
      { key: "B", text: "Để tạo áp phích với thông tin về cá mập" },
      { key: "C", text: "Để hòa hợp với từ cách là một nhóm" },
      { key: "D", text: "Để in gọn gàng trên bảng áp phích" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot3-q34",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 34,
    type: "yes_no",
    text: "Đối với mỗi phát biểu về mục tiêu cộng tác, bạn hãy chọn Đúng hoặc Sai.",
    statements: [
      { text: "Học sinh học hỏi từ ý tưởng của người khác", correct: "True" },
      { text: "Học sinh học cách giao tiếp với người khác", correct: "True" },
      { text: "Học sinh học được rằng cách tốt nhất để làm việc là làm việc một mình", correct: "False" }
    ]
  },
  {
    id: "spark-l1-ot3-q35",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 35,
    type: "multiple_choice",
    text: "Bạn đang nghiên cứu trực tuyến cho một bài tập về đại dương. Giáo viên của bạn đã hướng dẫn bạn bao gồm ít nhất ba sự kiện và không có ý kiến. Tùy chọn nào sau đây là một ý kiến?",
    options: [
      { key: "A", text: "Có sông trong đại dương" },
      { key: "B", text: "Nhiều loài động vật sống trong đại dương" },
      { key: "C", text: "Đại dương luôn chuyển động" },
      { key: "D", text: "Đại dương tối tăm và đáng sợ" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot3-q36",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 36,
    type: "multiple_choice",
    text: "Kịch bản nào là một ví dụ về cộng tác kỹ thuật số?",
    options: [
      { key: "A", text: "Thảo luận về một cuốn sách với nhóm đọc của bạn" },
      { key: "B", text: "Đọc sách điện tử từ thư viện trực tuyến" },
      { key: "C", text: "Tạo bản trình bày cho lớp học của bạn" },
      { key: "D", text: "Có một cuộc gọi video với nhóm học tập của bạn trước khi kiểm tra" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l1-ot3-q37",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 37,
    type: "multiple_choice",
    text: "Mục tiêu là gì?",
    options: [
      { key: "A", text: "Thông tin an toàn để chia sẻ trực tuyến" },
      { key: "B", text: "Một kết quả mà bạn muốn đạt được" },
      { key: "C", text: "Thông tin mà bạn cho là đúng/sự thật" },
      { key: "D", text: "Một thực tế đã được chứng minh" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l1-ot3-q38",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 38,
    type: "multiple_choice",
    text: "Mục đích của sự cộng tác (Collaboration) là gì?",
    options: [
      { key: "A", text: "Làm việc một mình để hoàn thành nhiệm vụ" },
      { key: "B", text: "Làm việc với những người khác để hướng tới một mục tiêu chung" },
      { key: "C", text: "Làm việc chăm chỉ hơn các học sinh khác trong lớp" },
      { key: "D", text: "Trở thành học sinh nhanh nhất trong lớp" }
    ],
    correctKeys: ["B"]
  }
];

export const SPARK_LEVEL2_QUESTIONS: IC3Question[] = [
  // ===================== OT1: LEVEL 2 (CÁC ỨNG DỤNG CỐT LÕI) =====================
  {
    id: "spark-l2-ot1-q1",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 1,
    type: "multiple_choice",
    text: "Em hãy cho biết, tùy chọn nào sau đây là thành phần quan trọng nhất được sử dụng để chạy các ứng dụng?",
    options: [
      { key: "A", text: "Thẻ SIM" },
      { key: "B", text: "Bộ nhớ" },
      { key: "C", text: "Bộ lưu trữ" },
      { key: "D", text: "Card màn hình" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l2-ot1-q2",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 2,
    type: "multiple_choice",
    text: "Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là phương pháp cho phép truy cập và cập nhật các tập tin trực tuyến?",
    options: [
      { key: "A", text: "Lưu trữ đám mây" },
      { key: "B", text: "Ổ cứng ngoài" },
      { key: "C", text: "Email" },
      { key: "D", text: "Bộ lưu trữ USB" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l2-ot1-q3",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 3,
    type: "multiple_choice",
    text: "Em hãy cho biết, thiết bị chuột trên máy tính bảng đã được thay thế bằng những tùy chọn nào đây? (Chọn 2)",
    options: [
      { key: "A", text: "Bút cảm ứng (Stylus)" },
      { key: "B", text: "Bút chì (Pencil)" },
      { key: "C", text: "Màn hình cảm ứng (Touch screen)" },
      { key: "D", text: "Chuột kỹ thuật số (Digital mouse)" }
    ],
    correctKeys: ["A", "C"]
  },
  {
    id: "spark-l2-ot1-q4",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 4,
    type: "multiple_choice",
    text: "Em hãy cho biết, loại kết nối không dây nào sau đây sẽ cho phép em tải hình ảnh từ máy ảnh vào máy tính?",
    options: [
      { key: "A", text: "RCA" },
      { key: "B", text: "VGA" },
      { key: "C", text: "Bluetooth" },
      { key: "D", text: "HDMI" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l2-ot1-q5",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 5,
    type: "multiple_choice",
    text: "Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là loại lưu trữ dữ liệu được truy cập từ xa thông qua kết nối internet?",
    options: [
      { key: "A", text: "Ổ cứng ngoài" },
      { key: "B", text: "Bộ lưu trữ USB" },
      { key: "C", text: "Đĩa CD" },
      { key: "D", text: "Lưu trữ đám mây" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l2-ot1-q6",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 6,
    type: "multiple_choice",
    text: "Hầu hết các điện thoại thông minh đều có tùy chọn gói dữ liệu di động. Em hãy cho biết, tùy chọn nào sau đây mô tả chính xác dữ liệu di động là gì?",
    options: [
      { key: "A", text: "Em được phân bổ bao nhiêu thời gian để gọi điện thoại" },
      { key: "B", text: "Điện thoại của em có bao nhiêu bộ nhớ" },
      { key: "C", text: "Em được phép gửi bao nhiêu tin nhắn văn bản" },
      { key: "D", text: "Truy cập internet không dây có tính phí, được đo bằng mức tiêu thụ dữ liệu" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l2-ot1-q7",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 7,
    type: "multiple_choice",
    text: "Em hãy cho biết, hai lợi ích của việc tải xuống (Download) tập tin thay vì phát trực tuyến (Stream) tập tin đó là gì? (Chọn 2)",
    options: [
      { key: "A", text: "Không yêu cầu dung lượng lưu trữ" },
      { key: "B", text: "Phát trực tuyến có khả năng phát lại mượt mà hơn" },
      { key: "C", text: "Không cần phải đợi trước khi chạy tập tin" },
      { key: "D", text: "Sau khi tải xuống hoàn tất, quá trình phát lại đáng tin cậy hơn" },
      { key: "E", text: "Tập tin đã được tải xuống không yêu cầu kết nối internet để phát lại" }
    ],
    correctKeys: ["D", "E"]
  },
  {
    id: "spark-l2-ot1-q8",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 8,
    type: "multiple_choice",
    text: "Em hãy cho biết, tùy chọn nào sau đây là cách để tăng không gian lưu trữ cho điện thoại thông minh? (Chọn 2)",
    options: [
      { key: "A", text: "Xóa ảnh cũ mà em không cần" },
      { key: "B", text: "Đóng tất cả các chương trình nền đang chạy" },
      { key: "C", text: "Gỡ cài đặt bất kỳ trò chơi nào mà em không chơi nữa" },
      { key: "D", text: "Truyền phát Video ở định dạng SD" }
    ],
    correctKeys: ["A", "C"]
  },
  {
    id: "spark-l2-ot1-q9",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 9,
    type: "multiple_choice",
    text: "Em hãy cho biết, phần mềm virus ảnh hưởng đến hệ thống máy tính như thế nào? (Chọn 2)",
    options: [
      { key: "A", text: "Phá hủy bo mạch chủ" },
      { key: "B", text: "Xóa hoặc làm hỏng dữ liệu" },
      { key: "C", text: "Liên quan đến một cuộc tấn công DoS" },
      { key: "D", text: "Thu thập và chuyển thông tin cá nhân" }
    ],
    correctKeys: ["B", "D"]
  },
  {
    id: "spark-l2-ot1-q10",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 10,
    type: "multiple_choice",
    text: "Em hãy cho biết, thiết bị lưu trữ được đo lường bằng đơn vị nào sau đây? (Chọn 2)",
    options: [
      { key: "A", text: "Gigabytes" },
      { key: "B", text: "Feet" },
      { key: "C", text: "Centimeters" },
      { key: "D", text: "Terabytes" },
      { key: "E", text: "Inches" }
    ],
    correctKeys: ["A", "D"]
  },
  {
    id: "spark-l2-ot1-q11",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 11,
    type: "multiple_choice",
    text: "Các thiết bị di động có dung lượng bộ nhớ hạn chế so với máy tính để bàn. Em hãy cho biết, tùy chọn nào sau đây có khả năng làm cho thiết bị di động của em hết dung lượng bộ nhớ?",
    options: [
      { key: "A", text: "Thường xuyên quên xóa bộ nhớ đệm" },
      { key: "B", text: "Sạc thiết bị di động trước khi hết pin" },
      { key: "C", text: "Cài quá nhiều game" },
      { key: "D", text: "Truyền phát các video HD" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l2-ot1-q12",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 12,
    type: "multiple_choice",
    text: "Những thông tin nào là một phần của dấu chân kỹ thuật số?",
    options: [
      { key: "A", text: "Điểm số của bạn ở trường" },
      { key: "B", text: "Những lượt/nội dung tìm kiếm mà bạn thực hiện trên internet" },
      { key: "C", text: "Những điều bạn nói trong tin nhắn dạng chữ với bạn bè" },
      { key: "D", text: "Số đôi giày mà bạn sở hữu" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l2-ot1-q13",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 13,
    type: "multiple_choice",
    text: "Chọn ra hai câu trả lời thể hiện những thông tin thuộc dấu chân kỹ thuật số. (Chọn 2)",
    options: [
      { key: "A", text: "Cuộc gọi điện thoại mà bạn nhận được" },
      { key: "B", text: "Trang web mà bạn truy cập" },
      { key: "C", text: "Bài tập ở trường mà bạn nộp" },
      { key: "D", text: "Email mà bạn gửi đi" }
    ],
    correctKeys: ["B", "D"]
  },
  {
    id: "spark-l2-ot1-q14",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 14,
    type: "multiple_choice",
    text: "Bạn đặt mua một game mới, nhưng khi nhận được thì phát hiện rằng đó là một bản sao chép trái phép, không phải game chính hãng. Là một công dân tốt trên môi trường số, đâu là cách phản ứng thích hợp?",
    options: [
      { key: "A", text: "Chạy phần mềm chống virus cho đĩa game rồi mới cài đặt, vì có thể có virus trong game" },
      { key: "B", text: "Trước khi cài đặt, thiết lập tường lửa cho máy tính để chặn kết nối đến internet" },
      { key: "C", text: "Loan trên mạng xã hội để mọi người biết nơi mua được bản sao giá rẻ của trò chơi đó" },
      { key: "D", text: "Yêu cầu hoàn tiền và thông báo cho cửa hàng rằng game bạn nhận được không phải loại chính hãng" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l2-ot1-q15",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 15,
    type: "multiple_choice",
    text: "Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là những ưu điểm của điện toán đám mây? (Chọn 4)",
    options: [
      { key: "A", text: "Cần có kết nối internet để hoạt động" },
      { key: "B", text: "Khả năng chia sẻ mọi thứ với nhiều người" },
      { key: "C", text: "Tự động sao lưu dự phòng" },
      { key: "D", text: "Nhóm quyền truy cập vào cùng một tài liệu" },
      { key: "E", text: "Truy cập bất cứ nơi nào có kết nối internet" },
      { key: "F", text: "Dung lượng lưu trữ có trả phí" }
    ],
    correctKeys: ["B", "C", "D", "E"]
  },
  {
    id: "spark-l2-ot1-q16",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 16,
    type: "yes_no",
    text: "Với mỗi câu phát biểu, hãy chọn Đúng hoặc Sai.",
    statements: [
      { text: "Bình luận, hình ảnh và các thông tin khác mà bạn đăng trên mạng được gọi là dấu chân kỹ thuật số của bạn", correct: "True" },
      { text: "Bạn có thể xóa vĩnh viễn những bình luận tiêu cực khỏi internet bất cứ khi nào bạn muốn", correct: "False" },
      { text: "Mỗi bài tập ở trường mà bạn hoàn thành đều là một phần của dấu chân kỹ thuật số", correct: "False" }
    ]
  },
  {
    id: "spark-l2-ot1-q17",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 17,
    type: "multiple_choice",
    text: "Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là đúng khi nói đến duyệt web trực tuyến an toàn? (Chọn 2)",
    options: [
      { key: "A", text: "Em phải xóa các tập tin internet tạm thời" },
      { key: "B", text: "Các trình duyệt có tính năng bảo mật có thể an toàn hơn các trình duyệt khác" },
      { key: "C", text: "Em hoàn toàn an toàn miễn là em không tải xuống bất cứ thứ gì" },
      { key: "D", text: "Chỉ cung cấp thông tin cá nhân cho các trang web an toàn" }
    ],
    correctKeys: ["B", "D"]
  },
  {
    id: "spark-l2-ot1-q18",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 18,
    type: "multiple_choice",
    text: "Em hãy cho biết, tùy chọn nào sau đây là dịch vụ dựa trên internet?",
    options: [
      { key: "A", text: "Microsoft" },
      { key: "B", text: "Thư điện tử (Email)" },
      { key: "C", text: "Bách khoa toàn thư (Encyclopedia)" },
      { key: "D", text: "Chia đôi màn hình chơi game (Split-screen gaming)" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l2-ot1-q19",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 19,
    type: "multiple_choice",
    text: "Em hãy cho biết, vì sao người dùng nên bảo vệ danh tính trực tuyến của họ? (Chọn 2)",
    options: [
      { key: "A", text: "Người dùng không cần bảo vệ danh tính trực tuyến" },
      { key: "B", text: "Người dùng thường không sử dụng hình ảnh thật của họ" },
      { key: "C", text: "Người dùng luôn nói thật khi trực tuyến" },
      { key: "D", text: "Internet có bộ nhớ lâu dài" }
    ],
    correctKeys: ["B", "D"]
  },
  {
    id: "spark-l2-ot1-q20",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 20,
    type: "multiple_choice",
    text: "Trong việc sử dụng công nghệ kỹ thuật số ở trường, chọn hai đáp án chỉ những hành vi đúng đắn mà mọi người nên làm? (Chọn 2)",
    options: [
      { key: "A", text: "Học sinh và giáo viên không nên dùng mạng xã hội trong lớp học" },
      { key: "B", text: "Học sinh không nên đánh cắp hoặc làm hư hại tài sản của người khác" },
      { key: "C", text: "Học sinh nên mở loa ngoài khi xem Video, thay vì đeo tai nghe" },
      { key: "D", text: "Học sinh nên chia sẻ mật khẩu cho nhau biết" }
    ],
    correctKeys: ["A", "B"]
  },
  {
    id: "spark-l2-ot1-q21",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 21,
    type: "matching",
    text: "Ghép nối các tình huống với hướng dẫn thực hành phép xã giao trực tuyến tương ứng.",
    pairs: [
      { left: "Hai người bạn trò chuyện về một bạn cùng lớp trong phần nhắn tin trực tiếp", right: "Không trao đổi thông tin về người khác mà chưa hỏi ý kiến của họ" },
      { left: "Gửi tin nhắn trực tiếp cho giáo viên vào nửa đêm ngày cuối tuần", right: "Gửi tin nhắn vào thời gian thích hợp" },
      { left: "Một bạn cùng lớp đăng ảnh về bạn mà chưa hỏi ý kiến", right: "Tôn trọng quyền riêng tư của người khác" },
      { left: "KÍNH GỬI THẦY/CÔ", right: "Tránh ghi toàn chữ IN HOA" }
    ]
  },
  {
    id: "spark-l2-ot1-q22",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 22,
    type: "multiple_choice",
    text: "Đâu là một dạng phép xã giao trên môi trường kỹ thuật số?",
    options: [
      { key: "A", text: "Duy trì tính tích cực trong tin nhắn và bài đăng của bạn" },
      { key: "B", text: "Đưa sự hài hước và châm biếm vào tin nhắn" },
      { key: "C", text: "Đăng các thông điệp có tính phỉ báng trên mạng" },
      { key: "D", text: "Dùng các nguồn giả trên mạng" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l2-ot1-q23",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 23,
    type: "multiple_choice",
    text: "Thông tin nào là một phần của dấu chân kỹ thuật số (Digital footprint) của bạn?",
    options: [
      { key: "A", text: "Biên lai mua hàng tại một cửa hàng địa phương" },
      { key: "B", text: "Nhạc được lưu trên ổ cứng máy tính" },
      { key: "C", text: "Bưu thiếp và thư bạn gửi cho một người bạn qua thư" },
      { key: "D", text: "Bài đăng trên mạng xã hội" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l2-ot1-q24",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 24,
    type: "multiple_choice",
    text: "Khi bắt đầu làm dự án nghiên cứu, giáo viên đưa cho bạn http://orchestramusic.org để sử dụng. Thứ mà giáo viên đưa cho bạn là gì?",
    options: [
      { key: "A", text: "Mã nguồn" },
      { key: "B", text: "Tiêu đề một trang" },
      { key: "C", text: "Một tác giả" },
      { key: "D", text: "Một URL" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l2-ot1-q25",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 25,
    type: "multiple_choice",
    text: "Khi nghiên cứu để làm bài tập, bạn tìm thấy một trang web có thông tin liên quan mà bạn muốn dùng. Giáo viên yêu cầu bạn đính kèm URL đó vào bài nộp. Câu nào bên dưới là ví dụ về một URL?",
    options: [
      { key: "A", text: "CoolPlaces.com" },
      { key: "B", text: "com.CoolPlaces.www" },
      { key: "C", text: "http://www.coolplaces.com/visit-the-pyramids" },
      { key: "D", text: "www.coolplaces" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l2-ot1-q26",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 26,
    type: "multiple_choice",
    text: "Bạn được bạn của mình giới thiệu một trang web mới cho phép chơi game trực tuyến miễn phí. Đó là loại trang web gì?",
    options: [
      { key: "A", text: "Mạng xã hội" },
      { key: "B", text: "Giao tiếp" },
      { key: "C", text: "Thông tin" },
      { key: "D", text: "Giải trí" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l2-ot1-q27",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 27,
    type: "matching",
    text: "Hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang định nghĩa tương ứng ở bên trái.",
    pairs: [
      { left: "Lưu địa chỉ một trang web (danh sách yêu thích)", right: "Dấu trang (Bookmark)" },
      { left: "Cung cấp bản mới nhất của trang web", right: "Tải lại (Reload)" },
      { left: "Một cửa sổ chứa nhiều trường hoặc ô trống để nhập dữ liệu", right: "Biểu mẫu (Form)" },
      { left: "Khám phá để nắm rõ một ứng dụng hoặc trang web", right: "Điều hướng (Navigate)" }
    ]
  },
  {
    id: "spark-l2-ot1-q28",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 28,
    type: "yes_no",
    text: "Với mỗi câu phát biểu về trình duyệt web, hãy chọn Đúng hoặc Sai.",
    statements: [
      { text: "Dấu trang (Bookmark) cho phép người dùng điều hướng lại các trang web yêu thích của họ", correct: "True" },
      { text: "Chức năng tải lại cho phép người dùng truy cập một trang web mà họ thường xem", correct: "False" },
      { text: "Tự động điền (Autofill) cho phép trình duyệt tự điền thông tin mà không phải gõ lại", correct: "True" }
    ]
  },
  {
    id: "spark-l2-ot1-q29",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 29,
    type: "multiple_choice",
    text: "Bạn cần hoàn thành một dự án nghiên cứu, vì vậy bạn mở trình duyệt web trên máy tính để bắt đầu làm. Để bắt đầu tìm kiếm, bạn phải điều hướng đến một trang trên internet. Bạn đang đọc tài liệu nghiên cứu thì trang bị đứng hoàn toàn, nên bạn phải tải lại trang đó. Bạn muốn sau này có thể truy cập lại vào trang web, nên bạn đánh dấu trang web. Hành động lưu trang web đó được gọi là gì?",
    options: [
      { key: "A", text: "Đánh dấu trang (Bookmark)" },
      { key: "B", text: "In trang (Print)" },
      { key: "C", text: "Chia sẻ trang (Share)" },
      { key: "D", text: "Đóng trang (Close)" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l2-ot1-q30",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 30,
    type: "multiple_choice",
    text: "Bạn chạy xong một lượt tìm kiếm trên web, nhưng không tìm được kết quả mình cần. Bạn nên thực hiện 2 bước nào để giúp tinh chỉnh phạm vi tìm kiếm? (Chọn 2)",
    options: [
      { key: "A", text: "Dùng các bộ lọc" },
      { key: "B", text: "Thử lại mà không thay đổi gì cả" },
      { key: "C", text: "Nhấp vào một quảng cáo" },
      { key: "D", text: "Dùng từ đồng nghĩa hoặc các từ thay thế khác" }
    ],
    correctKeys: ["A", "D"]
  },
  {
    id: "spark-l2-ot1-q31",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 31,
    type: "multiple_choice",
    text: "Bạn muốn mua một vật phẩm mới cho trò chơi trực tuyến yêu thích của mình và vật phẩm đó sẽ được khuyến mãi trong 5 phút nữa. Bạn đã mở sẵn trang đó ra chờ. Khi hết 5 phút đó, bạn nên làm gì để nhanh chóng hiển thị mức giá mới?",
    options: [
      { key: "A", text: "Đánh dấu trang đó" },
      { key: "B", text: "Gửi email cho công ty bán hàng" },
      { key: "C", text: "Tải lại trang" },
      { key: "D", text: "In trang đó ra" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "spark-l2-ot1-q32",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 32,
    type: "multiple_choice",
    text: "Nếu muốn lưu trang web để quay lại sau thì bạn có thể làm gì?",
    options: [
      { key: "A", text: "Nói cho một người bạn biết" },
      { key: "B", text: "Cố nhớ vào lần đăng nhập tới" },
      { key: "C", text: "Nhờ ai đó gợi nhắc cho bạn" },
      { key: "D", text: "Đánh dấu trang (Bookmark) cho URL đó" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "spark-l2-ot1-q33",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 33,
    type: "multiple_choice",
    text: "Bạn đang tìm một số thông tin trên mạng, nhưng kết quả trả về không cung cấp thông tin mà bạn cần. Bạn nên làm gì?",
    options: [
      { key: "A", text: "Đóng trình duyệt của bạn" },
      { key: "B", text: "Dùng từ đồng nghĩa để thay đổi thuật ngữ tìm" },
      { key: "C", text: "Bấm vào đường liên kết của những kết quả quảng cáo" },
      { key: "D", text: "Kiểm tra kết nối internet của bạn" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "spark-l2-ot1-q34",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 34,
    type: "multiple_choice",
    text: "Bạn đang đọc một bài viết trên trang web. Bên dưới bài viết đó có nhiều đường liên kết cung cấp thêm thông tin ngoài. Bạn nên bấm vào liên kết nào để tìm hiểu về người viết bài báo?",
    options: [
      { key: "A", text: "Tác giả (Author)" },
      { key: "B", text: "Phiên bản di động (Mobile version)" },
      { key: "C", text: "Chính sách quyền riêng tư (Privacy policy)" },
      { key: "D", text: "Điều khoản sử dụng (Terms of use)" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "spark-l2-ot1-q35",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 35,
    type: "matching",
    text: "Hãy di chuyển từng hoạt động trực tuyến từ danh sách ở bên phải sang mục đích tương ứng ở bên trái.",
    pairs: [
      { left: "Dùng Google Scholar để tìm kiếm một chủ đề cho bài tập", right: "Thông tin" },
      { left: "Gửi email cho giáo viên của bạn về bài tập bị thiếu", right: "Giao tiếp" },
      { left: "Xem đoạn video hài hước về một chú chó đi xe máy", right: "Giải trí" }
    ]
  },
  {
    id: "spark-l2-ot1-q36",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 36,
    type: "multiple_choice",
    text: "Em hãy cho biết, tùy chọn nào sau đây là ví dụ về công cụ tìm kiếm? (Chọn 2)",
    options: [
      { key: "A", text: "Bing" },
      { key: "B", text: "Safari" },
      { key: "C", text: "Firefox" },
      { key: "D", text: "Google" }
    ],
    correctKeys: ["A", "D"]
  },

  // ===================== OT2 / OT3: LEVEL 2 =====================
  {
    id: "spark-l2-ot2-01",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 1,
    order: 7,
    type: "multiple_choice",
    text: "Phần mềm bảng tính Microsoft Excel thường được dùng tốt nhất cho công việc nào sau đây?",
    options: [
      { key: "A", text: "Lập danh sách, tính toán điểm số và vẽ biểu đồ" },
      { key: "B", text: "Xem phim hoạt hình" },
      { key: "C", text: "Nghe đài phát thanh" },
      { key: "D", text: "Cắt tỉa ảnh chân dung chuyên nghiệp" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Lập danh sách, tính toán điểm số và vẽ biểu đồ",
    explanation: "Microsoft Excel là phần mềm bảng tính gồm các hàng và cột, chuyên dùng để tính toán và quản lý dữ liệu số liệu."
  },
  {
    id: "spark-l2-ot2-02",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 2,
    order: 8,
    type: "multiple_choice",
    text: "Trong Microsoft Word, tổ hợp phím tắt Ctrl + Z có tác dụng gì?",
    options: [
      { key: "A", text: "Hoàn tác (Undo) lại thao tác vừa làm sai" },
      { key: "B", text: "Xóa toàn bộ văn bản" },
      { key: "C", text: "In bài ra giấy" },
      { key: "D", text: "Tắt máy tính" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Hoàn tác (Undo) lại thao tác vừa làm sai",
    explanation: "Ctrl + Z (Undo) giúp quay lại bước trước đó nếu em lỡ tay xóa nhầm hoặc thao tác sai."
  },
  {
    id: "spark-l2-ot3-01",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 1,
    order: 9,
    type: "multiple_choice",
    text: "Khi chèn tranh ảnh vào văn bản Word, em vào thẻ (Tab) nào trên thanh ruy-băng (Ribbon)?",
    options: [
      { key: "A", text: "Insert" },
      { key: "B", text: "Home" },
      { key: "C", text: "View" },
      { key: "D", text: "File" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Insert",
    explanation: "Thẻ Insert (Chèn) chứa các nút lệnh để chèn hình ảnh (Pictures), hình khối (Shapes), bảng biểu (Table) và chữ nghệ thuật."
  },
  {
    id: "spark-l2-gm1-01",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "GM1",
    questionNumber: 1,
    order: 10,
    type: "multiple_choice",
    text: "Để gõ được tiếng Việt có dấu theo kiểu TELEX trên máy tính, để gõ chữ 'Â' em bấm:",
    options: [
      { key: "A", text: "Gõ hai chữ 'a' liên tiếp (aa)" },
      { key: "B", text: "Gõ chữ 'a' và số '8'" },
      { key: "C", text: "Gõ chữ 'a' và phím 'w'" },
      { key: "D", text: "Gõ chữ 'a' và phím 's'" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Gõ hai chữ 'a' liên tiếp (aa)",
    explanation: "Trong bảng mã gõ Telex: aa = â, aw = ă, ee = ê, oo = ô, ow = ơ, uw = ư, dd = đ."
  }
];

export const SPARK_LEVEL3_QUESTIONS: IC3Question[] = [
  // ===================== OT1: LEVEL 3 (CUỘC SỐNG TRỰC TUYẾN & AN TOÀN SỐ) =====================
  {
    id: "spark-l3-ot1-01",
    levelId: "spark-level-3",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 1,
    order: 1,
    type: "multiple_choice",
    text: "Ứng dụng nào sau đây được gọi là trình duyệt web (Web Browser) dùng để mở và xem các trang web trên mạng?",
    options: [
      { key: "A", text: "Google Chrome" },
      { key: "B", text: "Microsoft Word" },
      { key: "C", text: "Paint" },
      { key: "D", text: "Windows Media Player" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Google Chrome",
    explanation: "Google Chrome, Microsoft Edge, Mozilla Firefox là các trình duyệt web cho phép truy cập Internet."
  },
  {
    id: "spark-l3-ot1-02",
    levelId: "spark-level-3",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 2,
    order: 2,
    type: "multiple_choice",
    text: "Khi một người lạ trên mạng nhắn tin hỏi tên thật, địa chỉ nhà hoặc số điện thoại của em, em nên làm gì?",
    options: [
      { key: "A", text: "Cung cấp ngay đầy đủ thông tin" },
      { key: "B", text: "Không chia sẻ và báo ngay cho cha mẹ hoặc thầy cô giáo biết" },
      { key: "C", text: "Gửi thêm ảnh chụp nhà và trường học" },
      { key: "D", text: "Hẹn gặp người lạ ở công viên" }
    ],
    correctKeys: ["B"],
    correctAnswerText: "B. Không chia sẻ và báo ngay cho cha mẹ hoặc thầy cô giáo biết",
    explanation: "Bảo vệ thông tin cá nhân là nguyên tắc quan trọng nhất đối với học sinh khi tham gia môi trường mạng Internet."
  },
  {
    id: "spark-l3-ot1-03",
    levelId: "spark-level-3",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 3,
    order: 3,
    type: "multiple_choice",
    text: "Mật khẩu (Password) như thế nào được coi là mật khẩu mạnh và an toàn?",
    options: [
      { key: "A", text: "123456" },
      { key: "B", text: "Ngày sinh nhật của em" },
      { key: "C", text: "Kết hợp chữ hoa, chữ thường, chữ số và ký tự đặc biệt, không dễ đoán" },
      { key: "D", text: "Tên của chú thú cưng" }
    ],
    correctKeys: ["C"],
    correctAnswerText: "C. Kết hợp chữ hoa, chữ thường, chữ số và ký tự đặc biệt, không dễ đoán",
    explanation: "Mật khẩu an toàn cần đủ dài và kết hợp chữ hoa, chữ thường, số cùng ký tự đặc biệt (ví dụ: Sao@Vang2025)."
  },
  {
    id: "spark-l3-ot1-04",
    levelId: "spark-level-3",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 4,
    order: 4,
    type: "matching",
    text: "Hãy ghép các nút điều hướng trên trình duyệt web với chức năng của chúng:",
    pairs: [
      { left: "Nút mũi tên quay lại (Back)", right: "Quay trở về trang web vừa xem trước đó" },
      { left: "Nút mũi tên tròn (Reload/Refresh)", right: "Tải lại trang web để cập nhật nội dung mới" },
      { left: "Nút hình ngôi nhà (Home)", right: "Đưa người dùng quay về trang chủ mặc định" },
      { left: "Nút dấu sao (Bookmark / Yêu thích)", right: "Lưu địa chỉ trang web vào danh sách yêu thích để mở lại nhanh" }
    ],
    explanation: "Các nút điều hướng của trình duyệt web giúp người dùng di chuyển thuận tiện giữa các trang tin."
  },
  {
    id: "spark-l3-ot1-05",
    levelId: "spark-level-3",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 5,
    order: 5,
    type: "yes_no",
    text: "Xác định các hành động sau về văn hóa ứng xử trên mạng là NÊN LÀM hay KHÔNG NÊN LÀM:",
    trueColumnLabel: "NÊN LÀM",
    falseColumnLabel: "KHÔNG NÊN LÀM",
    statements: [
      { text: "Nói lời lịch sự, thân thiện và tôn trọng người khác khi bình luận trên mạng.", correct: "True" },
      { text: "Dùng từ ngữ thô tục hoặc chế giễu bạn bè trong các nhóm chat lớp.", correct: "False" },
      { text: "Hỏi ý kiến bạn bè trước khi đăng ảnh có mặt bạn lên mạng xã hội.", correct: "True" },
      { text: "Tải về và mở các tệp tin lạ đính kèm trong thư rác từ người không quen biết.", correct: "False" }
    ],
    explanation: "Hành vi văn minh trên mạng và cẩn trọng với tệp tin lạ giúp bảo vệ thiết bị và xây dựng môi trường mạng tích cực."
  },
  {
    id: "spark-l3-ot1-06",
    levelId: "spark-level-3",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 6,
    order: 6,
    type: "multiple_choice",
    text: "Dịch vụ thư điện tử (Email) dùng để làm gì?",
    options: [
      { key: "A", text: "Gửi và nhận thư từ, tài liệu học tập qua mạng Internet" },
      { key: "B", text: "Nấu ăn tự động" },
      { key: "C", text: "Đo nhiệt độ phòng học" },
      { key: "D", text: "Bơm mực cho máy in" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Gửi và nhận thư từ, tài liệu học tập qua mạng Internet",
    explanation: "Email (thư điện tử) cho phép gửi và nhận thư, hình ảnh, bài tập nhanh chóng qua mạng."
  },

  // ===================== OT2 / OT3 / GM1: LEVEL 3 =====================
  {
    id: "spark-l3-ot2-01",
    levelId: "spark-level-3",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 1,
    order: 7,
    type: "multiple_choice",
    text: "Công cụ tìm kiếm trực tuyến phổ biến nhất trên Internet hiện nay là gì?",
    options: [
      { key: "A", text: "Google Search" },
      { key: "B", text: "Đồng hồ báo thức" },
      { key: "C", text: "Trình soạn thảo văn bản Word" },
      { key: "D", text: "Bàn phím số" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Google Search",
    explanation: "Google Search là máy tìm kiếm lớn nhất, giúp tra cứu tài liệu học tập, tranh ảnh và kiến thức bổ ích."
  },
  {
    id: "spark-l3-ot2-02",
    levelId: "spark-level-3",
    program: "spark",
    subsetId: "OT2",
    questionNumber: 2,
    order: 8,
    type: "multiple_choice",
    text: "Để giữ gìn sức khỏe đôi mắt và thể lực khi dùng máy tính, sau mỗi 30 - 45 phút học tập, em nên:",
    options: [
      { key: "A", text: "Đứng dậy vận động nhẹ, nhìn ra xa vào cây xanh và chớp mắt thư giãn" },
      { key: "B", text: "Chơi tiếp trò chơi điện tử thêm 3 tiếng" },
      { key: "C", text: "Nhìn thật sát vào màn hình máy tính" },
      { key: "D", text: "Đọc truyện tranh trong phòng tối" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Đứng dậy vận động nhẹ, nhìn ra xa vào cây xanh và chớp mắt thư giãn",
    explanation: "Nghỉ ngơi và thư giãn mắt định kỳ giúp tránh mỏi mắt, cận thị và giữ gìn sức khỏe cột sống."
  },
  {
    id: "spark-l3-ot3-01",
    levelId: "spark-level-3",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 1,
    order: 9,
    type: "multiple_choice",
    text: "Biểu tượng ổ khóa màu xám hoặc xanh nằm ở bên cạnh địa chỉ trang web (https://) thể hiện điều gì?",
    options: [
      { key: "A", text: "Trang web được mã hóa bảo mật an toàn cho kết nối truyền tải dữ liệu" },
      { key: "B", text: "Trang web bị khóa không cho học sinh xem" },
      { key: "C", text: "Trang web đã bị virus tấn công" },
      { key: "D", text: "Máy tính sắp hết pin" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Trang web được mã hóa bảo mật an toàn cho kết nối truyền tải dữ liệu",
    explanation: "Giao thức HTTPS cùng biểu tượng ổ khóa chứng minh kết nối giữa máy tính và trang web được bảo mật mã hóa an toàn."
  },
  {
    id: "spark-l3-gm1-01",
    levelId: "spark-level-3",
    program: "spark",
    subsetId: "GM1",
    questionNumber: 1,
    order: 10,
    type: "multiple_choice",
    text: "Hiện tượng có người gửi tin nhắn đe dọa, chê bai xấu xí hoặc tẩy chay bạn bè trên không gian mạng được gọi là gì?",
    options: [
      { key: "A", text: "Bắt nạt qua mạng (Cyberbullying)" },
      { key: "B", text: "Học nhóm vui vẻ" },
      { key: "C", text: "Trò chơi trí tuệ" },
      { key: "D", text: "Kết nối cộng đồng văn minh" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Bắt nạt qua mạng (Cyberbullying)",
    explanation: "Bắt nạt qua mạng (Cyberbullying) là hành vi xấu cần được ngăn chặn. Em nên báo ngay cho người lớn khi thấy hiện tượng này."
  }
];

export const ALL_SPARK_QUESTIONS: IC3Question[] = [
  ...SPARK_LEVEL1_QUESTIONS,
  ...SPARK_LEVEL2_QUESTIONS,
  ...SPARK_LEVEL3_QUESTIONS
];
