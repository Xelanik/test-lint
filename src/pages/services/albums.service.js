import axios from "axios";

export const useAlbumService = () => {
  const getUserAlbums = (params) =>
    axios.get(`/albums`, { params }).then((resp) => resp.data);

  const getCurrentAlbum = (id) =>
    axios.get(`/albums/${id}`).then((resp) => resp.data);

  const getAlbumImages = (id) =>
    axios.get(`/albums/${id}/photos`).then((resp) => resp.data);

  return { getUserAlbums, getCurrentAlbum, getAlbumImages };
};
