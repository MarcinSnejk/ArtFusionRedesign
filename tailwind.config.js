export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },

      boxShadow: {
          'my-shadow': '0 4px 10px #A259FF',
          'under-shadow': '0 3px 0 #A259FF',
          '2-shadow': '0 1px 0 #A259FF',
      },
    },
  },
  plugins: [],
}