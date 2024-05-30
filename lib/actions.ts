"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const BookSchema = z.object({
    title: z.string().min(3),
    author: z.string().min(3),
    genres: z.string().min(3),
    price: z.coerce.number().positive(),
    stock: z.coerce.number().int().positive(),

});

export const saveBook = async (prevState:any, formData: FormData) => {
    const validatedFields = BookSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!validatedFields.success){
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    try{
        await prisma.book.create({
            data:{
                title: validatedFields.data.title,
                author: validatedFields.data.author,
                genres: validatedFields.data.genres,
                price: validatedFields.data.price,
                stock: validatedFields.data.stock,
            }
        })
    } catch (error) {
        return {message: "Failed to input book"}
    }
    revalidatePath("/books");
    redirect("/books");
};

export const updateBook = async (id:string, prevState:any, formData: FormData) => {
    const validatedFields = BookSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!validatedFields.success){
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    try{
        await prisma.book.update({
            data:{
                title: validatedFields.data.title,
                author: validatedFields.data.author,
                genres: validatedFields.data.genres,
                price: validatedFields.data.price,
                stock: validatedFields.data.stock,
            }, where:{id}
        })
    } catch (error) {
        return {message: "Failed to update book"}
    }
    revalidatePath("/books");
    redirect("/books");
};

export const deleteBook = async (id:string) => {    
    try{
        await prisma.book.delete({
            where:{ id },
        })
    } catch (error) {
        return {message: "Failed to delete book"}
    }
    revalidatePath("/books");
};