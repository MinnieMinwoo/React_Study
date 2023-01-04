import PropTypes from "prop-types";

function MovieDetail({ coverImg, title, year, rate, genres, detail }) {
  return (
    <div>
      <img src={coverImg} alt="title"></img>
      <div>
        <h2>{title}</h2>
        <p>{year}</p>
        <p>{rate}</p>
        {genres !== [] ? (
          <ul>
            Genres
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        ) : null}
        <p>{detail}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
