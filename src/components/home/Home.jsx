import { useContext } from "react";
import Banner from "../banner/Banner";
import CategoryList from "../categoryList/CategoryList";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";
import { GlobalContext } from "../../main";

const Home = () => {

    // contextAPI get
    // const contextApi = useContext(GlobalContext);
    // console.log(contextApi)

    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;