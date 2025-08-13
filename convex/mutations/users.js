import { v } from "convex/values";
import { mutation, action, query } from "../_generated/server";
import bcrypt from "bcryptjs";
import { api } from "../_generated/api";
import { deleteSession } from "@/lib/session";

// Mutation pura — sólo inserta
export const insertUser = mutation({
  args: {
    name: v.string(),
    username: v.optional(v.string()),
    email: v.string(),
    password: v.string(),
    avatar: v.optional(v.string()),
    isAdmin: v.boolean(),
    role: v.string(),
    tokenEmail: v.string(),
    isConfirm: v.boolean(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("users", {
      ...args,
      role: "customer",
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Action — puede usar bcrypt y otras APIs "lentas"
export const registerUser = action({
  args: {
    name: v.string(),
    email: v.string(),
    password: v.string(),
    isAdmin: v.optional(v.boolean()),
  },
  handler: async (ctx, { name, email, password, isAdmin }) => {
    // Verificar si existe
    const existing = await ctx.runQuery(api.mutations.users.findByEmail, {
      email,
    });
    if (existing) throw new Error("Email ya registrado");

    // Hashear
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar
    await ctx.runMutation(api.mutations.users.insertUser, {
      name,
      username: "",
      email,
      password: hashedPassword,
      avatar: "",
      isAdmin: isAdmin ?? false,
      role: "customer",
      tokenEmail: crypto.randomUUID(),
      isConfirm: false,
      status: "active",
    });

    return { success: true };
  },
});

// Query auxiliar para buscar usuario por email
export const findByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), email))
      .first();
  },
});

export const loginUser = action({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, { email, password }) => {
    const user = await ctx.runQuery(api.mutations.users.findByEmail, { email });
    if (!user) throw new Error("Usuario no encontrado");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Contraseña incorrecta");

    return {
      userId: user._id,
      role: user.role,
      name: user.name,
      username: user.username,
    };
  },
});
