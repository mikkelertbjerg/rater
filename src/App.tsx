import "./index.css";
import "./app.css";
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
