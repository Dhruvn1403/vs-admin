export default {
    routes: [
      {
        method: "GET",
        path: "/articles/find-by-slug/:slug",
        handler: "article.findBySlug",
        config: {
          auth: false, // Change to true if authentication is needed
        },
      },
    ],
  };
  