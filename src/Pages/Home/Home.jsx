import Banner from "../../Components/Banner/Banner";
import FetchData from "../../Components/FetchData/FetchData";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-4xl font-bold flex items-center justify-center">Books</h1>
            <FetchData></FetchData>
        </div>
    );
};

export default Home;