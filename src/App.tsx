import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Footer from "./layout/Footer";
import Navigation from "./layout/Navigation";
import SignUpPage from "./pages/sign-up-page/SignUpPage";


function App() {
  return (
    <>
      <Navigation />
      <SignUpPage />
      <Footer />
    </>
  );
};

export default App;
