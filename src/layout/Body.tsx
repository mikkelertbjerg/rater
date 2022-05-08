import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const Body = ({ children }: Props) => {

    return (
        <div className="p-6">
            {children}
        </div>
    );
};

export default Body;