import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import HomePage from "./pages/HomePage/HomePage";
import TweetsPage from "./pages/TweetsPage/TweetsPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/tweets-page" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
