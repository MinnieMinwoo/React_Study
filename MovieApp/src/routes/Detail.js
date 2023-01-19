import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          key={movie.id}
          coverImg={movie.large_cover_image}
          title={movie.title}
          year={movie.year}
          rate={movie.rating}
          genres={movie.hasOwnProperty("genres") ? movie.genres : []}
          detail={movie.description_full}
        ></MovieDetail>
      )}
    </div>
  );
}

export default Detail;
