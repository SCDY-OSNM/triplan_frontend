import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/home/Home';
import Login from '@/pages/auth/login/Login';
import SignUp from '@/pages/auth/signUp/SignUp';
import My from '@/pages/auth/my/My';
import Like from '@/pages/like/Like';
import Cart from '@/pages/cart/Cart';
import Notice from '@/pages/notice/Notice';
import Coupon from '@/pages/coupon/Coupon';
import Plan from '@/pages/plan/Plan';
import NearBy from '@/pages/nearBy/NearBy';
import Stay from '@/pages/stay/Stay';
import Food from '@/pages/food/Food';
import Leisure from '@/pages/leisure/Leisure';
import Transportation from '@/pages/transportation/Transportation';
import Chat from '@/pages/chat/Chat';
import Order from '@/pages/order/Order';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mypage" element={<My />} />
      <Route path="/like" element={<Like />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/coupon" element={<Coupon />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/nearby" element={<NearBy />} />
      <Route path="/stay" element={<Stay />} />
      <Route path="/food" element={<Food />} />
      <Route path="/leisure" element={<Leisure />} />
      <Route path="/transportation" element={<Transportation />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}