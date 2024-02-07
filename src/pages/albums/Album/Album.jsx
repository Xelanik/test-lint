import { useEffect, useState } from "react";
import { useAlbumService } from "../../services/albums.service";
import { useParams } from "react-router-dom";

const Album = () => {
  const params = useParams();

  const [albumName, setAlbumName] = useState("");
  const [photos, setPhotos] = useState([]);

  const { getAlbumImages, getCurrentAlbum } = useAlbumService();

  useEffect(() => {
    getCurrentAlbum(params.albumId).then((resp) => setAlbumName(resp.title));
    getAlbumImages(params.albumId).then((reps) => setPhotos(reps));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-5">
      <h1 class="text-4xl font-extrabold dark:text-white capitalize mb-5">
        {albumName}
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((el) => (
          <div key={el.id}>
            <picture>
              <source media="(max-width: 600px)" srcset={el.thumbnailUrl} />
              <img
                src={el.url}
                alt={el.title}
                class="h-auto max-w-full rounded-lg"
              />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
