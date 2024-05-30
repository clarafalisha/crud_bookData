import { prisma } from "@/lib/prisma";

export const getBooks = async (query: string, currentPage: number) => {
    try {
        const books = await prisma.book.findMany({
            where:{
                OR:[
                    {
                        title: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        author: {
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                ]
            }, orderBy: { createdAt: 'desc'}
        });
        return books;
    } catch (error) {
        throw new Error("Failed to fetch contact data");
    }
};

export const getBookById = async (id: string) => {
    try {
        const book = await prisma.book.findUnique({ where: {id}});
        return book;
    } catch (error) {
        throw new Error("Failed to fetch contact data");
    }
};