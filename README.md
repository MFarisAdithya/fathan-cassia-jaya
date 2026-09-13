# UD FATHAN CASSIA JAYA — B2B Spice Commodity Landing Page

Landing Page Profesional & Elegant Earth Tone untuk **UD Fathan Cassia Jaya**, supplier & pedagang komoditas rempah-rempah Indonesia (Kayu Manis, Cengkeh, Lada, Pala, Kapulaga, Cabe Jawa) berbasis B2B.

---

## 🌟 Konsep Visual & Desain

- **Visual Concept**: *ELEGANT EARTH TONE — PREMIUM INDONESIAN SPICE SUPPLIER*
- **Color Palette Ratio**:
  - `60%` Cream / Ivory (`#F5EFE5`)
  - `30%` Deep Espresso (`#3A2A20`)
  - `10%` Cinnamon / Terracotta (`#A65F3F`)
  - Accent: Sand/Beige (`#C9A77A`), Sage/Olive (`#72765A`), Dark Olive (`#454638`)
- **Typography**: `Cormorant Garamond` (Headings) + `Plus Jakarta Sans` (Body & UI).
- **Goal**: Mendorong calon pelanggan B2B menghubungi UD Fathan Cassia Jaya via WhatsApp untuk menanyakan ketersediaan dan meminta penawaran.

---

## 📱 Mengubah Nomor WhatsApp (Satu Tempat / Config Variable)

Untuk memperbarui nomor WhatsApp di seluruh landing page (Navbar, Product Cards, Offer Cards, Floating Mobile Bar, Final CTA, dan Footer), cukup ubah **SATU** variabel di file [`src/config/siteConfig.js`](file:///d:/sayang/src/config/siteConfig.js):

```javascript
// src/config/siteConfig.js
export const WHATSAPP_NUMBER = "628xxxxxxxxxx"; // Masukkan nomor WhatsApp bisnis (format tanpa + atau 0 depan, contoh: 6281234567890)
```

Seluruh tombol CTA di halaman akan otomatis terhubung ke nomor tersebut dengan format pesan yang disesuaikan per kontekstual produk/segmen.

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Install Dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan Server Development**:
   ```bash
   npm run dev
   ```
   Buka URL lokal yang muncul di terminal (biasanya `http://localhost:5173`).

---

## 🌐 Cara Deploy ke GitHub Pages

Proyek ini telah dikonfigurasi penuh dengan `base: './'` pada `vite.config.js` sehingga kompatibel 100% untuk deployment di GitHub Pages.

### Metode 1: Otomatis via GitHub Actions (Rekomendasi)

1. Push seluruh kode proyek ini ke repositori GitHub Anda.
2. Di repositori GitHub Anda, buka menu **Settings** -> **Pages**.
3. Pada opsi **Source**, pilih **GitHub Actions**.
4. Workflow otomatis di `.github/workflows/deploy.yml` akan secara otomatis melakukan build dan mempublikasikan landing page setiap kali ada push ke branch `main` atau `master`.

### Metode 2: Deploy Manual via Branch `gh-pages`

1. Jalankan perintah build:
   ```bash
   npm run build
   ```
2. Folder `dist/` berisi file HTML, CSS, JS, dan Gambar siap diupload ke branch `gh-pages` atau GitHub Pages publishing directory.

---

## 📄 Lisensi & Hak Cipta

© UD Fathan Cassia Jaya. All rights reserved.
