export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.MODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
