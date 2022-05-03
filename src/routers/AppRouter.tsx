import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';
import { AboutScreen } from '../components/about/AboutScreen';
import { Navbar } from '../components/ui/navbar';
import { HelpScreen } from '../components/help/HelpScreen';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/help" element={<HelpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
