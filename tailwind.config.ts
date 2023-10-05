import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6246EA",
        lightGray: "#EFF0F3",
        darkGray: "#2B2C34",
        deepBlue: "#001858"
      },
      animation: {
      }
    },
  },
  plugins: [],
}
export default config
