import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/Home";
import AlbumPage from "./pages/albums/Albums";
import PostsPage from "./pages/posts/Posts";
import Album from "./pages/albums/Album/Album";
import Post from "./pages/posts/post/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/albums/:id" element={<AlbumPage />} />
        <Route path="/albums/:id/:albumId" element={<Album />} />

        <Route path="/posts/:id" element={<PostsPage />} />
        <Route path="/posts/:id/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
