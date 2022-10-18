import PropTypes from "prop-types";

function MovieApp_movie({
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
      <h2>{title}</h2>
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
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieApp_movie;
