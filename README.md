# MeetupTravel

Ứng dụng web du lịch với các tính năng kết nối người dùng và chia sẻ trải nghiệm du lịch.

## Cấu trúc dự án

- `backend/`: Ứng dụng Spring Boot backend
- `frontend/`: Ứng dụng React frontend
- `frontend-admin/`: Panel quản trị dựa trên React
- `mysql/`: Cấu hình và dữ liệu MySQL

## Triển khai trên Railway

### Phương pháp 1: Triển khai từ GitHub Repository

1. Đăng nhập vào [Railway](https://railway.app/)
2. Nhấn vào "New Project"
3. Chọn "Deploy from GitHub Repo"
4. Kết nối với GitHub repository của bạn
5. Railway sẽ tự động phát hiện cấu hình Docker và bắt đầu triển khai

### Phương pháp 2: Triển khai từ CLI

1. Cài đặt Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Đăng nhập vào Railway từ CLI:
   ```bash
   railway login
   ```

3. Liên kết dự án với Railway:
   ```bash
   railway link
   ```

4. Triển khai dự án:
   ```bash
   railway up
   ```

## Biến môi trường

Railway sẽ tự động phát hiện các biến môi trường từ `docker-compose.yml`. Tuy nhiên, bạn có thể thiết lập các biến môi trường cụ thể trong Railway Dashboard:

- `MYSQL_ROOT_PASSWORD`: Mật khẩu root MySQL
- `MYSQL_DATABASE`: Tên database
- `MYSQL_USER`: Tên người dùng MySQL
- `MYSQL_PASSWORD`: Mật khẩu MySQL
- `SPRING_JPA_HIBERNATE_DDL_AUTO`: Cấu hình Hibernate (update, create, none)
- `FRONTEND_PORT`: Port cho frontend
- `BACKEND_PORT`: Port cho backend
- `ADMIN_PORT`: Port cho admin panel

## Theo dõi và quản lý

- Truy cập Railway Dashboard để xem logs, metrics và quản lý ứng dụng
- Sử dụng Railway CLI để theo dõi logs: `railway logs`

## Mở rộng

Để mở rộng ứng dụng, bạn có thể:

1. Tăng số lượng replicas trong Railway Dashboard
2. Nâng cấp cấu hình tài nguyên trong Railway Dashboard
3. Thêm nhiều dịch vụ thông qua Railway Service Definitions 