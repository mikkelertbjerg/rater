import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Outlet } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./pages/landing-page/LandingPage";


function App() {
  return (
    <>
      <Layout>
        <LandingPage />
        <Outlet />
      </Layout>
    </>
  );
};

export default App;
