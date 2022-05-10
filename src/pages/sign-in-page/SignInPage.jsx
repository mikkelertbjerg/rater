import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-content-center">
        <h2>Welcome Back!</h2>
      </div>
      <div className="flex justify-content-center mb-5">
        <Button
          className="p-button-text"
          onClick={() => navigate("/sign-up")}
          label="Don't have an account? Create one here!"
        />
      </div>
      <div className="mb-5">
        <span className="p-float-label flex">
          <InputText
            id="email"
            className="flex p-inputtext min-w-full"
            type="email"
          />
          <label htmlFor="email">Email address</label>
        </span>
      </div>
      <div className="flex">
        <Button className="p-button min-w-full" label="Sign in"></Button>
      </div>
    </>
  );
};

export default SignInPage;
