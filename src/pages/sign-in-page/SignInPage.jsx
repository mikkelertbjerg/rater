import { Button } from "primereact/button";

const SignInPage = () => {
  return (
    <>
      <div className="flex justify-content-center">
        <h2>Welcome Back!</h2>
      </div>
      <div className="flex justify-content-center">
        <h5>
          Don't have an account? <a href="/sign-up">Create one today!</a>
        </h5>
      </div>
      <div className="flex justify-content-end">
        <Button label="Sign in"></Button>
      </div>
    </>
  );
};

export default SignInPage;
