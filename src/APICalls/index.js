import axios from "axios";

export const searchArtistData = async artist => {
  const { data } = await axios.get(
    `http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json`
  );
  return data.artists[0].id;
};

export const browseArtistTracks = async id => {
  const { data } = await axios.get(
    `http://musicbrainz.org/ws/2/work?artist=${id}&limit=100&fmt=json`
  );
  return data.works.map(track => {
    return track.title;
  });
};
export const remainingArtistTracks = async id => {
  const { data } = await axios.get(
    `http://musicbrainz.org/ws/2/work?artist=${id}&limit=100&offset=100&fmt=json`
  );
  return data.works.map(track => {
    return track.title;
  });
};

export const getLyrics = async (artist, track) => {
  const { data } = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${track}
`);
  return data.lyrics;
};
