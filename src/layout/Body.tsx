import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const Body = ({ children }: Props) => {

    return (
        <div className="p-10 my-auto justify-content-center align-items-center">
            {children}
        </div>
    );
};

export default Body;