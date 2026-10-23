# Từng bước · English Steps

## Mới: phòng luyện nói miễn phí (v1.1)

Mở **Phòng luyện nói mới** tại https://thaidhuy201-hash.github.io/english-steps/#studio . Có 6 bài phát âm với hướng dẫn miệng bằng tiếng Việt, cặp từ để nghe phân biệt, câu ứng dụng; 3 hội thoại theo kịch bản (gặp gỡ, công việc, phỏng vấn), nhân vật CSS chuyển động theo trạng thái giọng đọc và nút đọc hướng dẫn tiếng Việt.

Thu âm nghe lại dùng MediaRecorder/getUserMedia trên HTTPS hoặc localhost. Chỉ bắt đầu sau khi người dùng chọn đồng ý và bấm thu âm; giới hạn 60 giây; dừng micro khi rời màn hình. Bản ghi chỉ ở bộ nhớ tab, không tải lên, không đưa vào bản sao lưu và không được lưu khi rời phòng luyện. Thiết bị cần micro và trình duyệt hỗ trợ; nếu không có, vẫn có thể nhập chữ hoặc tự đọc.

Nhận dạng là nút riêng, yêu cầu đồng ý riêng vì trình duyệt có thể xử lý âm thanh qua mạng. Từ trùng được đánh dấu xanh, từ chưa có màu cam theo so khớp văn bản. Không chấm âm vị, trọng âm, độ trôi chảy hoặc điểm phát âm. Hội thoại dùng câu hỏi soạn sẵn, không có AI đánh giá câu trả lời. Không có API trả phí. Giọng tiếng Việt/Anh phụ thuộc giọng cài trên thiết bị.

Chuyển động có thể tắt bằng nút trong studio, tự giảm theo prefers-reduced-motion và dừng trong chế độ tập trung. Lựa chọn bật/tắt lưu cục bộ riêng; dữ liệu học v1 vẫn được giữ. Nhân vật được vẽ bằng CSS, không cần tải ảnh hoặc video ngoài. Mã mới: `studio.js`, `speaking.js`; static hosting cần phục vụ cả hai tệp này (workflow đã cập nhật). Kiểm thử: 11 bài về lịch ôn, dữ liệu, so khớp từ và nội dung; micro/giọng đọc cần kiểm tra trên thiết bị thật.

Web app tiếng Việt dành cho người bắt đầu học tiếng Anh. Không cần tài khoản, cài thư viện hay khóa API. Nội dung mẫu không đại diện cho thông tin cá nhân của người dùng.

## Chạy ngay trên máy

1. Cài Node.js 20 trở lên từ https://nodejs.org nếu chưa có.
2. Mở terminal trong thư mục chứa README này.
3. Chạy `node server.mjs`.
4. Mở http://localhost:4173 trên cùng máy. Dừng bằng Ctrl+C.

Không mở trực tiếp index.html bằng file:// vì trình duyệt hạn chế JavaScript modules. Không cần npm install. Nếu có npm, `npm start` cũng chạy được.

## Cách dùng

- Vào **Hôm nay → Bắt đầu bài hôm nay**. Thẻ mới có câu mẫu, bản dịch và nút nghe, sau đó bạn chọn nghĩa đúng. Thẻ ôn hỏi trực tiếp để luyện nhớ lại.
- Trong **Dữ liệu & cài đặt**, chọn 3, 5 hoặc 8 câu tối đa mỗi lượt. Một lượt thường mất khoảng 3–8 phút, tùy nhịp của bạn; không có đếm ngược.
- App ưu tiên thẻ đến hạn; câu đúng được ôn sau 1, 3, 7, 14, 30 ngày, rồi giữ khoảng 30 ngày. Câu sai hẹn lại sau 5 phút. Đây là thuật toán hộp đơn giản, không phải mô hình y khoa hay AI cá nhân hóa.
- Nếu tỷ lệ đúng trong tối đa 10 câu gần nhất dưới 60%, lượt tiếp theo chỉ thêm tối đa 1 thẻ mới; bình thường tối đa 3. Học hết thẻ mới thì chỉ còn thẻ đến hạn. Nút học thêm cho phép học nhiều lượt/ngày.
- Một thẻ được gọi là **ôn vững** khi đang ở hộp 3 trở lên, không tương đương thành thạo ngôn ngữ. Trả lời sai đưa thẻ về hộp 0. Số ngày học không yêu cầu liên tiếp.
- **Bài học & ôn tập** có 8 chủ đề, 24 câu. Xem chủ đề là luyện tự do, không thay đổi lịch ôn hay số câu đã hoàn thành.
- **Nghe & nói** có giọng đọc chậm, nhận dạng lời nói nếu hỗ trợ, đối chiếu văn bản và bản nháp phỏng vấn tự lưu khi bấm nút. Mẫu có dấu … cần thay bằng thông tin thật; so khớp văn bản không phù hợp để chấm câu trả lời mở.
- **Chuẩn bị chứng chỉ** là checklist tự đánh giá. App không cấp chứng chỉ, không dự đoán band IELTS, không bảo đảm việc làm hoặc kết quả hồ sơ.
- Bật **Chế độ tập trung** để ẩn thanh bên. Không có quảng cáo, hình động gây xao nhãng hay phạt bỏ ngày học.

## Dữ liệu, API và hỗ trợ trình duyệt

- Tiến độ, lịch ôn, checklist và bản nháp dùng localStorage, tách theo trình duyệt và địa chỉ website. Chuyển từ localhost sang website công khai cần xuất/nhập sao lưu. Không đồng bộ thiết bị, không máy chủ dữ liệu.
- Xuất JSON trước khi xóa dữ liệu trình duyệt. Nhập JSON kiểm tra cấu trúc rồi yêu cầu xác nhận thay thế. Tệp có thể chứa bản nháp cá nhân; giữ riêng tư và không đưa lên GitHub.
- Nghe dùng Web Speech API SpeechSynthesis, phụ thuộc giọng tiếng Anh cài trên thiết bị và cách trình duyệt cung cấp giọng. Có thể cần mạng. Không phải âm thanh người thật.
- Nói dùng SpeechRecognition / webkitSpeechRecognition khi có. Hỗ trợ không đồng đều; cần cấp quyền micro, thường yêu cầu HTTPS hoặc localhost. Nhà cung cấp trình duyệt có thể xử lý âm thanh trên máy chủ. App giải thích và yêu cầu người dùng chọn đồng ý trước khi gọi micro. App không ghi hay lưu tệp âm thanh; văn bản nhận dạng chỉ nằm trong màn hình hiện tại. Luôn có lựa chọn tự nói hoặc gõ văn bản.
- Không có đánh giá phát âm, sửa ngữ pháp bằng AI hoặc chấm IELTS tự động. Chức năng đó cần dịch vụ bổ sung, ngân sách API và thiết kế quyền riêng tư; tuyệt đối không nhúng API key bí mật vào mã trình duyệt.
- Google Fonts là tài nguyên ngoài duy nhất trong CSS. Có phông hệ thống dự phòng. Muốn tránh yêu cầu mạng này, xóa dòng @import đầu styles.css. Không có bộ phân tích theo dõi.
- Bản MVP hỗ trợ bố cục điện thoại, nhưng chưa có PWA/offline cache, tài khoản hay thông báo tự động. 24 câu là khởi đầu, không phải khóa IELTS hoàn chỉnh. App hỗ trợ cách học, không chẩn đoán hay điều trị chú ý/trí nhớ.

## Kiểm tra

Chạy `node --test tests/learning.test.mjs`, rồi `node --check app.js` và `node --check learning.js`. Nếu có npm, dùng `npm test` và `npm run check`.

Kiểm thử tự động bao phủ lịch ôn, ưu tiên thẻ đến hạn, giảm thẻ mới khi khó nhớ, không ôn sớm, ngày theo thiết bị và kiểm tra sao lưu. Lần xây dựng này: 6/6 bài kiểm thử đạt; mã JavaScript qua kiểm tra cú pháp; máy chủ khởi động và báo địa chỉ local. Kết nối HTTP kiểm chứng bị môi trường chặn (EACCES), nên chưa xác nhận phản hồi HTTP. Công cụ trình duyệt không truy cập được localhost trong môi trường xây dựng, nên chưa xác minh trực quan và chưa thử micro/âm thanh thực tế.

Trước khi dùng rộng rãi, kiểm tra thủ công: lượt mới → trả lời sai/đúng → tải lại còn tiến độ; mở/đóng chủ đề; xuất/nhập; từ chối micro và dùng nhập chữ; xem trên điện thoại. Kiểm tra giọng đọc và nhận dạng trên thiết bị thật. Không dùng dữ liệu cá nhân thật trong repo kiểm thử.

## Đưa mã lên GitHub và xuất bản

Mã nguồn công khai: https://github.com/thaidhuy201-hash/english-steps . Không gửi mật khẩu hay token trong chat.

Nếu muốn tự thực hiện:

1. Tạo repository trống trên GitHub. Chọn public nếu bạn muốn mọi người đọc mã. Tính khả dụng của Pages cho repo private phụ thuộc gói tài khoản.
2. Tải toàn bộ nội dung thư mục này lên **gốc repository**, gồm thư mục ẩn `.github`. Đừng tải tệp sao lưu tiến độ.
3. Hoặc dùng Git từ thư mục này (thay URL bằng repo thật của bạn):

```sh
git init
git add .
git commit -m "Add Vietnamese English-learning MVP"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

4. Trong repository → **Settings → Pages → Source**, chọn **GitHub Actions**. Workflow `.github/workflows/pages.yml` đã có sẵn: kiểm thử, kiểm tra cú pháp, đóng gói 5 tệp web và triển khai Pages. Nếu lần push đầu thất bại do chưa bật Pages, bật rồi vào **Actions → Publish static app to GitHub Pages → Run workflow**.
5. Lấy URL từ kết quả workflow / Settings → Pages. Không có URL thật cho tới khi deploy thành công. Không đổi tên tệp để giữ đường dẫn tương đối khi chạy trong project Pages.

Website công khai chứa mã và nội dung học. Tiến độ localStorage của người học không đi kèm upload/deploy. Các phiên bản sau thay đổi cấu trúc dữ liệu cần migration thay vì xóa dữ liệu cũ.

Có thể dùng static hosting khác: publish trực tiếp `index.html`, `styles.css`, `app.js`, `learning.js`, `content.js`; không có bước build. Dùng HTTPS để hỗ trợ micro. `server.mjs` là máy chủ phát triển, không phải máy chủ production.

## Cấu trúc mã

- `content.js`: câu học, nhóm chủ đề, checklist.
- `learning.js`: logic lịch ôn, chọn bài, kiểm tra bản sao lưu.
- `app.js`: giao diện và tương tác; dùng escape HTML khi hiển thị bản nháp.
- `styles.css`, `index.html`: thiết kế responsive.
- `server.mjs`: máy chủ local giới hạn chỉ phục vụ tệp web.
- `tests/learning.test.mjs`: kiểm thử hành vi lịch ôn và dữ liệu.

## Nguồn tham khảo

- IELTS General Training chính thức: https://ielts.org/take-a-test/test-types/ielts-general-training-test/ — bốn kỹ năng; Nghe/Nói chung định dạng với Academic, Đọc/Viết khác.
- Hỗ trợ và xử lý giọng nói: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition — khả năng hỗ trợ hạn chế; một số trình duyệt dùng dịch vụ nhận dạng máy chủ.

Nội dung 24 câu là bài luyện tự soạn, không sao chép đề thi và không gắn với tổ chức IELTS.


