// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/home/Home";
import Blog from "./Pages/blog/blog";
import AllBlogs from "./Pages/allBlogs/AllBlogs";
import BlogInfo from "./Pages/blogInfo/BlogInfo";
import AdminLogin from "./Pages/admin/adminLogin/AdminLogin";
import Dashboard from "./Pages/admin/dashboard/Dashboard";
import NoPage from "./Pages/noPage/NoPage";
import MyState from "./context/Data/MyState";
import { Toaster } from "react-hot-toast";
import CreateBlog from "./Pages/admin/createBlog/CreateBlog";
// import { Toaster } from "react-hot-toast";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/createblog"
            element={
              <ProtectedRouteForAdmin>
                <CreateBlog />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin?.user?.email === "testuser@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/adminlogin"} />;
  }
};
