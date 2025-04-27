FROM node:20-alpine

# Install Docker và các phụ thuộc
RUN apk add --no-cache docker docker-compose curl

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép package.json và cài đặt phụ thuộc
COPY package.json ./
RUN npm install

# Sao chép mã nguồn
COPY . .

# Đảm bảo run.sh có quyền thực thi
RUN chmod +x run.sh

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:8000 || exit 1

# Phơi cổng cho health check
EXPOSE 8000

# Khởi động ứng dụng
CMD ["sh", "run.sh"] 