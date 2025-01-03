import queryString from "query-string";

import { Buffer } from "buffer";
window.Buffer = Buffer;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const client_id = "4340c2dd2d614adfbd9c28cd8ad2b0d1";
const client_secret = "f3236cd093404327b4798e25e21ef1e4";
const refresh_token = "AQCvqM4At9xLpqBXu88KWRJOjAfW_TXSXqLjmPPOnJUvwJFHFcsN3FIBwiCni7LdbUgFH0deWLWcC1Mi7fu0jr_8EALUkaGzW8u7UUzUQ8S2ZC88zd0ZIrAto7fS4V6mB1U";


const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

// now playing endpoint
export const getNowPlaying = async (
  client_id,
  client_secret,
  refresh_token
) => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// return data
export default async function getNowPlayingItem(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await getNowPlaying(client_id, client_secret, refresh_token);
  if (response.status === 204 || response.status > 400) {
    return false;
  }
  const song = await response.json();

  const albumImageUrl = song.item?.album.images[0].url;
  const artist = song.item?.artists.map((_artist) => _artist.name).join(",");
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;

  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };
}
