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
  },
  // Dữ liệu câu hỏi Level 2 — LV2_OT1 (id: "lv2-ot1-01" -> "lv2-ot1-45", subsetId: "OT1")
  {
    id: "lv2-ot1-01",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 1,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, loại máy in nào phân tán mực dạng bột (Powdered Toner) lên trang khi in?",
    options: [
      { key: "A", text: "Máy in 3D" },
      { key: "B", text: "Máy in laser" },
      { key: "C", text: "Máy in phun (Inkjet)" },
      { key: "D", text: "Máy in nhiệt (Thermal)" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-ot1-02",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 2,
    type: "multiple_choice",
    text: "Loại máy in nào phun mực lên giấy khi in?",
    options: [
      { key: "A", text: "Inkjet" },
      { key: "B", text: "Laser" },
      { key: "C", text: "3D" },
      { key: "D", text: "Thermal" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv2-ot1-03",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 3,
    type: "multiple_choice",
    text: "Bạn hãy nhấp chọn vào tính năng chia sẻ toàn bộ lịch của bạn với người khác trong hình sau đây?",
    options: [
      { key: "A", text: "Vùng 1" },
      { key: "B", text: "Vùng 2" },
      { key: "C", text: "Vùng 3" },
      { key: "D", text: "Vùng 4" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv2-ot1-04",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 4,
    type: "multiple_choice",
    text: "Người dùng nhận thấy rằng máy in mặc định cứ liên tục thay đổi. Bạn hãy cho biết, tuỳ chọn nào cần được tắt để người dùng có thể quản lý được máy in mặc định?",
    options: [
      { key: "A", text: "Chọn máy in mặc định một cách tự động (Set the default printer automatically)" },
      { key: "B", text: "Để Windows quản lý máy in mặc định của tôi (Let Windows manage my default printer)" },
      { key: "C", text: "Đặt máy in mặc định theo địa chỉ" },
      { key: "D", text: "Chọn máy in mặc định là máy in gần nhất (Let the closest printer be my default printer)" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-ot1-05",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 5,
    type: "multiple_choice",
    text: "Trên thiết bị Windows, người ta có thể truy cập thông tin hiển thị từ khu vực nào của Settings?",
    options: [
      { key: "A", text: "Privacy" },
      { key: "B", text: "System" },
      { key: "C", text: "Personalization" },
      { key: "D", text: "Devices" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-ot1-06",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 6,
    type: "multiple_choice",
    text: "Bạn hãy điền vào chỗ trống để hoàn thiện phát biểu sau đây: Đề xuất của Google là một tính năng ______________ được sử dụng phổ biến trong các tìm kiếm.",
    options: [
      { key: "A", text: "Tự động hoàn thành (Autocomplete)" },
      { key: "B", text: "Tự động tìm kiếm (Autosearch)" },
      { key: "C", text: "Tự động chỉnh đúng (Autocorrect)" },
      { key: "D", text: "Tự động sửa lỗi (Autofix)" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv2-ot1-07",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 7,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, vùng nào trong cài đặt (Setting) là tuỳ chọn được sử dụng để kết nổi máy in?",
    options: [
      { key: "A", text: "Networks" },
      { key: "B", text: "Installations" },
      { key: "C", text: "Devices" },
      { key: "D", text: "Printers" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv2-ot1-08",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 8,
    type: "multiple_choice",
    text: "Phát biểu nào sau đây là đúng khi nói về Google Calendars? (Chọn 2)",
    options: [
      { key: "A", text: "Mã màu chỉ có thể thay đổi trong vùng cài đặt (Setting)" },
      { key: "B", text: "Bạn có thể đăng ký lịch trực tuyến" },
      { key: "C", text: "Chỉ có thể đăng ký lịch bằng cách sử dụng URL" },
      { key: "D", text: "Những ngày lễ có thể được thêm vào" }
    ],
    correctKeys: ["B", "D"]
  },
  {
    id: "lv2-ot1-09",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 9,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, phát biểu nào sau đây là đúng về điện toán đám mây? (Chọn 2)",
    options: [
      { key: "A", text: "Điện toán đám mây chỉ giới hạn trong Database" },
      { key: "B", text: "Dữ liệu trong điện toán đám mây được lưu trữ trên một máy chủ từ xa" },
      { key: "C", text: "Máy chủ có thể được truy cập thông qua internet" },
      { key: "D", text: "Luôn phải trả phí cho dung lượng trên điện toán đám mây" }
    ],
    correctKeys: ["B", "C"]
  },
  {
    id: "lv2-ot1-10",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 10,
    type: "yes_no",
    text: "Với mỗi câu phát biểu về tính bảo mật của thiết bị đa phương tiện di động, hãy chọn Đúng hoặc Sai.",
    statements: [
      { text: "Bạn nên tắt tính năng tự động chạy và tự động phát cho tất cả các thiết bị đa phương tiện di động", correct: "True" },
      { text: "Bạn nên lưu trữ các công việc và tập tin cá nhân của mình trên các thiết bị riêng biệt, không được cắm thiết bị cá nhân vào máy tính làm việc hoặc ngược lại", correct: "True" },
      { text: "Nếu bạn tìm thấy một thiết bị lưu trữ phương tiện truyền thông và không biết nó thuộc về ai, hãy cắm thiết bị đó vào máy tính của bạn để tìm thông tin về chủ nhân của nó", correct: "False" }
    ]
  },
  {
    id: "lv2-ot1-11",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 11,
    type: "multiple_choice",
    text: "Hai nguyên tắc thiết kế chung cho phần cứng máy tính là gì? (Chọn 2)",
    options: [
      { key: "A", text: "Sử dụng công bằng: Thiết kế hữu ích và có thể bán được cho nhiều người với các khả năng khác nhau" },
      { key: "B", text: "Duy trì chi phí thấp: Sử dụng các bộ phận ít tốn kém hơn bất cứ khi nào có thể để giảm chi phí lắp ráp" },
      { key: "C", text: "Khả năng chịu lỗi: Giảm thiểu các mối nguy hiểm và hậu quả bất lợi của các hành động ngẫu nhiên hoặc ngoài ý muốn" },
      { key: "D", text: "Liên kết với internet vạn vật: Triển khai chức năng trực tuyến bất cứ khi nào có thể để cải thiện trải nghiệm người dùng" }
    ],
    correctKeys: ["A", "C"]
  },
  {
    id: "lv2-ot1-12",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 12,
    type: "yes_no",
    text: "Xác định ưu điểm của Máy in phun và Máy in laser. Để trả lời, bạn hãy chọn loại máy in tương ứng với từng ưu điểm.",
    statements: [
      { text: "Tài liệu khô mực ngay khi in ra", correct: "False" },
      { text: "Thân thiện với môi trường hơn", correct: "True" },
      { text: "Phù hợp để in ảnh chất lượng cao", correct: "True" },
      { text: "Thích hợp để in tài liệu số lượng lớn với chi phí thấp", correct: "False" }
    ]
  },
  {
    id: "lv2-ot1-13",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 13,
    type: "multiple_choice",
    text: "Loại USB nào có tốc độ truyền có thể lên đến 12 Mbps?",
    options: [
      { key: "A", text: "USB 3.1" },
      { key: "B", text: "USB 3.0" },
      { key: "C", text: "USB 2.0" },
      { key: "D", text: "USB 1.0" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-ot1-14",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 14,
    type: "yes_no",
    text: "Với mỗi câu phát biểu về hệ thống lưu trữ dữ liệu trung tâm, hãy chọn Đúng hoặc Sai.",
    statements: [
      { text: "Khi bạn tải một tập tin lên hệ thống lưu trữ dữ liệu trung tâm, tập tin sẽ bị xóa khỏi máy tính của bạn", correct: "False" },
      { text: "Bạn có thể sử dụng chương trình FTP để tải lên và tải xuống các tập tin từ hệ thống lưu trữ dữ liệu trung tâm", correct: "True" },
      { text: "Nhiều hệ thống lưu trữ dữ liệu trung tâm có thể tự động sao lưu các tập tin từ máy tính và cập nhật phiên bản tập tin mới nhất cho máy tính của bạn", correct: "True" }
    ]
  },
  {
    id: "lv2-ot1-15",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 15,
    type: "multiple_choice",
    text: "Bạn cần thêm cuộc họp Hội đồng sinh viên diễn ra vào tháng tới vào lịch của bạn. Bạn có thể lựa chọn hai phần tử nào sau đây để mở hộp thoại sự kiện? (Chọn 2)",
    options: [
      { key: "A", text: "area1" },
      { key: "B", text: "area2" }
    ],
    correctKeys: ["A", "B"]
  },
  {
    id: "lv2-ot1-16",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 16,
    type: "multiple_choice",
    text: "Trong Outlook, điều gì thay đổi cuộc hẹn (Appointment) thành cuộc họp (Meeting)?",
    options: [
      { key: "A", text: "Chọn hộp kiểm Meeting" },
      { key: "B", text: "Đặt thời gian bắt đầu và kết thúc" },
      { key: "C", text: "Chọn hộp kiểm All day" },
      { key: "D", text: "Thêm người được mời" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-ot1-17",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 17,
    type: "multiple_choice",
    text: "Khu vực cài đặt nào trên thiết bị Windows cho phép người dùng kiểm soát cách nhận thông báo (Notification)?",
    options: [
      { key: "A", text: "Focus Assist" },
      { key: "B", text: "Action Center" },
      { key: "C", text: "Multitasking" },
      { key: "D", text: "Shared Experiences" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv2-ot1-18",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 18,
    type: "multiple_choice",
    text: "Nhiều hàng hóa và dịch vụ được bán trực tuyến. Tùy chọn nào sau đây là dịch vụ? (Chọn 3)",
    options: [
      { key: "A", text: "Tai nghe Bose (Bose earbuds)" },
      { key: "B", text: "Ứng dụng trực tuyến (Online applications)" },
      { key: "C", text: "Hỗ trợ máy tính để bàn từ xa (Remote desktop support)" },
      { key: "D", text: "Điện thoại Samsung Galaxy (Samsung Galaxy phone)" },
      { key: "E", text: "Balo (Backpack)" },
      { key: "F", text: "Lưu trữ đám mây (Cloud storage)" }
    ],
    correctKeys: ["B", "C", "F"]
  },
  {
    id: "lv2-ot1-19",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 19,
    type: "multiple_choice",
    text: "Trên thiết bị Windows, từ khu vực cài đặt nào người ta có thể thay đổi màu nền của màn hình?",
    options: [
      { key: "A", text: "Display" },
      { key: "B", text: "Desktop" },
      { key: "C", text: "Settings" },
      { key: "D", text: "Personalization" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-ot1-20",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 20,
    type: "multiple_choice",
    text: "Billy đang đánh máy bài viết của mình. Anh ấy gõ 'cia' và khi gõ phím cách, từ đó đổi thành 'cái'. Tính năng nào tạo nên sự thay đổi này?",
    options: [
      { key: "A", text: "Tự động sửa (AutoCorrect)" },
      { key: "B", text: "Trình soát chính tả (Spelling Checker)" },
      { key: "C", text: "Tự động định dạng (AutoFormat)" },
      { key: "D", text: "Xác thực dữ liệu (Data Validation)" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv2-ot1-21",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 21,
    type: "matching",
    text: "Nối từng phần mở rộng tập tin với mô tả định dạng tập tin tương ứng. Để trả lời, hãy di chuyển từng mô tả tương ứng ở bên phải sang bên trái sao cho phù hợp.",
    pairs: [
      { left: "Gif", right: "Tập tin hình vạch quét có độ nén cao hỗ trợ chứa nhiều hình ảnh trong một tập tin" },
      { left: "Png", right: "Tập tin hình vạch quét với tính năng nén không mất dữ liệu, hỗ trợ 'hình ảnh trong suốt, ánh xạ màu và màu sắc trung thực 48 bit'" },
      { left: "Txt", right: "Tập tin văn bản chỉ hỗ trợ văn bản thuần ở định dạng tuyến tính" },
      { left: "Rtf", right: "Tập tin văn bản hỗ trợ văn bản và đồ họa được định dạng" }
    ]
  },
  {
    id: "lv2-ot1-22",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 22,
    type: "matching",
    text: "Nối từng loại quyền truy cập tập tin với định nghĩa tương ứng. Để trả lời, hãy ghép từng loại quyền truy cập từ cột bên phải sang cột bên trái tương ứng.",
    pairs: [
      { left: "Sửa (Modify)", right: "Thêm dữ liệu vào tập tin và đọc hoặc thay đổi các thuộc tính của tập tin" },
      { left: "Ghi (Write)", right: "Xem nội dung tập tin, thêm dữ liệu vào tập tin và xóa" },
      { left: "Đọc & Thực thi (Read & Execute)", right: "Xem hoặc truy cập nội dung tập tin và chạy tập tin nếu đó là một chương trình" },
      { left: "Đọc (Read)", right: "Xem hoặc truy cập nội dung tập tin" }
    ]
  },
  {
    id: "lv2-ot1-23",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 23,
    type: "multiple_choice",
    text: "Mục nào của Outlook Calendar kéo dài cả ngày theo mặc định?",
    options: [
      { key: "A", text: "Meeting" },
      { key: "B", text: "Event" },
      { key: "C", text: "Special" },
      { key: "D", text: "Appointment" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-ot1-24",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 24,
    type: "multiple_choice",
    text: "Những cài đặt nào được lưu trữ trong phần autofill của Google Chrome? (Chọn 3)",
    options: [
      { key: "A", text: "Passwords" },
      { key: "B", text: "Usernames" },
      { key: "C", text: "Payment methods" },
      { key: "D", text: "Phrases" },
      { key: "E", text: "Address information" }
    ],
    correctKeys: ["A", "C", "E"]
  },
  {
    id: "lv2-ot1-25",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 25,
    type: "multiple_choice",
    text: "Đâu là quá trình chuyển đổi dữ liệu sang dạng thức không thể nhận dạng yêu cầu sử dụng khóa để trả dữ liệu về dạng văn bản thuần?",
    options: [
      { key: "A", text: "Hàm băm (Hashing)" },
      { key: "B", text: "Nén (Compression)" },
      { key: "C", text: "Mã hóa (Encoding)" },
      { key: "D", text: "Mã hóa (Encryption)" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-ot1-26",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 26,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, biểu tượng hình mặt trời trên bảng điều khiển thường đại diện cho cài đặt nào sau đây?",
    options: [
      { key: "A", text: "Độ tối (Darkness)" },
      { key: "B", text: "Độ tương phản (Contrast)" },
      { key: "C", text: "Tông màu màn hình (Screen tone)" },
      { key: "D", text: "Độ sáng (Brightness)" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-ot1-27",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 27,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, tính năng nào được sử dụng trong nhiều ứng dụng để thay thế những từ bị sai chính tả bằng các từ dự định một cách tự động?",
    options: [
      { key: "A", text: "Autofix" },
      { key: "B", text: "Autocorrect" },
      { key: "C", text: "Autofill" },
      { key: "D", text: "Autocomplete" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-ot1-28",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 28,
    type: "multiple_choice",
    text: "Phần cứng nào trong máy tính xử lý hiệu suất của video và đồ họa?",
    options: [
      { key: "A", text: "VRAM" },
      { key: "B", text: "CPU" },
      { key: "C", text: "VPU" },
      { key: "D", text: "GPU" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-ot1-29",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 29,
    type: "multiple_choice",
    text: "Nội dung hiển thị trên màn hình máy tính của bạn rất khó xem, vùng tối của màn hình quá tối, còn vùng sáng của màn hình quá sáng. Bạn cần điều chỉnh màn hình để có thể xem nội dung. Bạn nên điều chỉnh cài đặt màn hình nào?",
    options: [
      { key: "A", text: "Nguồn đầu vào (Input Source)" },
      { key: "B", text: "Độ tương phản (Contrast)" },
      { key: "C", text: "Độ sáng (Brightness)" },
      { key: "D", text: "Độ sắc nét (Sharpness)" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-ot1-30",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 30,
    type: "yes_no",
    text: "Với mỗi câu phát biểu về bộ xử lý trung tâm (CPU), hãy chọn Đúng hoặc Sai.",
    statements: [
      { text: "Hầu hết các bộ xử lý trung tâm hiện đại đều được xây dựng để hỗ trợ các hệ thống 64-bit", correct: "True" },
      { text: "CPU thường có bộ tản nhiệt khí hoặc tản nhiệt nước đi kèm", correct: "True" },
      { text: "Tốc độ CPU ảnh hưởng đến số khung hình trên giây (fps) hiển thị trong trò chơi 3D", correct: "True" }
    ]
  },
  {
    id: "lv2-ot1-31",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 31,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, thiết bị xuất nào sau đây được sử dụng để điều khiển âm thanh?",
    options: [
      { key: "A", text: "Mic (Microphone)" },
      { key: "B", text: "Loa (Speakers)" },
      { key: "C", text: "Chuột máy tính (Mouse)" },
      { key: "D", text: "Bàn phím (Keyboard)" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-ot1-32",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 32,
    type: "multiple_choice",
    text: "Bạn vừa đăng ký một tài khoản trên Google. Tài khoản mới của bạn sử dụng đăng nhập một lần (SSO). Bạn hãy cho biết, tùy chọn nào sau đây là lợi ích của đăng nhập một lần (SSO)? (Chọn 3)",
    options: [
      { key: "A", text: "Giúp tài khoản của bạn có bảo mật mạnh mẽ hơn" },
      { key: "B", text: "SSO thuộc sở hữu và điều hành của chính phủ" },
      { key: "C", text: "Bạn chỉ cần nhớ một tập hợp các chi tiết đăng nhập" },
      { key: "D", text: "Bạn có thể đăng nhập mà không cần sử dụng mật khẩu" },
      { key: "E", text: "Sau khi đăng nhập, bạn có thể truy cập email, lưu trữ tài liệu, ứng dụng và các trang web khác của mình với toàn quyền truy cập" },
      { key: "F", text: "Thông tin xác thực được lưu trữ trên Amazon, Facebook và Google" }
    ],
    correctKeys: ["A", "C", "E"]
  },
  {
    id: "lv2-ot1-33",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 33,
    type: "multiple_choice",
    text: "Phát biểu nào sau đây giúp phân biệt giữa tập tin chỉ đọc (Read-Only) và tập tin đọc ghi (Read-Write)? (Chọn 2)",
    options: [
      { key: "A", text: "Người dùng khác có thể thay đổi tập tin có thuộc tính đọc ghi (Read-Write)" },
      { key: "B", text: "Các tập tin được đặt thuộc tính chỉ đọc (Read-Only) theo mặc định" },
      { key: "C", text: "Tập tin được đặt thuộc tính chỉ đọc (Read-Only) được bảo vệ khỏi bị sao chép" },
      { key: "D", text: "Một tập tin được đặt thuộc tính chỉ đọc (Read-Only) có thể được xem nhưng không được sửa đổi" }
    ],
    correctKeys: ["A", "D"]
  },
  {
    id: "lv2-ot1-34",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 34,
    type: "yes_no",
    text: "Sau đây là một số phát biểu về việc nén tập tin. Bạn hãy chọn Đúng hoặc Sai:",
    statements: [
      { text: "Nhiều tập tin có thể được đóng gói bằng một tiện ích tạo một tập tin nén duy nhất có đuôi tập tin .zip hoặc .rar", correct: "True" },
      { text: "Tập tin nén chiếm nhiều dung lượng lưu trữ hơn tập tin gốc", correct: "False" },
      { text: "Một tập tin nén thường có kích thước nhỏ hơn tập tin gốc", correct: "True" },
      { text: "Chỉ có thể nén các tập tin hình ảnh", correct: "False" }
    ]
  },
  {
    id: "lv2-ot1-35",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 35,
    type: "multiple_choice",
    text: "Bạn hãy chọn hai tùy chọn nào sau đây là dịch vụ? (Chọn 2)",
    options: [
      { key: "A", text: "Trò chơi" },
      { key: "B", text: "Sửa ống nước" },
      { key: "C", text: "Quần áo" },
      { key: "D", text: "Cắt tóc" }
    ],
    correctKeys: ["B", "D"]
  },
  {
    id: "lv2-ot1-36",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 36,
    type: "multiple_choice",
    text: "Bạn đang ở trong một căn phòng có nhiều tiếng ồn. Bạn kết nối tai nghe với máy tính để có thể nghe âm thanh tốt hơn nhưng âm thanh vẫn phát ra qua loa ngoài của máy tính thay vì tai nghe. Bạn cần âm thanh của máy tính phát ra qua tai nghe. Bạn nên làm gì?",
    options: [
      { key: "A", text: "Quản lý thiết bị đầu vào" },
      { key: "B", text: "Đặt cấu hình cài đặt âm thanh trợ năng" },
      { key: "C", text: "Quản lý thiết bị đầu ra" },
      { key: "D", text: "Tắt tiếng loa máy tính" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv2-ot1-37",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 37,
    type: "multiple_choice",
    text: "Loại tài khoản nào được yêu cầu để đăng các mục trong diễn đàn cộng đồng Microsoft?",
    options: [
      { key: "A", text: "Microsoft" },
      { key: "B", text: "Domain" },
      { key: "C", text: "Windows" },
      { key: "D", text: "Azure" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv2-ot1-38",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 38,
    type: "multiple_choice",
    text: "Bạn hãy cho biết cách sử dụng tính năng trò chuyện (Chat) trong tình huống nào sau đây là phù hợp nhất trong hội thảo trên web (Webinar)?",
    options: [
      { key: "A", text: "Bắt chuyện với đồng nghiệp" },
      { key: "B", text: "Đặt câu hỏi khi có thời gian thích hợp" },
      { key: "C", text: "Chèn kiến thức để thêm vào bài thuyết trình" },
      { key: "D", text: "Nhận xét về bài thuyết trình" }
    ],
    correctKeys: ["B"]
  },
  {
    id: "lv2-ot1-39",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 39,
    type: "multiple_choice",
    text: "Bạn hãy cho biết ứng dụng nào sau đây có khả năng tạo cuộc họp mặt trực tuyến?",
    options: [
      { key: "A", text: "OneDrive" },
      { key: "B", text: "Google Drive" },
      { key: "C", text: "Zoom" },
      { key: "D", text: "Dropbox" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv2-ot1-40",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 40,
    type: "multiple_choice",
    text: "Bạn hãy cho biết khi sử dụng tất cả chữ in hoa trong một thư điện tử (Email) sẽ truyền đạt điều gì?",
    options: [
      { key: "A", text: "La hét" },
      { key: "B", text: "Khẩn cấp" },
      { key: "C", text: "Nhấn mạnh" },
      { key: "D", text: "Tâm quan trọng" }
    ],
    correctKeys: ["A"]
  },
  {
    id: "lv2-ot1-41",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 41,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, nếu một người dùng muốn gửi tin nhắn tức thời cho đồng nghiệp, nhưng trạng thái tài khoản của đồng nghiệp đang không khả dụng (Unavailable) thì cách nào sau đây là tốt nhất để người dùng có thể sử dụng?",
    options: [
      { key: "A", text: "Email cho đồng nghiệp" },
      { key: "B", text: "Gọi điện cho đồng nghiệp" },
      { key: "C", text: "Cứ gửi tin nhắn" },
      { key: "D", text: "Chờ cho đến khi tài khoản của đồng nghiệp khả dụng" }
    ],
    correctKeys: ["D"]
  },
  {
    id: "lv2-ot1-42",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 42,
    type: "multiple_choice",
    text: "Người dùng muốn xem các câu hỏi và câu trả lời phổ biến về Microsoft Outlook. Tùy chọn nào sau đây là phù hợp nhất để giúp người dùng có thể xem các câu hỏi và câu trả lời?",
    options: [
      { key: "A", text: "Tell me" },
      { key: "B", text: "Help" },
      { key: "C", text: "Community forum" },
      { key: "D", text: "What's New?" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv2-ot1-43",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 43,
    type: "multiple_choice",
    text: "Bạn hãy cho biết, bạn nên làm gì trước khi bắt đầu một cuộc hội thoại bằng loa ngoài?",
    options: [
      { key: "A", text: "Kiểm tra âm lượng trên thiết bị liên lạc đầu ra" },
      { key: "B", text: "Bật loa điện thoại và bắt đầu nói chuyện" },
      { key: "C", text: "Xin phép để tiếp tục cuộc trò chuyện trên loa ngoài" },
      { key: "D", text: "Yêu cầu đầu dây bên kia nói để kiểm tra âm lượng" }
    ],
    correctKeys: ["C"]
  },
  {
    id: "lv2-ot1-44",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 44,
    type: "multiple_choice",
    text: "Bạn hãy chọn hai phát biểu đúng khi lựa chọn địa điểm tổ chức hội nghị truyền hình? (Chọn 2)",
    options: [
      { key: "A", text: "Địa điểm nên cố gắng tìm một khu vực có ít hoặc không có tiếng ồn xung quanh" },
      { key: "B", text: "Địa điểm nên có chỗ ngồi nơi có ánh sáng tốt" },
      { key: "C", text: "Địa điểm luôn phải ở trong một tòa nhà chuyên nghiệp" },
      { key: "D", text: "Địa điểm nên tránh xa các thiết bị di động" }
    ],
    correctKeys: ["A", "B"]
  },
  {
    id: "lv2-ot1-45",
    levelId: "level-2",
    subsetId: "OT1",
    questionNumber: 45,
    type: "multiple_choice",
    text: "Hai nhận định nào là đúng về một người nhạy cảm với sự đa dạng văn hóa? (Chọn 2)",
    options: [
      { key: "A", text: "Người ta nên nghiên cứu các chuẩn mực văn hóa cho các khách hàng quốc tế mà họ sẽ gặp" },
      { key: "B", text: "Giao tiếp đồng bộ có thể tốt hơn một cuộc họp trực tuyến" },
      { key: "C", text: "Người ta nên xem liệu có cần thông dịch viên cho cuộc họp giữa các bên với nhiều ngôn ngữ mẹ đẻ hay không" },
      { key: "D", text: "Tất cả các nền văn hóa đều cảm thấy thoải mái với hội nghị truyền hình" }
    ],
    correctKeys: ["A", "C"]
  }
]





