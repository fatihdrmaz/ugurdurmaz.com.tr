# ugurdurmaz.com.tr

Uğur Durmaz kişisel web sitesinin modern yeniden tasarımı. [Astro](https://astro.build) ile statik olarak üretilir; görseller derleme sırasında WebP'ye dönüştürülür.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ klasörüne çıktı
```

## İçerik

Menü, iletişim bilgileri, fotoğraflar, müşteriler, hizmetler ve IBAN'lar tek dosyada: `src/data/site.ts`.

- Yeni fotoğraf: `src/assets/foto/` içine koyup `photos` listesine ekleyin.
- Yeni logo çalışması: `src/assets/calisma/` içine `.jpg` olarak koyun (otomatik listelenir).

## Yayınlama (Vercel)

1. Bu depoyu GitHub'a gönderin.
2. vercel.com → **Add New… → Project** → GitHub deposunu seçin.
3. Framework olarak **Astro** otomatik algılanır; ayar değiştirmeden **Deploy**.
4. Alan adı: Project → Settings → Domains → `ugurdurmaz.com.tr` ve `www.ugurdurmaz.com.tr` ekleyip DNS kayıtlarını Vercel'in gösterdiği şekilde güncelleyin.
