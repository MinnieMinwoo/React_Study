import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, genres }) {
  return (
    <div className={styles.movieMainDiv}>
      <img src={coverImg} alt={title}></img>
      <h2 className={styles.movieTitleDiv}>
        <Link className={styles.titleLink} to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <ul className={styles.genreBlock}>
        {genres.map((g) => (
          <li className={styles.genreList} key={g}>
            {g}
          </li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
