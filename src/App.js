import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import New_Launches from './Components/New Launches/NewLaunches';
import Home from './Home/Home';
import Best_Sellers from './Components/Best Sellers/BestSellers';
import Hair_Care from './Components/Hair Care/HairCare';
import Body_Care from './Components/Body Care/BodyCare';
import Face_Care from './Components/Face care/FaceCare';
import Shop_By_Ingredients from './Components/Shop By Ingredients/ShopByIngredients';
import Values_Combo from './Components/Value Combo/ValueCombo';
import Offer from './Components/Offer/Offer';
import Hot_Deals from './Components/Hot Deals/HotDeals';
import User_Profile from './Components/User Profile/UserProfile';
import HomeSlider from './Home/HomeSlider/HomeSlider';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="new-launches" element={<New_Launches/>} />
      <Route path="best-sellers" element={<Best_Sellers/>} />
      <Route path="hair-care" element={<Hair_Care/>} />
      <Route path="body-care" element={<Body_Care/>} />
      <Route path="face-care" element={<Face_Care/>} />
      <Route path="shop-by-ingredients" element={<Shop_By_Ingredients/>} />
      <Route path="value-combos" element={<Values_Combo/>} />
      <Route path="offer" element={<Offer/>} />
      <Route path="hot-deals" element={<Hot_Deals/>} />
      <Route path="sign-in" element={<User_Profile/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
