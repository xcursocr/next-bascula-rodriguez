import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    username: v.string(),
    email: v.string(),
    password: v.string(),
    avatar: v.optional(v.string()),
    isAdmin: v.boolean(),
    role: v.string(),
    tokenEmail: v.string(),
    isConfirm: v.boolean(),
    status: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
  categories: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    icon: v.optional(v.string()),
    imageStoragId: v.optional(v.string()),
  }),
  colors: defineTable({
    name: v.string(),
    hex: v.string(),
  }),
  sizes: defineTable({
    name: v.string(),
    measureUnit: v.string(),
  }),
  features: defineTable({
    name: v.string(),
    valueType: v.string(),
    unit: v.optional(v.string()),
  }),
  products: defineTable({
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    price: v.number(),
    currency: v.string(),
    categoryId: v.id("categories"),
    colorIds: v.array(v.id("colors")),
    sizeIds: v.array(v.id("sizes")),
    featureIds: v.array(v.id("features")),
    imageStorageIds: v.array(v.string()),
    stock: v.number(),
    status: v.string(),
    cratedAt: v.number(),
    updatedAt: v.number(),
  }),
});
