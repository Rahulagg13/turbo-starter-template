"use server";
import { prisma } from "@repo/database";

const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      admin: true,
    },
  });
  return users;
};

export default getUsers;
