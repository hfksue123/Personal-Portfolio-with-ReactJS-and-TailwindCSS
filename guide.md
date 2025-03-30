## Cách tạo 1 dự án REACTjs bằng VITE cùng với TAILWINDCSS
I. Cài Đặt các package cần thiết:

1. Cài Vite

>> npx create-vite@latest
- Sau đó thì nó sẽ hỏi projectname, nếu như bạn đang mở project bằng VSC thì chỉ cần gõ `.` là xong.
- Tiếp đến là chọn framework và JavaScript là done.

2. Cài Dependencies và test localhost

>> npm install: Cài đặt tất cả các dependencies (thư viện, module) được liệt kê trong file package.json vừa tạo bằng Vite.
>> npm run dev: chạy thử trên localhost http://localhost:5173/ , nếu thành công là ổn.

3. Cài TAILWINDCSS:

>> npm install tailwindcss @tailwindcss/vite
- Cài đặt Tailwind CSS và plugin Vite cho Tailwind vào dự án của bạn.
- import đoạn code sau vào vite.config.js:
> `import tailwindcss from '@tailwindcss/vite'` và cập nhật `plugins: [react(), tailwindcss()],`

4. Cài EmailJS:

>> npm install emailjs-com
- Cài đặt một thư viện JavaScript giúp bạn gửi email trực tiếp từ web mà không cần backend, một dịch vụ email API miễn phí có giới hạn 200 email/ngày đối với tài khoản miễn phí.

II. Bắt đầu code trang web
- Xóa sạch mọi thứ trong App.jsx, index.css và App.css
> @import "tailwindcss"; -> bỏ vào đầu file index.css và cấu trúc lại html, body css cho file này.
- Tạo 1 folder components trong src để chứa các component của trang web.

5. Cấu hình cho Emailjs:
- Tất cả code đều nằm trong file Contact.jsx
- Tạo 1 file .env để lưu mã ID
- Lên EmailJS tạo 1 tài khoản, kết nối Email Service và Email Template.


5. Push code lên git
>> npm install gh-pages --save-dev
- Thêm 1 dòng `base: "/Personal-Portfolio-with-ReactJS-and-TailwindCSS"` vào vite.config.js bên dưới dòng plugins.
- Thêm 2 dòng `"predeploy": "npm run build"` và `"deploy": "gh-pages -d dist"` bên dưới `"script"` Và
thêm `"homepage": "URL",` bên dưới dòng name trong package.json.
>> git init
>> git add .
>> git commit -m "first commit"
>> git branch -M main
>> git remote add origin https://github.com/hfksue123/Personal-Portfolio-with-ReactJS-and-TailwindCSS.git
>> git push -u origin main
>> npm run deploy

