import queryString from "query-string";

import { Buffer } from "buffer";
window.Buffer = Buffer;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const client_id = "4091201d5e194dbeb8375bdf77920981";
const client_secret = "34981cf5214248e89b34dc83c8b3752d";
const refresh_token = "AQBA81z_iGxNJ4WHwa9Pd9MoTk-erBBZ_2WxFlQC8ET8fdKV7VYTDy4pASeqDFTJ3NzDV4aaHehLyQ9AXXPifAyVDXxOw_l4mWJv8kqcA588rowy_PeysbJnGZ1Y-dqjE3g";


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
