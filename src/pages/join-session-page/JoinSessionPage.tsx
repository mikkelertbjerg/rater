import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const JoinSession = () => {

    return (
        <>
            <div className="flex">
                <InputText
                    id="join"
                    className="flex p-inputtext mb-3 min-w-full"
                    placeholder="Session id"
                    type="text"
                />
            </div>
            <div className="flex">
                <Button
                    label="Join"
                    className="p-button mb-3 min-w-full"
                />
            </div>
        </>
    );
};

export default JoinSession;