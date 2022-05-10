import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const SignUpPage = () => {
  return (
    <>
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

      <div className="mb-5">
        <span className="p-float-label flex">
          <InputText
            id="name"
            className="flex p-inputtext min-w-full"
            type="text"
          />
          <label htmlFor="name">Screen name</label>
        </span>
      </div>

      <div className="flex">
        <Button label="Sign up for Rater" className="p-button min-w-full" />
      </div>
    </>
  );
};

export default SignUpPage;
