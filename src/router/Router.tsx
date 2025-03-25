import { Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/auth/LoginPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import MyPage from '@/pages/auth/MyPage';
import LikePage from '@/pages/LikePage';
import CartPage from '@/pages/CartPage';
import NoticePage from '@/pages/NoticePage';
import CouponPage from '@/pages/CouponPage';
import PlanPage from '@/pages/PlanPage';
import NearByPage from '@/pages/NearByPage';
import StayPage from '@/pages/StayPage';
import FoodPage from '@/pages/FoodPage';
import LeisurePage from '@/pages/LeisurePage';
import TransportationPage from '@/pages/TransportationPage';
import ChatPage from '@/pages/ChatPage';
import OrderPage from '@/pages/OrderPage';
import TravelogPage from '@/pages/TravelogPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/like" element={<LikePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/coupon" element={<CouponPage />} />
      <Route path="/plan" element={<PlanPage />} />
      <Route path="/nearby" element={<NearByPage />} />
      <Route path="/stay" element={<StayPage />} />
      <Route path="/food" element={<FoodPage />} />
      <Route path="/leisure" element={<LeisurePage />} />
      <Route path="/transportation" element={<TransportationPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/travelog" element={<TravelogPage />} />
    </Routes>
  );
}
