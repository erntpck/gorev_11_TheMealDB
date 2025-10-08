#  RecipeHub

RecipeHub, TheMealDB API’sini kullanarak dünyanın farklı mutfaklarından yemek tariflerini listeleyen basit bir React uygulamasıdır.  
Bu proje, **React + TypeScript + Tailwind CSS** yapısında geliştirilmiş olup `useState`, `useEffect` ve `fetch` kullanımı örneklerini göstermektedir.

---

##  Özellikler

- API üzerinden yemek verilerini çeker (`TheMealDB`)
- Her yemek bir **kart** şeklinde görüntülenir
- Kartta:
  - Yemek fotoğrafı  
  - Adı  
  - Kategori  
  - Ülke  
  - 30 dakika sabit süre bilgisi bulunur
- **Hover (üzerine gelince)** tarifin kısa özeti görüntülenir
- Tamamen **responsive** (mobil, tablet, masaüstü) tasarım

---

##  Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|------------|-----------|
| **React** | UI oluşturmak için |
| **TypeScript** | Tip güvenliği ve daha düzenli kod için |
| **Tailwind CSS** | Hızlı ve modern CSS frameworkü |
| **TheMealDB API** | Yemek tariflerini almak için kullanılan açık kaynaklı API |

---

##  Proje Yapısı
src/
├─ components/
│   └─ RecipeCard.tsx      # Yemek kartı bileşeni (hover efektiyle)
├─ App.tsx                 # Ana sayfa ve API bağlantısı
└─ main.tsx                # Uygulamanın başlangıç noktası
---

##  Çalıştırma

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
                
