# คู่มือเปลี่ยนรูปภาพในแกลเลอรี (Gallery Images Guide)

โฟลเดอร์ `website/images/` เก็บรูปภาพตัวอย่างแบบ SVG (`gallery-1.svg` ถึง `gallery-6.svg` และ `og-cover.svg`) เพื่อให้เว็บแสดงผลได้สวยงามทันทีโดยไม่มีลิงก์เสีย

## วิธีใส่รูปจริงของร้าน POP ROOM
1. เตรียมรูปผลงานจริงของร้านที่สว่าง คมชัด (แนะนำสัดส่วนแนวตั้ง **4:5** เช่น `800 x 1000 px` หรือสี่เหลี่ยมจัตุรัส `1080 x 1080 px`)
2. บีบอัดไฟล์ให้ขนาดเล็กลง (< 150 KB ต่อรูป) ด้วยเว็บฟรี เช่น [Squoosh](https://squoosh.app/) หรือ [TinyPNG](https://tinypng.com/) และแปลงเป็น `.jpg` หรือ `.webp`
3. วางไฟล์รูปลงในโฟลเดอร์นี้ (`website/images/`) เช่น:
   - `gallery-1.jpg` — เล็บเจลสไตล์เกาหลี / มินิมอล
   - `gallery-2.jpg` — สีลูกแก้ว Cat-Eye / Chrome / French
   - `gallery-3.jpg` — งานต่อเล็บ Dual Form / PVC
   - `gallery-4.jpg` — ภาพเครื่องอบ/ซองฆ่าเชื้ออุปกรณ์ใหม่ทุกเคส (จุดขายสำคัญ!)
   - `gallery-5.jpg` — ผลงานต่อขนตา
   - `gallery-6.jpg` — บรรยากาศร้าน / มุมทำผม
   - `og-cover.jpg` — รูปปกแชร์ลิงก์บน Facebook / Messenger (แนะนำขนาด `1200 x 630 px`)
4. เปิดไฟล์ `website/site-config.js` แล้วเปลี่ยนชื่อไฟล์ในส่วน `gallery:` จาก `.svg` เป็น `.jpg` (หรือ `.webp`) ตามไฟล์จริงที่ใส่ไว้
5. หากเปลี่ยน `og-cover.svg` เป็น `og-cover.jpg` ให้แก้ตรงแท็ก `<meta property="og:image" ...>` ใน `index.html` ด้วย
