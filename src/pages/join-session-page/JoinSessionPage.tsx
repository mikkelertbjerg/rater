import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinSession = () => {
    const navigate = useNavigate();
    const [id, setId] = useState<string>('');

    return (
        <>
            <div className="flex">
                <InputText
                    id="join"
                    className="flex p-inputtext mb-3 min-w-full"
                    placeholder="Session id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    type="text"
                />
            </div>
            <div className="flex">
                <Button
                    label="Join session"
                    className="p-button mb-3 min-w-full"
                    onClick={() => navigate(`/session/${id}`)}
                />
            </div>
            <div className="flex">
                <Divider />
                <h4 className="my-5 mx-3">or</h4>
                <Divider />
            </div>
            <div className="flex">
                <Button
                    label="Create your own session!"
                    className="p-button w-full"
                    onClick={() => navigate("/session/create")}
                />
            </div>
        </>
    );
};

export default JoinSession;