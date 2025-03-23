export default ({ env }) => ({
    upload: {
      config: {
        provider: "@strapi/provider-upload-cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
          secure: false, // ✅ Forces HTTPS connections
          maxFileSize: 10 * 1024 * 1024, // 10MB limit
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
  