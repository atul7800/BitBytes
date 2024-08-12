module.exports = [
  {
    name: 'strapi::logger',
    config: {
      level: 'info',
    },
  },
  {
    name: 'strapi::errors',
    config: {},
  },
  {
    name: 'strapi::security',
    config: {},
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'ttp://localhost:5173',
        'https://bytebits.vercel.app', // Your frontend URL
      ],
      headers: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    },
  },
  {
    name: 'strapi::poweredBy',
    config: {},
  },
  {
    name: 'strapi::query',
    config: {},
  },
  {
    name: 'strapi::body',
    config: {},
  },
  {
    name: 'strapi::session',
    config: {},
  },
  {
    name: 'strapi::favicon',
    config: {},
  },
  {
    name: 'strapi::public',
    config: {},
  },
];
