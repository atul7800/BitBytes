module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: [
        'https://bytebits.vercel.app', // Your frontend URL
        'https://your-other-frontend-url.com' // Additional URLs if needed
      ],
      headers: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    },
  },
};
