import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieApp_detail from "../components/MovieApp_detail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const data = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(data.data.movie);
    setLoading(false);
  };
  console.log(details);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieApp_detail
            key={details.id}
            title={details.title}
            large_cover_image={details.large_cover_image}
            description_full={details.description_full}
            rating={details.rating}
            runtime={details.runtime}
            genres={details.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
