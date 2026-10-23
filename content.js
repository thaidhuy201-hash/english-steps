export const modules=[
 ['Chào hỏi','Bắt đầu bằng một câu đơn giản.','Hello.','Xin chào.','Good morning.','Chào buổi sáng.','Thank you.','Cảm ơn.'],
 ['Giới thiệu bản thân','Dùng thông tin thật của bạn khi luyện nói.','My name is …','Tên tôi là …','I am from Vietnam.','Tôi đến từ Việt Nam.','Nice to meet you.','Rất vui được gặp bạn.'],
 ['Nhờ giúp đỡ','Bạn luôn có thể yêu cầu nói chậm lại.','Please speak slowly.','Vui lòng nói chậm.','Could you repeat that?','Bạn có thể nhắc lại không?','I do not understand.','Tôi không hiểu.'],
 ['Số và thời gian','Các câu mẫu để luyện; thay giờ cho phù hợp.','I start at nine.','Tôi bắt đầu lúc chín giờ.','There are two boxes.','Có hai cái hộp.','Today is Monday.','Hôm nay là thứ Hai.'],
 ['Tại nơi làm việc','Luyện những yêu cầu ngắn, rõ ràng.','I need help.','Tôi cần giúp đỡ.','Where is the office?','Văn phòng ở đâu?','Is this safe?','Việc này có an toàn không?'],
 ['Kinh nghiệm và kỹ năng','Chỉ nói điều đúng với kinh nghiệm của bạn.','I can work in a team.','Tôi có thể làm việc nhóm.','I am willing to learn.','Tôi sẵn sàng học hỏi.','I have experience in …','Tôi có kinh nghiệm về …'],
 ['Phỏng vấn cơ bản','Câu mẫu để tập; không phải hồ sơ của bạn.','Could you tell me about the role?','Bạn có thể nói về vị trí này không?','What are the working hours?','Giờ làm việc như thế nào?','Thank you for your time.','Cảm ơn bạn đã dành thời gian.'],
 ['Cầu nối IELTS General','Nền tảng đọc và viết; chưa phải đề thi thử.','I am writing to ask about …','Tôi viết thư để hỏi về …','In my opinion, …','Theo ý kiến của tôi, …','Could you send me more information?','Bạn có thể gửi thêm thông tin cho tôi không?']
].map((m,i)=>({id:i,title:m[0],description:m[1],cards:[0,1,2].map((j)=>({id:`${i}-${j}`,module:i,en:m[2+j*2],vi:m[3+j*2]}))}));
export const cards=modules.flatMap(m=>m.cards);
export const checklist=[
 'Tôi đã xác nhận đúng loại bài thi và yêu cầu điểm với đơn vị nhận kết quả.',
 'Tôi hiểu cấu trúc bốn kỹ năng: Nghe, Đọc, Viết và Nói.',
 'Tôi đã luyện Nghe và Đọc bằng tài liệu IELTS chính thức có giới hạn thời gian.',
 'Tôi đã luyện Viết General Training: thư Task 1 và bài luận Task 2.',
 'Tôi đã luyện đủ ba phần thi Nói và nhận phản hồi từ giáo viên có chuyên môn.',
 'Tôi đã làm bài thi thử đầy đủ; kết quả từng kỹ năng đạt mục tiêu do tôi xác định.',
 'Tôi đã kiểm tra giấy tờ, lệ phí và lịch thi với đơn vị tổ chức chính thức.'
];
