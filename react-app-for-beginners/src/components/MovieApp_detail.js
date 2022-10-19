function MovieApp_detail({
  title,
  large_cover_image,
  description_full,
  rating,
  runtime,
  genres,
}) {
  return (
    <div>
      <img src={large_cover_image} />
      <h1>{title}</h1>
      <p>{description_full}</p>
      <div>rating: {rating}</div>
      <div>runtime: {runtime}</div>
      <ul>
        genres:
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieApp_detail;
