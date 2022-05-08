import { Card } from "primereact/card";
import { Button } from "primereact/button";

const footer = (
  <span>
    <Button label="Sign in"></Button>
  </span>
);

const header = (
  <>
    <h2>Welcome Back!</h2>
    <h5>
      Don't have an account? <a href="#">Create one today!</a>
    </h5>
  </>
);
const SignInPage = () => {
  return <Card footer={footer} header={header}></Card>;
};

export default SignInPage;
