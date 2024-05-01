import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Open":["Open Sans", "sans-serif"],
      },
      colors: {
        'buttonleft': '#B49169',
        'buttonright': '#B5AC49',
        'cardd':'#E3F6E0',
        'card':'#E6F4F6',
        'carddd':'#EEF6F7',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
