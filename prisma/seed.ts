import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import bcrypt from "bcrypt"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
  adapter,
});



export async function main() {
const adminPassword = await bcrypt.hash("admin123", 12)
const userPassword = await bcrypt.hash("user123", 12)

 await prisma.user.create({
  data: {
    name: "Tomas",
    lastname: "Luza",
    email: "tomas@exclusive.com",
    role: "ADMIN",
    password: adminPassword,
  }
})

await prisma.user.create({
  data: {
    name: "User",
    email: "user@example.com",
    lastname: "Name",
    password: userPassword,
  }
})
}
main();
