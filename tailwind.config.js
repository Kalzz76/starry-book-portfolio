export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        kertas: "#fdfbef",
        pasir: "#f1e8d4",
        kartu: "#f8f6ee",
        hutan: "#1f4d36",
        lumut: "#8aa76a",
        jingga: "#d9732f",
        sakura: "#e9a6b5",
        malam: "#161b4a",
        malamgelap: "#0d1136",
        samudra: "#2a4d9b",
        langit: "#6fa8dc",
        bintang: "#f6d776",
        emas: "#c9a227",
        tinta: "#1a1a1a"
      },
      fontFamily: {
        judul: ["Fraunces", "serif"],
        isi: ["DM Sans", "sans-serif"],
        tulisan: ["Caveat", "cursive"]
      },
      boxShadow: {
        lembut: "0 8px 24px rgba(31, 77, 54, 0.12)"
      }
    }
  },
  plugins: []
}
