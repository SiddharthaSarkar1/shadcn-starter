import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import MainPage from "./pages/MainPage/MainPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import OnSalePage from "./pages/OnSalePage/OnSalePage";

function App() {
  return (
    <>
      <div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/onsale" element={<OnSalePage />} />
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
