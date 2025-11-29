/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // مهم جداً لتفعيل الدارك مود باستخدام class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE7639",
        "card-border": "#2B2B2B",
      },

      // هنا نضيف الـ gradients
      backgroundImage: {
        // يعمل فقط بال light mode
        "card-gradient":
          "linear-gradient(to bottom right, #1C1C1C 50%, #050505)",
      },

      // هنا نحط override للدارك مود
      backgroundColor: {
        "card-gradient-dark": "transparent", 
      },
    },
  },
  plugins: [],
};
