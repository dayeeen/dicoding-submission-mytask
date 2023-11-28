const getInitialData = () => ([
  {
    id: 1,
    title: "Jaringan Komputer",
    body: "Kerjakan tugas exam packet tracer jaringan komputer pada situs NetAcad, kirimkan tugasnya dalam bentuk video penjelasan tahap pengerjaannya dengan minimal durasi 5 menit",
    createdAt: '2022-04-14T04:27:34.572Z',
    deadline: '2022-06-14T04:27:34.572Z',
    completed: false,
  },
  {
    id: 2,
    title: "Matematika Diskrit",
    body: "Kerjakan tugas matdis dari soal nomor 1 sampai 10 pada halaman 123, kirimkan tugasnya dalam bentuk file PDF",
    createdAt: '2022-04-14T04:27:34.572Z',
    deadline: '2022-04-21T04:27:34.572Z',
    completed: false,
  },
  {
    id: 3,
    title: "Interaksi Manusia dan Komputer",
    body: "Selesaikan pembuatan paper HCI dengan ketentuan minimal 10 halaman, kirimkan papernya dalam bentuk file PDF",
    createdAt: '2022-04-14T04:27:34.572Z',
    deadline: '2022-05-14T04:27:34.572Z',
    completed: false,
  },
  {
    id: 4,
    title: "Rekayasa Perangkat Lunak",
    body: "Buat kelompok dengan jumlah maksimal 5 orang, buatlah sebuah aplikasi berbasis web dengan menggunakan framework Laravel, kirimkan tugasnya dalam bentuk file ZIP ",
    createdAt: '2022-04-14T04:27:34.572Z',
    deadline: '2022-12-14T04:27:34.572Z',
    completed: false,
  },
  {
    id: 5,
    title: "Ulumul Quran",
    body: "Kerjakan tugas ulumul quran dari soal nomor 1 sampai 10 pada halaman 123, kirimkan tugasnya dalam bentuk file PDF",
    createdAt: '2022-04-14T04:27:34.572Z',
    deadline: '2022-06-15T04:27:34.572Z',
    completed: true,
  },
  {
    id: 6,
    title: "Pemrograman Web",
    body: "Buat program web dengan menggunakan framework ReactJS, kirimkan tugasnya dalam bentuk link github. Pastikan repositorynya tidak diprivate",
    createdAt: '2022-02-14T04:27:34.572Z',
    deadline: '2022-05-14T04:27:34.572Z',
    completed: true,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
