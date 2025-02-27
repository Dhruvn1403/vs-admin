import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::article.article", ({ strapi }) => ({
    async findBySlug(ctx) {
      try {
        const { slug } = ctx.params;
  
        // ✅ Correct way to query by slug
        const article = await strapi.entityService.findMany("api::article.article", {
          filters: { slug: slug },  // Ensure 'slug' is the correct field name
          populate: "*",  // Get all related data
        });
  
        if (!article || article.length === 0) {
          return ctx.notFound("Article not found");
        }
  
        ctx.body = article[0];  // Return the first matching article
      } catch (error) {
        console.error("Error in findBySlug:", error);
        ctx.internalServerError("An error occurred");
      }
    },
  }));
  