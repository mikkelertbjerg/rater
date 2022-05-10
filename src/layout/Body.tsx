import { Card } from "primereact/card";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const Body = ({ children }: Props) => {

    return (
        <div className="m-auto justify-content-center align-items-center">
            <Card className="w-18rem md:20rem lg:w-22rem">
                {children}
            </Card>
        </div>
    );
};

export default Body;