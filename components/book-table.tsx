import { getBooks } from "@/lib/data";
import { formarDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "./buttons";

const BookTable = async ({query, currentPage}: { query: string; currentPage: number; }) => {
        const books = await getBooks(query, currentPage);
    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-100">
                <tr>
                    <th className="py-3 px-6">No.</th>
                    <th className="py-3 px-6">Title</th>
                    <th className="py-3 px-6">Author</th>
                    <th className="py-3 px-6">Genres</th>
                    <th className="py-3 px-6">Price</th>
                    <th className="py-3 px-6">Stock</th>
                    <th className="py-3 px-6">Created At</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) =>(
                    <tr key={book.id} className="bg-white border-b">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{book.title}</td>
                    <td className="py-3 px-6">{book.author}</td>
                    <td className="py-3 px-6">{book.genres}</td>
                    <td className="py-3 px-6">{book.price}</td>
                    <td className="py-3 px-6">{book.stock}</td>
                    <td className="py-3 px-6">{formarDate(book.createdAt.toString())}</td>
                    <td className="flex justify-center gap-1 py-3">
                        <EditButton id={book.id}/>
                        <DeleteButton id={book.id} title={book.title}/>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BookTable;