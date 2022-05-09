import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const SignUpPage = () => {
  return (
    <>
      <div className="flex">
        <InputText
          id="email"
          className="flex p-inputtext mb-3 min-w-full"
          placeholder="Email address"
          type="email"
        />
      </div>
      <div className="flex">
        <Button
          label="Sign up for Rater"
          className="p-button p-button-success mb-3 min-w-full"
        />
      </div>
    </>
  );
};

export default SignUpPage;
