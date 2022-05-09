import { ReactNode } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface Props {
    children?: ReactNode;
}

const Layout = ({ children }: Props) => {

    return (
        <div className="flex flex-column min-h-screen">
            <Navigation />
            <Body children={children} />
            <Footer />
        </div>
    );
};

export default Layout;