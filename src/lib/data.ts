export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageRatio: string;
  tags: string[];
  resultLabel: string;
  resultUrl: string;
};

export type Achievement = {
	title: string;
	category: string;
	description: string;
	year: string;
	image: string;
};

export const contact = {
	email: 'zestraxxyyy@gmail.com',
	github: 'https://github.com/Vann-xyra'
};

export const profile = {
	name: 'Evan Alfian Putra Pratama',
	role: 'TJKT Student · Digital Creator',
	school: 'SMK Negeri 8 Semarang',
	className: 'XI TJKT 1',
	location: 'Semarang, Indonesia',
	bio: 'Saya adalah siswa kelas XI Teknik Jaringan Komputer dan Telekomunikasi (TJKT) di SMK Negeri 8 Semarang. Saya tertarik pada teknologi jaringan, pengembangan web, dan kreativitas digital. Saya senang mempelajari hal baru melalui praktik, mengembangkan ide menjadi proyek, serta terus meningkatkan kemampuan melalui pengalaman.',
	skills: [
		'Cisco Packet Tracer',
		'Networking',
		'VLAN',
		'DHCP Server',
		'HTML',
		'CSS',
		'JavaScript',
		'SvelteKit',
		'TypeScript',
		'Tailwind CSS',
		'Git & GitHub',
		'Video Editing'
	]
};

export const photos = {
	portrait: '/images/profile.png'
};


export const projects = [
  {
    number: '01',
    title: 'Kupas Tuntas VLAN & DHCP Server',
    category: 'Individual Project',
    description:
      'E-book panduan praktis simulasi jaringan komputer menggunakan Cisco Packet Tracer. Membahas konsep VLAN, konfigurasi VLAN, dan DHCP Server secara bertahap.',
    image: '/images/ebook-cover.png',
    imageRatio: 'A4',
    tags: ['Networking', 'Cisco Packet Tracer', 'E-book'],
    resultLabel: 'Lihat E-book (DOCX)',
    resultUrl: '/files/Kupas Tuntas Vlan dan DHCP Server.docx'
  },
  {
    number: '02',
    title: 'PasarCircle AI',
    category: 'JOINTS × INSPIRE Ideathon 2026',
    description:
      'Konsep solusi pengelolaan sampah nonorganik dari pasar tradisional, UMKM kuliner, dan rumah tangga. Menggunakan sistem poin, penukaran diskon, serta notifikasi penjemputan sampah.',
    image: '/images/pasarcircle.png',
    imageRatio: '692 / 663',
    tags: ['Sustainability', 'AI Concept', 'Ideathon'],
    resultLabel: 'Lihat Proyek (PDF)',
    resultUrl: '/files/pasarcircle.pdf'
  },
  {
    number: '03',
    title: 'Video Editing: Stop Penyebaran Hoaks',
    category: 'Client Project',
    description:
      'Proyek editing video edukasi tentang pencegahan penyebaran berita atau informasi hoaks. Dikerjakan dengan menambahkan cinematic intro dan subtitle agar pesan lebih mudah dipahami.',
    image: '/images/video-editing.png',
    imageRatio: '16 / 9',
    tags: ['Video Editing', 'Subtitle', 'Cinematic'],
    resultLabel: 'Tonton Video',
    resultUrl: 'https://drive.google.com/file/d/1VxJxhiTIWe-xmeBxN_3xLW8snCiwJSFk/view'
  }
];


export const achievements: Achievement[] = [
	{
		title: 'Juara Harapan I FLS3N 2026',
		category: 'Kreativitas Musik Tradisi · Kota Semarang',
		description:
			'Meraih Juara Harapan I dalam Festival Lomba Seni dan Sastra Siswa Nasional (FLS3N) 2026 cabang Kreativitas Musik Tradisi tingkat Kota Semarang.',
		year: '2026',
		image: '/images/fls3n-award.png'
	},
	{
		title: 'Peserta JOINTS × INSPIRE Ideathon 2026',
		category: 'Kompetisi Ideathon · Universitas Gadjah Mada',
		description:
			'Berpartisipasi dalam Kompetisi Ideathon JOINTS 2026 kategori SMA/SMK/Sederajat melalui gagasan PasarCircle AI.',
		year: '2026',
		image: '/images/joints-certificate.png'
	},
	{
		title: 'Achievement Moment',
		category: 'Documentation · 2026',
		description:
			'Dokumentasi pengalaman dan perjalanan dalam kegiatan serta pencapaian.',
		year: '2026',
		image: '/images/achievement-moment.png'
	}
];
