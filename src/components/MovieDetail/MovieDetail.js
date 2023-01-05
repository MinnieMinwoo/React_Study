import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({ coverImg, title, year, rate, genres, detail }) {
  return (
    <div className="container">
      <img src={coverImg} alt="title"></img>
      <div className="description">
        <h2 className="contents">{title}</h2>
        <p className="contents">{year}</p>
        <p className="contents">{rate}</p>
        {genres !== [] ? (
          <ul className="genereGroup">
            Genres
            {genres.map((g) => (
              <li className="genereList" key={g}>
                {g}
              </li>
            ))}
          </ul>
        ) : null}
        <p className="contents">{detail}</p>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  detail: PropTypes.string.isRequired,
};

export default MovieDetail;
