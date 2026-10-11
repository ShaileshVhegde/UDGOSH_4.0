import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    fullName: v.string(),
    college: v.string(),
    contactNumber: v.string(),
    email: v.string(),
    eventName: v.string(),
    numberOfParticipants: v.number(),
  },
  handler: async (ctx, args) => {
    const registrationId = await ctx.db.insert("registrations", {
      fullName: args.fullName,
      college: args.college,
      contactNumber: args.contactNumber,
      email: args.email,
      eventName: args.eventName,
      numberOfParticipants: args.numberOfParticipants,
      status: "pending",
    });
    return registrationId;
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("registrations").order("desc").collect();
  },
});

export const getByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("registrations")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .collect();
  },
});
