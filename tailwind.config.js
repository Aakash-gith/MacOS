/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                apple: {
                    gray: '#f5f5f7',
                    text: '#1d1d1f',
                    blue: '#0071e3',
                    subtext: '#86868b',
                    glass: 'rgba(255, 255, 255, 0.7)',
                }
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
            backdropBlur: {
                'apple': '20px',
            }
        },
    },
    plugins: [],
}
