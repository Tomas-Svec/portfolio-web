/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    darkMode: 'class', // Habilita el modo oscuro basado en la clase 'dark'
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
          secondary: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          background: {
            light: '#f3f4f6', // Fondo claro
            dark: '#1f2937', // Fondo oscuro
          },
          text: {
            light: '#111827', // Texto en modo claro
            dark: '#e5e7eb', // Texto en modo oscuro
          },
        },
      },
    },
    plugins: [],
  };