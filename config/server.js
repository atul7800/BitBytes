module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['i76VrKZ9sTV/JKU5DF3olpnsHAJ6T7fPq7LFMdbLdZc=', 'pYInHoCBlyS/so6JLuy1YkdE6fuaBLAr1b2zLwe5XRE=']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
