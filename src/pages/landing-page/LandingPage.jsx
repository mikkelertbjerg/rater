import { Divider } from "primereact/divider";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex">
        <Button
          label="Join an active session?"
          className="p-button w-full"
          onClick={() => navigate("/session/join")}
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

export default LandingPage;
