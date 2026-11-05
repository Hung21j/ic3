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
  }
];
