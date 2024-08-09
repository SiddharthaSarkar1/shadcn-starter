import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <>
      <div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <MainPage />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
