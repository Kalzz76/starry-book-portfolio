export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        malamsihir: "#14173a",
        ungu: "#4b2a6b",
        ungugelap: "#1d1230",
        perkamen: "#d8c08a",
        perkamentua: "#c2a468",
        sepia: "#2e1f12",
        tembaga: "#8a5a2b",
        emas: "#c9a227",
        krem: "#f4ead2",
        ramuanhijau: "#3fae6b",
        ramuanbiru: "#2f6fba",
        ramuanmerah: "#9b2c2c",
        cahayatinta: "#ffe9a8"
      },
      fontFamily: {
        judul: ["Cinzel Decorative", "serif"],
        isi: ["Cormorant Garamond", "serif"],
        aksen: ["IM Fell English", "serif"]
      },
      boxShadow: {
        halaman: "0 10px 30px rgba(0, 0, 0, 0.55)"
      }
    }
  },
  plugins: []
}
