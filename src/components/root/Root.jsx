import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect } from "react";

const Root = () => {

    // useLocation hook use kore pathname dynamic start
    const loc = useLocation();
    // console.log(loc)

    useEffect(() => {
        if (loc.pathname == '/') {
            document.title = 'CareerHub - home'
        }
        else {
            document.title = `CareerHub ${loc.pathname.replace('/', '- ')}`
        }
        // product name show state use kore hoise job.jsx
        if (loc.state) {
            document.title = `CareerHub - ${loc.state}`
        }

    }, [loc.pathname, loc.state])
    // end

    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;