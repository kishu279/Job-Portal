import { Route, Routes } from "react-router";
import HomePage from "./page/HomePage";
import { SignInPage, SignUpPage } from "./page/LandingPageAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="register" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
