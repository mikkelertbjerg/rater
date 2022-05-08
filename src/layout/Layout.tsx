import { ReactNode } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface Props {
    children?: ReactNode;
}

const Layout = ({ children }: Props) => {

    return (
        <>
            <Navigation />
            <Body children={children} />
            <Footer />
        </>
    );
};

export default Layout;