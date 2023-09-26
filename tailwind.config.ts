import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'clay-bg': "url('/clay-bg.jpg')",
      },
      colors: {
        'beige':'#f4e5ae',
        'purple':'#b688e2',
        'pink':'#f999a4',
        'green':'#b1d989',
        'blue':'#69b6d9',
        'orange':'#f6a841',
      },
      borderRadius: {
        'lg': '35px',
      },
    },
  },
  plugins: [],
}
export default config
