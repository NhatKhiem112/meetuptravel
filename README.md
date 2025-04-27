# MeetupTravel - Ứng dụng Du lịch với Railway

Ứng dụng MeetupTravel với máy chủ kiểm tra sức khỏe và cơ sở dữ liệu MySQL.

## Thông tin

Dự án này chứa một máy chủ Express để kiểm tra sức khỏe trên Railway và thiết lập cơ sở dữ liệu MySQL từ tệp SQL có sẵn. Máy chủ cung cấp các điểm cuối cơ bản để kiểm tra trạng thái và dữ liệu.

## Cấu trúc dự án

- `app.js`: Máy chủ chính với các điểm cuối API và kiểm tra sức khỏe
- `setup-db.js`: Script để thiết lập cơ sở dữ liệu từ tệp SQL
- `mysql/meetuptravel.sql`: Tệp SQL chứa cấu trúc và dữ liệu cho cơ sở dữ liệu
- `package.json`: Cấu hình Node.js và phụ thuộc
- `railway.json`, `.railway.toml`: Tệp cấu hình cho Railway

## Thiết lập Cơ sở dữ liệu

Cơ sở dữ liệu sẽ được thiết lập tự động trong quá trình xây dựng trên Railway. Script `setup-db.js` sẽ:

1. Kết nối đến MySQL server với thông tin từ biến môi trường
2. Tạo cơ sở dữ liệu `meetuptravel` nếu chưa tồn tại
3. Thực thi nội dung tệp `mysql/meetuptravel.sql` để tạo bảng và dữ liệu

## Triển khai trên Railway

### Chuẩn bị

1. Đảm bảo tệp SQL đã được đặt trong thư mục `mysql`
2. Cấu hình biến môi trường trong Railway:
   - `DB_HOST`: Host của MySQL (mặc định: localhost)
   - `DB_PORT`: Port của MySQL (mặc định: 3306)
   - `DB_USER`: Tên đăng nhập MySQL (mặc định: root)
   - `DB_PASSWORD`: Mật khẩu MySQL
   - `DB_NAME`: Tên cơ sở dữ liệu (mặc định: meetuptravel)
   - `SETUP_DB`: Đặt là "true" để chạy thiết lập cơ sở dữ liệu khi khởi động

### Các bước triển khai

1. Đăng nhập vào [Railway](https://railway.app/)
2. Nhấn vào "New Project"
3. Chọn "Deploy from GitHub Repo"
4. Kết nối với GitHub repository của bạn
5. Railway sẽ tự động phát hiện cấu hình và bắt đầu triển khai
6. Thêm MySQL add-on từ Railway dashboard

## API Endpoints

- `/`: Kiểm tra sức khỏe cơ bản, trả về "OK"
- `/info`: Thông tin chi tiết về ứng dụng và trạng thái cơ sở dữ liệu
- `/api/tours`: Lấy danh sách tour từ cơ sở dữ liệu

## Chạy Cục bộ

```bash
# Sao chép file .env.example thành .env và cấu hình
cp .env.example .env

# Cài đặt phụ thuộc
npm install

# Thiết lập cơ sở dữ liệu (chỉ cần chạy một lần)
npm run setup-db

# Khởi động ứng dụng
npm start
```

## Kết nối với các Dịch vụ Railway Khác

Sau khi triển khai thành công, bạn có thể kết nối dự án này với các dịch vụ khác trên Railway như backend hoặc frontend thông qua biến môi trường được chia sẻ. 