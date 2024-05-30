"use client";
import { updateBook } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./buttons";
import type { Book } from "@prisma/client";
const UpdateForm = ({ book }: { book: Book }) => {
        const UpdateBookWithId = updateBook.bind(null, book.id);
        const[state, formAction] = useFormState(UpdateBookWithId, null);
    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-900">Title</label>
                    <input type="text" name="title" id="title" placeholder="Title" defaultValue={book.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                    <div id="title-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.title}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-900">Author</label>
                    <input type="text" name="author" id="author" placeholder="Author" defaultValue={book.author} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                    <div id="author-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.author}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="genres" className="block text-sm font-medium text-gray-900">Genres</label>
                    <input type="text" name="genres" id="genres" placeholder="Genres" defaultValue={book.genres} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                    <div id="genres-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.genres}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-900">Price</label>
                    <input type="number" name="price" id="price" placeholder="Price" defaultValue={book.price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                    <div id="price-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.price}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="stock" className="block text-sm font-medium text-gray-900">Stock</label>
                    <input type="number" name="stock" id="stock" placeholder="Stock" defaultValue={book.stock} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                    <div id="stock-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.stock}</p>
                    </div>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                    </div>
                <SubmitButton label="update"/>
            </form>
        </div>
    )
}

export default UpdateForm;