import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function MovieApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<h3>hello</h3>}></Route>
        {/* 홈 화면으로 갈 때 사용할 Route */}
        <Route path="/" element={<Home />}></Route>
        {/* 상세 화면으로 갈 때 사용할 Route */}
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MovieApp;
