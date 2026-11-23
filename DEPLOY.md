# คู่มือเปิดใช้งานเว็บไซต์ POP ROOM ฟรี 100% และใส่ลิงก์ใน Google Business Profile

เว็บไซต์นี้ออกแบบเป็น Static Website (HTML/CSS/JS ล้วน) โหลดเร็ว ไม่ต้องเช่าโฮสติ้งรายเดือน และอัปโหลดขึ้นเว็บฟรีได้ภายใน 5–10 นาที

ข้อมูลหลักของร้าน (เบอร์โทร `062-983-2615`, Facebook `POPROOMcnx`, Instagram `@pop_room219`, Lemon8 `POP ROOM Studio`, เวลาเปิด จ.–ส. `10:00–19:00`, ที่จอดรถหน้าร้าน 3–5 คัน, ราคาทาสีเจลมือเริ่มต้น `250 บาท` และลิงก์รีวิว Google) **ถูกใส่ไว้เรียบร้อยแล้ว**

---

## ขั้นตอนที่ 1: ปรับแต่งรูปภาพและราคาเพิ่มเติม (ถ้าต้องการ)

1. *(แนะนำ)* เปลี่ยนรูปตัวอย่างในโฟลเดอร์ `website/images/` (`gallery-1.svg` ถึง `gallery-6.svg` และ `og-cover.svg`) เป็นรูปผลงานจริงของร้านตามคำแนะนำใน `website/images/README.md` แล้วอัปเดตชื่อไฟล์ใน `website/site-config.js`
2. หากต้องการเพิ่มราคาของบริการอื่นๆ หรือใส่ลิงก์โปรไฟล์ Lemon8 เฉพาะของร้าน สามารถเปิดไฟล์ **`website/site-config.js`** ด้วย Notepad แล้วแก้ไขได้ทันที (หากยังไม่ได้ใส่ราคาเฉพาะ เว็บจะแสดงข้อความ *"DM for quote / ส่งรูปเรฟประเมินราคาฟรี"* ให้ลูกค้าทักแชทส่งเรฟ)

---

## ขั้นตอนที่ 2: นำเว็บไซต์ขึ้นออนไลน์ฟรี (เลือก 1 วิธีที่สะดวกที่สุด)

### วิธี A: Netlify Drop (ง่ายที่สุด — ลากวางเสร็จใน 1 นาที)
1. สมัครบัญชีฟรีที่ [https://app.netlify.com/](https://app.netlify.com/) (ใช้บัญชี Google หรือ GitHub ได้)
2. เมื่อเข้าสู่หน้า Dashboard ให้เลือกเมนู **Sites** แล้วลากโฟลเดอร์ **`website`** ทั้งโฟลเดอร์ไปวางในช่อง *"Drag and drop your site output folder here"*
3. รอประมาณ 10 วินาที เว็บจะออนไลน์ทันที พร้อม URL ฟรี (เช่น `https://poproom-chiangmai.netlify.app`)
4. ไปที่ **Site configuration > Change site name** เพื่อตั้งชื่อ URL ให้อ่านง่ายและมีชื่อร้าน เช่น `poproom-salon-chiangmai.netlify.app`
5. หากมีการแก้ราคาหรือรูปในอนาคต แค่ไปที่แท็บ **Deploys** แล้วลากโฟลเดอร์ `website` ไปวางทับใหม่ได้เลย

### วิธี B: Cloudflare Pages (ฟรีไม่จำกัด Bandwidth โหลดเร็วในไทย)
1. สมัครบัญชีฟรีที่ [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
2. เลือกเมนู **Workers & Pages > Create > Pages > Upload assets**
3. ตั้งชื่อโปรเจกต์ (เช่น `poproom-chiangmai` จะได้ลิงก์ `https://poproom-chiangmai.pages.dev`)
4. ลากโฟลเดอร์ **`website`** ไปอัปโหลด แล้วกด **Deploy site**

### วิธี C: GitHub Pages (ฟรีถาวร เหมาะกับคนที่ใช้ GitHub อยู่แล้ว)
1. สร้าง Repository ใหม่บน [GitHub](https://github.com/) แบบ Public (เช่น `poproom-chiangmai`)
2. อัปโหลดไฟล์ทั้งหมดที่อยู่ **ข้างใน** โฟลเดอร์ `website/` (`index.html`, `styles.css`, `app.js`, `site-config.js`, `robots.txt`, `sitemap.xml`, และโฟลเดอร์ `images/`) ขึ้นไปที่หน้าหลัก (root) ของ Repository
3. ไปที่ **Settings > Pages > Build and deployment**:
   - Source: เลือก **Deploy from a branch**
   - Branch: เลือก `main` และโฟลเดอร์ `/ (root)` แล้วกด **Save**
4. รอ 1–2 นาที จะได้ URL เช่น `https://<username>.github.io/poproom-chiangmai/`

---

## ขั้นตอนที่ 3: URL เว็บไซต์สำหรับ SEO และใส่ใน Google Business Profile (GBP)

1. เว็บไซต์นี้ถูกตั้งค่า URL สำหรับ GitHub Pages เป็น **`https://cnxteejay.github.io/poproom-chiangmai/`** ไว้เรียบร้อยแล้วใน `index.html`, `robots.txt`, `sitemap.xml` และ `site-config.js` (หากเปลี่ยนโดเมนหรือใช้ลิงก์อื่น สามารถแก้ URL ดังกล่าวให้ตรงกันได้)
2. บน GitHub Repository `CnxTeeJay/poproom-chiangmai` ให้เปิด **Settings > Pages > Build and deployment** แล้วเลือก Source: **Deploy from a branch**, Branch: **`main`** / **`/ (root)`** กด **Save**
3. ค้นหาชื่อร้าน **"POP ROOM Studio"** บน Google (ต้องล็อกอินด้วยบัญชี Google ที่ดูแลร้าน) หรือเปิด [Google Business Profile Manager](https://business.google.com/)
4. กดปุ่ม **Edit profile (แก้ไขโปรไฟล์)** > แท็บ **Contact (ข้อมูลติดต่อ)** > ช่อง **Website (เว็บไซต์)**
5. วาง URL **`https://cnxteejay.github.io/poproom-chiangmai/`** แล้วกด **Save (บันทึก)**
6. **ทิป SEO เพิ่มเติม:**
   - สมัคร [Google Search Console](https://search.google.com/search-console) แล้วนำ `https://cnxteejay.github.io/poproom-chiangmai/sitemap.xml` ไป Submit เพื่อให้ Google เก็บข้อมูลหน้าเว็บเร็วขึ้น
   - นำลิงก์เว็บไซต์ไปใส่ใน Bio ของ Instagram (`@pop_room219`), หน้า About ของ Facebook Page (`POPROOMcnx`) และโปรไฟล์ Lemon8 (`POP ROOM Studio`) เพื่อสร้างสัญญาณเชื่อมโยงถึงกัน (Local Citations)
