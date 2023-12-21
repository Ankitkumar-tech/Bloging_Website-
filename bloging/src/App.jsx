import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Blog from "./pages/blog/Blog";
// import AllBlogs from "./pages/allBlogs/AllBlogs";
// import NoPage from "./pages/nopage/NoPage";
// import BlogInfo from "./pages/blogInfo/BlogInfo";
// import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
// import Dashboard from "./pages/admin/dashboard/Dashboard";
import Home from "./Pages/home/Home";
import Blog from "./Pages/blog/blog";
import AllBlogs from "./Pages/allBlogs/AllBlogs";
import BlogInfo from "./Pages/blogInfo/BlogInfo";
import AdminLogin from "./Pages/admin/adminLogin/AdminLogin";
import Dashboard from "./Pages/admin/dashboard/Dashboard";
import NoPage from "./Pages/noPage/NoPage";
import MyState from "./context/Data/MyState";
import { ToastBar, Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/allblogs" element={<AllBlogs />} />
            <Route path="/bloginfo/:id" element={<BlogInfo />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </div>
  );
}

export default App;
