import { Divider } from "primereact/divider";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const LandingPage = () => {
  const navigate = useNavigate();
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
        label="Create your own session!"
        className="p-button w-full"
        onClick={() => navigate("/session/create")}
      />
    </>
  );
};

export default LandingPage;
