import UpdateForm from "@/components/edit-form";
import { getBookById } from "@/lib/data";
import { notFound } from "next/navigation";
const UpdateBookPage = async ({params}: {params:{id:string}}) => {
        const id = params.id
        const book = await getBookById(id);

        if(!book){
            notFound();
        }
    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2 font-bold">Update Book</h1>
           <UpdateForm book={book}/>
        </div>

    );
};

export default UpdateBookPage;