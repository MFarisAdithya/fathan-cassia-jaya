/**
 * SITE CONFIGURATION - UD FATHAN CASSIA JAYA
 * Single source of truth for business contact details, WhatsApp variable, products, and landing page content.
 */

// Global WhatsApp Variable - All CTAs connect to this number
export const WHATSAPP_NUMBER = "6285267774103";

import { TRANSLATIONS } from './translations';

export { TRANSLATIONS };

/**
 * Generate formatted WhatsApp link with auto-populated message
 * @param {string} customMessage 
 * @returns {string}
 */
export const getWhatsAppUrl = (customMessage = "Halo UD Fathan Cassia Jaya, saya ingin berkonsultasi dan meminta penawaran ketersediaan rempah untuk kebutuhan bisnis kami.") => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
};

export const SITE_INFO = {
  name: "UD FATHAN CASSIA JAYA",
  logoUrl: "./images/brand_logo.jpg",
  heroLogoUrl: "./images/logo.png",
  subtitle: "Supplier & Pedagang Komoditas Rempah",
  tagline: "Beragam Rempah. Beragam Kebutuhan. Satu Solusi.",
  heroDescription: "UD Fathan Cassia Jaya menyediakan berbagai komoditas rempah untuk memenuhi kebutuhan perusahaan, industri, distributor, pedagang, dan berbagai sektor usaha.",
  trustPills: [
    "Beragam Komoditas",
    "Kebutuhan B2B",
    "Komunikasi Langsung"
  ],
  placeholders: {
    whatsapp: "+62 852-6777-4103",
    email: "erwantoaja43@gmail.com",
    address: "Jl. P. Tirtayasa, Campang Raya, Kec. Tanjungkarang Timur, Kota Bandar Lampung, Lampung 35244",
    facebook: "UD Fathan Cassia Jaya"
  }
};

export const PRODUCTS = [
  {
    id: "01",
    name: "Kayu Manis KA Asalan",
    price: "Rp 34.000",
    unit: "/ kg",
    tag: "Komoditas Utama",
    description: "Kayu manis grade KA asalan beraroma khas yang kuat, cocok untuk industri makanan, ekstraksi, dan herbal.",
    image: "./images/kayu_manis_ka_asalan.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Kayu Manis KA Asalan (Rp 34.000/kg)."
  },
  {
    id: "02",
    name: "Kayu Manis KB Asalan",
    price: "Rp 28.000",
    unit: "/ kg",
    tag: "Komoditas Utama",
    description: "Kayu manis grade KB asalan pilihan dengan kualitas dan aroma ekonomis yang stabil untuk industri bumbu dan pasokan pasar.",
    image: "./images/kayu_manis_kb_asalan.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Kayu Manis KB Asalan (Rp 28.000/kg)."
  },
  {
    id: "03",
    name: "Cassia Broken KB VO 1,5",
    price: "Rp 32.000",
    unit: "/ kg",
    tag: "Olahan Cassia",
    description: "Pecahan kayu manis grade KB kadar VO 1,5% berkualitas untuk bahan baku giling bubuk, bumbu, dan ekstraksi.",
    image: "./images/kayu_manis_broken_kb.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Cassia Broken KB VO 1,5 (Rp 32.000/kg)."
  },
  {
    id: "04",
    name: "Cassia Broken KA VO 2,5",
    price: "Rp 38.000",
    unit: "/ kg",
    tag: "Olahan Cassia",
    description: "Pecahan kayu manis grade KA pilihan kadar VO 2,5% dengan aroma lebih pekat untuk kebutuhan industri premium.",
    image: "./images/kayu_manis_broken_ka.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Cassia Broken KA VO 2,5 (Rp 38.000/kg)."
  },
  {
    id: "05",
    name: "Kayu Manis Stick 8cm",
    price: "Rp 80.000",
    unit: "/ kg",
    tag: "Olahan Rapi",
    description: "Kayu manis potong rapi ukuran 8cm, ideal untuk kemasan retail premium, HOREKA, dan ekspor.",
    image: "./images/kayu_manis_stick_8cm.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Kayu Manis Stick 8cm (Rp 80.000/kg)."
  },
  {
    id: "06",
    name: "Kayu Manis Longstick",
    price: "Rp 60.000",
    unit: "/ kg",
    tag: "Grade Super",
    description: "Batang kayu manis panjang utuh kualitas pilihan untuk industri minuman, dekorasi kuliner, dan pengolahan khusus.",
    image: "./images/kayu_manis_longstick.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Kayu Manis Longstick (Rp 60.000/kg)."
  },
  {
    id: "07",
    name: "Cengkeh",
    price: "Rp 135.000",
    unit: "/ kg",
    tag: "Rempah Aromatic",
    description: "Cengkeh kering pilihan kadar air terukur dengan aroma tajam dan minyak atsiri tinggi untuk industri dan bumbu.",
    image: "./images/cengkeh_katalog.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Cengkeh (Rp 135.000/kg)."
  },
  {
    id: "08",
    name: "Lada Hitam",
    price: "Rp 105.000",
    unit: "/ kg",
    tag: "Bumbu Utama",
    description: "Biji lada hitam utuh bersih dengan kepedasan dan aroma mantap untuk industri olahan makanan.",
    image: "./images/lada_hitam.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Lada Hitam (Rp 105.000/kg)."
  },
  {
    id: "09",
    name: "Mace / Bunga Pala",
    price: "Rp 340.000",
    unit: "/ kg",
    tag: "Komoditas Premium",
    description: "Bunga pala (mace) kering super warna kemerahan dengan aroma eksotis untuk industri rempah premium & farmasi.",
    image: "./images/mace_bunga_pala_katalog.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Mace / Bunga Pala (Rp 340.000/kg)."
  },
  {
    id: "10",
    name: "Biji Pala",
    price: "Rp 120.000",
    unit: "/ kg",
    tag: "Rempah Nusantara",
    description: "Biji pala utuh kering berkualitas untuk bahan baku olahan makanan, minyak atsiri, dan pasokan grosir.",
    image: "./images/biji_pala.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Biji Pala (Rp 120.000/kg)."
  },
  {
    id: "11",
    name: "Kapulaga",
    price: "Rp 90.000",
    unit: "/ kg",
    tag: "Herbal & Kuliner",
    description: "Kapulaga kering dengan polong padat dan aroma harum wangi untuk industri herbal, jamu, dan kuliner.",
    image: "./images/kapulaga_katalog.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Kapulaga (Rp 90.000/kg)."
  },
  {
    id: "12",
    name: "Cabe Jamu",
    price: "Rp 95.000",
    unit: "/ kg",
    tag: "Bahan Jamu Herbal",
    description: "Cabe jawa / cabe jamu kering kualitas bagus untuk bahan baku industri jamu tradisional dan kesehatan.",
    image: "./images/cabe_jawa_katalog.jpg",
    waMessage: "Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan dan pemesanan Cabe Jamu (Rp 95.000/kg)."
  }
];

export const PAIN_POINTS = [
  {
    id: "01",
    title: "Jenis rempah yang dibutuhkan tidak selalu sama",
    description: "Setiap industri memiliki spesifikasi varietas, aroma, dan bentuk rempah yang berbeda sesuai lini produksi mereka."
  },
  {
    id: "02",
    title: "Jumlah kebutuhan bisnis dapat berbeda-beda",
    description: "Kebutuhan pasokan dapat menyesuaikan volume produksi, baik untuk partai sedang maupun pemesanan jumlah besar."
  },
  {
    id: "03",
    title: "Kualitas dan spesifikasi perlu disesuaikan dengan kebutuhan",
    description: "Standar kadar air, kebersihan, dan tingkat grade perlu didiskusikan agar hasil akhir olahan sesuai harapan."
  }
];

export const VALUE_PROPOSITIONS = [
  {
    num: "01",
    title: "BERAGAM KOMODITAS",
    description: "Berbagai jenis rempah tersedia untuk membantu memenuhi kebutuhan pelanggan."
  },
  {
    num: "02",
    title: "FOKUS PADA KEBUTUHAN BISNIS",
    description: "Melayani kebutuhan perusahaan, industri, distributor, pedagang, pasar, dan toko."
  },
  {
    num: "03",
    title: "MEMPERHATIKAN KUALITAS",
    description: "Kualitas produk menjadi bagian penting dalam memenuhi kebutuhan pelanggan bisnis."
  },
  {
    num: "04",
    title: "KOMUNIKASI LANGSUNG",
    description: "Pelanggan dapat menyampaikan jenis rempah, jumlah, kualitas, dan kebutuhan lainnya sebelum transaksi."
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Sampaikan Kebutuhan",
    description: "Hubungi UD Fathan Cassia Jaya dan sampaikan jenis rempah yang Anda butuhkan."
  },
  {
    step: "02",
    title: "Konsultasikan Spesifikasi",
    description: "Diskusikan jenis, jumlah, kualitas, dan kebutuhan lainnya."
  },
  {
    step: "03",
    title: "Dapatkan Penawaran",
    description: "Terima informasi dan penawaran sesuai kebutuhan yang telah didiskusikan."
  },
  {
    step: "04",
    title: "Lanjutkan Pemesanan",
    description: "Jika kebutuhan dan penawaran telah sesuai, proses transaksi dapat dilanjutkan."
  }
];

export const TARGET_INDUSTRIES = [
  {
    title: "FOOD & BEVERAGE",
    description: "Untuk kebutuhan makanan, minuman, bumbu, dan berbagai produk olahan."
  },
  {
    title: "HERBAL & OBAT-OBATAN",
    description: "Untuk kebutuhan produk herbal dan pengolahan."
  },
  {
    title: "DISTRIBUTOR & PEDAGANG",
    description: "Untuk kebutuhan distribusi dan perdagangan kembali."
  },
  {
    title: "TOKO & PASAR",
    description: "Untuk memenuhi kebutuhan stok rempah untuk dijual kembali."
  }
];

export const OFFERS = [
  {
    num: "01",
    category: "KEBUTUHAN BISNIS",
    description: "Untuk perusahaan dan industri yang membutuhkan rempah sebagai bahan baku.",
    waMessage: "Halo, saya dari sektor industri/perusahaan ingin meminta penawaran pasokan bahan baku rempah."
  },
  {
    num: "02",
    category: "DISTRIBUSI",
    description: "Untuk distributor dan pedagang yang membutuhkan pasokan untuk perdagangan.",
    waMessage: "Halo, saya distributor/pedagang ingin meminta penawaran pasokan rempah untuk jaringan distribusi kami."
  },
  {
    num: "03",
    category: "RESELLER / TOKO",
    description: "Untuk kebutuhan stok rempah yang akan dijual kembali.",
    waMessage: "Halo, saya pemilik toko/reseller ingin meminta penawaran stok rempah untuk dijual kembali."
  }
];

export const COMMITMENTS = [
  "Kesesuaian jenis produk",
  "Komunikasi kebutuhan sebelum transaksi",
  "Perhatian terhadap kualitas produk"
];

export const GUARANTEES = [
  {
    id: "01",
    title: "Garansi Kesesuaian Spesifikasi & Sampel",
    description: "Jaminan 100% barang yang dikirim sesuai dengan spesifikasi grade, kadar air, dan kebersihan yang telah disepakati sebelum transaksi.",
    badge: "Garansi Mutu"
  },
  {
    id: "02",
    title: "Garansi Penggantian Barang (Free Replacement)",
    description: "Jaminan retur atau penggantian barang baru apabila terdapat ketidaksesuaian fisik akibat kesalahan sortir maupun pengemasan.",
    badge: "Garansi Retur"
  },
  {
    id: "03",
    title: "Garansi Akurasi Timbangan & Berat",
    description: "Jaminan keakuratan timbangan grosir/karung dari gudang resmi sesuai nota transaksi tanpa ada manipulasi berat.",
    badge: "Garansi Timbangan"
  },
  {
    id: "04",
    title: "Garansi Dokumentasi Pra-Pengiriman",
    description: "Setiap pesanan berhak mendapatkan bukti foto/video real-time penimbangan dan kondisi karung sebelum armada berangkat.",
    badge: "Garansi Transparansi"
  }
];

export const FAQS = [
  {
    question: "Apa saja rempah yang tersedia?",
    answer: "UD Fathan Cassia Jaya menyediakan kayu manis, cengkeh, lada, pala, kapulaga, dan cabe jawa."
  },
  {
    question: "Apakah melayani kebutuhan perusahaan?",
    answer: "Ya. UD Fathan Cassia Jaya berfokus pada kebutuhan B2B, termasuk perusahaan, industri, distributor, pedagang, pasar, dan toko."
  },
  {
    question: "Apakah bisa menanyakan ketersediaan produk?",
    answer: "Bisa. Hubungi kami melalui WhatsApp (+62 852-6777-4103) untuk menanyakan jenis rempah dan kebutuhan yang diperlukan."
  },
  {
    question: "Apakah bisa membeli dalam jumlah besar?",
    answer: "Calon pelanggan dapat menghubungi kami melelui WhatsApp untuk mendiskusikan kebutuhan jumlah dan spesifikasi pemesanan."
  },
  {
    question: "Bagaimana cara mendapatkan penawaran harga?",
    answer: "Hubungi kami melalui WhatsApp dan sampaikan jenis rempah, jumlah, kualitas, serta kebutuhan lainnya."
  },
  {
    question: "Apakah bisa membutuhkan lebih dari satu jenis rempah?",
    answer: "Ya. Tersedia beberapa jenis komoditas rempah sehingga pelanggan dapat menyampaikan kebutuhan lebih dari satu jenis produk."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Hendra Wijaya",
    role: "Procurement Manager",
    company: "PT Sinar Pangan Nusantara (Jakarta)",
    tag: "Industri Makanan",
    rating: 5,
    isAnonymous: false,
    content: "Pasokan kayu manis dan cengkeh dari UD Fathan Cassia Jaya selalu konsisten dari segi tingkat pengeringan dan kebersihannya. Komunikasi mengenai spesifikasi produk sangat responsif sebelum barang dikirim."
  },
  {
    id: 2,
    name: "Dra. Rina Kusumawatty",
    role: "Kepala Pengadaan Bahan Baku",
    company: "CV Herbal Alami Sejahtera (Jawa Tengah)",
    tag: "Herbal & Farmasi",
    rating: 5,
    isAnonymous: false,
    content: "Biji pala dan cabe jamu yang dikirim kualitasnya sangat baik untuk standar bahan baku herbal kami. Pengiriman partai sedang maupun besar selalu sesuai dengan kesepakatan awal."
  },
  {
    id: 3,
    name: "Mitra Anonim",
    role: "Distributor Rempah Regional",
    company: "Perusahaan Pengadaan & Grosir",
    tag: "Distributor (Anonim)",
    rating: 5,
    isAnonymous: true,
    content: "Kerjasama pasokan lada hitam dan kapulaga sangat terpercaya. Penentuan harga fleksibel untuk volume grosir dan pengiriman barang selalu aman sampai ke gudang distributor kami."
  }
];
