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
import PCategories from "./pages/admin/screens/postCategories/Categories";
import PEditCategories from "./pages/admin/screens/postCategories/EditCategories";
import RCategories from "./pages/admin/screens/recommendCategories/Categories";
import REditCategories from "./pages/admin/screens/recommendCategories/EditCategories";
import Users from "./pages/admin/screens/users/Users";
import BlogPage from "./pages/blog/BlogPage";
import About from "./pages/about/About"
import Service from "./pages/service/kids/Service";
import Fitness from './pages/service/fitness/Fitness';
import Medical from './pages/service/medical/Medical';
import International from './pages/service/international/International';
import Sports from './pages/service/sports/Sports';
import ManageProducts from "./pages/admin/screens/products/ManageProducts";
import ManageOrders from "./pages/admin/screens/orders/ManageOrders";
import EditProduct from "./pages/admin/screens/products/EditProduct";
import Members from "./pages/admin/screens/members/Members";
import Eatwell from "./pages/eatwell/Eat";
import ShippingScreen from "./pages/shipping/ShippingScreen";
import PaymentScreen from "./pages/payment/PaymentScreen";
import PlaceOrderScreen from "./pages/placeorder/PlaceOrderScreen";
import OrderScreen from "./pages/order/OrderScreen";
import SingleProductScreen from "./pages/single-product/SingleProductScreen";
import CartScreen from "./pages/cart/CartScreen";
import ProductScreen from "./pages/product/ProductScreen";
import Podcastpage from "./pages/podcast/Podcast";
import ManagePodcasts from "./pages/admin/screens/podcasts/ManagePodcast";
import EditPodcast from "./pages/admin/screens/podcasts/EditPodcast";
import PodcastDetailPage from "./pages/podcastDetail/PodcastDetailPage";
import MyOrders from "./pages/myorders/MyOrders";
import ShopInitial from "./pages/shopinitial/ShopInitial";
import RyanProducts from "./pages/ryanproducts/RyanProducts";
import RyanProductDesc from "./pages/ryanproductdesc/RyanProductDesc";
import RyanProductDescCollagen from "./pages/ryanproductdesc/ryanproductcollagen";
import RyanChampionoBook from "./pages/ryanproductdesc/championbook/ryanchampionbook";
import RyanDiary from "./pages/ryanproductdesc/ryandiary/ryandiary";
import ManageRecommends from "./pages/admin/screens/recommends/ManageRecommends";
import EditRecommend from "./pages/admin/screens/recommends/EditRecommend";
import RecommendsPage from "./pages/recommends/recommendPage";
import RecommendDetailPage from "./pages/recommendDetial/RecommendDetail";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/podcast" element={<Podcastpage/>}/>
        <Route path="/podcast/:slug" element={<PodcastDetailPage />} />
        <Route path='/ryanproductdesc' element={<RyanProductDesc/>}/>
        <Route path="/ryanproductdesccollagen" element={<RyanProductDescCollagen/>}/>
        <Route path="/ryanproductdesc/ryanchampionbook" element={<RyanChampionoBook/>}/>
        <Route path="ryanproductdesc/ryandiary" element={<RyanDiary/>}/>
        <Route path="/ryan-recommends" element={<RecommendsPage/>}/>
        <Route path="/ryan-recommends/:slug" element={<RecommendDetailPage />} />
        <Route path="/service/kids" element={<Service/>}/>
        <Route path="/service/fitness" element={<Fitness/>}/>
        <Route path="/service/medical" element={<Medical/>}/>
        <Route path="/service/sports" element={<Sports/>}/>
        <Route path="/service/international" element={<International/>}/>
        <Route path="/eatwell" element={<Eatwell/>}/>
        <Route path="/shopinitial" element={<ShopInitial/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/shop/" element={<ProductScreen />} />
        <Route path='/ryanproduct' element={<RyanProducts/>}/>
        <Route path="/product/:id" element={<SingleProductScreen />} />
        <Route path="/cart">
        <Route index element={<CartScreen />} />
        <Route path=":id" element={<CartScreen />} />
        </Route>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="podcasts/manage" element={<ManagePodcasts />} />
          <Route path="podcasts/manage/edit/:id" element={<EditPodcast />} />
          <Route path="recommends/manage" element={<ManageRecommends />} />
          <Route path="recommends/manage/edit/:slug" element={<EditRecommend />} />
          <Route path="products/manage" element={<ManageProducts />} />
          <Route path="orders/manage" element={<ManageOrders />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
          <Route path="products/manage/edit/:id" element={<EditProduct />} />
          <Route path="post-categories/manage" element={<PCategories />} />
          <Route path="recommend-categories/manage" element={<RCategories />} />
          <Route
            path="post-categories/manage/edit/:slug"
            element={<PEditCategories />}
          />
          <Route
            path="recommend-categories/manage/edit/:slug"
            element={<REditCategories />}
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