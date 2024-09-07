import axios from "axios";

axios.defaults.baseURL =
  "https://api.unsplash.com/photos/?client_id=aMCg-Pgc70Fh4ZPhdk65VnjUyKpVWhniDOpL6tT17es";

const fetchPhotos = async () => {
  const response = await axios.get(axios.defaults.baseURL);
  console.log(response.data); // pokazuje tablicę 10 obiektów
  // console.log(response.data[0]);
  // console.log(response.data[0].urls);

  return response.data;
};
export default fetchPhotos;
