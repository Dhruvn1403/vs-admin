export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'strap.io', 'market-assets.strapi.io', 'res.cloudinary.com',],
          'media-src': ["'self'", 'data:', 'blob:', 'strap.io', 'market-assets.strapi.io', 'res.cloudinary.com',],
          upgradeInsecureRequests: null,
        }
      }
    }
  },
  {
    name: 'strapi::cors',
    config: {
      origin: '*',
      headers: '*',
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
