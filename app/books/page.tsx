import BookTable from "@/components/book-table";
import Search from "@/components/search";
import { CreateButton } from "@/components/buttons";
const Books = ({ searchParams }: { searchParams?:{ query?: string; page?: string; }}) => {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <h1 className="text-2xl mb-2 font-bold">Book Data</h1>
            <div className="flex items-center justify-between gab-2 mb-5">                
                <Search />
                <div className="mr-5"></div>
                <CreateButton />
            </div>
            <BookTable query={query} currentPage={currentPage}/>
        </div>
    );
};

export default Books;