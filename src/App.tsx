import "./index.css";
import "./app.css";
//import "primereact/resources/themes/md-light-indigo/theme.css";
//import "primereact/resources/themes/md-dark-indigo/theme.css";
//import "primereact/resources/themes/arya-blue/theme.css";
import "primereact/resources/themes/arya-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Outlet } from "react-router-dom";
import Layout from "./layout/Layout";


function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default App;
