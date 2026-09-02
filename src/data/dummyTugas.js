export let dummyTugas = [
  {
    id: "1",
    nama: "Latihan Persamaan",
    mapel: "Matematika",
    deskripsi: "Kerjakan halaman 45-47 dan kumpulkan melalui Google Classroom.",
    tanggalDeadline: "28 Agustus 2026",
    jamDeadline: "20:00",
    tingkatKesulitan: "Sulit",
    status: "belum",
  },
  {
    id: "2",
    nama: "Teks Eksplanasi",
    mapel: "Bahasa Indonesia",
    deskripsi: "Tulis teks eksplanasi tentang fenomena alam.",
    tanggalDeadline: "28 Agustus 2026",
    jamDeadline: "21:00",
    tingkatKesulitan: "Sedang",
    status: "belum",
  },
  {
    id: "3",
    nama: "Membuat ERD",
    mapel: "Basis Data",
    deskripsi: "Buat ERD untuk sistem inventory sparepart.",
    tanggalDeadline: "29 Agustus 2026",
    jamDeadline: "23:59",
    tingkatKesulitan: "Sedang",
    status: "selesai",
  },
  {
    id: "4",
    nama: "CRUD PHP",
    mapel: "Pemrograman",
    deskripsi: "Buat fitur create, read, update, delete untuk data siswa.",
    tanggalDeadline: "30 Agustus 2026",
    jamDeadline: "21:00",
    tingkatKesulitan: "Mudah",
    status: "belum",
  },
];

export function getTugasById(id) {
  return dummyTugas.find((t) => t.id === id);
}

export function addTugas(data) {
  const newId = (dummyTugas.length + 1).toString();
  dummyTugas.push({ id: newId, status: "belum", ...data });
}

export function updateTugas(id, data) {
  const idx = dummyTugas.findIndex((t) => t.id === id);
  if (idx !== -1) dummyTugas[idx] = { ...dummyTugas[idx], ...data };
}

export function deleteTugas(id) {
  dummyTugas = dummyTugas.filter((t) => t.id !== id);
}

export function toggleSelesai(id) {
  const idx = dummyTugas.findIndex((t) => t.id === id);
  if (idx !== -1) {
    dummyTugas[idx].status = dummyTugas[idx].status === "selesai" ? "belum" : "selesai";
  }
}
