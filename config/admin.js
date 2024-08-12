module.exports = ({ env }) => ({
  auth: {
    secret: process.env.AUTH_SECRET || 'HpSwHnSLgvDK8pRu5H+uutT/nKKfPpsO2s0u7Rdp5DM=',
  },
  apiToken: {
    salt: process.env.API_TOKEN_SALT || 'Ci0S588HtvkIpFm9cdHh6A==',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
