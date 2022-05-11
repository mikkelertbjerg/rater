import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sessionService from "../../core/services/sessionService";

const JoinSessionPage = () => {
    const navigate = useNavigate();

    const [id, setId] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const onCreateSession = async () => {
        try {
            const session = await sessionService().create();
            navigate(`/session/${session.id}`);
        } catch (error) {
            // TODO, add error toast
        } finally {
            setLoading(false);
        }
    };

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
                    loading={loading}
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
                    className="p-button w-full"
                    label="Create your own session!"
                    loading={loading}
                    onClick={() => onCreateSession()}
                />
            </div>
        </>
    );
};

export default JoinSessionPage;