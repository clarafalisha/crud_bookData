"use client"
import Link from "next/link"
import { IoAddSharp, IoPencil, IoTrash, IoArrowForwardCircleSharp } from "react-icons/io5"
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteBook } from "@/lib/actions";

export const BookButton = () =>{
    return (
        <Link href="/books" className="inline-flex items-center space-x-1 text-center text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
        <IoArrowForwardCircleSharp size={20} /> Books Table
        </Link>
    );
};
export const CreateButton = () =>{
    return (
        <Link href="/books/create" className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
        <IoAddSharp size={20} /> Create
        </Link>
    );
};

export const EditButton = ({ id }: { id: string }) =>{
    return (
        <Link href={`/books/edit/${id}`} className="rounded-sm border p-1 hover:bg-gray-100">
        <IoPencil size={20} />
        </Link>
    );
};

export const DeleteButton = ({ id, title }: { id: string; title: string }) =>{
    const handleDelete = async (event: React.FormEvent) => {
        event.preventDefault();
        const confirmation = confirm(`Are you sure you want to delete the book titled "${title}"?`);
        if (confirmation) {
            await deleteBook(id);
            window.location.reload();
        }
    };
    return (
        <form onSubmit={handleDelete}>
            <button type="submit" className="rounded-sm border p-1 hover:bg-gray-100">
                <IoTrash size={20} />
            </button>
        </form>        
    );
};

export const SubmitButton = ({label}: {label:string}) =>{
    const {pending} = useFormStatus();

    const className = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center", 
    {
        "opacity-50 cursor-progress": pending,
    });
    return (
        <button type="submit" className={className} disabled={pending}>
            {label === "save"? (
                <span>{pending ? "Saving...": "Save"}</span>
            ):(
                <span>{pending ? "Updating...": "Update"}</span>
            )}
        </button>
    );
};