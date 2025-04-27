# MeetupTravel - Railway Healthcheck Server

Máy chủ kiểm tra sức khỏe đơn giản để triển khai trên Railway.

## Thông tin

Dự án này chứa một máy chủ Express đơn giản để kiểm tra sức khỏe trên Railway. Máy chủ này luôn trả về trạng thái 200 OK để đảm bảo rằng Railway có thể xác định rằng ứng dụng đang hoạt động bình thường.

## Cấu trúc dự án

- `app.js`: Máy chủ kiểm tra sức khỏe
- `package.json`: Cấu hình Node.js
- `railway.json`, `.railway.toml`, và các tệp cấu hình Railway khác

## Triển khai trên Railway

1. Đăng nhập vào [Railway](https://railway.app/)
2. Nhấn vào "New Project"
3. Chọn "Deploy from GitHub Repo"
4. Kết nối với GitHub repository của bạn
5. Railway sẽ tự động phát hiện cấu hình Node.js và bắt đầu triển khai

## Kiểm tra Sức Khỏe

Máy chủ cung cấp hai điểm cuối:

- `/`: Trả về "OK - Health check passed" với mã trạng thái 200
- `/info`: Trả về thông tin chi tiết về môi trường và thời gian hoạt động

## Biến Môi Trường

Không có biến môi trường bắt buộc, nhưng bạn có thể đặt:

- `PORT`: Cổng để lắng nghe (mặc định: 8000)
- `NODE_ENV`: Môi trường (mặc định: development)

## Kết nối với Dự Án Chính

Sau khi đã triển khai thành công máy chủ kiểm tra sức khỏe này, bạn có thể:

1. Triển khai các thành phần khác của dự án MeetupTravel của bạn dưới dạng các dịch vụ riêng biệt
2. Sử dụng Railway để kết nối các dịch vụ với nhau 