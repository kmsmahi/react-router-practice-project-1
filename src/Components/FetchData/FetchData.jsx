import { useLoaderData } from "react-router";
import SingleBook from "../SingleBook/SingleBook";

const FetchData = () => {
    const data=useLoaderData();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {
                data.map((book)=>(
                    <SingleBook key={book.bookId} book={book}></SingleBook>
                ))
            }
        </div>
    );
};

export default FetchData;