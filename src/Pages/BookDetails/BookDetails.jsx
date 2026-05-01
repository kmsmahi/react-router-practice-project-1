import { useLoaderData, useParams } from "react-router";
import { addtoDb } from "../../Components/Utilities/Addtodb";

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();

    const singleBookDetails = data.find(book => book.bookId === parseInt(bookId));

    if (!singleBookDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-bars loading-lg text-[#23BE0A]"></span>
            </div>
        );
    }

    const { 
        image, bookName, author, category, rating, 
        tags, review, totalPages, publisher, yearOfPublishing 
    } = singleBookDetails;
    const readHandler=(id)=>{

         addtoDb(id);
    }

    return (
        <div className="container mx-auto my-12 px-4 md:px-8 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Left: Premium Image Container */}
                <div className="bg-gray-50 rounded-3xl p-10 lg:p-20 flex justify-center items-center shadow-sm">
                    <img 
                        src={image} 
                        alt={bookName} 
                        className="max-h-[500px] w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                    />
                </div>

                {/* Right: Structured Information */}
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-[#131313] mb-3">{bookName}</h1>
                    <p className="text-xl font-medium text-gray-700 mb-4">By: {author}</p>
                    
                    <div className="border-y border-gray-200 py-3 mb-4">
                        <span className="text-xl font-medium text-gray-700">{category}</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        <span className="font-bold text-[#131313]">Review: </span>
                        {review}
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-bold text-[#131313]">Tag</span>
                        <div className="flex flex-wrap gap-3">
                            {tags.map((tag, index) => (
                                <span key={index} className="px-4 py-1 bg-[#23BE0A08] text-[#23BE0A] rounded-full text-sm font-bold">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6 space-y-4">
                        {/* Data Grid for technical specs */}
                        <div className="grid grid-cols-2 max-w-sm gap-y-3">
                            <span className="text-gray-500">Number of Pages:</span>
                            <span className="font-bold text-[#131313]">{totalPages}</span>
                            
                            <span className="text-gray-500">Publisher:</span>
                            <span className="font-bold text-[#131313]">{publisher}</span>
                            
                            <span className="text-gray-500">Year of Publishing:</span>
                            <span className="font-bold text-[#131313]">{yearOfPublishing}</span>
                            
                            <span className="text-gray-500">Rating:</span>
                            <span className="font-bold text-[#131313]">{rating}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8">
                        <button onClick={readHandler(bookId)} className="btn btn-outline px-8 py-3 h-auto text-lg font-bold border-gray-300 hover:bg-[#23BE0A] hover:border-[#23BE0A] capitalize">
                            Read
                        </button>
                        <button className="btn bg-[#50B1C9] hover:bg-[#3da1b8] text-white border-none px-8 py-3 h-auto text-lg font-bold capitalize">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;