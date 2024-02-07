import { useEffect, useState } from "react";
import { usePostsService } from "../../services/posts.service";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const { getCurrentPost, getPostComments } = usePostsService();

  useEffect(() => {
    getCurrentPost(params?.postId || "").then((resp) => setPost(resp));
    getPostComments(params?.postId || "").then((resp) => setComments(resp));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex w-full items-center justify-center p-5">
      <div class="block p-3 w-[500px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
          {post?.title}
        </h2>

        <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
          {post?.body}
        </p>

        <h3 className="text-white dark:text-white">Comments:</h3>

        <div className="p-2 flex flex-col">
          {comments.map((el) => (
            <div className="text-white dark:text-white mb-2  font-light border-b border-gray-400">
              <div>
                {el.name} | {el.email}
              </div>
              <div className="text-gray-400 dark:text-gray-400 pb-2">
                {el.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
