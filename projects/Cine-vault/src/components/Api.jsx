// // api.js
// export  const getMovies = async () => {
//   const url = 
//   "https://www.omdbapi.com/?apikey=7ae35e74&s=new&type=movie&page=1";
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
    
//   } catch (err) {
//     console.log(err);
//   }
// };  
const myKey = import.meta.env.VITE_MY_API_KEY;

const newMoviesUrl = `https://www.omdbapi.com/?apikey=${myKey}&s=new&type=movie&page=1`;
const horrorMoviesUrl = `https://www.omdbapi.com/?apikey=${myKey}&s=horror&type=movie&page=2`;

export const getMovies = async () => {
  try {
    const [newMovies, horrorMovies] = await Promise.all([
      fetch(newMoviesUrl),
      fetch(horrorMoviesUrl),
    ]);

    const data = await Promise.all([
      newMovies.json(),
      horrorMovies.json(),
    ]);
console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
}; 