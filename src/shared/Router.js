import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Detail from "../pages/Detail"
import List from "../pages/List"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Mypage from "../pages/Mypage"
import Search from "../pages/Search"
import Write from "../pages/Write"
import HotTag from "../pages/HotTag"
import BookMark from "../pages/BookMark"
import OAuth2LoginHandler from "../components/Login/OAuth2LoginHandler"
import OAuth2LogoutHandler from "../components/Login/OAuth2LogoutHandler"
import OAuthNaverLogin from "../components/Login/OAuthNaverLogin"
import FindAddress from "../pages/FindAddress"
import PopulationInfo from "../pages/PopulationInfo"
import LoginDev from "../pages/LoginDev"
import Setting from "../pages/Setting"
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:gu" element={<PopulationInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/dev" element={<LoginDev />} />
        <Route path="/list/:gu/:category/:sort" element={<List />} />
        <Route path="/write/:gu" element={<Write />} />
        <Route path="/write/:gu/:id" element={<Write />} />
        <Route path="/search/:type/:searchWord/:sort" element={<Search />} />
        <Route path="/hottest/:gu" element={<HotTag />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/address" element={<FindAddress />} />
        <Route path="/setting" element={<Setting />} />
        {/* Redirect uri로 이동하기 전에 인가 코드를 redirect 해주는 주소 */}
        {/* 카카오 */}
        <Route path="/user/kakao/callback" element={<OAuth2LoginHandler />} />
        <Route
          path="/user/kakao/logout/callback"
          element={<OAuth2LogoutHandler />}
        />
        {/* 네이버 */}
        <Route path="/user/naver/callback" element={<OAuthNaverLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
