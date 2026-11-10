# 📱 TaskBoard Akademik - React Native App

Aplikasi mobile berbasis **React Native** (menggunakan Expo) yang dirancang untuk membantu mahasiswa mengelola, mencatat, dan melacak status tugas atau laporan praktikum perkuliahan agar lebih terstruktur dan produktif.

---

## 👨‍💻 Identitas Pembuat

- **Nama:** Gisal Dapa
- **NIM:** 2430511023
- **Kelas:** 5A - Teknik Informatika
- **Universitas:** Universitas Muhammadiyah Sukabumi (UMMI)

---

## ✨ Fitur & Keunggulan Aplikasi

1. **Manajemen Tugas Kuliah:** Menampilkan daftar tugas lengkap dengan informasi mata kuliah dan status pengerjaannya.
2. **Navigasi Antar Halaman:** Menggunakan _React Navigation (Native Stack)_ untuk perpindahan yang mulus dari halaman utama ke form tambah tugas.
3. **Interaktif & Dinamis (State & Hooks):** Memanfaatkan _React Hooks_ (`useState`, `useEffect`) untuk mengelola penyimpanan daftar tugas secara _real-time_.
4. **Komponen Modular (Props):** Menerapkan pengiriman data antar komponen (_Props_) secara efisien pada kartu tugas (`TaskCard`) dan tombol kustom (`CustomButton`).
5. **Ubah Status Tugas:** Memiliki fitur tombol interaktif untuk mengubah status tugas dari "Belum Selesai" menjadi "Selesai" secara instan.
6. **Tema Estetik:** Mengusung desain antarmuka bersih dengan kombinasi warna putih dan aksen biru muda yang profesional dan nyaman dilihat.

---

## 📂 Struktur Komponen Proyek

Aplikasi ini dipecah menjadi minimal 4 komponen modular utama:

- `src/screens/HomeScreen.js` — Halaman Utama (Komponen 1)
- `src/screens/AddTaskScreen.js` — Halaman Form Tambah Tugas (Komponen 2)
- `src/components/TaskCard.js` — Komponen Kartu Tugas Reusable (Komponen 3)
- `src/components/CustomButton.js` — Komponen Tombol Kustom (Komponen 4)

---

## 🚀 Cara Menjalankan Proyek

1. **Clone Repository ini:**
   ```bash
   git clone [https://github.com/USERNAME_KAMU/TaskBoardApp.git](https://github.com/USERNAME_KAMU/TaskBoardApp.git)
   cd TaskBoardApp
   ```
