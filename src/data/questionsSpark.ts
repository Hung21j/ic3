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
    id: "spark-l1-ot3-01",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 1,
    order: 36,
    type: "multiple_choice",
    text: "Ổ cứng (Hard Drive) và thẻ nhớ USB dùng để làm gì trong hệ thống máy tính?",
    options: [
      { key: "A", text: "Lưu trữ dữ liệu và chương trình lâu dài ngay cả khi tắt máy" },
      { key: "B", text: "Phát ra bài hát" },
      { key: "C", text: "Tự động lau sạch bụi bẩn màn hình" },
      { key: "D", text: "Thay thế nguồn điện gia đình" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Lưu trữ dữ liệu và chương trình lâu dài ngay cả khi tắt máy",
    explanation: "Ổ cứng và bộ nhớ ngoài (USB) là bộ nhớ lưu trữ thứ cấp, giữ lại dữ liệu an toàn kể cả khi ngắt điện."
  },
  {
    id: "spark-l1-ot3-02",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "OT3",
    questionNumber: 2,
    order: 37,
    type: "multiple_choice",
    text: "Thanh nằm ngang ở dưới cùng màn hình Desktop trong hệ điều hành Windows chứa nút Start và các biểu tượng ứng dụng gọi là gì?",
    options: [
      { key: "A", text: "Title Bar (Thanh tiêu đề)" },
      { key: "B", text: "Taskbar (Thanh tác vụ)" },
      { key: "C", text: "Menu Bar" },
      { key: "D", text: "Scroll Bar (Thanh cuộn)" }
    ],
    correctKeys: ["B"],
    correctAnswerText: "B. Taskbar (Thanh tác vụ)",
    explanation: "Thanh Taskbar nằm dọc đáy màn hình, chứa nút Start, các ứng dụng đang mở, đồng hồ hệ thống và thông báo."
  },
  {
    id: "spark-l1-gm1-01",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "GM1",
    questionNumber: 1,
    order: 38,
    type: "multiple_choice",
    text: "Hệ điều hành phổ biến được cài đặt trên hầu hết các máy tính học đường hiện nay là gì?",
    options: [
      { key: "A", text: "Microsoft Windows" },
      { key: "B", text: "Microsoft Word" },
      { key: "C", text: "Google Chrome" },
      { key: "D", text: "Scratch" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Microsoft Windows",
    explanation: "Microsoft Windows là hệ điều hành (Operating System) quản lý toàn bộ phần cứng và phần mềm của máy tính."
  },
  {
    id: "spark-l1-gm2-01",
    levelId: "spark-level-1",
    program: "spark",
    subsetId: "GM2",
    questionNumber: 1,
    order: 39,
    type: "multiple_choice",
    text: "Để điều chỉnh độ lớn âm thanh phát ra từ loa máy tính, em chọn biểu tượng nào trên góc phải thanh Taskbar?",
    options: [
      { key: "A", text: "Biểu tượng hình chiếc Loa (Volume)" },
      { key: "B", text: "Biểu tượng quả Pin" },
      { key: "C", text: "Biểu tượng chiếc Đồng hồ" },
      { key: "D", text: "Biểu tượng sóng Wi-Fi" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Biểu tượng hình chiếc Loa (Volume)",
    explanation: "Biểu tượng loa trên khay hệ thống giúp người dùng kéo thanh trượt để tăng hoặc giảm âm lượng."
  }
];

export const SPARK_LEVEL2_QUESTIONS: IC3Question[] = [
  // ===================== OT1: LEVEL 2 (CÁC ỨNG DỤNG CỐT LÕI) =====================
  {
    id: "spark-l2-ot1-01",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 1,
    order: 1,
    type: "multiple_choice",
    text: "Phần mềm nào sau đây là ứng dụng chuyên dùng để soạn thảo thư từ, đoạn văn bản và bài học?",
    options: [
      { key: "A", text: "Microsoft Word" },
      { key: "B", text: "Máy tính bỏ túi (Calculator)" },
      { key: "C", text: "Trình phát nhạc (Windows Media Player)" },
      { key: "D", text: "Phần mềm quét virus" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Microsoft Word",
    explanation: "Microsoft Word là phần mềm soạn thảo văn bản thông dụng nhất, cung cấp đầy đủ công cụ định dạng chữ và chèn hình ảnh."
  },
  {
    id: "spark-l2-ot1-02",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 2,
    order: 2,
    type: "multiple_choice",
    text: "Trong Microsoft Word, biểu tượng chữ B đậm (Bold) trên thanh công cụ dùng để làm gì cho đoạn chữ được chọn?",
    options: [
      { key: "A", text: "Gạch chân chữ" },
      { key: "B", text: "Làm cho chữ in đậm" },
      { key: "C", text: "Làm cho chữ in nghiêng" },
      { key: "D", text: "Xóa đoạn chữ đó đi" }
    ],
    correctKeys: ["B"],
    correctAnswerText: "B. Làm cho chữ in đậm",
    explanation: "Nút B (Bold - phím tắt Ctrl + B) dùng để định dạng chữ đậm để nhấn mạnh tiêu đề hoặc ý chính."
  },
  {
    id: "spark-l2-ot1-03",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 3,
    order: 3,
    type: "multiple_choice",
    text: "Tổ hợp phím tắt nào giúp em lưu nhanh bài làm (Save) vào máy tính để không bị mất dữ liệu?",
    options: [
      { key: "A", text: "Ctrl + S" },
      { key: "B", text: "Ctrl + P" },
      { key: "C", text: "Ctrl + C" },
      { key: "D", text: "Ctrl + Z" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Ctrl + S",
    explanation: "Ctrl + S (Save) là phím tắt quốc tế dùng để lưu lại tệp tin đang làm việc trên máy tính."
  },
  {
    id: "spark-l2-ot1-04",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 4,
    order: 4,
    type: "matching",
    text: "Ghép nối các công cụ trong phần mềm đồ họa Paint với chức năng đúng của chúng:",
    pairs: [
      { left: "Công cụ Bút chì (Pencil)", right: "Vẽ các đường nét mảnh tự do theo nét tay chuột" },
      { left: "Thùng sơn (Fill with color)", right: "Đổ màu nhanh vào một vùng hình khép kín" },
      { left: "Công cụ Tẩy (Eraser)", right: "Xóa đi những nét vẽ hoặc vùng màu vẽ sai" },
      { left: "Hộp hình khối (Shapes)", right: "Vẽ nhanh hình ngôi sao, hình tròn, hình vuông và tam giác" }
    ],
    explanation: "Phần mềm vẽ Paint trang bị các công cụ trực quan giúp học sinh thỏa sức sáng tạo và vẽ hình mỹ thuật."
  },
  {
    id: "spark-l2-ot1-05",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 5,
    order: 5,
    type: "yes_no",
    text: "Xác định các nhận định sau về các thao tác trong soạn thảo văn bản là ĐÚNG hay SAI:",
    trueColumnLabel: "ĐÚNG",
    falseColumnLabel: "SAI",
    statements: [
      { text: "Để căn chỉnh dòng chữ vào chính giữa trang giấy, em dùng lệnh Center (Căn giữa).", correct: "True" },
      { text: "Muốn sao chép một đoạn chữ, em dùng lệnh Copy rồi dùng lệnh Paste.", correct: "True" },
      { text: "Khi đóng tệp Word mà không nhấn Save, bài làm vẫn tự động in ra máy in.", correct: "False" },
      { text: "Phông chữ (Font) giúp em thay đổi kiểu dáng chữ đẹp mắt hơn.", correct: "True" }
    ],
    explanation: "Định dạng căn lề giữa, sao chép (Copy-Paste) và chọn phông chữ là những kỹ năng cốt lõi trong soạn thảo văn bản."
  },
  {
    id: "spark-l2-ot1-06",
    levelId: "spark-level-2",
    program: "spark",
    subsetId: "OT1",
    questionNumber: 6,
    order: 6,
    type: "multiple_choice",
    text: "Phần mềm nào sau đây giúp tạo các bài trình chiếu (Slide) có hình ảnh, chữ viết và hiệu ứng sinh động để thuyết trình trước lớp?",
    options: [
      { key: "A", text: "Microsoft PowerPoint" },
      { key: "B", text: "Notepad" },
      { key: "C", text: "Paint" },
      { key: "D", text: "Windows Calculator" }
    ],
    correctKeys: ["A"],
    correctAnswerText: "A. Microsoft PowerPoint",
    explanation: "Microsoft PowerPoint là ứng dụng tạo bài trình diễn trực quan gồm các trang chiếu sinh động."
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
