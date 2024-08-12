module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: [
        'https://bytebits.vercel.app', // Your frontend URL
      ],
      headers: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    },
  },
};
