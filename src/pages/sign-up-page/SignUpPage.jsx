import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const SignUpPage = () => {
  return (
    <>
      <InputText
        id="email"
        className="p-inputtext w-full"
        placeholder="Email address"
        type="email"
      />
      <Button
        label="Sign up for Rater"
        className="p-button-lg p-button-success w-full"
      />
    </>
  );
};

export default SignUpPage;
