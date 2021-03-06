import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/sign-in-page/SignInPage';
import SignUpPage from './pages/sign-up-page/SignUpPage';
import LandingPage from './pages/landing-page/LandingPage';
import App from './App';
import JoinSessionPage from './pages/join-session-page/JoinSessionPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="session/join" element={<JoinSessionPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

