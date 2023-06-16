import prisma from "../lib/prisma"

export const resolvers = {
  Query: {
    crops: () => {
      return prisma.crop.findMany()
    }
  }
}