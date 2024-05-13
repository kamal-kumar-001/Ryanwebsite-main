import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import Categories from "./pages/admin/screens/categories/Categories";
import EditCategories from "./pages/admin/screens/categories/EditCategories";
import Users from "./pages/admin/screens/users/Users";
import BlogPage from "./pages/blog/BlogPage";
import About from "./pages/about/About"
import ManageProducts from "./pages/admin/screens/products/ManageProducts";
import ManageOrders from "./pages/admin/screens/orders/ManageOrders";
import EditProduct from "./pages/admin/screens/products/EditProduct";
import Members from "./pages/admin/screens/members/Members";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="products/manage" element={<ManageProducts />} />
          <Route path="orders/manage" element={<ManageOrders />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
          <Route path="products/manage/edit/:slug" element={<EditProduct />} />
          <Route path="categories/manage" element={<Categories />} />
          <Route
            path="categories/manage/edit/:slug"
            element={<EditCategories />}
          />
          <Route path="users/manage" element={<Users />} />
          <Route path="members/manage" element={<Members />} />
        </Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
