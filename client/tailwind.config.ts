import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        Clg: '1024px',
      },
      padding: {
        'custom-t': '4px',  // custom top padding
        'custom-r': '12px', // custom right padding
        'custom-b': '5px',  // custom bottom padding
        'custom-l': '12px', // custom left padding
      },
      fontFamily: {
        arrus: ['Arrus', 'sans-serif']
      }
    },
  },
  plugins: [nextui()],
};
export default config;
