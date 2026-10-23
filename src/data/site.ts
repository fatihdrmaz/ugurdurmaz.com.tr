import type { ImageMetadata } from 'astro';

import foto234a from '../assets/foto/Picture-234a.jpg';
import cezaliKuslar from '../assets/foto/cezali-kuslar.jpg';
import galata from '../assets/foto/galata.jpg';
import inat from '../assets/foto/inat.jpg';
import kabatas from '../assets/foto/kabatas.jpg';
import kugu from '../assets/foto/kugu-1920.jpg';
import marti from '../assets/foto/marti3.jpg';
import mor from '../assets/foto/morr.jpg';
import plovdiv from '../assets/foto/plovdiv.jpg';
import puff from '../assets/foto/puff.jpg';
import sincap from '../assets/foto/sin1600.jpg';
import sultanahmet from '../assets/foto/sultanahmet.jpg';
import yaprak from '../assets/foto/yapp.jpg';
import yelken from '../assets/foto/yelken2.jpg';

export const nav = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimda/', label: 'Biyografi' },
  { href: '/fotograflar/', label: 'Fotoğraflar' },
  { href: '/calismalar/', label: 'Çalışmalar' },
  { href: '/services/', label: 'Hizmetler' },
  { href: '/hesap-numaralari/', label: 'Hesap Numaraları' },
  { href: '/iletisim/', label: 'İletişim' },
];

export const socials = [
  { href: 'https://www.instagram.com/ugurdrmz/', label: '@ugurdrmz', icon: 'instagram' },
  { href: 'https://www.facebook.com/ugurdurmaz75', label: 'Facebook', icon: 'facebook' },
  { href: 'https://twitter.com/ugur_drmz', label: 'Twitter', icon: 'twitter' },
  { href: 'https://www.linkedin.com/in/ugur-durmaz-75508a69/', label: 'LinkedIn', icon: 'linkedin' },
] as const;

export const contact = {
  addressLines: ['Merkez Mh. Halitpaşa Cd.', 'No: 27/A Gaziosmanpaşa', 'İstanbul - Türkiye'],
  mapsQuery: 'Merkez Mh. Halitpaşa Cd. No: 27/A Gaziosmanpaşa İstanbul',
  tel: '+90 (552) 523 43 17',
  telHref: 'tel:+905525234317',
  gsm: '+90 (552) 523 43 17',
  gsmHref: 'tel:+905525234317',
  whatsappHref: 'https://wa.me/905525234317',
  email: 'ugurdurmaz@gmail.com',
  instagram: 'https://www.instagram.com/ugurdrmz/',
  instagramHandle: '@ugurdrmz',
};

export type Category = 'Doğa' | 'Şehir' | 'İnsan';

export interface Photo {
  src: ImageMetadata;
  title: string;
  alt: string;
  category: Category;
}

export const photos: Photo[] = [
  { src: sultanahmet, title: 'Sultanahmet', alt: 'Gece ışıklarıyla Sultanahmet Camii ve önündeki fıskiyeler', category: 'Şehir' },
  { src: yelken, title: 'Yelken', alt: 'Parıldayan denizde yelkenli teknenin silueti', category: 'Doğa' },
  { src: cezaliKuslar, title: 'Cezalı Kuşlar', alt: 'Gün batımında baca üzerinde iki martı silueti', category: 'Doğa' },
  { src: galata, title: 'Galata', alt: 'Mavi gökyüzü önünde Galata Kulesi', category: 'Şehir' },
  { src: foto234a, title: 'Sessiz Göl', alt: 'Mavi saatte gölde bağlı kırmızı sandal', category: 'Doğa' },
  { src: yaprak, title: 'Kalp', alt: 'Kuru yapraklar arasında kalp biçimli yeşil sarmaşık yaprağı', category: 'Doğa' },
  { src: plovdiv, title: 'Plovdiv', alt: "Plovdiv'de kayalar üzerinde şehri izleyen bir kişinin silueti", category: 'İnsan' },
  { src: puff, title: 'Puf', alt: 'Bokeh ışıklar önünde karahindiba', category: 'Doğa' },
  { src: kabatas, title: 'Kabataş', alt: 'Karlı çatıda iki martı, Kabataş', category: 'Şehir' },
  { src: mor, title: 'Mor', alt: 'Sonbahar yaprakları arasında mor çiğdem çiçeği', category: 'Doğa' },
  { src: inat, title: 'İnat', alt: 'Kütük üzerinde filizlenen tek bir ince yeşil sap', category: 'Doğa' },
  { src: marti, title: 'Martı', alt: 'Mavi gökyüzünde kanat açmış uçan martı', category: 'Doğa' },
  { src: sincap, title: 'Sincap', alt: 'Ağaç gövdesinde baş aşağı inen kızıl sincap', category: 'Doğa' },
  { src: kugu, title: 'Kuğu', alt: 'Gece ışıklandırılmış su yüzeyinde kuğu ve renkli fıskiyeler', category: 'Şehir' },
];

const workModules = import.meta.glob<{ default: ImageMetadata }>('../assets/calisma/*.jpg', { eager: true });
export const works = Object.keys(workModules)
  .sort()
  .map((key, i) => ({
    src: workModules[key].default,
    title: `Logo Tasarımı ${String(i + 1).padStart(2, '0')}`,
    alt: `Uğur Durmaz logo tasarımı çalışması ${i + 1}`,
  }));

export const clients = [
  'Ülker', 'Evyap', 'İstikbal Mobilya', 'Doğtaş Mobilya', 'Pioneer', 'Kenwood', 'Sunset',
  'İhlas Holding', 'Duranlı', 'Mebel Plus', 'Technostar', 'Davivo', 'Eyüp Lisesi',
  'Era Kolejleri', 'Tuna ood', 'Antik Restaurant', 'Çelik Sigorta', 'Elpa Yapi',
  'Kahve Sokağı', 'İstanbul Diş',
];

export const timeline = [
  { year: '1975', text: "1 Nisan'da İstanbul Gaziosmanpaşa'da doğdu." },
  { year: '1993', text: '"CTC Bilgisayar" firmasını kurdu; Commodore, Amiga, Atari ve Sega markalarında yazılım ve donanım hizmeti vermeye başladı.' },
  { year: '1998', text: "G.O.Paşa, Beşiktaş ve Kadıköy'de iki mağaza ile toplamda dört şubede hizmet verdi." },
  { year: '1999', text: 'Bulgaristan Plovdiv\'de "CTC Studio" firmasını kurarak reklam sektöründe pek çok çalışma yaptı.' },
  { year: '2002', text: 'Sofia\'daki şirket ortaklığı ile Bulgaristan\'ın ilk tabelacılık dergisi "Sign Graphic Bulgaria"yı çıkardı.' },
  { year: '2015', text: 'Reklam ve bilgisayar hizmetlerini birleştirerek "CTC Bilişim ve Görsel Tasarım" şirketini kurdu.' },
];

export const services = [
  { icon: 'pen-tool', title: 'Logo & Kurumsal Kimlik', text: 'Markanızı anlatan logo, kartvizit, antetli kâğıt ve kurumsal kimlik tasarımları.' },
  { icon: 'camera', title: 'Fotoğrafçılık', text: 'Ürün, mekân, etkinlik ve tanıtım çekimleri; profesyonel düzenleme ve rötuş.' },
  { icon: 'monitor', title: 'Web Tasarım', text: 'Hızlı, mobil uyumlu ve arama motoru dostu kurumsal web siteleri.' },
  { icon: 'megaphone', title: 'Reklam & Tabela', text: 'Tabela, afiş, katalog ve broşür gibi basılı reklam materyallerinin tasarımı ve uygulaması.' },
  { icon: 'printer', title: 'Matbaa & Baskı', text: 'Tasarımdan baskıya tüm süreçte tek noktadan çözüm ve kalite kontrol.' },
  { icon: 'cpu', title: 'Bilişim Hizmetleri', text: 'Bilgisayar, tablet ve telefonlar için donanım, yazılım ve teknik destek.' },
];

export const accounts = [
  {
    holder: 'Uğur Durmaz',
    banks: [
      { bank: 'Enpara', ibans: [{ currency: '₺', label: 'TL', iban: 'TR78 0015 7000 0000 0083 7002 08' }] },
    ],
  },
  {
    holder: 'CTC Bilişim ve Görsel Tasarım Tic. Ltd. Şti.',
    banks: [{ bank: 'Enpara', ibans: [{ currency: '₺', label: 'TL', iban: 'TR46 0015 7000 0000 0107 4256 26' }] }],
  },
];
