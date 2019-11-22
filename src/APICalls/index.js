import axios from "axios";

export const getArtistData = (artist, track) => {
  const { data } = axios.get(`https://api.lyrics.ovh/v1/${artist}/${track}`);
  return data;
};
