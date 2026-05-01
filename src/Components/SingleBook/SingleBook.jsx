import { Link } from "react-router"; 
const SingleBook = ({ book }) => {
    const { bookId, image, bookName, author, category, rating, tags } = book;
    
    return (
        
        <Link to={`/bookDetails/${bookId}`} className="group relative bg-white border border-gray-100 rounded-[2rem] p-5 hover:border-[#23BE0A50] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] cursor-pointer flex flex-col h-full">
            
            
            <div className="relative overflow-hidden bg-[#F3F3F3] rounded-[1.5rem] py-10 mb-6 flex justify-center items-center">
                <img 
                    src={image} 
                    alt={bookName} 
                    className="h-44 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 ease-out" 
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm">Quick View</span>
                </div>
            </div>

            
            <div className="flex flex-wrap gap-2 mb-4">
                {tags && tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-[#23BE0A08] text-[#23BE0A] rounded-lg text-xs font-bold uppercase tracking-wider">
                        {tag}
                    </span>
                ))}
            </div>

            
            <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-extrabold text-[#131313] leading-tight mb-2 group-hover:text-[#23BE0A] transition-colors duration-300 line-clamp-2">
                    {bookName}
                </h2>
                <p className="text-gray-500 font-medium text-sm mb-auto">
                    by <span className="text-gray-800">{author}</span>
                </p>
                
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-5"></div>

                
                <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{category}</span>
                    <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full">
                        <span className="font-bold text-gray-700">{rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleBook;