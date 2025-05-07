import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import TeacherListPage from "./pages/TeacherListPage";
import FeedbackPage from "./pages/FeedbackPage";
import SelectPage from "./pages/SelectPage";
import Rating from "./pages/Rating";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        //
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="teachers" element={<TeacherListPage />} />
          <Route path="feedback/:teacherId" element={<FeedbackPage />} />
          <Route path="feedback/Rating/:teacherId" element={<Rating />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;