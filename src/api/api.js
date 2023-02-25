import axios from 'axios';
import { Buffer } from 'buffer';

const BASE_URL = "https://api.spotify.com";

/* Search Song */
/* ************************************* */

export const searchSong = (value, setResults) => {
    axios.get(`${BASE_URL}/v1/search?`, {
        headers: {
          'Authorization': `Bearer ${window.localStorage.getItem("spotifyToken")}`
        },
        params: {
          q: value,
          type: "track"
        }
      })
      .then((res) => {
        return setResults(res.data);
      })
      .catch((error) => {
        return setResults(error)
      })
}


/* Fetch song by id */
/* ************************************* */

export const fetchSongById = (id, setCurrentSong) => {
    axios.get(`${BASE_URL}/v1/tracks/${id}`, {
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem("spotifyToken")}`
      },
      })
      .then((res) => {
        return setCurrentSong(res.data);
      })
      .catch((error) => {
        return setCurrentSong(error)
      })
}


/* Play song */
/* ************************************* */

export const playSong = (id) => {
  axios.get(`${BASE_URL}/v1/tracks/7khJGSgc3iD8aRhFTGxBWa`, {
    headers: {
      'Authorization': `Bearer ${window.localStorage.getItem("spotifyToken")}`
    },
    })
    .then((res) => {
      return console.log(res)
    })
    .catch((error) => {
      
    })
}


/* Get access token */
/* ************************************* */

export const getAccessToken = (code, setToken) => {
  axios.post(`https://accounts.spotify.com/api/token`, 
    `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent('http://localhost:3000/')}`, 
    {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(process.env.REACT_APP_CLIENT_ID  + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
    .then((res) => {
      console.log(res)
      window.localStorage.setItem("spotifyToken", res.data.access_token);
      window.localStorage.setItem("spotifyRefreshToken", res.data.refresh_token);
      window.localStorage.setItem("expires", (Date.now() + (parseFloat(res.data.expires_in) * 1000)));
      window.localStorage.setItem("expires_in", parseFloat(res.data.expires_in));
      setToken(window.localStorage.getItem("spotifyToken"));
      return;
    })
    .catch((error) => {
      return console.log(error)
    })
}


/* Get refresh token */
/* ************************************* */

export const getRefreshToken = () => {

  const refreshToken = window.localStorage.getItem("spotifyRefreshToken");
  console.log(refreshToken, window.localStorage.getItem("spotifyToken"))
  axios.post(`https://accounts.spotify.com/api/token`, 
    `grant_type=refresh_token&refresh_token=${refreshToken}`, 
    {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(process.env.REACT_APP_CLIENT_ID  + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
    .then((res) => {
      window.localStorage.setItem("spotifyToken", res.data.access_token);
      window.localStorage.setItem("expires", (Date.now() + (parseFloat(res.data.expires_in) * 1000)));
      window.localStorage.setItem("expires_in", parseFloat(res.data.expires_in))
      return;
    })
    .catch((error) => {
      return console.log(error)
    })
}