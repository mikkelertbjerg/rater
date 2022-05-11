import { Divider } from "primereact/divider";
import { Button } from "primereact/button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import sessionService from "../../core/services/sessionService";

const LandingPage = () => {
  const navigate = useNavigate();

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
      <Button
        label="Join an active session?"
        className="p-button w-full"
        onClick={() => navigate("/session/join")}
      />
      <div className="flex justify-content-center">
        <Divider />
        <h4 className="my-5 mx-3">or</h4>
        <Divider />
      </div>
      <Button
        className="p-button w-full"
        label="Create your own session!"
        onClick={() => onCreateSession()}
        loading={loading}
      />
    </>
  );
};

export default LandingPage;
