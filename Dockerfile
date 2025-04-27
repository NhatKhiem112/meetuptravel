FROM node:20-alpine

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép package.json và cài đặt phụ thuộc
COPY package.json ./
RUN npm install

# Sao chép mã nguồn
COPY . .

# Đảm bảo run.sh có quyền thực thi
RUN chmod +x run.sh

# Healthcheck nội bộ
HEALTHCHECK --interval=10s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:8000 || exit 1

# Phơi cổng
EXPOSE 8000

# Khởi động ứng dụng
CMD ["sh", "run.sh"] 