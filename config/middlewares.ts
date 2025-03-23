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
  {
    name: 'strapi::body',
    config: {
      formidable: {
        maxFileSize: 10 * 1024 * 1024, // 10MB limit
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
