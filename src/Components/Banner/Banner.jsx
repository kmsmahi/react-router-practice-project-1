import bookimg from '../../../public/books.jpg';

const Banner = () => {
    return (
        <div className="bg-gray-100 rounded-3xl mt-8 mb-12">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between px-10 py-12 lg:px-24 lg:py-20 gap-10">
                
                {/* Image Section: Using a clean scale-in effect */}
                <div className="flex justify-center w-full lg:w-1/2">
                    <img
                        src={bookimg}
                        alt="Featured Book Collection"
                        className="max-w-xs md:max-w-sm rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#131313] font-playfair">
                        Books to freshen up <br /> 
                        <span className="text-gray-800">your bookshelf</span>
                    </h1>
                    
                    <div className="pt-4">
                        <button className="btn bg-[#23BE0A] hover:bg-[#1fa508] text-white border-none px-8 py-3 h-auto text-lg font-bold capitalize transition-all duration-300">
                            View The List
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;