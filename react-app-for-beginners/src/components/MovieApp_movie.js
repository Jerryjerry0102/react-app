import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieApp_movie({
  id,
  medium_cover_image,
  title,
  rating,
  summary,
  genres,
}) {
  return (
    // 여기서는 더 이상 키가 필요하지 않음
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{rating}</p>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieApp_movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieApp_movie;
