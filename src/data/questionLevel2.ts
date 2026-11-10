import { IC3Question } from "./ic3Questions";

export const LEVEL2_OT_QUESTIONS: IC3Question[] = [
  {
    id: "lv2-gm2-q1",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 1,
    type: "multiple_choice",
    text: "Hai cài đặt trình duyệt nào có thể được thay đổi để đáp ứng nhu cầu và sở thích cá nhân? (Chọn 2)",
    options: [
      { key: "A", text: "Đặt tên URL (Naming URLs)" },
      { key: "B", text: "Thêm tiện ích mở rộng trình duyệt (Adding browser extensions)" },
      { key: "C", text: "Thêm nội dung vào trợ giúp" },
      { key: "D", text: "Tắt cookie (Disabling cookies)" }
    ],
    correctKeys: ["B", "D"]
  },
  {
    id: "lv2-gm2-q2",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 2,
    type: "multiple_choice",
    text: "Khi tạo cuộc hẹn hoặc nhiệm vụ trên lịch kỹ thuật số cá nhân, bạn thường có thể tùy chỉnh hai cài đặt nào? (Chọn hai)",
    options: [
      { key: "A", text: "Lời nhắc (Reminders)" },
      { key: "B", text: "Người tổ chức sự kiện (Event host)" },
      { key: "C", text: "Chi phí của sự kiện (Cost of the event)" },
      { key: "D", text: "Tần suất lặp lại sự kiện (How often to repeat the event)" }
    ],
    correctKeys: ["A", "D"]
  },
  {
    id: "lv2-gm2-q3",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 3,
    type: "multiple_choice",
    text: "Cha mẹ của bạn đã yêu cầu bạn tạo lịch gia đình kỹ thuật số để mọi thành viên trong gia đình có thể lên lịch cho các sự kiện thể thao, hoạt động ở trường và các diễn biến xã hội khác cho tất cả các thành viên trong gia đình. Bạn đã tạo lịch. Bạn phải hoàn thành hai bước nào để cung cấp lịch cho tất cả các thành viên trong gia đình? (Chọn 2)",
    options: [
      { key: "A", text: "Mời các thành viên" },
      { key: "B", text: "In bản sao lịch cho từng thành viên trong gia đình" },
      { key: "C", text: "Sao chép lịch vào thiết bị máy tính của từng thành viên trong gia đình" },
      { key: "D", text: "Chia sẻ lịch" }
    ],
    correctKeys: ["A", "D"]
  },
  {
    id: "lv2-gm2-q4",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 4,
    type: "multiple_choice",
    text: "Tính năng phần mềm nào sửa lỗi chính tả khi bạn nhập và có thể đoán (các) chữ cái bạn định nhập dựa trên trên các phím gần đó trên bàn phím? Ví dụ: khi bạn đang nhập tin nhắn văn bản, điện thoại của bạn có thể thay thế \"see you latet\" bằng \"see you later\".",
    options: [
      { key: "A", text: "Tự động sửa lỗi (Autocorrect)" },
      { key: "B", text: "Trình kiểm tra ngữ pháp (Grammar Checker)" },
      { key: "C", text: "Tự động hoàn thành (Autocomplete)" },
      { key: "D", text: "Tự động hóa (Automation)" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv2-gm2-q5",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 5,
    type: "multiple_choice",
    text: "Tính năng phần mềm nào sử dụng một vài ký tự đầu tiên mà người dùng nhập để dự đoán phần còn lại của từ và sau đó tự động hoàn thành từ đó?",
    options: [
      { key: "A", text: "Trình kiểm tra ngữ pháp (Grammar Checker)" },
      { key: "B", text: "Autocomplete" },
      { key: "C", text: "Autocorrect" },
      { key: "D", text: "Tự động hóa (Automation)" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-gm2-q6",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 6,
    type: "yes_no",
    text: "Đối với mỗi tuyên bố về Bảy nguyên tắc của thiết kế phần cứng phổ quát, hãy chọn Yes (Đúng) nếu đó là một nguyên tắc hoặc No (Sai) nếu không phải.",
    statements: [
      { text: "Tính linh hoạt khi sử dụng (Flexibility in Use): Thiết kế phù hợp với nhiều sở thích và khả năng của từng cá nhân", correct: "True" },
      { text: "Dễ dàng thay thế (Easy to replace): Thiết kế cho phép thay thế dễ dàng", correct: "False" },
      { text: "Nỗ lực thể chất thấp (Low Physical Effort): Thiết kế có thể được sử dụng hiệu quả, thoải mái và ít mệt mỏi", correct: "True" },
      { text: "Khả năng mở rộng (Scalable): Thiết kế dễ nâng cấp và mở rộng", correct: "False" }
    ]
  },
  {
    id: "lv2-gm2-q7",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 7,
    type: "multiple_choice",
    text: "Có một số lựa chọn về thiết bị in gần bàn làm việc của bạn. Bạn thích một máy in và bạn muốn sử dụng. Bạn có thể làm gì để các lệnh in của bạn luôn được chuyển đến cùng một máy in?",
    options: [
      { key: "A", text: "Di chuyển cáp kết nối máy in trực tiếp với máy tính của bạn" },
      { key: "B", text: "Xóa các máy in khác khỏi hàng đợi in của hệ điều hành của bạn" },
      { key: "C", text: "Đặt máy in yêu thích làm mặc định" },
      { key: "D", text: "Ngắt kết nối cáp với tất cả các máy in khác" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv2-gm2-q8",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 8,
    type: "multiple_choice",
    text: "CPU, card đồ họa và card mạng là loại thiết bị nào?",
    options: [
      { key: "A", text: "Thiết bị nhập (Input device)" },
      { key: "B", text: "Thiết bị lưu trữ (Storage device)" },
      { key: "C", text: "Thiết bị xuất (Output device)" },
      { key: "D", text: "Thiết bị xử lý (Processing device)" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-gm2-q9",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 9,
    type: "multiple_choice",
    text: "Bạn có nhiều tài khoản Microsoft. Một cái dành cho trường học, một cái dùng cho gia đình và một cái dùng cho các hoạt động chơi game của bạn. Bạn có các tệp tin được lưu trữ trên OneDrive được liên kết với từng loại tài khoản. Bạn đã đăng nhập vào tài khoản gia đình của mình, nhưng bạn cần truy cập một tệp tin được chia sẻ với bạn thông qua OneDrive trên tài khoản chơi game của bạn. Bạn nên làm gì?",
    options: [
      { key: "A", text: "Liên kết tài khoản trò chơi của bạn với tài khoản gia đình của bạn" },
      { key: "B", text: "Chuyển từ tài khoản Microsoft gia đình của bạn sang tài khoản Microsoft chơi game của bạn" },
      { key: "C", text: "Thiết lập tài khoản Google được chia sẻ cho cả hai tài khoản Microsoft" },
      { key: "D", text: "Định cấu hình lại cả hai tài khoản Microsoft để sử dụng cùng một ID và mật khẩu đăng nhập" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-gm2-q10",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 10,
    type: "yes_no",
    text: "Giáo viên của bạn đã sắp xếp một chuyến đi thực tế kỹ thuật số cho lớp học khoa học của bạn để thăm một bể cá. Hướng dẫn viên là một nhà giáo dục tại thủy cung, người sẽ tổ chức một cuộc thảo luận trực tiếp với lớp của bạn trong suốt chuyến tham quan bằng cách sử dụng Zoom, Microsoft Teams hoặc một phần mềm hội nghị truyền hình tương tự. Đối với mỗi câu trả lời, hãy chọn Đúng (Yes) nếu nó tuân thủ các nghi thức kỹ thuật số thích hợp hoặc Sai (No) nếu không tuân thủ.",
    statements: [
      { text: "Bật webcam của bạn và tập trung vào màn hình của bạn để người nói, bạn cùng lớp và giáo viên của bạn có thể thấy rằng bạn đang chú ý", correct: "True" },
      { text: "Sử dụng biểu tượng 'Giơ tay' ('Raise Hand') khi thích hợp để đặt câu hỏi", correct: "True" },
      { text: "Tắt tiếng micro (Mute) của bạn và chỉ bật tiếng khi được gọi để thảo luận", correct: "True" },
      { text: "Luôn bật tiếng micro của bạn để hướng dẫn viên có thể nghe thấy phản ứng của bạn với những gì họ đang nói", correct: "False" }
    ]
  },
  {
    id: "lv2-gm2-q11",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 11,
    type: "multiple_choice",
    text: "Ai đó trên trang mạng xã hội yêu thích của bạn vừa đăng thông tin không chính xác về một sự kiện lịch sử của Mỹ. Bạn quyết định trả lời bài viết. Hai câu trả lời nào tuân theo nghi thức kỹ thuật số thích hợp? (Chọn 2)",
    options: [
      { key: "A", text: "\"Nhiều học giả không đồng ý. Đây là một liên kết tới một số sự kiện đối lập về cùng một sự kiện lịch sử này.\"" },
      { key: "B", text: "\"Chỉ có những kẻ khờ mới tin vào quan điểm này. Rõ ràng là bạn đã không thực hiện bất kỳ nghiên cứu nào trước khi đăng!\"" },
      { key: "C", text: "\"THÔNG TIN SAI LẦM! HÃY NHẬN THẤY SỰ THẬT CỦA BẠN TRƯỚC KHI ĐĂNG!\"" },
      { key: "D", text: "\"Bạn đã đọc nghiên cứu về sự kiện này do Hiệp hội Lịch sử Hoa Kỳ xuất bản chưa? Góc nhìn của họ thật thú vị.\"" }
    ],
    correctKeys: ["A", "D"]
  },
  {
    id: "lv2-gm2-q12",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 12,
    type: "multiple_choice",
    text: "Bạn đang tạo một cuộc khảo sát để thu thập phản hồi từ bạn bè về một blog mới mà bạn muốn xuất bản về trượt ván. Ba câu hỏi nào là thích hợp để hỏi trong một cuộc khảo sát để giúp bạn tạo một blog mới? (Chọn ba)",
    options: [
      { key: "A", text: "Phim lướt sóng hay nhất" },
      { key: "B", text: "Đề xuất tiêu đề" },
      { key: "C", text: "Thủ thuật họ muốn học" },
      { key: "D", text: "Thương hiệu yêu thích của ván trượt" },
      { key: "E", text: "Công viên trượt tuyết yêu thích" },
      { key: "F", text: "Họ sẽ trả bao nhiêu cho một ván trượt" }
    ],
    correctKeys: ["B", "C", "D"]
  },
  {
    id: "lv2-gm2-q13",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 13,
    type: "multiple_choice",
    text: "Một người dùng đã xây dựng trang web đầu tiên của cô ấy. Cô ấy đã vật lộn với thiết kế và chức năng, vì vậy cô ấy đang tìm kiếm phản hồi để cung cấp thông tin và cải thiện việc học của mình. Hai ví dụ nào về cách người dùng có thể tìm kiếm phản hồi để cung cấp thông tin và cải thiện việc học của họ? (Chọn 2)",
    options: [
      { key: "A", text: "Gửi một cuộc khảo sát tới người dùng đưa ra phản hồi về trang web" },
      { key: "B", text: "Nhờ người có chuyên môn xem xét trang web và đưa ra phản hồi" },
      { key: "C", text: "Đọc một cuốn sách hay về thiết kế trang web" },
      { key: "D", text: "Chạy quảng cáo trên trang web và theo dõi số lượng nhấp chuột được thu thập" }
    ],
    correctKeys: ["A", "B"]
  },
  {
    id: "lv2-gm2-q14",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 14,
    type: "yes_no",
    text: "Bạn đang tiến hành nghiên cứu bằng cách sử dụng công cụ tìm kiếm. Đối với mỗi tuyên bố về việc sử dụng các cụm từ tìm kiếm chính, hãy chọn Yes (Đúng) nếu nó hiển thị kết quả được mô tả hoặc No (Sai) nếu nó không hiển thị.",
    statements: [
      { text: "mustang, camero, -convertible: Các cụm từ tìm kiếm chính này sẽ trả về tất cả mustang và camero không phải là loại mui trần (convertible)", correct: "True" },
      { text: "Nguya OR Bò OR Lợn OR Cừu: Các cụm từ tìm kiếm chính này sẽ trả về kết quả có chứa ngựa, bò, lợn hoặc cừu", correct: "False" },
      { text: "\"richest people in America\": Các cụm từ tìm kiếm chính quan trọng này sẽ chỉ trả về kết quả có chứa cụm từ chính xác đó", correct: "True" }
    ]
  },
  {
    id: "lv2-gm2-q15",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 15,
    type: "matching",
    text: "Để thu hẹp kết quả trong tìm kiếm của Google, bạn quyết định sử dụng các cụm từ và ký hiệu tìm kiếm chính. Khớp từng cụm từ hoặc ký hiệu tìm kiếm quan trọng trong cột bên trái sang kết quả của nó ở bên phải.",
    pairs: [
      { left: "Tilde Symbol (~)", right: "Tìm kiếm từ đồng nghĩa" },
      { left: "Range or Double Dots (..)", right: "Đại diện cho toàn bộ phạm vi để tìm tất cả các kết quả có liên quan trong phạm vi được chỉ định" },
      { left: "Double Quotes (\"\")", right: "Buộc Google tìm kiếm các từ hoặc cụm từ chính xác được đề cập trong dấu ngoặc kép" },
      { left: "OR as a Boolean value", right: "Sử dụng toán tử này trong tìm kiếm trên Google giữa hai từ khóa sẽ trả về một hoặc cả hai từ khóa trong kết quả" }
    ]
  },
  {
    id: "lv2-gm2-q16",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 16,
    type: "multiple_choice",
    text: "Bạn đang phát nhạc qua máy tính xách tay của mình trong khi làm việc trên bảng tính. Bạn muốn tăng âm lượng. Nhấp vào tính năng cho phép bạn điều chỉnh cài đặt âm lượng trên máy tính Windows này.",
    image: "/images/lv2-gm2-16.jpg",
    options: [
      { key: "A", text: "Vị trí A" },
      { key: "B", text: "Vị trí B" },
      { key: "C", text: "Vị trí C"  },
      { key: "D", text: "Vị trí D" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-gm2-q17",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 17,
    type: "multiple_choice",
    text: "Bạn đang sử dụng điện thoại Android và muốn tắt âm lượng. Nhấp vào tính năng cho phép bạn tắt âm lượng trên điện thoại này.",
    image: "/images/lv2-gm2-17.jpg",
    options: [
      { key: "A", text: "Vị trí A" },
      { key: "B", text: "Vị trí B" },
      { key: "C", text: "Vị trí C" },
      { key: "D", text: "Vị trí D" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv2-gm2-q18",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 18,
    type: "multiple_choice",
    text: "Nhấp vào tùy chọn để chỉnh độ sáng điện thoại.",
    image: "/images/lv2-gm2-18.jpg",
    options: [
      { key: "A", text: "Vị trí A" },
      { key: "B", text: "Vị trí B" },
      { key: "C", text: "Vị trí C" },
      { key: "D", text: "Vị trí D" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-gm2-q19",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 19,
    type: "yes_no",
    text: "Làm thế nào bạn có thể đánh giá mức độ liên quan của một kết quả tìm kiếm hoặc thao tác kỹ thuật số? Đối với mỗi tuyên bố về đánh giá mức độ liên quan, hãy chọn Yes (Đúng) nếu nó xác định mức độ liên quan hoặc No (Sai) nếu nó không xác định mức độ liên quan.",
    statements: [
      { text: "Sử dụng các tùy chọn nâng cao khi tìm kiếm", correct: "True" },
      { text: "Nó không khớp với thông tin bạn cần, nhưng nó có một tiêu đề thực sự thú vị", correct: "False" },
      { text: "Tất cả các kết quả trả về về một công cụ tìm kiếm đều có liên quan", correct: "False" },
      { text: "Các tiêu đề, tóm tắt và năm xuất bản phù hợp với nhu cầu thông tin của bạn", correct: "True" }
    ]
  },
  {
    id: "lv2-gm2-q20",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 20,
    type: "yes_no",
    text: "Người sử dụng lao động đã giao bạn phụ trách viết bản tin hàng tháng cho công ty của bạn. Các phương pháp khác nhau mà bạn có thể sử dụng để thu thập phản hồi từ các nhân viên khác là gì? Đối với mỗi tuyên bố về việc thu thập câu trả lời, hãy chọn Đúng (Yes) nếu phù hợp hoặc Sai (No) nếu không phù hợp.",
    statements: [
      { text: "Viết blog về công việc mà người sử dụng lao động đã giao cho bạn", correct: "False" },
      { text: "Yêu cầu công chúng trên mạng xã hội đóng góp ý kiến của họ", correct: "False" },
      { text: "Gửi một cuộc khảo sát qua email cho tất cả cá nhân viên của công ty", correct: "True" },
      { text: "Đăng biểu mẫu trên trang web của công ty và mời tất cả cá nhân hoàn thành biểu mẫu", correct: "True" }
    ]
  },
  {
    id: "lv2-gm2-q21",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 21,
    type: "multiple_choice",
    text: "Hai tùy chọn nào sau đây giải thích hệ thống lưu trữ dữ liệu trung tâm? (Chọn hai)",
    options: [
      { key: "A", text: "Cơ sở dữ liệu theo dõi hàng tồn kho, đơn đặt hàng của khách hàng và giao hàng" },
      { key: "B", text: "Thiết bị lưu trữ được đặt bên trong máy tính" },
      { key: "C", text: "Hệ thống quản lý tài liệu và thư viện, chẳng hạn như SharePoint" },
      { key: "D", text: "Chia sẻ ổ cứng trên máy tính của bạn với các nhân viên khác" }
    ],
    correctKeys: ["A", "C"]
  },
  {
    id: "lv2-gm2-q22",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 22,
    type: "matching",
    text: "Kết hợp từng kỹ năng bàn phím với kết quả của nó.",
    pairs: [
      { left: "Backspace", right: "Xóa ký tự bên trái" },
      { left: "Delete", right: "Xóa ký tự ở bên phải" },
      { left: "Shift", right: "Chuyển đổi một phím sang ký tự phía trên" },
      { left: "Fn + F1", right: "Khởi chạy trợ giúp (Help)" }
    ]
  },
  {
    id: "lv2-gm2-q23",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 23,
    type: "matching",
    text: "Thứ tự các bước được khuyến nghị mà bạn nên thực hiện để theo dõi các thay đổi trong tài liệu là gì?",
    pairs: [
      { left: "Bước 1", right: "Từ tab Review, hãy bật Track Changes" },
      { left: "Bước 2", right: "Lưu tài liệu và chia sẻ nó với nhóm của bạn" },
      { left: "Bước 3", right: "Chọn cách bạn muốn Đánh dấu (Markup) được hiển thị" },
      { left: "Bước 4", right: "Chọn Accept (đồng ý) hay Reject (không đồng ý) với các thay đổi" }
    ]
  },
  {
    id: "lv2-gm2-q24",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 24,
    type: "matching",
    text: "Khớp từng phím tắt với chức năng của nó.",
    pairs: [
      { left: "Windows Ctrl+X hay MacOS Cmd+X", right: "Cut" },
      { left: "Windows Ctrl+C hay MacOS Cmd+C", right: "Copy" },
      { left: "Windows Ctrl+A hay MacOS Cmd+A", right: "Select All Text" },
      { left: "Windows Ctrl+V hay MacOS Cmd+V", right: "Paste" }
    ]
  },
  {
    id: "lv2-gm2-q25",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 25,
    type: "yes_no",
    text: "Đối với mỗi tuyên bố về phím tắt, hãy chọn Yes (Đúng) nếu nó đúng như đã nêu hoặc No (Sai) nếu không đúng.",
    statements: [
      { text: "Windows Ctrl+P hay MacOS Cmd+P = Paste", correct: "False" },
      { text: "Windows Ctrl+X hay MacOS Cmd+X = Cut", correct: "True" },
      { text: "Windows Ctrl+A hay MacOS Cmd+A = Select All Text", correct: "True" },
      { text: "Windows Ctrl+E hay MacOS Cmd+E = End of Document", correct: "False" }
    ]
  },
  {
    id: "lv2-gm2-q26",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 26,
    type: "multiple_choice",
    text: "Bạn đang viết một bài nghiên cứu về nai ở Bắc Âu. Khoảng 30 phút một lần, bạn lưu một phiên bản mới của tài liệu để theo dõi các thay đổi của mình. Tùy chọn nào sau đây thể hiện quy ước đặt tên tập tin tốt?",
    options: [
      { key: "A", text: "elk.docx elk copy.docx elk draft.docx" },
      { key: "B", text: "elk_original.docx elk_mod.docx elk_changed.docx" },
      { key: "C", text: "elk_draft1.docx elk_draft2.docx elk_FINAL.docx" },
      { key: "D", text: "myelk.docx newalk.docx elk.docx" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv2-gm2-q27",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 27,
    type: "yes_no",
    text: "Đối với mỗi câu lệnh về việc nén tập tin, hãy chọn Yes (Đúng) nếu đó là câu lệnh đúng và chọn No (Sai) nếu không phải là câu lệnh đúng.",
    statements: [
      { text: "Nhiều tập tin có thể được đóng gói bằng một tiện ích tạo một tập tin nén duy nhất có đuôi mở rộng .zip hoặc .rar", correct: "True" },
      { text: "Tập tin nén chiếm nhiều dung lượng lưu trữ hơn tập tin gốc", correct: "False" },
      { text: "Một tập tin nén thường có kích thước nhỏ hơn tập tin gốc", correct: "True" },
      { text: "Chỉ có thể nén các tập tin hình ảnh", correct: "False" }
    ]
  },
  {
    id: "lv2-gm2-q28",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 28,
    type: "multiple_choice",
    text: "Bạn sở hữu dữ liệu của mình trên hai vị trí lưu trữ nào? (Chọn hai)",
    options: [
      { key: "A", text: "Tài khoản Google Drive, Microsoft OneDrive hoặc Apple iCloud của bạn" },
      { key: "B", text: "Bài đăng của bạn trên mạng xã hội" },
      { key: "C", text: "Máy tính bản dùng chung trong phòng thí nghiệm của trường" },
      { key: "D", text: "Thẻ SD trong điện thoại của bạn" }
    ],
    correctKeys: ["A", "D"]
  },
  {
    id: "lv2-gm2-q29",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 29,
    type: "yes_no",
    text: "Các tranh chấp về Bản quyền sử dụng hợp lý (Fair Use copyright) được giải quyết bằng cách xem xét bốn yếu tố nào mà một Thẩm phán sẽ sử dụng để xác định xem Sử dụng hợp lý có bị vi phạm hay không? Đối với mỗi câu lệnh, hãy chọn Đúng nếu nó là một nhân tố hoặc Sai nếu không phải là một nhân tố.",
    statements: [
      { text: "Sao chép một tác phẩm chỉ để thưởng thức cá nhân", correct: "False" },
      { text: "Mục đích và đặc điểm sử dụng của bạn", correct: "True" },
      { text: "Loại tác phẩm được sao chép", correct: "True" },
      { text: "Số lượng và tính chất của phần được lấy", correct: "True" },
      { text: "Cho dù bản sao được sử dụng trong lớp học hay bởi học sinh hay giáo viên", correct: "False" },
      { text: "Ảnh hưởng của việc sử dụng sao chép đối với thị trường tiềm năng của tác phẩm gốc", correct: "True" }
    ]
  },
  {
    id: "lv2-gm2-q30",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 30,
    type: "multiple_choice",
    text: "Bạn đang chuẩn bị bố cục cho một bài thuyết trình PowerPoint do giáo viên của bạn chỉ định. Bạn sẽ được điểm về tính thống nhất về mặt trực quan. Bạn nên tuân theo hai nguyên tắc thống nhất về mặt trực quan nào để tạo cho bản trình bày của mình một cái nhìn chuyên nghiệp? (Chọn hai)",
    options: [
      { key: "A", text: "Nhất quán trên tất cả các yếu tố trình bày, chẳng hạn như phông chữ và màu sắc" },
      { key: "B", text: "Sử dụng một phông chữ và màu sắc khác nhau ở mỗi bên" },
      { key: "C", text: "Tuân theo các nguyên tắc thiết kế về sự liên kết và lặp lại" },
      { key: "D", text: "Áp dụng cùng một bố cục trên mọi trang chiếu" }
    ],
    correctKeys: ["A", "C"]
  },
  {
    id: "lv2-gm2-q31",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 31,
    type: "multiple_choice",
    text: "Bước đầu tiên để tùy chỉnh thông tin cho một đối tượng nhất định là gì?",
    options: [
      { key: "A", text: "Thiết lập mục tiêu giao tiếp" },
      { key: "B", text: "Cá nhân hóa thông tin nhắn của bạn" },
      { key: "C", text: "Xác định đối tượng mục tiêu của bạn" },
      { key: "D", text: "Chuẩn bị phần mở đầu và phần kết luận" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv2-gm2-q32",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 32,
    type: "yes_no",
    text: "Bạn đang học cách xác định phần mở rộng tập tin thích hợp cho từng loại tập tin cụ thể. Đối với mỗi tuyên bố về phần mở rộng tập tin, hãy chọn Yes (Đúng) nếu đúng hoặc No (Sai) nếu sai.",
    statements: [
      { text: "Các tập tin .txt vẫn giữ nguyên định dạng khi được sao chép", correct: "False" },
      { text: "Hình ảnh động có phần mở rộng tập tin .jpg", correct: "False" },
      { text: "Các tập tin có phần mở rộng .pdf trông giống hệt như tập tin gốc nhưng không thể chỉnh sửa được", correct: "True" },
      { text: "Phần mở rộng tập tin thích hợp cho biểu tượng có nền trong suốt sẽ là .png", correct: "True" }
    ]
  },
  {
    id: "lv2-gm2-q33",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 33,
    type: "multiple_choice",
    text: "Khi tương tác với các thành viên của cộng đồng kỹ thuật số, điều quan trọng nhất cần nhớ là gì?",
    options: [
      { key: "A", text: "Tránh đăng hình ảnh" },
      { key: "B", text: "Không sử dụng biểu tượng cảm xúc" },
      { key: "C", text: "Đối xử lịch sự với người khác như cách bạn muốn được đối xử" },
      { key: "D", text: "Sử dụng tên đầy đủ của bạn" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv2-gm2-q34",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 34,
    type: "multiple_choice",
    text: "Bạn cần tìm người chải lông cho chú chó của mình. Tài nguyên trực tuyến nào sẽ là lựa chọn tốt nhất để giúp bạn tìm một dịch vụ cộng đồng, chẳng hạn như người cắt tỉa lông cho chó?",
    options: [
      { key: "A", text: "Google" },
      { key: "B", text: "Facebook" },
      { key: "C", text: "Twitter" },
      { key: "D", text: "Instagram" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv2-gm2-q35",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 35,
    type: "multiple_choice",
    text: "Nhiều hàng hóa và dịch vụ được bán trực tuyến. Ba điều nào là dịch vụ? (Chọn ba)",
    options: [
      { key: "A", text: "Tai nghe bose (Bose earbuds)" },
      { key: "B", text: "Lưu trữ đám mây (Cloud storage)" },
      { key: "C", text: "Ứng dụng trực tuyến (Online applications)" },
      { key: "D", text: "Balo (Backpack)" },
      { key: "E", text: "Điện thoại Samsung Galaxy (Samsung Galaxy phone)" },
      { key: "F", text: "Hỗ trợ máy tính để bàn từ xa (Remote desktop support)" }
    ],
    correctKeys: ["B", "C", "F"]
  },
  {
    id: "lv2-gm2-q36",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 36,
    type: "multiple_choice",
    text: "Các nhà cung cấp có thể bán sản phẩm hàng hóa và cung cấp các dịch vụ trực tuyến. Chọn 2 đáp án được coi là dịch vụ?",
    options: [
      { key: "A", text: "Apple iPad" },
      { key: "B", text: "Hỗ trợ iPhone (iPhone Support)" },
      { key: "C", text: "Microsoft Office 365" },
      { key: "D", text: "Tai nghe Samsung (Samsung earbuds)" }
    ],
    correctKeys: ["B", "C"]
  },
  {
    id: "lv2-gm2-q37",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 37,
    type: "yes_no",
    text: "So sánh chỉnh sửa đồng bộ với chỉnh sửa không đồng bộ bằng cách trả lời các câu lệnh sau. Đối với mỗi câu lệnh, hãy chọn Đúng (Yes) nếu đó là một câu lệnh đúng hoặc Sai (No) nếu không phải.",
    statements: [
      { text: "Chỉnh sửa đồng bộ xảy ra khi những người tham gia làm việc cùng nhau tại cùng một thời điểm, trong thời gian thực", correct: "True" },
      { text: "Chỉnh sửa đồng bộ tốt hơn chỉnh sửa không đồng bộ", correct: "False" },
      { text: "Chỉnh sửa không đồng bộ xảy ra khi những người tham gia công tác vào những thời điểm khác nhau", correct: "True" }
    ]
  },
  {
    id: "lv2-gm2-q38",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 38,
    type: "multiple_choice",
    text: "Hai mục nào là cần thiết để đồng tác giả một tài liệu? (Chọn hai)",
    options: [
      { key: "A", text: "Giấy phép đồng tác giả" },
      { key: "B", text: "Tài liệu thân thiện cho cộng tác" },
      { key: "C", text: "Phần mềm của bên thứ ba" },
      { key: "D", text: "Khu vực lưu trữ dùng chung" }
    ],
    correctKeys: ["B", "D"]
  },
  {
    id: "lv2-gm2-q39",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 39,
    type: "multiple_choice",
    text: "Hai phương pháp nào được sử dụng để xem xét và cung cấp phản hồi cho đồng nghiệp? (Chọn hai)",
    options: [
      { key: "A", text: "Bình luận (Comments)" },
      { key: "B", text: "Theo dõi thay đổi (Track Changes)" },
      { key: "C", text: "Chú thích (Footnotes)" },
      { key: "D", text: "Trích dẫn (Citations)" }
    ],
    correctKeys: ["A", "B"]
  },
  {
    id: "lv2-gm2-q40",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 40,
    type: "multiple_choice",
    text: "Bạn đang cộng tác trực tuyến với các bạn cùng lớp để phê bình các bài thuyết trình PowerPoint của nhau về một chủ đề. Điều nào sau đây thể hiện phép xã giao kỹ thuật số tốt?",
    options: [
      { key: "A", text: "Giễu cợt học sinh về lỗi" },
      { key: "B", text: "Sửa lỗi bằng lời giải thích và giọng điệu tích cực" },
      { key: "C", text: "Đề nghị tác giả thay đổi màu sắc cho mục tiêu yêu thích của bạn" },
      { key: "D", text: "Cung cấp nhận xét về mọi trang trình bày" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-gm2-q41",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 41,
    type: "yes_no",
    text: "Giải thích những nguy cơ tiềm ẩn và hiệu quả của các bài đăng trên phương tiện truyền thông tiêu cực (Negative Media Posts). Đối với mỗi tuyên bố, hãy chọn Yes (Đúng) nếu đó là mối nguy hiểm hoặc hiệu quả hoặc No (Sai) nếu không.",
    statements: [
      { text: "Đọc các bài đăng tiêu cực trên mạng xã hội có thể gây ra trầm cảm và lòng tự trọng thấp", correct: "True" },
      { text: "Hướng các bài đăng tiêu cực đến một cá nhân có thể bị coi là đe dọa trực tuyến", correct: "True" },
      { text: "Nếu bạn thực hiện hiệu quả nhiều bài đăng trên phương tiện truyền thông tiêu cực, nhà cung cấp dịch vụ điện thoại sẽ đóng tài khoản của bạn", correct: "False" }
    ]
  },
  {
    id: "lv2-gm2-q42",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 42,
    type: "yes_no",
    text: "Bạn đã được một công ty phát triển trò chơi máy tính thuê để kiểm tra phần mềm trò chơi tại cơ sở của họ. Công ty có chính sách chống lại việc sử dụng các thiết bị truyền thông không đáng tin cậy. Đối với mỗi tuyên bố, hãy chọn Yes (Đúng) nếu đó là thiết bị truyền thông không đáng tin cậy hoặc No (Sai) nếu không phải.",
    statements: [
      { text: "Một ổ USB nhỏ bạn mang theo từ nhà", correct: "True" },
      { text: "Một ổ USB được công ty cung cấp cho bạn để không bao giờ rời khỏi cơ sở", correct: "False" },
      { text: "Máy tính bảng cá nhân của bạn", correct: "True" }
    ]
  },
  {
    id: "lv2-gm2-q43",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 43,
    type: "multiple_choice",
    text: "Hai câu lệnh nào xác định mã hóa? (Chọn hai)",
    options: [
      { key: "A", text: "Nội dung của một tập tin được mã hóa chỉ có thể đọc được bởi người có khóa mã hóa" },
      { key: "B", text: "Tài liệu được mã hóa yêu cầu mật khẩu hoặc khóa kỹ thuật số trước khi có thể mở được" },
      { key: "C", text: "Tài liệu được mã hóa là các tập tin được đính kèm với chứng chỉ kỹ thuật số" },
      { key: "D", text: "Tập tin được mã hóa là tập tin không thể truyền qua internet" }
    ],
    correctKeys: ["A", "B"]
  },
  {
    id: "lv2-gm2-q44",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 44,
    type: "multiple_choice",
    text: "Các hạn chế của việc chỉnh sửa là gì?",
    options: [
      { key: "A", text: "Bảo vệ tài liệu khỏi bị mở mà không có mật khẩu" },
      { key: "B", text: "Khóa việc sử dụng các phím cụ thể trên bàn phím của bạn" },
      { key: "C", text: "Hạn chế các tính năng đang hoạt động trong một ứng dụng thông qua cấp phép" },
      { key: "D", text: "Giới hạn các thay đổi đối với một phần cụ thể của tài liệu" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-gm2-q45",
    levelId: "level-2",
    subsetId: "GM2",
    questionNumber: 45,
    type: "matching",
    text: "Làm cách nào bạn có thể đánh giá giá trị độ chính xác của kết quả tìm kiếm hoặc hiện vật kỹ thuật số? Khớp tương ứng công cụ xác minh với chức năng của nó ở bên phải.",
    pairs: [
      { right: "ClimateFeedback.org", left: "Mạng lưới các nhà khoa học phân loại thực tế từ hư cấu trong các phương tiện truyền thông về biến đổi khí hậu" },
      { right: "Leadstories.com", left: "Tìm kiếm các câu chuyện thịnh hành, hình ảnh, video chứa thông tin sai lệch để xác minh thực tế nhanh nhất" },
      { right: "Our.news", left: "Cung cấp nhãn dinh dưỡng tương tác đính kèm với tất cả các tin bài trực tuyến dưới dạng tiện ích mở rộng" },
      { right: "Tineye.com", left: "Tìm kiếm hình ảnh đã tải lên và cung cấp kết quả hiển thị các bài báo và ngày tháng mà hình ảnh xuất hiện" }
    ]
  }
]