import { IC3Question } from "./ic3Questions";

/**
 * Danh sách 45 câu hỏi chuẩn đề thi IC3 Level 1 - OT1, OT1, OT1
 * Nguồn: EXAM_OT1_LV1_45 (chuyển đổi chuẩn hóa theo khung câu hỏi hệ thống)
 */
export const LEVEL1_OT_QUESTIONS: IC3Question[] = [
  {
    "id": "lv1-ot1-01",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 1,
    "order": 1,
    "type": "multiple_choice",
    "text": "Bạn cần lưu danh sách các trang web để có thể dễ dàng quay trở lại vào lần sau. Bạn nên sử dụng tính năng nào của trình duyệt web?",
    "options": [
      { "key": "A", "text": "Duyệt đa trang một lúc" },
      { "key": "B", "text": "Mục yêu thích hoặc dấu trang" },
      { "key": "C", "text": "Lịch sử hoặc dòng thời gian" },
      { "key": "D", "text": "Hộp địa chỉ" }
    ],
    "correctKeys": [
      "B"
    ],
    "correctAnswerText": "B. Mục yêu thích hoặc dấu trang"
  },
  {
    "id": "lv1-ot1-02",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 2,
    "order": 2,
    "type": "multiple_choice",
    "text": "Lịch sử duyệt web và các trang web được đánh dấu trang cung cấp cho hacker một bản đồ của tất cả các trang web mà người dùng truy cập. Cùng với các trang web thường xuyên truy cập, hacker có thể sử dụng gì để truy cập vào tài khoản nếu mật khẩu được lưu vào thiết bị bị tấn công?",
    "options": [
      { "key": "A", "text": "Settings" },
      { "key": "B", "text": "Cookies" },
      { "key": "C", "text": "History" },
      { "key": "D", "text": "Cutouts" }
    ],
    "correctKeys": [
      "B"
    ],
    "correctAnswerText": "B. Cookies"
  },
  {
    "id": "lv1-ot1-03",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 3,
    "order": 3,
    "type": "multiple_choice",
    "text": "Một trong những giáo viên của bạn nói rằng bạn nên thay đổi cài đặt trình duyệt của mình để duyệt web ở chế độ riêng tư. Vậy lợi ích của việc duyệt web ở chế độ riêng tư là gì?",
    "options": [
      { "key": "A", "text": "Không thể nhìn thấy các gói được gửi/nhận qua mạng trường học của bạn" },
      { "key": "B", "text": "Tên của bạn được giữ kín" },
      { "key": "C", "text": "Đăng nhập máy tính và mật khẩu của bạn bị vô hiệu hóa" },
      { "key": "D", "text": "Không có lịch sử nào được ghi lại trên máy tính" }
    ],
    "correctKeys": [
      "D"
    ],
    "correctAnswerText": "D. Không có lịch sử nào được ghi lại trên máy tính"
  },
  {
    "id": "lv1-ot1-04",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 4,
    "order": 4,
    "type": "multiple_choice",
    "text": "Bạn hãy cho biết, duyệt web riêng tư đảm bảo điều gì sau đây ?",
    "options": [
      { "key": "A", "text": "Lịch sử của người dùng không được lưu trữ" },
      { "key": "B", "text": "Có nhiều dung lượng lưu trữ hơn trên máy tính" },
      { "key": "C", "text": "Mật khẩu không cần thay đổi" },
      { "key": "D", "text": "Thông tin tài khoản được lưu trữ" }
    ],
    "correctKeys": [
      "A"
    ],
    "correctAnswerText": "A. Lịch sử của người dùng không được lưu trữ"
  },
  {
    "id": "lv1-ot1-05",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 5,
    "order": 5,
    "type": "yes_no",
    "text": "Xác định đúng chức năng của các thiết bị sau:",
    "correctAnswerText": "1. NHẬP\n2. NHẬP\n3. NHẬP\n4. NHẬP\n5. XUẤT",
    "statements": [
      {
        "text": "Keyboard",
        "correct": "True"
      },
      {
        "text": "Scanner",
        "correct": "True"
      },
      {
        "text": "Webcam",
        "correct": "True"
      },
      {
        "text": "Microphone",
        "correct": "True"
      },
      {
        "text": "Printer",
        "correct": "False"
      }
    ],
    "trueColumnLabel": "NHẬP",
    "falseColumnLabel": "XUẤT"
  },
  {
    "id": "lv1-ot1-06",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 6,
    "order": 6,
    "type": "multiple_choice",
    "text": "Người dùng có thể tắt tính năng lưu trữ mật khẩu trực tuyến ở đâu?",
    "options": [
      { "key": "A", "text": "Trong cài đặt trình duyệt của họ" },
      { "key": "B", "text": "Trong lịch sử của họ" },
      { "key": "C", "text": "Trong cài đặt máy tính của họ" },
      { "key": "D", "text": "Trong hộp thư đến" }
    ],
    "correctKeys": [
      "A"
    ],
    "correctAnswerText": "A. Trong cài đặt trình duyệt của họ"
  },
  {
    "id": "lv1-ot1-07",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 7,
    "order": 7,
    "type": "multiple_choice",
    "text": "Khi nào người dùng nên cân nhắc việc thay đổi mật khẩu của họ (Chọn 3)",
    "options": [
      { "key": "A", "text": "Họ đã được thông báo rằng có quyền truy cập trái phép vào tài khoản của họ" },
      { "key": "B", "text": "Họ đã cập nhật mật khẩu của họ gần đây" },
      { "key": "C", "text": "Họ đã không thay đổi mật khẩu của họ trong một thời gian dài" },
      { "key": "D", "text": "Khi họ muốn đóng tài khoản của mình" },
      { "key": "E", "text": "Phần mềm độc hại đang chạy trên máy tính của họ" }
    ],
    "correctKeys": [
      "A",
      "C",
      "E"
    ],
    "correctAnswerText": "A. Họ đã được thông báo rằng có quyền truy cập trái phép vào tài khoản của họ | C. Họ đã không thay đổi mật khẩu của họ trong một thời gian dài | E. Phần mềm độc hại đang chạy trên máy tính của họ"
  },
  {
    "id": "lv1-ot1-08",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 8,
    "order": 8,
    "type": "multiple_choice",
    "text": "Đâu là ba thiết bị NHẬP khi được kết nối với máy tính không có màn hình cảm ứng? (Chọn 3)",
    "image": "/images/lv1-ot1-08.png",
    "options": [
      { "key": "A", "text": "Bàn phím (Keyboard)" },
      { "key": "B", "text": "Chuột máy tính (Mouse)" },
      { "key": "C", "text": "Tai nghe có mic (headset)" },
      { "key": "D", "text": "Màn hình máy tính (Monitor)" },
      { "key": "E", "text": "Máy in văn phòng (Printer)" },
      { "key": "F", "text": "Thùng máy (CPU)" }
    ],
    "correctKeys": [
      "A",
      "B",
      "C"
    ],
    "correctAnswerText": "A. Bàn phím (Keyboard) | B. Chuột máy tính (Mouse) | C. Máy quét tài liệu (Scanner)"
  },
  {
    "id": "lv1-ot1-09",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 9,
    "order": 9,
    "type": "multiple_choice",
    "text": "Hành động bạn có thể thực hiện để giúp duy trì quyền riêng tư kỹ thuật số của bản thân? (Chọn 2)",
    "options": [
      { "key": "A", "text": "Chỉ sử dụng Email trường học của bạn để gửi thông tin cá nhân" },
      { "key": "B", "text": "Tắt GPS trên thiết bị của bạn khi không sử dụng thường xuyên" },
      { "key": "C", "text": "Định cấu hình cài đặt trình duyệt web của bạn để chặn Cookie" },
      { "key": "D", "text": "Lưu trữ tài liệu cá nhân của bạn trên vị trí lưu trữ đám mây" }
    ],
    "correctKeys": [
      "B",
      "C"
    ],
    "correctAnswerText": "B. Tắt GPS trên thiết bị của bạn khi không sử dụng thường xuyên | C. Định cấu hình cài đặt trình duyệt web của bạn để chặn Cookie"
  },
  {
    "id": "lv1-ot1-10",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 10,
    "order": 10,
    "type": "multiple_choice",
    "text": "Bạn cần đảm bảo an toàn cho mật khẩu của mình. Đâu là ba nguyên tắc bạn cần tuân thủ? (Chọn 3)",
    "options": [
      { "key": "A", "text": "Sử dụng mật khẩu dựa trên thông tin riêng tư cá nhân" },
      { "key": "B", "text": "Sử dụng mật khẩu khác nhau cho mỗi tài khoản" },
      { "key": "C", "text": "Sử dụng mật khẩu phức tạp và ghi vào một cuốn sổ mà bạn luôn mang theo bên mình" },
      { "key": "D", "text": "Sử dụng mật khẩu dài nhất hoặc cụm mật khẩu được hệ thống mật khẩu cho phép" },
      { "key": "E", "text": "Sử dụng các từ có thể tìm thấy trong từ điển của một ngôn ngữ khác với ngôn ngữ chính của bạn" },
      { "key": "F", "text": "Sử dụng xác thực đa yếu tố, nếu có" }
    ],
    "correctKeys": [
      "B",
      "D",
      "F"
    ],
    "correctAnswerText": "B. Sử dụng mật khẩu khác nhau cho mỗi tài khoản | D. Sử dụng mật khẩu dài nhất hoặc cụm mật khẩu được hệ thống mật khẩu cho phép | F. Sử dụng xác thực đa yếu tố, nếu có"
  },
  {
    "id": "lv1-ot1-11",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 11,
    "order": 11,
    "type": "multiple_choice",
    "text": "Lợi ích của việc duyệt Web ở 'chế độ riêng tư' 'hoặc ẩn danh'?",
    "options": [
      { "key": "A", "text": "Cookie sẽ không báo cáo thông tin về bạn cho bên thứ ba" },
      { "key": "B", "text": "Những người khác sẽ không biết được các hoạt động duyệt web của bạn dù sử dụng cùng một thiết bị" },
      { "key": "C", "text": "Trình duyệt web của bạn chặn quảng cáo" },
      { "key": "D", "text": "Không thể sử dụng vân tay kỹ thuật số để theo dõi các hoạt động trên trình duyệt của bạn" }
    ],
    "correctKeys": [
      "B"
    ],
    "correctAnswerText": "B. Những người khác sẽ không biết được các hoạt động duyệt web của bạn dù sử dụng cùng một thiết bị"
  },
  {
    "id": "lv1-ot1-12",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 12,
    "order": 12,
    "type": "matching",
    "text": "Ghép từng bộ phận phần cứng của máy tính với hình ảnh tương ứng:",
    "correctAnswerText": "Hình 1 ➔ Bộ xử lý trung tâm (CPU)\nHình 2 ➔ Ổ cứng thể rắn\nHình 3 ➔ Ổ đĩa cứng\nHình 4 ➔ Bo mạch chủ",
    "pairs": [
      {
        "left": "Hình 1",
        "leftImage": "/images/lv1-ot1-12-cpu.png",
        "right": "Bộ xử lý trung tâm (CPU)"
      },
      {
        "left": "Hình 2",
        "leftImage": "/images/lv1-ot1-12-ssd.png",
        "right": "Ổ cứng thể rắn"
      },
      {
        "left": "Hình 3",
        "leftImage": "/images/lv1-ot1-12-hdd.png",
        "right": "Ổ đĩa cứng"
      },
      {
        "left": "Hình 4",
        "leftImage": "/images/lv1-ot1-12-main.png",
        "right": "Bo mạch chủ"
      }
    ]
  },
  {
    "id": "lv1-ot1-13",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 13,
    "order": 13,
    "type": "yes_no",
    "text": "Xác định các tính năng tiêu chuẩn của thanh tác vụ trong Hệ điều hành Windows.",
    "correctAnswerText": "1. CÓ\n2. CÓ\n3. CÓ\n4. CÓ",
    "statements": [
      {
        "text": "Khởi động trình quản lý tác vụ",
        "correct": "True"
      },
      {
        "text": "Điều chỉnh âm lượng đầu ra âm thanh",
        "correct": "True"
      },
      {
        "text": "Hiển thị cài đặt kết nối mạng",
        "correct": "True"
      },
      {
        "text": "Thu nhỏ tất cả các chương trình đang mở để hiển thị",
        "correct": "True"
      }
    ],
    "trueColumnLabel": "CÓ",
    "falseColumnLabel": "KHÔNG"
  },
  {
    "id": "lv1-ot1-14",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 14,
    "order": 14,
    "type": "multiple_choice",
    "text": "Làm cách nào để người dùng có thể bảo vệ mật khẩu của mình một cách tốt nhất? (Chọn 3)",
    "options": [
      { "key": "A", "text": "Thay đổi mật khẩu thường xuyên" },
      { "key": "B", "text": "Tạo mật khẩu mới cho mọi tài khoản" },
      { "key": "C", "text": "Sử dụng cùng một mật khẩu cho tất cả các tài khoản" },
      { "key": "D", "text": "Giữ bí mật mật khẩu" },
      { "key": "E", "text": "Sử dụng số thứ tự trong mật khẩu" }
    ],
    "correctKeys": [
      "A",
      "B",
      "D"
    ],
    "correctAnswerText": "A. Thay đổi mật khẩu thường xuyên | B. Tạo mật khẩu mới cho mọi tài khoản | D. Giữ bí mật mật khẩu"
  },
  {
    "id": "lv1-ot1-15",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 15,
    "order": 15,
    "type": "matching",
    "text": "Ghép từng loại cáp với tên tương ứng:",
    "image": "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 760 210' width='760' height='210'><rect width='100%25' height='100%25' fill='%23f8fafc' rx='16'/><rect x='8' y='8' width='744' height='194' fill='white' stroke='%23e2e8f0' stroke-width='2' rx='12'/><text x='380' y='30' font-family='sans-serif' font-size='13' font-weight='bold' fill='%230f172a' text-anchor='middle'>CÁC LOẠI ĐẦU NỐI VÀ DÂY CÁP KẾT NỐI (HÌNH MINH HỌA)</text><g transform='translate(25, 45)'><rect width='160' height='140' rx='10' fill='%23f8fafc' stroke='%2364748b' stroke-width='2'/><rect x='15' y='10' width='130' height='24' rx='6' fill='%23475569'/><text x='80' y='26' font-family='sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'>HÌNH 1</text><rect x='60' y='45' width='40' height='45' rx='3' fill='%23e2e8f0' stroke='%23334155' stroke-width='1.5'/><line x1='65' y1='52' x2='95' y2='52' stroke='%23eab308' stroke-width='2'/><text x='80' y='125' font-family='sans-serif' font-size='11' font-weight='bold' fill='%23334155' text-anchor='middle'>Lightning (Apple)</text><text x='80' y='138' font-family='sans-serif' font-size='9' fill='%2364748b' text-anchor='middle'>8 chân tiếp điểm</text></g><g transform='translate(205, 45)'><rect width='160' height='140' rx='10' fill='%23eff6ff' stroke='%233b82f6' stroke-width='2'/><rect x='15' y='10' width='130' height='24' rx='6' fill='%232563eb'/><text x='80' y='26' font-family='sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'>HÌNH 2</text><rect x='50' y='50' width='60' height='30' rx='15' fill='%23bfdbfe' stroke='%231d4ed8' stroke-width='2'/><rect x='60' y='59' width='40' height='12' rx='6' fill='%231e40af'/><text x='80' y='125' font-family='sans-serif' font-size='11' font-weight='bold' fill='%231d4ed8' text-anchor='middle'>USB-C (Type-C)</text><text x='80' y='138' font-family='sans-serif' font-size='9' fill='%231e40af' text-anchor='middle'>Đầu cắm bầu dục 2 chiều</text></g><g transform='translate(385, 45)'><rect width='160' height='140' rx='10' fill='%23fefce8' stroke='%23eab308' stroke-width='2'/><rect x='15' y='10' width='130' height='24' rx='6' fill='%23ca8a04'/><text x='80' y='26' font-family='sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'>HÌNH 3</text><polygon points='55,50 105,50 95,80 65,80' fill='%23fef08a' stroke='%23854d0e' stroke-width='2'/><text x='80' y='125' font-family='sans-serif' font-size='11' font-weight='bold' fill='%23854d0e' text-anchor='middle'>Micro USB</text><text x='80' y='138' font-family='sans-serif' font-size='9' fill='%23854d0e' text-anchor='middle'>Đầu cắm hình thang dẹt</text></g><g transform='translate(565, 45)'><rect width='160' height='140' rx='10' fill='%23fdf2f8' stroke='%23db2777' stroke-width='2'/><rect x='15' y='10' width='130' height='24' rx='6' fill='%23be185d'/><text x='80' y='26' font-family='sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'>HÌNH 4</text><rect x='50' y='45' width='60' height='40' rx='3' fill='%23fbcfe8' stroke='%239d174d' stroke-width='2'/><rect x='60' y='55' width='40' height='15' fill='%23831843'/><text x='80' y='125' font-family='sans-serif' font-size='11' font-weight='bold' fill='%239d174d' text-anchor='middle'>USB (Type-A)</text><text x='80' y='138' font-family='sans-serif' font-size='9' fill='%239d174d' text-anchor='middle'>Đầu cắm chữ nhật phổ thông</text></g></svg>",
    "correctAnswerText": "Hình 1 ➔ Lightning\nHình 2 ➔ USB-C\nHình 3 ➔ Micro USB\nHình 4 ➔ USB",
    "pairs": [
      {
        "left": "Hình 1",
        "leftImage": "/images/lv1-ot1-15-light.png",
        "right": "Lightning"
      },
      {
        "left": "Hình 2",
        "leftImage": "/images/lv1-ot1-15-c.png",
        "right": "USB-C"
      },
      {
        "left": "Hình 3",
        "leftImage": "/images/lv1-ot1-15-micro.png",
        "right": "Micro USB"
      },
      {
        "left": "Hình 4",
        "leftImage": "/images/lv1-ot1-15-usb.png",
        "right": "USB"
      }
    ]
  },
  {
    "id": "lv1-ot1-16",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 16,
    "order": 16,
    "type": "multiple_choice",
    "text": "Bạn cần tạo một mật khẩu mạnh. Đâu là ba nguyên tắc bạn cần tuân thủ? (Chọn 3)",
    "options": [
      { "key": "A", "text": "Bao gồm chữ viết hoa và chữ viết thường" },
      { "key": "B", "text": "Bao gồm các số dễ nhớ như ngày sinh và số điện thoại" },
      { "key": "C", "text": "Bao gồm họ hoặc tên của bạn" },
      { "key": "D", "text": "Bao gồm thông tin cá nhân như tên người trong gia đình hoặc tên vật nuôi" },
      { "key": "E", "text": "Bao gồm các chữ cái, chữ số và ký hiệu" },
      { "key": "F", "text": "Sử dụng tám ký tự trở lên" }
    ],
    "correctKeys": [
      "A",
      "E",
      "F"
    ],
    "correctAnswerText": "A. Bao gồm chữ viết hoa và chữ viết thường | E. Bao gồm các chữ cái, chữ số và ký hiệu | F. Sử dụng tám ký tự trở lên"
  },
  {
    "id": "lv1-ot1-17",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 17,
    "order": 17,
    "type": "yes_no",
    "text": "Xác định các chức năng do Hệ điều hành của máy tính quản lý. Với mỗi tác vụ dưới đây:",
    "correctAnswerText": "1. SAI\n2. SAI\n3. ĐÚNG\n4. ĐÚNG",
    "statements": [
      {
        "text": "Chỉnh sửa tập tin văn bản",
        "correct": "False"
      },
      {
        "text": "Tìm kiếm trên Internet",
        "correct": "False"
      },
      {
        "text": "Cấp phát tài nguyên phần cứng",
        "correct": "True"
      },
      {
        "text": "Giao tiếp với các thiết bị ngoại vi",
        "correct": "True"
      }
    ],
    "trueColumnLabel": "ĐÚNG",
    "falseColumnLabel": "SAI"
  },
  {
    "id": "lv1-ot1-18",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 18,
    "order": 18,
    "type": "matching",
    "text": "Xác định mục đích của các công cụ trình duyệt Web phổ biến.",
    "correctAnswerText": "Hiển thị lại một trang web đã 'truy cập trước đó' ➔ Back button\nTải lại trang web hiện tại ➔ Refresh button\nLiệt kê các trang web bạn đã truy cập gần đây ➔ History\nHiển thị URL của trang web hiện tại ➔ Address box",
    "pairs": [
      {
        "left": "Hiển thị lại một trang web đã 'truy cập trước đó'",
        "right": "Back button"
      },
      {
        "left": "Tải lại trang web hiện tại",
        "right": "Refresh button"
      },
      {
        "left": "Liệt kê các trang web bạn đã truy cập gần đây",
        "right": "History"
      },
      {
        "left": "Hiển thị URL của trang web hiện tại",
        "right": "Address box"
      }
    ]
  },
  {
    "id": "lv1-ot1-19",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 19,
    "order": 19,
    "type": "matching",
    "text": "Quan sát hình ảnh sau để xác định các loại cổng kết nối. Ghép với tên loại cổng kết nối tương ứng:",
    "correctAnswerText": "Hình 1 ➔ Display Port\nHình 2 ➔ Ethernet Port\nHình 3 ➔ HDMI Port\nHình 4 ➔ Audio Port\nHình 5 ➔ USB Port",
    "pairs": [
      {
        "right": "Display Port",
        "left": "Hình 1",
        "leftImage": "/images/lv1-ot1-19-vga.png"
      },
      {
        "right": "Ethernet Port",
        "left": "Hình 2",
        "leftImage": "/images/lv1-ot1-19-eth.png"
      },
      {
        "right": "HDMI Port",
        "left": "Hình 3",
        "leftImage": "/images/lv1-ot1-19-hdmi.png"
      },
      {
        "right": "Audio Port",
        "left": "Hình 4",
        "leftImage": "/images/lv1-ot1-19-audio.png"
      },
      {
        "right": "USB Port",
        "left": "Hình 5",
        "leftImage": "/images/lv1-ot1-19-usb.png"
      }
    ]
  },
  {
    "id": "lv1-ot1-20",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 20,
    "order": 20,
    "type": "multiple_choice",
    "text": "Máy tính để bàn sử dụng phần cứng nào để lưu trữ dữ liệu lâu dài?",
    "options": [
      { "key": "A", "text": "Bộ xử lý trung tâm (CPU)" },
      { "key": "B", "text": "Ổ đĩa Flash USB" },
      { "key": "C", "text": "Bo mạch chủ" },
      { "key": "D", "text": "Ổ đĩa cứng" }
    ],
    "correctKeys": [
      "D"
    ],
    "correctAnswerText": "D. Ổ đĩa cứng"
  },
  {
    "id": "lv1-ot1-21",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 21,
    "order": 21,
    "type": "multiple_choice",
    "text": "Thiết bị phải có khả năng chạy bằng pin và phải được trang bị bàn phím vật lý tích hợp. Đâu là hai thiết bị đáp ứng được những yêu cầu trên? (Chọn 2)",
    "options": [
      { "key": "A", "text": "Máy tính xách tay chạy Windows" },
      { "key": "B", "text": "Máy tính để bàn Mac" },
      { "key": "C", "text": "Máy tính đa năng chạy Windows" },
      { "key": "D", "text": "Điện thoại thông minh chạy Android" },
      { "key": "E", "text": "Máy tính bảng chạy Android" },
      { "key": "F", "text": "Chromebook" }
    ],
    "correctKeys": [
      "A",
      "F"
    ],
    "correctAnswerText": "A. Máy tính xách tay chạy Windows | F. Chromebook"
  },
  {
    "id": "lv1-ot1-22",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 22,
    "order": 22,
    "type": "yes_no",
    "text": "Với mỗi hệ điều hành, bạn hãy chọn công ty phát triển tương ứng:",
    "columnLabels": ["Google", "Apple", "Microsoft"],
    "trueColumnLabel": "Google",
    "falseColumnLabel": "Apple",
    "correctAnswerText": "Android ➔ Google\nChrome OS ➔ Google\nWindows ➔ Microsoft\niOS ➔ Apple\nMacOS ➔ Apple",
    "statements": [
      {
        "text": "Android",
        "correct": "Google"
      },
      {
        "text": "Chrome OS",
        "correct": "Google"
      },
      {
        "text": "Windows",
        "correct": "Microsoft"
      },
      {
        "text": "iOS",
        "correct": "Apple"
      },
      {
        "text": "MacOS",
        "correct": "Apple"
      }
    ]
  },
  {
    "id": "lv1-ot1-23",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 23,
    "order": 23,
    "type": "multiple_choice",
    "text": "Điều nào đúng với Hệ điều hành Linux? (Chọn 3)",
    "options": [
      { "key": "A", "text": "Độc quyền" },
      { "key": "B", "text": "Không thể được sử dụng trên bất cứ thứ gì ngoại trừ các thiết bị di động" },
      { "key": "C", "text": "Có thể chạy trên mọi phần cứng" },
      { "key": "D", "text": "Người dùng có thể sửa đổi phần mềm thông qua mã nguồn của chương trình" },
      { "key": "E", "text": "Có tính bảo mật cao" }
    ],
    "correctKeys": [
      "C",
      "D",
      "E"
    ],
    "correctAnswerText": "C. Có thể chạy trên mọi phần cứng | D. Người dùng có thể sửa đổi phần mềm thông qua mã nguồn của chương trình | E. Có tính bảo mật cao"
  },
  {
    "id": "lv1-ot1-24",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 24,
    "order": 24,
    "type": "yes_no",
    "text": "Với mỗi loại phần mềm, hãy xác định xem đó là Phần mềm Hệ Thống hay Phần mềm Ứng Dụng.",
    "correctAnswerText": "1. PHẦN MỀM ỨNG DỤNG\n2. PHẦN MỀM ỨNG DỤNG\n3. PHẦN MỀM  HỆ THỐNG\n4. PHẦN MỀM  HỆ THỐNG",
    "statements": [
      {
        "text": "Trình duyệt Web",
        "correct": "True"
      },
      {
        "text": "Bộ phát đa phương tiện",
        "correct": "True"
      },
      {
        "text": "Trình điều khiển card đồ họa",
        "correct": "False"
      },
      {
        "text": "Trình quản lý phân vùng ổ đĩa",
        "correct": "False"
      }
    ],
    "trueColumnLabel": "PHẦN MỀM ỨNG DỤNG",
    "falseColumnLabel": "PHẦN MỀM  HỆ THỐNG"
  },
  {
    "id": "lv1-ot1-25",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 25,
    "order": 25,
    "type": "yes_no",
    "text": "Sự khác biệt giữa mạng có dây và không dây, hãy chọn Đúng hoặc Sai.",
    "correctAnswerText": "1. SAI\n2. SAI\n3. ĐÚNG",
    "statements": [
      {
        "text": "Kết nối Wi-Fi được mã hóa an toàn hơn so với kết nối Ethernet",
        "correct": "False"
      },
      {
        "text": "Kết nối Wi-Fi thường ít xảy ra độ trễ khi truyền dữ liệu hơn so với kết nối Ethernet",
        "correct": "False"
      },
      {
        "text": "Kết nối Ethernet thường cung cấp tốc độ kết nối mạng nhanh hơn kết nối Wi-Fi",
        "correct": "True"
      }
    ],
    "trueColumnLabel": "ĐÚNG",
    "falseColumnLabel": "SAI"
  },
  {
    "id": "lv1-ot1-26",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 26,
    "order": 26,
    "type": "multiple_choice",
    "text": "Thiết bị nào chuyển đổi dữ liệu từ kỹ thuật số (Digital) sang tương tự (Analog) và ngược lại để truyền tín hiệu qua mạng?",
    "options": [
      { "key": "A", "text": "Router" },
      { "key": "B", "text": "Ethernet Cable" },
      { "key": "C", "text": "Network Adapter" },
      { "key": "D", "text": "Modem" }
    ],
    "correctKeys": [
      "D"
    ],
    "correctAnswerText": "D. Modem"
  },
  {
    "id": "lv1-ot1-27",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 27,
    "order": 27,
    "type": "multiple_choice",
    "text": "Loại cáp nào có thể truyền dữ liệu lên đến 480 megabit/giây?",
    "options": [
      { "key": "A", "text": "USB" },
      { "key": "B", "text": "USB-C" },
      { "key": "C", "text": "Micro USB" },
      { "key": "D", "text": "Lightning connecter" }
    ],
    "correctKeys": [
      "D"
    ],
    "correctAnswerText": "D. Lightning connecter"
  },
  {
    "id": "lv1-ot1-28",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 28,
    "order": 28,
    "type": "yes_no",
    "text": "Với mỗi câu phát biểu về những lợi ích của cơ sở hạ tầng mạng chất lượng, hãy chọn Đúng hoặc Sai.",
    "correctAnswerText": "1. ĐÚNG\n2. SAI\n3. ĐÚNG",
    "statements": [
      {
        "text": "Đảm bảo rằng học sinh có thể kết nối thông suốt với mạng của nhà trường",
        "correct": "True"
      },
      {
        "text": "Cho phép học sinh kết nối với phòng máy tính của nhà trường từ mọi nơi",
        "correct": "False"
      },
      {
        "text": "Hỗ trợ mở rộng hệ thống mạng của nhà trường mà không cần thiết kế lại khi số lượng học sinh tăng lên",
        "correct": "True"
      }
    ],
    "trueColumnLabel": "ĐÚNG",
    "falseColumnLabel": "SAI"
  },
  {
    "id": "lv1-ot1-29",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 29,
    "order": 29,
    "type": "multiple_choice",
    "text": "Ba phát biểu nào dưới đây đúng với phần mềm nguồn mở? (Chọn 3)",
    "options": [
      { "key": "A", "text": "Nó an toàn hơn phần mềm độc quyền" },
      { "key": "B", "text": "Nó kém an toàn hơn phần mềm độc quyền" },
      { "key": "C", "text": "Giấy phép của nó là trung lập về công nghệ" },
      { "key": "D", "text": "Nó cho phép người dùng sửa đổi phần mềm để phù hợp với nhu cầu cụ thể của họ" },
      { "key": "E", "text": "Nó thân thiện với người dùng hơn phần mềm độc quyền" }
    ],
    "correctKeys": [
      "A",
      "C",
      "D"
    ],
    "correctAnswerText": "A. Nó an toàn hơn phần mềm độc quyền | C. Giấy phép của nó là trung lập về công nghệ | D. Nó cho phép người dùng sửa đổi phần mềm để phù hợp với nhu cầu cụ thể của họ"
  },
  {
    "id": "lv1-ot1-30",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 30,
    "order": 30,
    "type": "yes_no",
    "text": "Sự khác biệt giữa Internet và mạng nội bộ",
    "correctAnswerText": "1. SAI\n2. ĐÚNG\n3. SAI",
    "statements": [
      {
        "text": "Internet thuộc quyền sở hữu riêng của các tổ hợp công ty liên doanh",
        "correct": "False"
      },
      {
        "text": "Kết nối nội bộ an toàn hơn so với kết nối Internet",
        "correct": "True"
      },
      {
        "text": "Mạng nội bộ không giới hạn số lượng người dùng và bất kỳ ai cũng có thể truy cập được",
        "correct": "False"
      }
    ],
    "trueColumnLabel": "ĐÚNG",
    "falseColumnLabel": "SAI"
  },
  {
    "id": "lv1-ot1-31",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 31,
    "order": 31,
    "type": "multiple_choice",
    "text": "Ba phát biểu nào dưới đây đúng với phần mềm độc quyền? (Chọn 3)",
    "options": [
      { "key": "A", "text": "Nó kém an toàn hơn phần mềm nguồn mở" },
      { "key": "B", "text": "Nó dễ bị phần mềm độc hại tấn công hơn phần mềm nguồn mở" },
      { "key": "C", "text": "Giấy phép của nó là trung lập về công nghệ" },
      { "key": "D", "text": "Nó cho phép người dùng sửa đổi phần mềm để phù hợp với nhu cầu cụ thể của họ" },
      { "key": "E", "text": "Nó thân thiện với người dùng hơn phần mềm nguồn mở" }
    ],
    "correctKeys": [
      "A",
      "B",
      "E"
    ],
    "correctAnswerText": "A. Nó kém an toàn hơn phần mềm nguồn mở | B. Nó dễ bị phần mềm độc hại tấn công hơn phần mềm nguồn mở | E. Nó thân thiện với người dùng hơn phần mềm nguồn mở"
  },
  {
    "id": "lv1-ot1-32",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 32,
    "order": 32,
    "type": "multiple_choice",
    "text": "Đâu là câu phát biểu đúng về các ứng dụng dựa trên môi trường Web?",
    "options": [
      { "key": "A", "text": "Bạn phải có kết nối Internet để sử dụng ứng dụng Web" },
      { "key": "B", "text": "Phiên bản Web của ứng dụng dành cho máy tính để bàn sở hữu tất cả các tính năng giống như phiên bản trên máy tính để bàn" },
      { "key": "C", "text": "Các ứng dụng Web xử lý cục bộ thông tin trên máy tính của bạn" },
      { "key": "D", "text": "Trước khi có thể sử dụng ứng dụng Web, bạn phải cài đặt ứng dụng đó trên máy tính của mình" }
    ],
    "correctKeys": [
      "A"
    ],
    "correctAnswerText": "A. Bạn phải có kết nối Internet để sử dụng ứng dụng Web"
  },
  {
    "id": "lv1-ot1-33",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 33,
    "order": 33,
    "type": "yes_no",
    "text": "Với mỗi câu phát biểu về phần mềm mã nguồn mở, hãy chọn Đúng hoặc Sai:",
    "correctAnswerText": "1. SAI\n2. ĐÚNG\n3. SAI",
    "statements": [
      {
        "text": "Tất cả phần mềm miễn phí đều là phần mềm mã nguồn mở",
        "correct": "False"
      },
      {
        "text": "Bất kỳ ai cũng có thể kiểm tra, sửa đổi và cải tiến mã nguồn của phần mềm mã nguồn mở",
        "correct": "True"
      },
      {
        "text": "Bạn phải đồng ý với Thỏa thuận cấp phép Người dùng cuối trước khi sử dụng phần mềm mã nguồn mở",
        "correct": "False"
      }
    ],
    "trueColumnLabel": "ĐÚNG",
    "falseColumnLabel": "SAI"
  },
  {
    "id": "lv1-ot1-34",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 34,
    "order": 34,
    "type": "matching",
    "text": "Ghép từng loại ứng dụng phần mềm với mục đích tương ứng:",
    "correctAnswerText": "Hệ thống quản lý cơ sở dữ liệu ➔ Lưu trữ, sắp xếp, điều khiển và điều chỉnh các tập hợp thông tin liên quan\nPhần mềm xử lý văn bản ➔ Nhập, chỉnh sửa, định dạng và xuất văn bản ở định dạng tài liệu\nPhần mềm trình chiếu ➔ Hiển thị văn bản, hình ảnh và thông tin đa phương tiện dưới dạng trình chiếu điện tử\nTrình duyệt web ➔ Truy cập thông tin trên internet\nỨng dụng bảng tính ➔ Sắp xếp, phân tích cũng như lưu trữ dữ liệu số và văn bản, tính toán và hiển thị dữ liệu dưới dạng biểu đồ",
    "pairs": [
      {
        "left": "Hệ thống quản lý cơ sở dữ liệu",
        "right": "Lưu trữ, sắp xếp, điều khiển và điều chỉnh các tập hợp thông tin liên quan"
      },
      {
        "left": "Phần mềm xử lý văn bản",
        "right": "Nhập, chỉnh sửa, định dạng và xuất văn bản ở định dạng tài liệu"
      },
      {
        "left": "Phần mềm trình chiếu",
        "right": "Hiển thị văn bản, hình ảnh và thông tin đa phương tiện dưới dạng trình chiếu điện tử"
      },
      {
        "left": "Trình duyệt web",
        "right": "Truy cập thông tin trên internet"
      },
      {
        "left": "Ứng dụng bảng tính",
        "right": "Sắp xếp, phân tích cũng như lưu trữ dữ liệu số và văn bản, tính toán và hiển thị dữ liệu dưới dạng biểu đồ"
      }
    ]
  },
  {
    "id": "lv1-ot1-35",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 35,
    "order": 35,
    "type": "multiple_choice",
    "text": "Loại USB nào có đầu nối có thể đảo ngược khi sử dụng?",
    "options": [
      { "key": "A", "text": "Micro USB" },
      { "key": "B", "text": "USB-C" },
      { "key": "C", "text": "USB" },
      { "key": "D", "text": "Lightning connecter" }
    ],
    "correctKeys": [
      "B"
    ],
    "correctAnswerText": "B. USB-C"
  },
  {
    "id": "lv1-ot1-36",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 36,
    "order": 36,
    "type": "multiple_choice",
    "text": "Làm cách nào bạn có thể xác định xem thiết bị của mình có được kết nối với Internet hay không?",
    "options": [
      { "key": "A", "text": "Hãy thử gửi một tin nhắn" },
      { "key": "B", "text": "Mở trình duyệt" },
      { "key": "C", "text": "Tải xuống ứng dụng Speedtest" },
      { "key": "D", "text": "Thử lưu một tập tin" }
    ],
    "correctKeys": [
      "B"
    ],
    "correctAnswerText": "B. Mở trình duyệt"
  },
  {
    "id": "lv1-ot1-37",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 37,
    "order": 37,
    "type": "matching",
    "text": "Ghép từng thiết bị lưu trữ dữ liệu với định nghĩa tương ứng:",
    "correctAnswerText": "Ổ cứng thể rắn ➔ Thiết bị lưu trữ dữ liệu bên trong giúp lưu trữ và truy xuất dữ liệu bằng bộ nhớ flash\nỔ đĩa flash USB ➔ Thiết bị lưu trữ dữ liệu bên ngoài gọn nhẹ, sử dụng bộ nhớ flash\nỔ cứng di động ➔ Thiết bị lưu trữ dữ liệu bên ngoài hoạt động dựa trên kết nối USB với máy tính\nỔ đĩa cứng ➔ Thiết bị lưu trữ dữ liệu cơ điện tử bên trong giúp lưu trữ và truy xuất dữ liệu bằng đĩa từ quay nhanh",
    "pairs": [
      {
        "left": "Ổ cứng thể rắn",
        "right": "Thiết bị lưu trữ dữ liệu bên trong giúp lưu trữ và truy xuất dữ liệu bằng bộ nhớ flash"
      },
      {
        "left": "Ổ đĩa flash USB",
        "right": "Thiết bị lưu trữ dữ liệu bên ngoài gọn nhẹ, sử dụng bộ nhớ flash"
      },
      {
        "left": "Ổ cứng di động",
        "right": "Thiết bị lưu trữ dữ liệu bên ngoài hoạt động dựa trên kết nối USB với máy tính"
      },
      {
        "left": "Ổ đĩa cứng",
        "right": "Thiết bị lưu trữ dữ liệu cơ điện tử bên trong giúp lưu trữ và truy xuất dữ liệu bằng đĩa từ quay nhanh"
      }
    ]
  },
  {
    "id": "lv1-ot1-38",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 38,
    "order": 38,
    "type": "yes_no",
    "text": "Bạn cần xác định thông tin nhận dạng cá nhân (PII - Personally Iden-tifiable Information) mà bạn không nên để lộ trên mạng. Với mỗi câu phát biểu, hãy chọn Có nếu đó là thông tin nhận dạng cá nhân hoặc không nếu không phải.",
    "correctAnswerText": "1. KHÔNG\n2. CÓ\n3. CÓ",
    "statements": [
      {
        "text": "Màu mắt",
        "correct": "False"
      },
      {
        "text": "Ngày sinh",
        "correct": "True"
      },
      {
        "text": "Nơi sinh",
        "correct": "True"
      }
    ],
    "trueColumnLabel": "CÓ",
    "falseColumnLabel": "KHÔNG"
  },
  {
    "id": "lv1-ot1-39",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 39,
    "order": 39,
    "type": "yes_no",
    "text": "Với mỗi câu phát biểu, hãy chọn Đúng nếu đó là ví dụ về bắt nạt trên mạng hoặc Sai nếu không phải.",
    "correctAnswerText": "1. ĐÚNG\n2. SAI\n3. ĐÚNG\n4. SAI",
    "statements": [
      {
        "text": "A Liên tục gửi những tin nhắn ác ý riêng cho B",
        "correct": "True"
      },
      {
        "text": "C Đăng tải một ý kiến gây tranh cãi trên một diễn đàn trực tuyến công khai",
        "correct": "False"
      },
      {
        "text": "D Đăng ảnh riêng tư của E lên mạng mà không có sự cho phép của cô",
        "correct": "True"
      },
      {
        "text": "F tạo một tài khoản Instagram để đăng tải những tin đồn về các học sinh trong trường",
        "correct": "False"
      }
    ],
    "trueColumnLabel": "ĐÚNG",
    "falseColumnLabel": "SAI"
  },
  {
    "id": "lv1-ot1-40",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 40,
    "order": 40,
    "type": "multiple_choice",
    "text": "Cách an toàn để gửi thông tin nhận dạng cá nhân (PII - Personally Identifiable Information) qua Email là gì?",
    "options": [
      { "key": "A", "text": "Bằng cách chỉ gửi Email PII cho người thân" },
      { "key": "B", "text": "Bằng cách mã hóa Email" },
      { "key": "C", "text": "Không bao giờ gửi Email" },
      { "key": "D", "text": "Bằng cách giải mã một Email" }
    ],
    "correctKeys": [
      "B"
    ],
    "correctAnswerText": "B. Bằng cách mã hóa Email"
  },
  {
    "id": "lv1-ot1-41",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 41,
    "order": 41,
    "type": "yes_no",
    "text": "Với mỗi câu phát biểu về đạo văn, hãy chọn Đúng hoặc Sai.",
    "correctAnswerText": "1. ĐÚNG\n2. ĐÚNG\n3. SAI\n4. SAI\n5. ĐÚNG",
    "statements": [
      {
        "text": "Bạn sẽ bị quy vào tội đạo văn nếu không trích dẫn nguồn đầy đủ",
        "correct": "True"
      },
      {
        "text": "Trong tác phẩm viết, bạn phải sử dụng phần chú thích cuối trang để trích dẫn nguồn",
        "correct": "True"
      },
      {
        "text": "Bạn có thể mạo nhận tác phẩm hoặc ý tưởng của người khác làm của riêng mình mà không cần trích dẫn nguồn",
        "correct": "False"
      },
      {
        "text": "Bạn chỉ phải trích dẫn nguồn khi sử dụng câu văn chính xác như trong tác phẩm gốc của người khác",
        "correct": "False"
      },
      {
        "text": "Đạo văn là lấy cắp ý tưởng của người khác mà không ghi công",
        "correct": "True"
      }
    ],
    "trueColumnLabel": "ĐÚNG",
    "falseColumnLabel": "SAI"
  },
  {
    "id": "lv1-ot1-42",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 42,
    "order": 42,
    "type": "multiple_choice",
    "text": "Bốn điều nào được coi là thông tin nhận dạng cá nhân PII-Personally Indentifiable Information?(Chọn 4)",
    "options": [
      { "key": "A", "text": "Số an sinh xã hội" },
      { "key": "B", "text": "Địa chỉ gửi thư" },
      { "key": "C", "text": "Kích thước quần áo" },
      { "key": "D", "text": "Màu tóc" },
      { "key": "E", "text": "Lịch sử quét sinh trắc học" },
      { "key": "F", "text": "Địa chỉ IP" }
    ],
    "correctKeys": [
      "A",
      "B",
      "E",
      "F"
    ],
    "correctAnswerText": "A. Số an sinh xã hội | B. Địa chỉ gửi thư | E. Lịch sử quét sinh trắc học | F. Địa chỉ IP"
  },
  {
    "id": "lv1-ot1-43",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 43,
    "order": 43,
    "type": "yes_no",
    "text": "Bạn cần xác định ví dụ về hành xử đúng mực trên mạng trong môi trường văn phòng. Với mỗi phát biểu, chọn Có nếu đúng hoặc Không nếu không.",
    "correctAnswerText": "1. KHÔNG\n2. CÓ\n3. CÓ",
    "statements": [
      {
        "text": "Luôn Cc cho đồng nghiệp khi gửi email để giúp họ nắm được thông tin",
        "correct": "False"
      },
      {
        "text": "Chia sẻ các tập tin lớn từ dịch vụ lưu trữ đám mây hoặc vị trí máy chủ thay vì đính kèm trong email",
        "correct": "True"
      },
      {
        "text": "Áp dụng các tiêu chuẩn và giá trị trong các tương tác trực tuyến tương tự như khi bạn tương tác trực tiếp",
        "correct": "True"
      }
    ],
    "trueColumnLabel": "CÓ",
    "falseColumnLabel": "KHÔNG"
  },
  {
    "id": "lv1-ot1-44",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 44,
    "order": 44,
    "type": "yes_no",
    "text": "Với mỗi câu phát biểu về các phương pháp trích dẫn, hãy chọn Đúng hoặc Sai.",
    "correctAnswerText": "1. ĐÚNG\n2. ĐÚNG\n3. ĐÚNG\n4. ĐÚNG",
    "statements": [
      {
        "text": "Bạn phải trích dẫn nguồn nếu trích dẫn trực tiếp từ một bài phát biểu",
        "correct": "True"
      },
      {
        "text": "Bạn phải trích dẫn nguồn nếu diễn đạt lại bài viết của một người khác",
        "correct": "True"
      },
      {
        "text": "Bạn phải trích dẫn nguồn nếu tóm tắt bài viết của một người khác",
        "correct": "True"
      },
      {
        "text": "Bạn nên đặt dấu ngoặc kép xung quanh các cụm từ gồm ba từ trở lên được trích dẫn từ bài viết của một người khác",
        "correct": "True"
      }
    ],
    "trueColumnLabel": "ĐÚNG",
    "falseColumnLabel": "SAI"
  },
  {
    "id": "lv1-ot1-45",
    "levelId": "level-1",
    "subsetId": "OT1",
    "questionNumber": 45,
    "order": 45,
    "type": "multiple_choice",
    "text": "Đâu là ba yếu tố phải có trong trích dẫn về một cuốn sách đã xuất bản? (Chọn 3)",
    "options": [
      { "key": "A", "text": "Tên tác giả" },
      { "key": "B", "text": "Tên sách" },
      { "key": "C", "text": "Ngày xuất bản" },
      { "key": "D", "text": "Ngày truy cập" },
      { "key": "E", "text": "Tình trạng bản quyền" },
      { "key": "F", "text": "Tình trạng thương hiệu" }
    ],
    "correctKeys": [
      "A",
      "B",
      "C"
    ],
    "correctAnswerText": "A. Tên tác giả | B. Tên sách | C. Ngày xuất bản"
  },

  // ===================== GM2: LEVEL 1 ) =====================
  
  {
    id: "lv1-gm2-01",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 1,
    order: 46,
    type: "matching",
    text: "Ghép nối thuật ngữ với định nghĩa của nó cho phù hợp.",
    pairs: [
      {
        left: "Internet Service Provider (ISP)",
        right: "Một công ty kết nối người dùng với Internet"
      },
      {
        left: "HyperText Markup Language (HTML)",
        right: "Một ngôn ngữ đánh dấu được sử dụng để tạo các trang web"
      },
      {
        left: "Breadcrumb",
        right: "Cho phép người dùng truy xuất lại các bước của họ trên trang web"
      },
      {
        left: "Cookie",
        right: "Một tập tin văn bản theo dõi hoạt động của người dùng trên trang web"
      },
      {
        left: "Domain Name Service (DNS)",
        right: "Một thư mục phân cấp ánh xạ vị trí của các tài nguyên trên Internet"
      }
    ]
  },
  {
    id: "lv1-gm2-02",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 2,
    order: 47,
    type: "yes_no",
    text: "Đối với mỗi phát biểu liên quan đến thiết bị nhập, hãy chọn Đúng (Yes) hoặc Sai (No) với mỗi phát biểu sau:",
    statements: [
      {
        text: "Chuột là thiết bị nhập",
        correct: "True"
      },
      {
        text: "Màn hình là một thiết bị nhập",
        correct: "False"
      },
      {
        text: "Loa là một thiết bị nhập",
        correct: "False"
      },
      {
        text: "Bàn phím là thiết bị nhập",
        correct: "True"
      },
      {
        text: "Micro là một thiết bị nhập",
        correct: "True"
      }
    ]
  },
    {
    id: "lv1-gm2-03",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 3,
    order: 48,
    type: "yes_no",
    text: "Chọn Yes nếu đúng hoặc No nếu sai cho các phát biểu sau:",
    statements: [
      {
        text: "Headphone là một thiết bị xuất",
        correct: "True"
      },
      {
        text: "Bàn phím là một thiết bị xuất",
        correct: "False"
      },
      {
        text: "Máy in là một thiết bị xuất",
        correct: "True"
      },
      {
        text: "Máy quét là một thiết bị xuất",
        correct: "False"
      },
      {
        text: "Micro là một thiết bị xuất",
        correct: "False"
      }
    ]
  },
  {
    id: "lv1-gm2-04",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 4,
    order: 49,
    type: "matching",
    text: "Quan sát hình sau để xác định các loại cổng kết nối. Ghép tên với loại cổng kết nối của nó.",
    image: "/images/lv1-gm2-4.png",
    pairs: [
      {
        left: "USB",
        right: "D"
      },
      {
        left: "Audio Only",
        right: "E"
      },
      {
        left: "Ethernet",
        right: "B"
      },
      {
        left: "Display Only",
        right: "A"
      },
      {
        left: "HDMI",
        right: "C"
      }
    ]
  },
  {
    id: "lv1-gm2-05",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 5,
    order: 50,
    type: "matching",
    text: "Hãy ghép tên với phát biểu tương ứng.",
    pairs: [
      {
        left: "Uploading",
        right: "Quá trình lấy một tập tin từ thiết bị máy tính của bạn và gửi tập tin đó đến một vị trí trực tuyến"
      },
      {
        left: "Subscribing",
        right: "Phần mềm thường được lưu trữ trên đám mây và được trả tiền hàng năm hoặc hàng tháng"
      },
      {
        left: "Downloading",
        right: "Quá trình di chuyển một tập tin từ nguồn trực tuyến của nó sang một thiết bị máy tính"
      },
      {
        left: "Installing",
        right: "Đưa các chương trình thực thi vào thiết bị máy tính của bạn"
      }
    ]
  },
  {
    id: "lv1-gm2-06",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 6,
    order: 51,
    type: "matching",
    text: "Ghép nối thứ tự xếp hạng thiết bị máy tính từ mạnh nhất (#1) đến kém nhất (#4) tương ứng.",
    pairs: [
      {
        left: "Desktop Computer",
        right: "#1"
      },
      {
        left: "Laptop",
        right: "#2"
      },
      {
        left: "Tablet",
        right: "#3"
      },
      {
        left: "Smartphone",
        right: "#4"
      }
    ]
  },
  {
    id: "lv1-gm2-07",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 7,
    order: 52,
    type: "multiple_choice",
    text: "Bạn có một máy tính để bàn và muốn tăng tốc độ của nó để có trải nghiệm chơi game tốt hơn. Bạn quyết định tăng thêm bộ nhớ. Đó là bộ nhớ nào? (Chọn hai)",
    options: [
      {
        key: "A",
        text: "A. Ổ cứng (Hard Drive)"
      },
      {
        key: "B",
        text: "B. Ổ đĩa flash USB (USB Flash Drive)"
      },
      {
        key: "C",
        text: "C. RAM"
      },
      {
        key: "D",
        text: "D. Ổ cứng thể rắn (Solid State Drive)"
      },
      {
        key: "E",
        text: "E. ROM"
      }
    ],
    correctKeys: ["C", "E"]
  },
  {
    id: "lv1-gm2-08",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 8,
    order: 53,
    type: "matching",
    text: "Ghép nối từng khái niệm kết nối mạng với định nghĩa của nó.",
    pairs: [
      {
        left: "Router",
        right: "Kết nối nhiều mạng và chuyển tiếp các gói giữa chúng"
      },
      {
        left: "Cable Service",
        right: "Một công nghệ mạng chạy trên cáp đồng trục của TV"
      },
      {
        left: "Network Adapter",
        right: "Bảng mạch cho phép máy tính để bàn kết nối mạng"
      },
      {
        left: "Modem",
        right: "Một thiết bị gửi và nhận thông tin giữa nhà của bạn và ISP thông qua đường dây điện thoại, cáp quang hoặc cáp đồng trục TV"
      },
      {
        left: "Ethernet",
        right: "Một dịch vụ kết nối các máy tính với nhau trong một mạng cục bộ"
      },
      {
        left: "Digital Subscriber Line (DSL)",
        right: "Một công nghệ mạng chạy trên dây điện thoại"
      }
    ]
  },
  {
    id: "lv1-gm2-09",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 9,
    order: 54,
    type: "multiple_choice",
    text: "Bạn muốn sử dụng điện thoại thông minh của mình để duyệt internet. Một điện thoại thông minh có thể kết nối internet bằng cách nào? (Chọn hai)",
    options: [
      {
        key: "A",
        text: "A. Wi-Fi"
      },
      {
        key: "B",
        text: "B. Gói dữ liệu từ nhà cung cấp dịch vụ di động"
      },
      {
        key: "C",
        text: "C. Ứng dụng Mobile"
      },
      {
        key: "D",
        text: "D. Ethernet"
      },
      {
        key: "E",
        text: "E. Cloud"
      }
    ],
    correctKeys: ["A", "B"]
  },
  {
    id: "lv1-gm2-10",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 10,
    order: 55,
    type: "multiple_choice",
    text: "Bạn đang phân vân để quyết định kết nối internet với máy tính xách tay của mình bằng Wi-Fi hay kết nối có dây. Hai ưu điểm của mạng có dây so với mạng Wi-Fi là gì? (Chọn hai)",
    options: [
      {
        key: "A",
        text: "A. Tốc độ nhanh hơn"
      },
      {
        key: "B",
        text: "B. Bảo mật (Security)"
      },
      {
        key: "C",
        text: "C. Cài đặt (Installation)"
      },
      {
        key: "D",
        text: "D. Tốn ít tiền hơn để truyền dữ liệu"
      },
      {
        key: "E",
        text: "E. Tính di động (Mobility)"
      }
    ],
    correctKeys: ["A", "B"]
  },
  {
    id: "lv1-gm2-11",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 11,
    order: 56,
    type: "multiple_choice",
    text: "Cơ sở hạ tầng mạng là gì?",
    options: [
      {
        key: "A",
        text: "A. Nơi đặt các máy chủ"
      },
      {
        key: "B",
        text: "B. Chi phí của việc cấp phép một mạng"
      },
      {
        key: "C",
        text: "C. Phần cứng và phần mềm di chuyển dữ liệu cùng một mạng"
      },
      {
        key: "D",
        text: "D. Một loạt các loại cáp"
      }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv1-gm2-12",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 12,
    order: 57,
    type: "multiple_choice",
    text: "Bạn có tài khoản mạng xã hội trên Facebook, Instagram, Twitter và Snapchat. Bạn cũng sử dụng Internet để làm bài tập ở trường, duyệt thông tin và chat trò chơi. Bạn đang quan tâm đến việc bảo vệ về quyền riêng tư của mình. Bạn có thể thực hiện ba hành động nào để giúp duy trì quyền riêng tư và bảo mật kỹ thuật số? (Chọn ba)",
    options: [
      {
        key: "A",
        text: "A. Có nhiều tài khoản email"
      },
      {
        key: "B",
        text: "B. Sử dụng Twitter và Snapchat thay vì Facebook"
      },
      {
        key: "C",
        text: "C. Thay đổi cài đặt quyền riêng tư trên các tài khoản mạng xã hội của bạn"
      },
      {
        key: "D",
        text: "D. Không lưu trữ dữ liệu cá nhân trên dịch vụ trực tuyến dùng để chia sẻ"
      },
      {
        key: "E",
        text: "E. Chỉ đăng từ điện thoại, không bao giờ đăng từ máy tính"
      },
      {
        key: "F",
        text: "F. Sử dụng mật khẩu an toàn"
      }
    ],
    correctKeys: ["C", "D", "F"]
  },
  {
    id: "lv1-gm2-13",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 13,
    order: 58,
    type: "multiple_choice",
    text: "Tối qua, bạn đã đăng một số bức ảnh đáng xấu hổ của một người bạn lên Internet. Sau khi suy nghĩ về nó, bạn quyết định xóa các bức ảnh. Làm thế nào bạn có thể chắc chắn rằng các bức ảnh đã được xóa hoàn toàn khỏi Internet?",
    options: [
      {
        key: "A",
        text: "A. Bạn có thể chỉ cần xóa những bức ảnh bạn đã đăng"
      },
      {
        key: "B",
        text: "B. Bạn có 24 giờ để xóa ảnh trước khi chúng hiển thị cho bất kỳ ai khác"
      },
      {
        key: "C",
        text: "C. Bạn có thể liên hệ với cơ quan quản lý Internet và họ sẽ xóa tất cả ảnh cho bạn"
      },
      {
        key: "D",
        text: "D. Bạn không thể. Các bản sao và đăng lại có thể giữ cho các bức ảnh lưu hành trực tuyến vô thời hạn"
      }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv1-gm2-14",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 14,
    order: 59,
    type: "multiple_choice",
    text: "Bạn đã tải xuống một số bài hát mình yêu thích và sử dụng chúng trong bài thuyết trình mà bạn đã gửi tới Hội chợ Khoa học Toàn bang. Bài thuyết trình của bạn bị từ chối vì các bài hát bạn đã chọn vi phạm bản quyền. Ba yếu tố nào được sử dụng để đánh giá việc sử dụng hợp lý (Fair Use)? (Chọn ba)",
    options: [
      {
        key: "A",
        text: "A. Lượng tác phẩm được sao chép"
      },
      {
        key: "B",
        text: "B. Ảnh hưởng của việc sử dụng của bạn đối với thị trường tiềm năng của các tác phẩm được sao chép"
      },
      {
        key: "C",
        text: "C. Lấy từ một trang web đáng tin"
      },
      {
        key: "D",
        text: "D. Được sao chép từ tác phẩm do một người bạn của bạn đã mua"
      },
      {
        key: "E",
        text: "E. Nếu nó được sử dụng bởi một giáo viên hoặc học sinh"
      },
      {
        key: "F",
        text: "F. Mục đích sử dụng của bạn"
      }
    ],
    correctKeys: ["A", "B", "F"]
  },
  {
    id: "lv1-gm2-15",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 15,
    order: 60,
    type: "multiple_choice",
    text: "Bạn đã tham gia một diễn đàn để thảo luận về một số trò chơi kỹ thuật số phổ biến. Trước khi bạn đăng bài trên diễn đàn, bạn phải tạo tên người dùng. Hai lý do thích hợp để sử dụng biệt danh trực tuyến thay vì tên thật của bạn là gì? (Chọn hai)",
    options: [
      {
        key: "A",
        text: "A. Bạn muốn bình luận theo cách mà bạn thường không gặp trực tiếp"
      },
      {
        key: "B",
        text: "B. Bạn muốn giả làm người khác"
      },
      {
        key: "C",
        text: "C. Bạn có một tên thông thường và một biệt danh có thể khiến bạn khác biệt với những người khác"
      },
      {
        key: "D",
        text: "D. Bạn đang cố gắng giữ riêng biệt danh tính cá nhân và danh tính doanh nghiệp"
      },
      {
        key: "E",
        text: "E. Bạn đang tải xuống phương tiện vi phạm bản quyền"
      }
    ],
    correctKeys: ["D", "C"]
  },
  {
    id: "lv1-gm2-16",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 16,
    order: 61,
    type: "multiple_choice",
    text: "Bạn nhận thấy nhiều người viết bình luận tiêu cực trên một mạng xã hội. Bạn bị cấm để làm điều tương tự. Giá trị của việc không phản hồi đối với giao tiếp tiêu cực là gì?",
    options: [
      {
        key: "A",
        text: "A. Tránh xung đột hoặc làm tổn thương cảm xúc của ai đó"
      },
      {
        key: "B",
        text: "B. Khiến bạn cảm thấy tồi tệ"
      },
      {
        key: "C",
        text: "C. Giữ danh tính của bạn ẩn danh"
      },
      {
        key: "D",
        text: "D. Tiết kiệm tiền"
      }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv1-gm2-17",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 17,
    order: 62,
    type: "multiple_choice",
    text: "Bạn đã được chỉ định viết một bài báo nghiên cứu. Ba loại thông tin nào được yêu cầu để bạn hoàn thành nhiệm vụ này? (Chọn ba)",
    options: [
      {
        key: "A",
        text: "A. Xác định các nguồn lực sẵn có"
      },
      {
        key: "B",
        text: "B. Tìm một máy tính"
      },
      {
        key: "C",
        text: "C. Xác định chủ đề hoặc mục tiêu"
      },
      {
        key: "D",
        text: "D. Có được một đối tác"
      },
      {
        key: "E",
        text: "E. Thiết lập lịch trình"
      },
      {
        key: "F",
        text: "F. Mở tài khoản mạng xã hội"
      }
    ],
    correctKeys: ["A", "C", "E"]
  },
  {
    id: "lv1-gm2-18",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 18,
    order: 63,
    type: "multiple_choice",
    text: "Bạn đang nghiên cứu thông tin trên Internet để có thể viết một bài báo cho khóa học lịch sử của mình. Kết quả tìm kiếm của bạn bao gồm cả thông tin có liên quan và không liên quan. Ba bước nào sẽ giúp bạn phân biệt giữa kết quả tìm kiếm có liên quan và không liên quan? (Chọn ba)",
    options: [
      {
        key: "A",
        text: "A. Xác định các từ khóa trong kết quả đường như có liên quan đến chủ đề chủ đề"
      },
      {
        key: "B",
        text: "B. Xác định chủ đề để chỉnh và tìm kiếm nó"
      },
      {
        key: "C",
        text: "C. Nhờ một giáo viên giúp đỡ"
      },
      {
        key: "D",
        text: "D. Không có gì trên Internet có liên quan, vì vậy bạn nên sử dụng các tài nguyên khác"
      },
      {
        key: "E",
        text: "E. Mọi thứ luôn có liên quan, đọc tất cả"
      },
      {
        key: "F",
        text: "F. Xác định các kết quả không chứa các từ khóa liên quan đến chủ đề chủ đề"
      }
    ],
    correctKeys: ["A", "B", "F"]
  },
  {
    id: "lv1-gm2-19",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 19,
    order: 64,
    type: "multiple_choice",
    text: "Bạn đang thu thập thông tin từ các trang web trên Internet. Giáo viên của bạn yêu cầu bạn cung cấp danh sách từng URL mà bạn truy cập. Nhấp vào tính năng nào trên trang web này đại diện cho URL.",
    image: "/images/lv1-gm2-19.png",
    options: [
      {
        key: "A",
        text: "A. Nhấp chuột vào thanh địa chỉ của trình duyệt (Address Bar)"
      },
      {
        key: "B",
        text: "B. Nhấp vào nội dung trang web / các liên kết trên trang web"
      }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv1-gm2-20",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 20,
    order: 65,
    type: "multiple_choice",
    text: "Miền công cộng (Public Domain) là nơi chứa những tác phẩm mà không ai giữ bản quyền nữa, ai cũng có thể dùng tự do. Có 3 cách để một tác phẩm nằm trong miền công cộng. Đó là những cách nào?",
    options: [
      {
        key: "A",
        text: "A. Bản quyền đã không được nộp cho chính phủ (Copyright wasn't filed with the government)"
      },
      {
        key: "B",
        text: "B. Quyền đã hết hạn (Rights have expired)"
      },
      {
        key: "C",
        text: "C. Quyền không bao giờ được yêu cầu (Rights were never requested)"
      },
      {
        key: "D",
        text: "D. Các quyền đã được từ bỏ một cách rõ ràng (Rights were expressly waived)"
      },
      {
        key: "E",
        text: "E. Quyền không thể áp dụng (Rights were inapplicable)"
      },
      {
        key: "F",
        text: "F. Quyền không bao giờ bị từ chối (Rights were never denied)"
      }
    ],
    correctKeys: ["B", "D", "E"]
  },
  {
    id: "lv1-gm2-21",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 21,
    order: 66,
    type: "multiple_choice",
    text: "Bạn đang chuẩn bị một bài thuyết trình cho một dự án của lớp. Giáo viên của bạn yêu cầu bạn sử dụng nội dung Creative Commons (CC). Chọn phát biểu đúng khi nói về Creative Commons (CC) là gì? (Chọn hai)",
    options: [
      {
        key: "A",
        text: "A. Creative Commons (CC) là một tổ chức dành để kiếm tiền từ các tác phẩm sáng tạo"
      },
      {
        key: "B",
        text: "B. Creative Commons (CC) là một tổ chức chia sẻ các tác phẩm sáng tạo"
      },
      {
        key: "C",
        text: "C. Creative Commons (CC) là một trường nghệ thuật"
      },
      {
        key: "D",
        text: "D. Giấy phép Creative Commons (CC) miễn phí cho công chúng"
      },
      {
        key: "E",
        text: "E. Creative Commons (CC) là phần mềm độc quyền"
      }
    ],
    correctKeys: ["B", "D"]
  },
  {
    id: "lv1-gm2-22",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 22,
    order: 67,
    type: "multiple_choice",
    text: "Bạn cần chọn tab nào để thay đổi kích thước trang chiếu trước khi in?",
    image: "/images/lv1-gm2-22.png",
    options: [
        { key: "A", text: "Design"},
        { key: "B", text: "Animations"},
        { key: "C", text: "Review"},
        { key: "D", text: "Arrange"},
    ]
  },
  {
    id: "lv1-gm2-23",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 23,
    order: 68,
    type: "multiple_choice",
    text: "Bạn đang viết một bài nghiên cứu và đã được hướng dẫn dẫn về các ghi công và tham khảo. Điều nào sau đây là ghi công và tham khảo? (Chọn hai)",
    options: [
      {
        key: "A",
        text: "A. Ghi nhận tác giả là mô tả hình ảnh được sử dụng"
      },
      {
        key: "B",
        text: "B. Tham khảo là ghi công cho người tạo ra hình ảnh hoặc tài liệu khác"
      },
      {
        key: "C",
        text: "C. Tham khảo là tác giả của các một tác phẩm chỉ rõ cách bạn muốn ghi công cho các tác phẩm của họ"
      },
      {
        key: "D",
        text: "D. Ghi công là giá trị ghi nhận nguồn của bạn trong nội dung tác phẩm của bạn và liên kết các tác phẩm của bạn với một thư mục"
      },
      {
        key: "E",
        text: "E. Ghi nhận tác giả là ghi công cho người tạo ra hình ảnh hoặc tài liệu khác"
      },
      {
        key: "F",
        text: "F. Tham khảo là ghi nhận nguồn trong nội dung tác phẩm của bạn và liên kết đến trích dẫn của bạn trong danh mục tham khảo (bibliography)"
      }
    ],
    correctKeys: ["E", "F"]
  },
  {
    id: "lv1-gm2-24",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 24,
    order: 69,
    type: "multiple_choice",
    text: "Bạn đang viết một bài báo nghiên cứu và đã được hướng dẫn bao gồm các ghi nhận và tài liệu tham khảo. Mục đích của ghi nhận và tham chiếu là gì?",
    options: [
      {
        key: "A",
        text: "A. Tác giả hoặc người sáng tạo càng có nhiều ghi nhận và tham chiếu, họ càng nhận được nhiều tiền"
      },
      {
        key: "B",
        text: "B. Nó giúp các tác giả và người sáng tạo duy trì bản quyền của họ"
      },
      {
        key: "C",
        text: "C. Mục đích là để mua các tác phẩm từ các tác giả và người sáng tạo"
      },
      {
        key: "D",
        text: "D. Mục đích là để công nhận các tác giả và người sáng tạo tác phẩm không bắt nguồn từ bạn"
      }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv1-gm2-25",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 25,
    order: 70,
    type: "yes_no",
    text: "Hãy Chọn Đúng (Yes) hoặc Sai (No) cho mỗi phát biểu liên quan đến quy ước đặt tên tập tin sau:",
    statements: [
      {
        text: "Tên tập tin phải có khoảng cách giữa các từ khóa",
        correct: "False"
      },
      {
        text: "Không sử dụng các ký tự đặc biệt",
        correct: "True"
      },
      {
        text: "Nếu ngày được bao gồm, hãy sử dụng định dạng: YYYY-MM-DD",
        correct: "True"
      },
      {
        text: "Bạn không thể đánh số tập tin",
        correct: "False"
      },
      {
        text: "Không viết hoa toàn bộ tên tập tin",
        correct: "True"
      }
    ]
  },
  {
    id: "lv1-gm2-26",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 26,
    order: 71,
    type: "multiple_choice",
    text: "Bài thuyết trình bạn đang tạo bắt buộc phải để hướng ngang. Mô tả nào dưới đây là đúng với hướng dọc, hướng ngang? (Chọn hai)",
    options: [
      {
        key: "A",
        text: "A. Portrait là hướng dọc"
      },
      {
        key: "B",
        text: "B. Landscape là hướng dọc"
      },
      {
        key: "C",
        text: "C. Portrait là hướng ngang"
      },
      {
        key: "D",
        text: "D. Landscape là hướng chéo"
      },
      {
        key: "E",
        text: "E. Portrait là hướng chéo"
      },
      {
        key: "F",
        text: "F. Landscape là hướng ngang"
      }
    ],
    correctKeys: ["A", "F"]
  },
  {
    id: "lv1-gm2-27",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 27,
    order: 72,
    type: "multiple_choice",
    text: "Một thuật ngữ khác để nói về việc in hai mặt là gì?",
    options: [
      {
        key: "A",
        text: "A. Printing with a gutter for binding books"
      },
      {
        key: "B",
        text: "B. Simplex printing"
      },
      {
        key: "C",
        text: "C. Duplex printing"
      },
      {
        key: "D",
        text: "D. Printing two lines at a time"
      }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv1-gm2-28",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 28,
    order: 73,
    type: "yes_no",
    text: "Đối với mỗi tuyên bố liên quan đến Chính sách sử dụng được chấp nhận (Acceptable Use Policies) để đăng trên mạng xã hội, hãy chọn Yes nếu tuyên bố đó đúng, No nếu tuyên bố sai:",
    statements: [
      {
        text: "Các Chính sách Sử dụng được chấp nhận (Acceptable Use Policies) trong trường học nói chung sẽ bao gồm các quy tắc về đe dọa trực tuyến",
        correct: "True"
      },
      {
        text: "Chính sách sử dụng được chấp nhận (Acceptable Use Policies) là các quy tắc về những gì bạn có thể và không thể thực hiện trực tuyến bằng máy tính của trường học hoặc cơ quan",
        correct: "True"
      },
      {
        text: "Chính sách sử dụng được chấp nhận (Acceptable Use Policies) cho các trường học và doanh nghiệp thương bao gồm các quy tắc về việc sử dụng các trang mạng xã hội",
        correct: "True"
      },
      {
        text: "Vi phạm chính sách sử dụng được chấp nhận (Acceptable Use Policy) thường dẫn đến việc tài khoản bạn bị xóa hoặc phạt",
        correct: "True"
      },
      {
        text: "Chính sách sử dụng được chấp nhận (Acceptable Use Policies) dành cho người lớn giống với chính sách dành cho trẻ vị thành niên",
        correct: "False"
      },
      {
        text: "Chính sách sử dụng được chấp nhận (Acceptable Use Policies) không thể hạn chế bạn đăng bất kỳ cái gì bạn muốn vì bạn có quyền tự do ngôn luận thứ nhất (1st Amendment rights)",
        correct: "False"
      }
    ]
  },
  {
    id: "lv1-gm2-29",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 29,
    order: 74,
    type: "matching",
    text: "Hãy ghép từng tương tác kỹ thuật số với phát biểu tương ứng.",
    pairs: [
      {
        left: "Email",
        right: "Cung cấp hướng dẫn từng bước cho đối tác về một dự án"
      },
      {
        left: "Text Message",
        right: "Thông báo cho bạn bè rằng bạn sẽ đến muộn vài phút"
      },
      {
        left: "Live Chat",
        right: "Liên hệ hệ với bộ phận hỗ trợ trực tuyến để được hỗ trợ"
      },
      {
        left: "Video Conferencing",
        right: "Họp nhóm của các thành viên ở các địa điểm khác nhau"
      }
    ]
  },
  {
    id: "lv1-gm2-30",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 30,
    order: 75,
    type: "yes_no",
    text: "Chọn Yes nếu đúng và No nếu sai cho mỗi phát biểu sau:",
    statements: [
      {
        text: "Gửi email bằng tất cả các chữ cái viết hoa",
        correct: "False"
      },
      {
        text: "Quảng cáo thứ gì đó bạn bán trong một nhóm Facebook không liên quan",
        correct: "False"
      },
      {
        text: "Sử dụng dấu câu và định dạng thích hợp",
        correct: "True"
      },
      {
        text: "Tôn trọng bảng cách diễn đạt các bài đăng và nhận xét theo cách không đối đầu",
        correct: "True"
      }
    ]
  },
  {
    id: "lv1-gm2-31",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 31,
    order: 76,
    type: "multiple_choice",
    text: "Bạn đã viết một bài blog về cuộc thi Hội chợ Khoa học gần đây. Bạn muốn đăng nó trên trang web trường bạn học. Phương pháp công tác hiệu quả nào bạn có thể sử dụng để nhận phản hồi về blog của mình trước khi đăng nó?",
    options: [
      {
        key: "A",
        text: "A. Paid review (Đánh giá có trả tiền)"
      },
      {
        key: "B",
        text: "B. Đăng nó và sau đó yêu cầu phản hồi"
      },
      {
        key: "C",
        text: "C. Peer review (Đánh giá ngang hàng)"
      },
      {
        key: "D",
        text: "D. Gửi cho ban tổ chức Hội chợ Khoa học"
      }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv1-gm2-32",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 32,
    order: 77,
    type: "multiple_choice",
    text: "Bạn đang viết một email để gửi các thành viên trong nhóm của bạn về một dự án của lớp. Câu nào dưới đây thể hiện nghi thức kỹ thuật số thích hợp?",
    options: [
      {
        key: "A",
        text: "Xin chào, các boneheads, tôi đoán việc này sẽ được thực hiện vào tuần tới vì vậy chúng ta nên khẩn trương hơn"
      },
      {
        key: "B",
        text: "u guys r so spcl 2 me, My new BFFs!"
      },
      {
        key: "C",
        text: "Nè mọi người (Hey, everyone)! Vui lòng gửi ý tưởng của bạn bằng cách sử dụng 'Reply All' để chúng ta có thể thảo luận. Cảm ơn!"
      },
      {
        key: "D",
        text: "HI, ĐÂY LÀ NHỮNG HƯỚNG DẪN TÔI NHẬN ĐƯỢC VỀ DỰ ÁN CỦA CHÚNG TÔI"
      } 
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv1-gm2-33",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 33,
    order: 78,
    type: "multiple_choice",
    text: "Trên video, bạn có thể nhìn thấy giáo viên và bạn học của mình và tất cả họ đều có thể nhìn thấy bạn. Những hành vi nào sau đây bạn nên cẩn thận khi tham gia vào cuộc họp này?",
    options: [
        {
            key: "A",
            text: "Mặc quần áo có vũ đội thể thao yêu thích của bạn"
        },
        {
            key: "B",
            text: "Chính tả và chữ viết tay",
        },
        {
            key: "C",
            text: "Biểu cảm khuôn mặt và ngôn ngữ cơ thể",
        },
        {
            key: "D",
            text: "Mỉm cười quá nhiều"
        }
    ],
    correctKeys: ["C"],
  },
  {
    id: "lv1-gm2-34",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 34,
    order: 79,
    type: "multiple_choice",
    text: "Bạn đã bị hack! Bạn đã được hướng dẫn để tạo một mật khẩu an toàn mới. Mật khẩu nào sau đây là mật khẩu mạnh nhất?",
    options: [
        { key: "A", text: "1234ABCD"},
        { key: "B", text: "8675309"},
        { key: "C", text: "Love-U"},
        { key: "D", text: "pass$$w0rd"},
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv1-gm2-35",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 35,
    order: 80,
    type: "multiple_choice",
    text: "Nhấp vào tính năng nào sau đây cho phép bạn khóa máy tính của mình trong trường hợp này.",
    image: "/images/lv1-gm2-35.png",
    options: [
        { key: "A", text: "A"},
        { key: "B", text: "B"},
        { key: "C", text: "C"},
        { key: "D", text: "D"},
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv1-gm2-36",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 36,
    order: 81,
    type: "matching",
    text: "Làm cách nào để xóa cài đặt trình duyệt trên máy tính của mình (ở hầu hết các trình duyệt)? Bộ nhớ cache, cookie và history. Sắp xếp các bước theo đúng thứ tự.",
    pairs: [
      {
        left: "BƯỚC 1",
        right: "Nhấp vào menu ba chấm (...) ở góc trên bên phải của trình duyệt"
      },
      {
        left: "BƯỚC 2",
        right: "Chọn Settings (PC) hay Options (MacOS)"
      },
      {
        left: "BƯỚC 3",
        right: "Chọn Privacy & Security"
      },
      {
        left: "BƯỚC 4",
        right: "Chọn cài đặt nào đó của trình duyệt để xóa"
      }
    ]
  },
  {
    id: "lv1-gm2-37",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 37,
    order: 82,
    type: "multiple_choice",
    text: "Rủi ro sức khỏe về tinh thần lớn nhất ở trẻ em và thanh thiếu niên sử dụng công nghệ trực tuyến là gì?",
    options: [
      { key: "A", text: "Chấn thương do nhắn tin khi đi bộ"},
      { key: "B", text: "Nghiện chơi game" },
      { key: "C", text: "Mệt mỏi" },
      { key: "D", text: "Bắt nạt trên mạng (Cyberbullying)"}
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv1-gm2-38",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 38,
    order: 83,
    type: "multiple_choice",
    text: "Mối đe dọa sức khoẻ thể chất nào có liên quan đến việc sử dụng máy tính và thiết bị máy tính trong thời gian dài? (Chọn hai)",
    options: [
      { key: "A", text: "Các vấn đề về cơ bắp" },
      { key: "B", text: "Các vấn đề về xã hội" },
      { key: "C", text: "Các vấn đề về thị lực" },
      { key: "D", text: "Chơi game kiệt sức" },
      { key: "E", text: "Bàn phím hư hỏng" },
    ],
    correctKeys: ["A","C"]
  },
  {
    id: "lv1-gm2-39",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 39,
    order: 84,
    type: "yes_no",
    text: "Chọn Đúng hoặc Sai cho mỗi phát biểu liên quan đến vấn đề an ninh kỹ thuật số.",
    statements: [
      { text: "Cookie có thể hữu ích, như lưu trữ username hoặc sở thích của bạn cho một trang web cụ thể", correct: "True" },
      { text: "Lịch sử trình duyệt có thể được sử dụng để theo dõi mọi trang web bạn đã truy cập và khi bạn đã truy cập", correct: "True" },
      { text: "Dấu trang cho phép bạn lưu một trang web để truy cập sau", correct: "True" },
      { text: "Khi bạn đặt tùy chọn trên một trang web, thông tin sẽ được lưu trữ trên trang web", correct: "False" },
    ]
  },
  {
    id: "lv1-gm2-40",
    levelId: "level-1",
    subsetId: "GM2",
    questionNumber: 40,
    order: 85,
    type: "yes_no",
    text: "Các hệ điều hành phổ biến nhất được phát triển và tiếp thị bởi một số công ty nổi tiếng. Hãy chọn Đúng hoặc Sai với mỗi phát biểu ",
    statements: [
      { text: "iOS được phát triển và tiếp thị bởi Android", correct: "False" },
      { text: "Google không phát triển hệ điều hành", correct: "False" },
      { text: "Apple là chủ sở hữu đã đăng ký của Mac OS", correct: "True" },
      { text: "Hệ điều hành Windows là một sản phẩm của Microsoft" , correct: "True" }
    ]
  }

];
