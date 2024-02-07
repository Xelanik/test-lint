import { useEffect, useState } from "react";
import { usePostsService } from "../services/posts.service";
import { useNavigate, useParams } from "react-router-dom";

const PostsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  const { getUserPosts } = usePostsService();

  useEffect(() => {
    getUserPosts({ userId: params?.id || "" }).then((reps) => setPosts(reps));
    // eslint-disable-next-line
  }, []);

  const onGoToPost = (id) => navigate(`/posts/${params?.id}/${id}`);

  return (
    <div className="flex flex-col flex-wrap gap-4 p-5 items-center justify-center">
      {posts.map((el) => (
        <div
          onClick={() => onGoToPost(el.id)}
          class="block p-3 w-[500px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
            {el.title}
          </h2>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {el.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
