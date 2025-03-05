import { Route, Routes } from "react-router";
import HomePage from "./page/HomePage";
import { SignInPage, SignUpPage } from "./page/AuthPage";
import LandingPage from "./page/LandingPage";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="register" element={<SignUpPage />} />
            <Route path="/login" element={<SignInPage />} />
          </Route>
          <Route path="/job-board" element={<LandingPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
