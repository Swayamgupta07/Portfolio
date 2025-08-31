import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  contacts: defineTable({
  name: v.string(),
  email: v.string(),
  subject: v.string(),
  message: v.string(),
  status: v.string(),
  createdAt: v.optional(v.float64()),  // <-- optional now
}).index("by_status", ["status"]),

  chatMessages: defineTable({
    message: v.string(),
    response: v.string(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
