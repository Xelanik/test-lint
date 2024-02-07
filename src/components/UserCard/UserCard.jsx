import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const onGoGallery = () => navigate(`/albums/${user.id}`);

  const onGoPosts = () => navigate(`/posts/${user.id}`);

  return (
    <div class="flex flex-col p-3 w-[300px] h-[250px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {user.name}
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {user.email} | {user.username}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {user.phone}
        </p>
      </div>

      <div className="mt-auto">
        <button
          onClick={onGoGallery}
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          View gallery
        </button>
        <button
          onClick={onGoPosts}
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          View posts
        </button>
      </div>
    </div>
  );
};

export default UserCard;
