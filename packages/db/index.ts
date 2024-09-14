import { PrismaClient } from "@prisma/client";

// Create a PrismaClient instance
const client = new PrismaClient();

// Export the PrismaClient instance as default
export default client;

// Also export all other Prisma-related types and utilities
export * from "@prisma/client";
