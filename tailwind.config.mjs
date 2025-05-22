const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f6c344',      // XicoExpress yellow
        accent: '#ffbb00',       // Orange accent
        dark: '#101010',         // Deep dark
        grayish: '#bcbcbc',      // Van-light gray
        foreground: '#000000',   // Text
        background: '#ffffff'    // Page background
      }
    }
  },
  plugins: []
}

export default config;
