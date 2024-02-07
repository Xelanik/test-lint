import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAlbumService } from "../services/albums.service";

const AlbumPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { getUserAlbums } = useAlbumService();

  const [albumItems, setAlbumItems] = useState([]);

  useEffect(() => {
    getUserAlbums({ userId: params?.id || "" }).then((resp) =>
      setAlbumItems(resp)
    );
    // eslint-disable-next-line
  }, []);

  const onGoToAlbum = (albumId) => navigate(`/albums/${params?.id}/${albumId}`);

  return (
    <div className="flex flex-wrap gap-4 p-5 items-center justify-center">
      {albumItems.map((el) => (
        <div
          onClick={() => onGoToAlbum(el.id)}
          class="block p-3 w-[300px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
            {el.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default AlbumPage;
