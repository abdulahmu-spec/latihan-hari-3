# Dashboard Ticket - PELINDO TPS Surabaya

Rebuild dashboard dari mockup Figma ke HTML/CSS, dibangun sebagai latihan transisi dari Photoshop + jQuery ke Figma + CSS modern (Flexbox/Grid).

## Struktur File
- `latihan-hari3.html` — struktur halaman utama
- `style.css` — seluruh styling
- `script.js` — interaksi dropdown Admin (vanilla JS)
- `demo-alpine.html` — versi perbandingan dropdown pakai Alpine.js
- `foto.png` — asset foto profil (export dari Figma)

## Cara Menjalankan
Buka `latihan-hari3.html` lewat Live Server (VS Code extension) atau langsung di browser.

## Fitur
- Dropdown menu Admin (klik untuk buka/tutup)
- Responsive: layout menyesuaikan di layar < 768px
- Accessibility & SEO: skor Lighthouse 100/100

## Skor Lighthouse
Performance: 100 | Accessibility: 100 | Best Practices: 100 | SEO: 100

## Belum Dikerjakan / Known Issues
- 3 panel bawah (Grafik, Grafik Problems, Knowledge Base) belum dibangun
- Menu navigasi (Assets, IT Service, dll) belum ada halaman tujuan (masih `href="#"`)