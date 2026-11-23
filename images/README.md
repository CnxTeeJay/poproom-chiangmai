# คู่มือเปลี่ยนรูปภาพในแกลเลอรี (Gallery Images Guide)

โฟลเดอร์ `website/images/` เก็บภาพผลงานจริงของร้าน POP ROOM Studio — Nail Salon ที่แสดงในแกลเลอรีของ `index.html`

## วิธีเพิ่มหรือเปลี่ยนรูปในอนาคต
1. เตรียมรูปผลงานทำเล็บหรือสปามือ-เท้าที่สว่าง คมชัด (แนะนำสัดส่วนแนวตั้ง **4:5** เช่น `800 x 1000 px` หรือสี่เหลี่ยมจัตุรัส `1080 x 1080 px`)
2. บีบอัดไฟล์ให้ขนาดเล็กลง (< 500 KB ต่อรูป) ด้วยเว็บฟรี เช่น [Squoosh](https://squoosh.app/) หรือ [TinyPNG](https://tinypng.com/) และแปลงเป็น `.jpg` หรือ `.webp`
3. วางไฟล์รูปลงในโฟลเดอร์นี้ (`website/images/`) เช่น:
   - `nail-art-1.jpg` — เล็บเจลสไตล์เกาหลี / มินิมอล
   - `cat-eye-1.jpg` — สีลูกแก้ว Cat-Eye / Chrome / French
   - `extensions-1.jpg` — งานต่อเล็บ PVC / ต่อเล็บเจล
   - `sterilization-1.jpg` — ภาพซอง/เครื่องฆ่าเชื้ออุปกรณ์ใหม่ทุกเคส
   - `spa-1.jpg` — บรรยากาศสปามือและเท้า Signature Hand & Foot Spa
4. เปิดไฟล์ `website/index.html` เพื่อเพิ่มหรือเปลี่ยน `<figure class="gallery-item">` ในส่วน `#gallery-grid` พร้อมคำอธิบาย `alt` และคำบรรยายภาพ
5. หากเปลี่ยนรูปปกแชร์ลิงก์ (`og:image`) ให้แก้ตรงแท็ก `<meta property="og:image" ...>` ใน `index.html`
