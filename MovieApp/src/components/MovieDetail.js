import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({ coverImg, title, year, rate, genres, detail }) {
  return (
    <div className={styles.movieMainDiv}>
      <img className={styles.movieImg} src={coverImg} alt="title"></img>
      <div className={styles.movieInfo}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.year}>{year}</p>
        <p className={styles.rate}>{rate}</p>
        {genres !== [] ? (
          <ul className={styles.genreBlock}>
            <p className={styles.genreText}>Genres</p>
            {genres.map((g) => (
              <li className={styles.genreList} key={g}>
                {g}
              </li>
            ))}
          </ul>
        ) : null}
        <p className={styles.detail}>{detail}</p>
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
  detail: PropTypes.string,
};

export default MovieDetail;
