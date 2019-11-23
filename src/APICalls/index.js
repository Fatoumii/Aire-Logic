import axios from "axios";

export const searchArtistData = async artist => {
  const { data } = await axios.get(
    `http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json`
  );
  return data.artists[0].id;
};

export const browseArtistData = async id => {
  const { data } = await axios.get(
    `http://musicbrainz.org/ws/2/release?artist=${id}&status=official&type=single&limit=100&fmt=json`
  );
  return data.releases.map(track => {
    return track.title;
  });
};
