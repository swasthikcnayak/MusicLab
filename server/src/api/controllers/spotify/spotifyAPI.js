import SpotifyWebApi from "spotify-web-api-node";
import {
  spotify_redirect_uri,
  spotify_client_secret,
  spotify_client_id,
} from "../../../config/index.js";

const spotifyAPI = new SpotifyWebApi({
  clientId: spotify_client_id,
  clientSecret: spotify_client_secret,
  redirectUri: spotify_redirect_uri,
});

export default spotifyAPI;
