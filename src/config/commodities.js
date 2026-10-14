/**
 * COMMODITIES CONFIGURATION - UD FATHAN CASSIA JAYA
 * Single source of truth for the 7 primary spice commodities:
 * 1. kayu-manis
 * 2. cengkeh
 * 3. lada-hitam
 * 4. biji-pala
 * 5. bunga-pala
 * 6. kapulaga
 * 7. cabe-jamu
 */

export const COMMODITY_SLUGS = [
  'kayu-manis',
  'cengkeh',
  'lada-hitam',
  'biji-pala',
  'bunga-pala',
  'kapulaga',
  'cabe-jamu'
];

export const COMMODITIES = {
  'kayu-manis': {
    slug: 'kayu-manis',
    name: {
      in: 'Kayu Manis Kerinci (Cassiavera)',
      en: 'Kerinci Cinnamon (Cassiavera)'
    },
    h1: {
      in: 'Supplier Kayu Manis KA/KB Grosir',
      en: 'Wholesale Kerinci Cinnamon KA/KB Supplier'
    },
    subtitle: {
      in: 'Komoditas Kayu Manis Kerinci (Cinnamomum burmannii) Asli Berkadar Minyak Atsiri Tinggi Langsung dari Petani',
      en: 'Direct Source of Authentic Kerinci Cassiavera (Cinnamomum burmannii) with High Essential Oil Content'
    },
    metaTitle: {
      in: 'Supplier Kayu Manis KA/KB Grosir | UD Fathan Cassia Jaya',
      en: 'Wholesale Kerinci Cinnamon KA/KB Supplier | UD Fathan Cassia Jaya'
    },
    metaDescription: {
      in: 'Supplier tangan pertama kayu manis Kerinci (Cassiavera) grade KA Asalan, KB Asalan, Broken VO 1.5/2.5, Stick 8cm & Longstick. Pasokan partai besar, kadar air terukur, siap kirim ke seluruh Indonesia & ekspor.',
      en: 'Direct wholesale supplier of authentic Kerinci cinnamon (Cassiavera) in grades KA, KB, Broken VO, 8cm sticks, and longsticks. Industrial & export grade supply from Indonesia.'
    },
    image: '/images/kayu_manis_ka_asalan.jpg',
    updatedDate: {
      in: 'Oktober 2026',
      en: 'October 2026'
    },
    specs: [
      { label: { in: 'Asal Komoditas', en: 'Origin' }, value: { in: 'Gunung Kerinci, Jambi & Sumatra, Indonesia', en: 'Mount Kerinci, Jambi & Sumatra, Indonesia' } },
      { label: { in: 'Nama Botani', en: 'Botanical Name' }, value: { in: 'Cinnamomum burmannii (Cassiavera)', en: 'Cinnamomum burmannii (Cassiavera)' } },
      { label: { in: 'Kadar Air (Moisture)', en: 'Moisture Content' }, value: { in: '12% – 14% (Kering Gudang Standar)', en: '12% – 14% (Warehouse Dry Standard)' } },
      { label: { in: 'Volatile Oil (VO)', en: 'Volatile Oil (VO)' }, value: { in: '1.5% s/d 3.5% (Tergantung Grade)', en: '1.5% to 3.5% (Depending on Grade)' } },
      { label: { in: 'Bentuk / Potongan', en: 'Form / Cut' }, value: { in: 'Gulungan Kulit Asalan, Broken (Pecahan), Stick 8cm, Longstick', en: 'Raw Quills, Broken Chips, 8cm Sticks, Longsticks' } },
      { label: { in: 'Kemasan (Packaging)', en: 'Packaging' }, value: { in: 'Karung Goni Bersih / Woven PP 50kg / Karton Box', en: 'Clean Jute Bag / 50kg Woven PP / Carton Box' } },
      { label: { in: 'Minimum Order (MOQ)', en: 'Minimum Order (MOQ)' }, value: { in: '100 kg (Partai Menengah) s/d Tonase Kontainer', en: '100 kg (Medium Batch) to Full Container Load' } },
      { label: { in: 'Kapasitas Pasokan', en: 'Supply Capacity' }, value: { in: '20 – 30 Ton / Bulan', en: '20 – 30 Metric Tons / Month' } }
    ],
    grades: [
      {
        id: 'ka-asalan',
        name: { in: 'Kayu Manis KA Asalan', en: 'Cinnamon KA Raw' },
        price: 'Rp 34.000',
        unit: '/ kg',
        image: '/images/kayu_manis_ka_asalan.jpg',
        description: {
          in: 'Kulit manis pilihan grade KA asalan dengan ketebalan kulit mantap, aroma manis pedas tajam, cocok untuk ekstraksi dan herbal.',
          en: 'Selected Grade KA raw cassia with thick quills and potent fragrance, ideal for industrial extraction and herbal products.'
        },
        specsHighlight: { in: 'Tebal 1.5–3mm, VO ~2.5%', en: 'Thickness 1.5–3mm, VO ~2.5%' }
      },
      {
        id: 'kb-asalan',
        name: { in: 'Kayu Manis KB Asalan', en: 'Cinnamon KB Raw' },
        price: 'Rp 28.000',
        unit: '/ kg',
        image: '/images/kayu_manis_kb_asalan.jpg',
        description: {
          in: 'Kulit manis grade KB asalan pilihan bernilai ekonomis tinggi untuk formulasi bumbu masakan dan pasokan pasar grosir.',
          en: 'Economical Grade KB raw cassia providing stable aroma and high value for food seasonings and spice wholesalers.'
        },
        specsHighlight: { in: 'Tebal 1–2mm, VO ~1.5%', en: 'Thickness 1–2mm, VO ~1.5%' }
      },
      {
        id: 'broken-kb',
        name: { in: 'Cassia Broken KB VO 1,5', en: 'Broken Cassia KB VO 1.5' },
        price: 'Rp 32.000',
        unit: '/ kg',
        image: '/images/kayu_manis_broken_kb.jpg',
        description: {
          in: 'Pecahan kulit kayu manis grade KB berkadar minyak atsiri 1.5%, bahan baku ideal untuk penggilingan bubuk dan rempah racikan.',
          en: 'Clean broken cassia grade KB with 1.5% volatile oil, prime raw material for spice grinding and seasoning blends.'
        },
        specsHighlight: { in: 'Kadar VO 1.5%, Siap Giling', en: 'VO 1.5%, Grinding Grade' }
      },
      {
        id: 'broken-ka',
        name: { in: 'Cassia Broken KA VO 2,5', en: 'Broken Cassia KA VO 2.5' },
        price: 'Rp 38.000',
        unit: '/ kg',
        image: '/images/kayu_manis_broken_ka.jpg',
        description: {
          in: 'Pecahan kulit kayu manis grade KA pilihan berkadar VO tinggi 2.5%, aroma pekat untuk industri makanan dan farmasi premium.',
          en: 'Premium broken cassia grade KA with 2.5% volatile oil content, intense aroma for pharmaceutical and premium food processors.'
        },
        specsHighlight: { in: 'Kadar VO 2.5%, Mutu Super', en: 'VO 2.5%, Super Quality' }
      },
      {
        id: 'stick-8cm',
        name: { in: 'Kayu Manis Stick 8cm', en: 'Cinnamon Stick 8cm' },
        price: 'Rp 80.000',
        unit: '/ kg',
        image: '/images/kayu_manis_stick_8cm.jpg',
        description: {
          in: 'Gulungan kayu manis potong presisi 8cm rapi bersih, sangat diminati untuk kemasan ritel premium, restoran, dan ekspor.',
          en: 'Clean, precisely cut 8cm cinnamon quills, perfect for retail jars, gourmet hospitality, and export distribution.'
        },
        specsHighlight: { in: 'Panjang 8cm, Seragam Rapi', en: 'Length 8cm, Uniform Cut' }
      },
      {
        id: 'longstick',
        name: { in: 'Kayu Manis Longstick', en: 'Cinnamon Longstick' },
        price: 'Rp 60.000',
        unit: '/ kg',
        image: '/images/kayu_manis_longstick.jpg',
        description: {
          in: 'Batang kayu manis utuh panjang kualitas pilihan untuk industri minuman, dekorasi kuliner, dan keperluan pengolahan khusus.',
          en: 'Whole long cinnamon quills for artisanal beverage infusions, gourmet presentation, and specialized processing.'
        },
        specsHighlight: { in: 'Batang Utuh 30–60cm', en: 'Whole Quills 30–60cm' }
      }
    ],
    faq: [
      {
        question: {
          in: 'Apa perbedaan utama grade KA Asalan dan KB Asalan?',
          en: 'What is the main difference between KA Raw and KB Raw grades?'
        },
        answer: {
          in: 'Grade KA memiliki ketebalan kulit lebih tebal (1.5–3 mm), kadar minyak atsiri (VO) lebih tinggi, dan aroma manis pedas yang lebih kuat dibanding grade KB yang berukuran lebih tipis dan cocok untuk pasar ekonomis.',
          en: 'Grade KA features thicker bark (1.5–3mm), higher volatile oil content, and a more concentrated aroma compared to Grade KB, which has thinner bark and offers economical value.'
        }
      },
      {
        question: {
          in: 'Apakah tersedia dokumen karantina (Phytosanitary) untuk pengiriman antar pulau dan ekspor?',
          en: 'Are phytosanitary and quarantine certificates available for inter-island or export shipping?'
        },
        answer: {
          in: 'Ya, kami dapat melengkapi pengiriman dengan Surat Karantina Tumbuhan (KT-9), Certificate of Origin (COO), dan dokumen uji lab kadar air/VO sesuai ketentuan pemesanan.',
          en: 'Yes, we provide official Phytosanitary Certificates (KT-9), Certificates of Origin (COO), and laboratory test analyses upon agreement.'
        }
      },
      {
        question: {
          in: 'Bagaimana sistem pengemasan kayu manis untuk menjaga aroma selama ekspedisi?',
          en: 'How is the cinnamon packaged to preserve freshness during freight transit?'
        },
        answer: {
          in: 'Kayu manis dikemas dalam karung goni bersih atau karung woven PP berventilasi yang menjaga sirkulasi udara sehingga rempah tidak lembap atau berjamur saat transit darat maupun kontainer laut.',
          en: 'Cinnamon is packed in breathable jute sacks or heavy-duty woven PP bags that ensure proper ventilation and prevent fungal moisture during ground or sea freight.'
        }
      }
    ]
  },

  'cengkeh': {
    slug: 'cengkeh',
    name: {
      in: 'Cengkeh Kering Indonesia',
      en: 'Dried Indonesian Cloves'
    },
    h1: {
      in: 'Supplier Cengkeh Kering Super & Asalan Grosir',
      en: 'Wholesale Dried Indonesian Cloves Supplier'
    },
    subtitle: {
      in: 'Cengkeh Kering Pilihan Kadar Air Terukur (< 12%) dengan Kandungan Eugenol dan Minyak Atsiri Tinggi',
      en: 'Premium Sun-Dried Whole Cloves with Low Moisture (< 12%) and Rich Essential Oil Profile'
    },
    metaTitle: {
      in: 'Supplier Cengkeh Kering Super & Asalan Grosir | UD Fathan Cassia Jaya',
      en: 'Wholesale Dried Indonesian Cloves Supplier | UD Fathan Cassia Jaya'
    },
    metaDescription: {
      in: 'Supplier cengkeh kering super dan asalan bermutu tinggi. Bebas kotoran, aroma harum tajam, kadar eugenol pekat untuk industri rokok herbal, bumbu makanan, dan minyak atsiri. Pasokan grosir langsung.',
      en: 'Wholesale supplier of sun-dried Indonesian whole cloves. High eugenol, low moisture (< 12%), hand-sorted for food manufacturers, herbal industry, and export.'
    },
    image: '/images/cengkeh_katalog.jpg',
    updatedDate: {
      in: 'Oktober 2026',
      en: 'October 2026'
    },
    specs: [
      { label: { in: 'Asal Komoditas', en: 'Origin' }, value: { in: 'Lampung & Sumatra, Indonesia', en: 'Lampung & Sumatra, Indonesia' } },
      { label: { in: 'Nama Botani', en: 'Botanical Name' }, value: { in: 'Syzygium aromaticum', en: 'Syzygium aromaticum' } },
      { label: { in: 'Kadar Air (Moisture)', en: 'Moisture Content' }, value: { in: '11% – 13% Maksimal (Kering Optimal)', en: '11% – 13% Max (Optimal Dryness)' } },
      { label: { in: 'Kandungan Minyak (Oil)', en: 'Essential Oil Content' }, value: { in: '16% – 19% (Kadar Eugenol Pekat)', en: '16% – 19% (High Eugenol)' } },
      { label: { in: 'Headless (Gagang Lepas)', en: 'Headless Cloves' }, value: { in: '< 5% (Grade Super), < 10% (Grade Asalan)', en: '< 5% (Super Grade), < 10% (Standard)' } },
      { label: { in: 'Warna & Fisik', en: 'Color & Appearance' }, value: { in: 'Cokelat Kemerahan Kering Merata, Bersih Ayak', en: 'Uniform Reddish Brown, Winnowed Clean' } },
      { label: { in: 'Kemasan (Packaging)', en: 'Packaging' }, value: { in: 'Karung Woven PP 50kg dengan inner plastik kedap', en: '50kg Woven PP with Inner Liner' } },
      { label: { in: 'Minimum Order (MOQ)', en: 'Minimum Order (MOQ)' }, value: { in: '100 kg', en: '100 kg' } }
    ],
    grades: [
      {
        id: 'cengkeh-super',
        name: { in: 'Cengkeh Super (Pilihan)', en: 'Cloves Super (Selected)' },
        price: 'Rp 145.000',
        unit: '/ kg',
        image: '/images/cengkeh_katalog.jpg',
        description: {
          in: 'Bunga cengkeh utuh berkepala lengkap, kadar air di bawah 12%, warna cokelat kemerahan bersih dari gagang patah dan debu.',
          en: 'Whole intact cloves with full heads, moisture under 12%, minimal stems, vibrant aroma for premium spice blends and export.'
        },
        specsHighlight: { in: 'Kepala Utuh > 95%, Air < 12%', en: 'Intact Heads > 95%, Moisture < 12%' }
      },
      {
        id: 'cengkeh-asalan',
        name: { in: 'Cengkeh Asalan Standar', en: 'Cloves Standard Raw' },
        price: 'Rp 135.000',
        unit: '/ kg',
        image: '/images/cengkeh.jpg',
        description: {
          in: 'Cengkeh kering alami aroma harum pedas tajam, sangat cocok untuk industri bumbu olahan, saus, dan penyulingan minyak cengkeh.',
          en: 'Sun-dried natural cloves with robust aroma, well-suited for industrial spice grinding and essential oil extraction.'
        },
        specsHighlight: { in: 'Aroma Tajam, Siap Olah', en: 'Strong Pungency, Processing Ready' }
      }
    ],
    faq: [
      {
        question: {
          in: 'Berapa kadar air rata-rata cengkeh yang dikirimkan?',
          en: 'What is the average moisture content of the supplied cloves?'
        },
        answer: {
          in: 'Kadar air cengkeh kami dijaga pada kisaran 11%–13% dengan penjemuran optimal sehingga tahan disimpan berbulan-bulan tanpa risiko jamur atau penurunan kualitas.',
          en: 'Our cloves maintain a strict moisture level of 11%–13%, ensuring long shelf life without mold growth or degradation.'
        }
      },
      {
        question: {
          in: 'Apakah cengkeh sudah dibersihkan dari gagang mati dan kotoran?',
          en: 'Are the cloves cleaned of dead stems and foreign materials?'
        },
        answer: {
          in: 'Ya, cengkeh telah melalui proses penampian (winnowing) dan penyortiran manual untuk memisahkan debu, kerikil, serta meminimalkan gagang daun.',
          en: 'Yes, cloves undergo winnowing and hand sorting to remove dust, foreign particles, and minimize extraneous stems.'
        }
      },
      {
        question: {
          in: 'Bisakah melayani kontrak pasokan berkala untuk pabrik?',
          en: 'Can you supply regular monthly contracts for food processors?'
        },
        answer: {
          in: 'Bisa. Kami memiliki jaringan pengumpul dan stok gudang yang siap mendukung kontrak pasokan berkala dengan jadwal pengiriman terjadwal.',
          en: 'Yes. We maintain warehouse stockpiles to service scheduled monthly contracts with competitive pricing.'
        }
      }
    ]
  },

  'lada-hitam': {
    slug: 'lada-hitam',
    name: {
      in: 'Lada Hitam Lampung (Black Pepper)',
      en: 'Lampung Black Pepper'
    },
    h1: {
      in: 'Supplier Lada Hitam Asli Lampung Grosir',
      en: 'Wholesale Lampung Black Pepper Supplier'
    },
    subtitle: {
      in: 'Biji Lada Hitam Kering Utuh Asli Lampung dengan Berat Jenis (GL 500 & 550) dan Kepedasan Piperin Tinggi',
      en: 'Authentic Lampung Black Peppercorns with High Bulk Density (GL 500 & 550) and Sharp Piperine Heat'
    },
    metaTitle: {
      in: 'Supplier Lada Hitam Asli Lampung Grosir | UD Fathan Cassia Jaya',
      en: 'Wholesale Lampung Black Pepper Supplier | UD Fathan Cassia Jaya'
    },
    metaDescription: {
      in: 'Supplier lada hitam Lampung asli (Black Pepper) grade GL 500 dan GL 550. Biji padat berisi, aroma pedas mantap, kadar piperin tinggi untuk industri makanan olahan, bumbu dapur, dan ekspor.',
      en: 'Direct supplier of authentic Lampung black pepper (Piper nigrum). Dense peppercorns (GL 500 & 550), robust piperine heat, cleaned for food processors and global buyers.'
    },
    image: '/images/lada_hitam.jpg',
    updatedDate: {
      in: 'Oktober 2026',
      en: 'October 2026'
    },
    specs: [
      { label: { in: 'Asal Komoditas', en: 'Origin' }, value: { in: 'Lampung & Sumatra, Indonesia', en: 'Lampung & Sumatra, Indonesia' } },
      { label: { in: 'Nama Botani', en: 'Botanical Name' }, value: { in: 'Piper nigrum', en: 'Piper nigrum' } },
      { label: { in: 'Berat Jenis (Bulk Density)', en: 'Bulk Density' }, value: { in: 'GL 500 g/l s/d GL 550 g/l (Padat Berisi)', en: 'GL 500 g/l to GL 550 g/l (Heavy Density)' } },
      { label: { in: 'Kadar Air (Moisture)', en: 'Moisture Content' }, value: { in: '12% – 13% Maksimal', en: '12% – 13% Max' } },
      { label: { in: 'Kadar Piperin', en: 'Piperine Content' }, value: { in: '4.5% – 6.0% (Kepedasan Tinggi Khas Lampung)', en: '4.5% – 6.0% (Intense Characteristic Pungency)' } },
      { label: { in: 'Benda Asing (Foreign Matter)', en: 'Foreign Matter' }, value: { in: '< 1% (Bersih Ayak)', en: '< 1% (Winnowed & Sifted)' } },
      { label: { in: 'Kemasan (Packaging)', en: 'Packaging' }, value: { in: 'Karung Woven PP 50kg / 25kg', en: '25kg / 50kg Woven PP Bags' } },
      { label: { in: 'Minimum Order (MOQ)', en: 'Minimum Order (MOQ)' }, value: { in: '100 kg', en: '100 kg' } }
    ],
    grades: [
      {
        id: 'lada-gl550',
        name: { in: 'Lada Hitam GL 550 (Super Bersih)', en: 'Black Pepper GL 550 (Super Clean)' },
        price: 'Rp 115.000',
        unit: '/ kg',
        image: '/images/lada_hitam.jpg',
        description: {
          in: 'Biji lada hitam super padat berisi dengan berat jenis GL 550, warna hitam pekat, bersih ayak dari debu dan ranting.',
          en: 'Heavy density black peppercorns (GL 550), deep dark color, rigorously cleaned of dust and twigs for gourmet spice makers.'
        },
        specsHighlight: { in: 'Densitas GL 550, Bersih Ayak', en: 'Density GL 550, Sifted Clean' }
      },
      {
        id: 'lada-gl500',
        name: { in: 'Lada Hitam GL 500 (Standar Pasar)', en: 'Black Pepper GL 500 (Standard)' },
        price: 'Rp 105.000',
        unit: '/ kg',
        image: '/images/lada.jpg',
        description: {
          in: 'Biji lada hitam asli Lampung kering bersih dengan kepedasan dan aroma mantap untuk industri bumbu dan makanan olahan.',
          en: 'Genuine Lampung black pepper with stable pungency and aromatic strength, ideal for food seasonings and spice distributors.'
        },
        specsHighlight: { in: 'Densitas GL 500, Aroma Mantap', en: 'Density GL 500, Solid Aroma' }
      }
    ],
    faq: [
      {
        question: {
          in: 'Mengapa lada hitam Lampung menjadi standar komoditas internasional?',
          en: 'Why is Lampung black pepper renowned in the international spice trade?'
        },
        answer: {
          in: 'Lada hitam asal Lampung memiliki kadar piperin yang tinggi dan aroma hangat yang kaya karena ditanam di tanah vulkanik Sumatera, menghasilkan rasa pedas yang tegas dan tidak mudah pudar saat dimasak.',
          en: 'Lampung black pepper is grown in nutrient-dense volcanic soil, yielding high piperine concentrations that provide a sharp, enduring peppery heat highly prized globally.'
        }
      },
      {
        question: {
          in: 'Apakah lada hitam sudah diayak dan bersih dari kotoran?',
          en: 'Is the pepper sifted and cleaned of impurities?'
        },
        answer: {
          in: 'Ya, seluruh biji lada melewati proses penyaringan mesin ayakan untuk memisahkan debu, biji kopong, dan ranting tanaman sebelum dimasukkan ke karung penyimpanan.',
          en: 'Yes, our peppercorns pass through mechanical sifters to remove dust, hollow pinheads, and small twigs before bagging.'
        }
      },
      {
        question: {
          in: 'Bagaimana kepastian ketersediaan stok lada hitam sepanjang tahun?',
          en: 'How do you ensure year-round supply outside the harvest season?'
        },
        answer: {
          in: 'Gudang logistik kami di Bandar Lampung menampung stok buffer dalam jumlah besar sehingga mitra bisnis tetap mendapatkan pasokan stabil meski sedang jeda musim panen.',
          en: 'Our primary warehouse in Bandar Lampung maintains continuous buffer stocks to fulfill recurring orders throughout all seasons.'
        }
      }
    ]
  },

  'biji-pala': {
    slug: 'biji-pala',
    name: {
      in: 'Biji Pala Kering Kupas (Nutmeg)',
      en: 'Shelled Dried Whole Nutmeg'
    },
    h1: {
      in: 'Supplier Biji Pala Utuh Kering Grosir',
      en: 'Wholesale Indonesian Whole Nutmeg Supplier'
    },
    subtitle: {
      in: 'Biji Pala Kupas Kering Bulat (Myristica fragrans) Pilihan Bebas Jamur dengan Kandungan Minyak Aromatik Tinggi',
      en: 'Selected Shelled Whole Nutmeg (Myristica fragrans) Free of Mold with Rich Essential Oils'
    },
    metaTitle: {
      in: 'Supplier Biji Pala Utuh Kering Grosir | UD Fathan Cassia Jaya',
      en: 'Wholesale Indonesian Whole Nutmeg Supplier | UD Fathan Cassia Jaya'
    },
    metaDescription: {
      in: 'Supplier biji pala kupas utuh kering (Whole Nutmeg) grade ABCD dan asalan. Biji bulat padat, bersih tanpa jamur, aroma wangi rempah pekat untuk industri makanan olahan, minyak atsiri, dan ekspor.',
      en: 'Wholesale supplier of Indonesian shelled whole nutmeg seeds (Myristica fragrans). Grades ABCD and shrivelled, low moisture, aflatoxin tested, ready for industrial supply.'
    },
    image: '/images/biji_pala.jpg',
    updatedDate: {
      in: 'Oktober 2026',
      en: 'October 2026'
    },
    specs: [
      { label: { in: 'Asal Komoditas', en: 'Origin' }, value: { in: 'Sumatra & Kepulauan Maluku, Indonesia', en: 'Sumatra & Maluku Islands, Indonesia' } },
      { label: { in: 'Nama Botani', en: 'Botanical Name' }, value: { in: 'Myristica fragrans (Biji Kupas)', en: 'Myristica fragrans (Shelled Seed)' } },
      { label: { in: 'Kadar Air (Moisture)', en: 'Moisture Content' }, value: { in: '10% – 12% Maksimal (Kering Sempurna)', en: '10% – 12% Max (Thoroughly Dried)' } },
      { label: { in: 'Kadar Minyak Atsiri', en: 'Essential Oil Content' }, value: { in: '7% – 12%', en: '7% – 12%' } },
      { label: { in: 'Kondisi Fisik', en: 'Physical Condition' }, value: { in: 'Biji Kupas Bulat Utuh, Padat, Bebas Aflatoksin/Jamur', en: 'Shelled Round Whole Seeds, Firm, Mold-Free' } },
      { label: { in: 'Aroma & Rasa', en: 'Flavor & Aroma' }, value: { in: 'Hangat, Manis Aromatik Khas Pala Nusantara', en: 'Warm, Sweetly Aromatic Traditional Nutmeg' } },
      { label: { in: 'Kemasan (Packaging)', en: 'Packaging' }, value: { in: 'Karung Goni Bersih / Woven PP 50kg', en: 'Clean Jute Bag / 50kg Woven PP' } },
      { label: { in: 'Minimum Order (MOQ)', en: 'Minimum Order (MOQ)' }, value: { in: '100 kg', en: '100 kg' } }
    ],
    grades: [
      {
        id: 'pala-abcd',
        name: { in: 'Biji Pala ABCD (Utuh Bulat Super)', en: 'Whole Nutmeg ABCD (Super Round)' },
        price: 'Rp 135.000',
        unit: '/ kg',
        image: '/images/biji_pala.jpg',
        description: {
          in: 'Biji pala kupas utuh bulat mulus tanpa keriput, kualitas premium pilihan untuk industri makanan, bakery, dan ekspor.',
          en: 'Prime round whole nutmeg without wrinkles, selected for premium culinary seasoning, bakery formulations, and export.'
        },
        specsHighlight: { in: 'Grade ABCD, Bulat Mulus', en: 'Grade ABCD, Smooth Round' }
      },
      {
        id: 'pala-shrivelled',
        name: { in: 'Biji Pala Shrivelled / Standar', en: 'Nutmeg Shrivelled / Standard' },
        price: 'Rp 120.000',
        unit: '/ kg',
        image: '/images/pala.jpg',
        description: {
          in: 'Biji pala berkerut alami dengan kandungan minyak atsiri tetap pekat, ideal untuk ekstraksi minyak atsiri dan industri bumbu giling.',
          en: 'Naturally shrivelled whole nutmeg retaining dense volatile oils, prime raw material for oil distillation and spice powder milling.'
        },
        specsHighlight: { in: 'Kaya Minyak, Siap Ekstraksi', en: 'Oil Rich, Extraction Grade' }
      }
    ],
    faq: [
      {
        question: {
          in: 'Apakah biji pala sudah dikupas dari cangkang kerasnya?',
          en: 'Are the nutmeg seeds supplied without their hard shells?'
        },
        answer: {
          in: 'Ya, seluruh produk biji pala kami adalah biji pala kupas (shelled nutmeg) yang sudah bersih dari cangkang hitam dan fuli pembungkusnya.',
          en: 'Yes, our nutmeg is supplied shelled (without hard shells or mace arils), ready for grinding or processing.'
        }
      },
      {
        question: {
          in: 'Bagaimana penanganan agar biji pala tidak berjamur saat disimpan?',
          en: 'How do you prevent mold growth during storage and transport?'
        },
        answer: {
          in: 'Biji pala dijemur secara bertahap hingga kadar air di bawah 11% dan disimpan di gudang bersuhu sejuk dengan palet kayu beralas untuk sirkulasi udara optimal.',
          en: 'Seeds undergo controlled sun-drying below 11% moisture and are stored on wooden pallets in well-ventilated dry warehouses.'
        }
      },
      {
        question: {
          in: 'Apakah melayani pengiriman ke luar pulau dan kontainer?',
          en: 'Do you arrange inter-island and full container logistics?'
        },
        answer: {
          in: 'Kami bekerja sama dengan ekspedisi kargo darat, laut, dan forwarding kontainer untuk pengiriman aman ke seluruh kota di Indonesia dan pelabuhan ekspor.',
          en: 'We partner with established freight forwarders for reliable land and maritime container shipping nationwide and to export ports.'
        }
      }
    ]
  },

  'bunga-pala': {
    slug: 'bunga-pala',
    name: {
      in: 'Bunga Pala / Mace Kering (Fuli)',
      en: 'Dried Red Mace Blades (Nutmeg Flower)'
    },
    h1: {
      in: 'Supplier Bunga Pala / Mace Kering Merah Grosir',
      en: 'Wholesale Red Mace / Nutmeg Flower Supplier'
    },
    subtitle: {
      in: 'Fuli Bunga Pala Kering Pilihan (Mace Blade) Berwarna Merah Kemerahan Alami dengan Aroma Mewah Eksotis',
      en: 'Premium Reddish Dried Mace Blades (Myristica fragrans) for Gourmet Flavoring & Essential Oil Extraction'
    },
    metaTitle: {
      in: 'Supplier Bunga Pala / Mace Kering Merah Grosir | UD Fathan Cassia Jaya',
      en: 'Wholesale Red Mace / Nutmeg Flower Supplier | UD Fathan Cassia Jaya'
    },
    metaDescription: {
      in: 'Supplier bunga pala (mace/fuli) kering merah super. Aroma harum manis eksotis, kadar minyak tinggi, bersih tanpa kotoran untuk industri bumbu premium, saus gourmet, dan farmasi herbal.',
      en: 'Direct wholesale supplier of authentic Indonesian red mace blades (nutmeg flower). High essential oil profile, vibrant natural color, and intense aroma for culinary and herbal uses.'
    },
    image: '/images/mace_bunga_pala_katalog.jpg',
    updatedDate: {
      in: 'Oktober 2026',
      en: 'October 2026'
    },
    specs: [
      { label: { in: 'Asal Komoditas', en: 'Origin' }, value: { in: 'Maluku & Sumatra, Indonesia', en: 'Maluku & Sumatra, Indonesia' } },
      { label: { in: 'Nama Botani', en: 'Botanical Name' }, value: { in: 'Myristica fragrans (Arillus / Fuli)', en: 'Myristica fragrans (Aril / Mace)' } },
      { label: { in: 'Kadar Air (Moisture)', en: 'Moisture Content' }, value: { in: '10% – 12% Maksimal', en: '10% – 12% Max' } },
      { label: { in: 'Kandungan Minyak Atsiri', en: 'Essential Oil Content' }, value: { in: '9% – 14% (Aroma Kuat Mewah)', en: '9% – 14% (Concentrated Fragrance)' } },
      { label: { in: 'Warna Alami', en: 'Natural Color' }, value: { in: 'Merah Kemerahan Cerah Alami (Tanpa Pewarna Kimia)', en: 'Vibrant Natural Reddish Amber (No Additives)' } },
      { label: { in: 'Bentuk', en: 'Form' }, value: { in: 'Helai Bunga Pala Utuh & Pecahan Bersih', en: 'Whole Intact Blades & Clean Broken Chips' } },
      { label: { in: 'Kemasan (Packaging)', en: 'Packaging' }, value: { in: 'Karton Box Tebal 10kg / 25kg dengan kantong plastik kedap', en: '10kg / 25kg Sturdy Carton with Poly Liner' } },
      { label: { in: 'Minimum Order (MOQ)', en: 'Minimum Order (MOQ)' }, value: { in: '50 kg', en: '50 kg' } }
    ],
    grades: [
      {
        id: 'mace-super',
        name: { in: 'Bunga Pala Merah Utuh Super (Grade 1)', en: 'Whole Red Mace Super (Grade 1)' },
        price: 'Rp 370.000',
        unit: '/ kg',
        image: '/images/mace_bunga_pala_katalog.jpg',
        description: {
          in: 'Helai bunga pala utuh melebar berwarna merah menyala, kualitas nomor satu ekspor dengan aroma harum semerbak.',
          en: 'Whole wide mace blades with rich reddish color, export Grade 1 standard with exotic refined fragrance.'
        },
        specsHighlight: { in: 'Helai Utuh > 85%, Merah Cerah', en: 'Whole Blades > 85%, Bright Red' }
      },
      {
        id: 'mace-standar',
        name: { in: 'Bunga Pala Standar Ekstraksi', en: 'Standard Mace for Extraction' },
        price: 'Rp 340.000',
        unit: '/ kg',
        image: '/images/mace_bunga_pala.jpg',
        description: {
          in: 'Campuran helai utuh dan pecahan bunga pala kering bersih, sangat kaya minyak atsiri untuk ekstraksi dan rempah olahan.',
          en: 'Clean blend of intact blades and chips, highly saturated in essential oils for oleoresin extraction and spice blends.'
        },
        specsHighlight: { in: 'Kaya Minyak, Siap Olah', en: 'High Oil, Processing Ready' }
      }
    ],
    faq: [
      {
        question: {
          in: 'Apa kegunaan utama bunga pala (mace) dalam industri kuliner dan farmasi?',
          en: 'What are the primary applications of mace in culinary and pharmaceutical industries?'
        },
        answer: {
          in: 'Mace memiliki profil aroma yang lebih lembut dan elegan dibanding biji pala, banyak dipakai untuk bumbu sosis Eropa, saus keju/bechamel, kue bakery gourmet, serta minyak wangi herbal.',
          en: 'Mace offers a more delicate, floral-sweet aroma than nutmeg, widely used in European charcuterie, bechamel sauces, fine bakery, and wellness formulations.'
        }
      },
      {
        question: {
          in: 'Mengapa pengemasan bunga pala menggunakan karton box?',
          en: 'Why is mace packed in sturdy carton boxes instead of regular sacks?'
        },
        answer: {
          in: 'Helai bunga pala kering memiliki struktur tipis yang rapuh. Kotak karton tebal beralas plastik menjaga agar helai bunga tidak hancur menjadi serpihan selama proses ekspedisi.',
          en: 'Dried mace blades are delicate and brittle. Rigid corrugated carton boxes lined with poly film protect the blades from crushing during transit.'
        }
      },
      {
        question: {
          in: 'Apakah warna merah pada bunga pala dijamin asli alami?',
          en: 'Is the reddish color of the mace completely natural?'
        },
        answer: {
          in: '100% alami tanpa bahan pewarna. Warna merah didapat dari buah pala segar masak pohon yang langsung dikupas dan dijemur higienis di bawah sinar matahari.',
          en: '100% natural without artificial coloring. The reddish hue comes from tree-ripened fresh nutmeg arils sun-dried under hygienic conditions.'
        }
      }
    ]
  },

  'kapulaga': {
    slug: 'kapulaga',
    name: {
      in: 'Kapulaga Kering (Indonesian Cardamom)',
      en: 'Indonesian Cardamom (Amomum compactum)'
    },
    h1: {
      in: 'Supplier Kapulaga Kering Super Grosir',
      en: 'Wholesale Indonesian Cardamom Supplier'
    },
    subtitle: {
      in: 'Polong Kapulaga Kering Pilihan (Amomum compactum) Padat Berisi dengan Aroma Segar Semerbak untuk Industri & Jamu',
      en: 'Selected Dried Indonesian Round Cardamom (Amomum compactum) with Dense Aromatic Pods'
    },
    metaTitle: {
      in: 'Supplier Kapulaga Kering Super Grosir | UD Fathan Cassia Jaya',
      en: 'Wholesale Indonesian Cardamom Supplier | UD Fathan Cassia Jaya'
    },
    metaDescription: {
      in: 'Supplier kapulaga kering super dan standar jamu (Amomum compactum). Polong bulat padat, biji berminyak harum, bebas jamur, pasokan stabil untuk industri farmasi herbal, kuliner, dan bumbu.',
      en: 'Direct supplier of Indonesian round cardamom (Amomum compactum). Plump aromatic pods, low moisture, cleaned and sorted for food processors and herbal medicine.'
    },
    image: '/images/kapulaga_katalog.jpg',
    updatedDate: {
      in: 'Oktober 2026',
      en: 'October 2026'
    },
    specs: [
      { label: { in: 'Asal Komoditas', en: 'Origin' }, value: { in: 'Jawa Barat & Sumatra, Indonesia', en: 'West Java & Sumatra, Indonesia' } },
      { label: { in: 'Nama Botani', en: 'Botanical Name' }, value: { in: 'Amomum compactum (Kapulaga Jawa)', en: 'Amomum compactum (Round Cardamom)' } },
      { label: { in: 'Kadar Air (Moisture)', en: 'Moisture Content' }, value: { in: '12% – 14% Maksimal (Kering Renyah)', en: '12% – 14% Max (Crisp Dry)' } },
      { label: { in: 'Bentuk Polong', en: 'Pod Morphology' }, value: { in: 'Bulat Padat Mengembang, Biji Cokelat Hitam Padat', en: 'Plump Round Pods with Dense Blackish Seeds' } },
      { label: { in: 'Kadar Minyak Atsiri', en: 'Essential Oil Content' }, value: { in: '5% – 8% (Aroma Herbal Menyegarkan)', en: '5% – 8% (Refreshing Herbal Note)' } },
      { label: { in: 'Kebersihan', en: 'Cleanliness' }, value: { in: 'Bersih Ayak dari Ranting & Tangkai Daun', en: 'Winnowed Clean from Stems & Debris' } },
      { label: { in: 'Kemasan (Packaging)', en: 'Packaging' }, value: { in: 'Karung Woven PP 25kg / 50kg', en: '25kg / 50kg Woven PP Bag' } },
      { label: { in: 'Minimum Order (MOQ)', en: 'Minimum Order (MOQ)' }, value: { in: '100 kg', en: '100 kg' } }
    ],
    grades: [
      {
        id: 'kapulaga-super',
        name: { in: 'Kapulaga Kering Pilihan (Super)', en: 'Cardamom Super (Selected)' },
        price: 'Rp 105.000',
        unit: '/ kg',
        image: '/images/kapulaga_katalog.jpg',
        description: {
          in: 'Polong kapulaga bulat besar padat berisi, warna cerah bersih, aroma wangi herbal tajam tanpa polong kempes.',
          en: 'Plump large round cardamom pods, bright color, robust herbal camphor note, sorted free of hollow pods.'
        },
        specsHighlight: { in: 'Polong Padat > 90%, Biji Penuh', en: 'Dense Pods > 90%, Full Seeds' }
      },
      {
        id: 'kapulaga-standar',
        name: { in: 'Kapulaga Standar Jamu / Herbal', en: 'Cardamom Standard Herbal' },
        price: 'Rp 90.000',
        unit: '/ kg',
        image: '/images/kapulaga.jpg',
        description: {
          in: 'Ukuran polong campur alami, kadar minyak tinggi, pilihan ekonomis untuk bahan baku rebusan jamu tradisional dan bumbu giling.',
          en: 'Natural mixed size pods with high oil content, economical choice for herbal tonics and commercial spice blending.'
        },
        specsHighlight: { in: 'Kering Alami, Nilai Ekonomis', en: 'Naturally Dried, High Value' }
      }
    ],
    faq: [
      {
        question: {
          in: 'Apa spesies kapulaga yang disediakan UD Fathan Cassia Jaya?',
          en: 'What cardamom variety does UD Fathan Cassia Jaya provide?'
        },
        answer: {
          in: 'Kami menyediakan varietas kapulaga lokal Indonesia (Amomum compactum / Kapulaga Jawa) yang berbentuk bulat dan terkenal dengan profil aroma herbal yang khas untuk bumbu dan obat herbal.',
          en: 'We supply authentic Indonesian round cardamom (Amomum compactum), renowned for its distinctive camphoraceous aroma in Asian cooking and herbal medicine.'
        }
      },
      {
        question: {
          in: 'Apakah polong kapulaga yang dikirim padat dan tidak kosong?',
          en: 'Are the cardamom pods plump with full seed counts?'
        },
        answer: {
          in: 'Ya, kami melakukan penampian dan seleksi fisik agar polong kapulaga padat berisi biji dan tidak banyak polong kempes/kosong.',
          en: 'Yes, winnowing and physical density screening ensure pods are densely packed with mature aromatic seeds.'
        }
      },
      {
        question: {
          in: 'Bagaimana cara terbaik menyimpan kapulaga dalam jumlah banyak di gudang?',
          en: 'What is the recommended storage method for bulk cardamom?'
        },
        answer: {
          in: 'Simpan di ruangan berventilasi baik dengan kelembapan rendah (< 65%), jauhkan dari sinar matahari langsung, dan gunakan palet agar karung tidak bersentuhan langsung dengan lantai beton.',
          en: 'Store in a low-humidity (< 65%) ventilated warehouse on wooden pallets, away from direct sunlight to preserve volatile oils.'
        }
      }
    ]
  },

  'cabe-jamu': {
    slug: 'cabe-jamu',
    name: {
      in: 'Cabe Jamu / Cabe Jawa Kering',
      en: 'Dried Java Long Pepper (Piper retrofractum)'
    },
    h1: {
      in: 'Supplier Cabe Jamu / Cabe Jawa Kering Grosir',
      en: 'Wholesale Java Long Pepper Supplier'
    },
    subtitle: {
      in: 'Cabe Jawa Kering Pilihan (Piper retrofractum) Kualitas Kering Hitam Merata untuk Industri Jamu Tradisional & Herbal',
      en: 'Selected Dried Java Long Pepper with Uniform Dark Dryness for Herbal & Pharmaceutical Manufacturers'
    },
    metaTitle: {
      in: 'Supplier Cabe Jamu / Cabe Jawa Kering Grosir | UD Fathan Cassia Jaya',
      en: 'Wholesale Java Long Pepper Supplier | UD Fathan Cassia Jaya'
    },
    metaDescription: {
      in: 'Supplier cabe jamu (cabe jawa kering) grosir kualitas terbaik. Buah utuh, rasa pedas hangat pekat, kadar air kering merata untuk bahan baku industri jamu, farmasi herbal, dan rempah bumbu.',
      en: 'Direct supplier of authentic dried Java long pepper (Piper retrofractum). Clean, whole cylindrical fruits with high piperine pungency for herbal medicine, wellness tonics, and export.'
    },
    image: '/images/cabe_jawa_katalog.jpg',
    updatedDate: {
      in: 'Oktober 2026',
      en: 'October 2026'
    },
    specs: [
      { label: { in: 'Asal Komoditas', en: 'Origin' }, value: { in: 'Jawa Timur & Madura, Indonesia', en: 'East Java & Madura, Indonesia' } },
      { label: { in: 'Nama Botani', en: 'Botanical Name' }, value: { in: 'Piper retrofractum Vahl (Cabe Jawa)', en: 'Piper retrofractum Vahl (Java Long Pepper)' } },
      { label: { in: 'Kadar Air (Moisture)', en: 'Moisture Content' }, value: { in: '11% – 13% Maksimal (Kering Renyah)', en: '11% – 13% Max (Crisp Dry)' } },
      { label: { in: 'Bentuk Fisik', en: 'Physical Form' }, value: { in: 'Bulir Buah Silinder Runcing Utuh (Panjang 2–5 cm)', en: 'Whole Cylindrical Spikes (Length 2–5 cm)' } },
      { label: { in: 'Warna Buah', en: 'Color' }, value: { in: 'Cokelat Kehitaman Kering Matang Alami', en: 'Mature Dark Brownish Black' } },
      { label: { in: 'Rasa & Karakteristik', en: 'Taste & Character' }, value: { in: 'Pedas Hangat Menggigit Khas Senyawa Piperin & Minyak Atsiri', en: 'Sharp Lingering Pungency & Warming Aroma' } },
      { label: { in: 'Kemasan (Packaging)', en: 'Packaging' }, value: { in: 'Karung Woven PP 50kg berpori', en: '50kg Breathable Woven PP Bags' } },
      { label: { in: 'Minimum Order (MOQ)', en: 'Minimum Order (MOQ)' }, value: { in: '100 kg', en: '100 kg' } }
    ],
    grades: [
      {
        id: 'cabe-super',
        name: { in: 'Cabe Jawa Super (Kering Merata)', en: 'Java Long Pepper Super' },
        price: 'Rp 105.000',
        unit: '/ kg',
        image: '/images/cabe_jawa_katalog.jpg',
        description: {
          in: 'Buah utuh panjang mulus, kering keras hitam, minim patahan, bersih dari debu dan tanah untuk industri herbal premium.',
          en: 'Whole intact spikes, thoroughly dried to dark black tone, minimal breakage, sorted for premium wellness formulations.'
        },
        specsHighlight: { in: 'Buah Utuh > 90%, Kering Keras', en: 'Intact Spikes > 90%, Crisp Dry' }
      },
      {
        id: 'cabe-standar',
        name: { in: 'Cabe Jawa Standar Industri Jamu', en: 'Java Long Pepper Standard' },
        price: 'Rp 95.000',
        unit: '/ kg',
        image: '/images/cabe_jawa.jpg',
        description: {
          in: 'Ukuran buah campur alami, kering tuntas, siap langsung masuk mesin penggiling untuk pabrik jamu dan obat tradisional.',
          en: 'Natural mixed size spikes, thoroughly dried, ready for direct milling in industrial herbal pulverizers.'
        },
        specsHighlight: { in: 'Siap Giling, Nilai Ekonomis', en: 'Ready to Mill, Economical' }
      }
    ],
    faq: [
      {
        question: {
          in: 'Apakah cabe jamu ini sudah siap langsung digiling oleh pabrik?',
          en: 'Is the long pepper ready for immediate pulverization?'
        },
        answer: {
          in: 'Ya, cabe jamu kami telah dikeringkan secara tuntas hingga kering renyah, sehingga dapat langsung masuk ke mesin penggiling (crusher/pulverizer) tanpa penjemuran ulang.',
          en: 'Yes, our long pepper is dried thoroughly to a crisp texture, ready for immediate milling without additional drying.'
        }
      },
      {
        question: {
          in: 'Apakah produk bebas dari kotoran tanah dan jamur?',
          en: 'Is the product free of soil debris and mold?'
        },
        answer: {
          in: 'Buah dipetik saat matang merah dan dikeringkan di atas para-para bersih (bukan di atas tanah terbuka) sehingga terbebas dari kotoran tanah dan debu pasir.',
          en: 'Berries are harvested ripe and dried on elevated drying beds above ground, keeping them free of sand, dust, and soil contamination.'
        }
      },
      {
        question: {
          in: 'Apakah bisa meminta sampel fisik sebelum memesan partai tonase?',
          en: 'Can we request a physical sample before placing a multi-ton order?'
        },
        answer: {
          in: 'Tentu. Kami menyediakan paket sampel fisik untuk uji laboratorium pabrik atau inspeksi mutu sebelum penerbitan PO partai besar.',
          en: 'Certainly. We provide physical sample packs for factory laboratory verification prior to issuing bulk purchase orders.'
        }
      }
    ]
  }
};

/**
 * Helper to retrieve a commodity by slug
 * @param {string} slug
 * @returns {object|null}
 */
export function getCommodity(slug) {
  if (!slug) return null;
  const cleanSlug = String(slug).toLowerCase().trim();
  return COMMODITIES[cleanSlug] || null;
}

/**
 * Map product IDs to their corresponding commodity slug
 */
export const PRODUCT_TO_COMMODITY_MAP = {
  '01': 'kayu-manis',
  '02': 'kayu-manis',
  '03': 'kayu-manis',
  '04': 'kayu-manis',
  '05': 'kayu-manis',
  '06': 'kayu-manis',
  '07': 'cengkeh',
  '08': 'lada-hitam',
  '09': 'bunga-pala',
  '10': 'biji-pala',
  '11': 'kapulaga',
  '12': 'cabe-jamu'
};
