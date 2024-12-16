import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './pages/Home'; 
import Posts from './pages/Posts'; 
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile'; 
import NotFound from './pages/NotFound'; 
function App() {
  /* 
  1. 홈페이지(Home) : 사이트 소개, 서비스 소개
  2. 게시글 목록(Posts) : 게시글 나열, 클릭하면 상세페이지로 이동 게시글 좋아요 기능
  3. 게시글 상세(PostDetail) : 글쓴이, 본문, 날짜
  댓글 추가기능 제공
  4. 404페이지 (NotFound): 사용자가 경로를 잘 못 입력 했을때
  5. 댓글기능 (CommentSection) : 상세페이지 에서 댓글 추가 할 수 있음
  추가 되었을 때 목록에 나타난다 버튼은 토글된다 (보였다가, 안보였다가)
  */
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/posts/:id" element={<PostDetail/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
