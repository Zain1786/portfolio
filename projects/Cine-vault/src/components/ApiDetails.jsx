// api.js
export const getMovieDetails = async ({params}) => {
  const myKey = import.meta.env.VITE_MY_API_KEY;
  const url = 
  `https://www.omdbapi.com/?i=${params.movieID}&apikey=${myKey}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
    
  } catch (err) {
    console.log(err);
  }
};