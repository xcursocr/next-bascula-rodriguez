import { query } from "../_generated/server";

export const listCategories = query(async (ctx) => {
  return await ctx.db.query("categories").order("asc").collect();
});
