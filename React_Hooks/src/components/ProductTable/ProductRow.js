import styles from "./ProductRow.module.css";
import PropTypes from "prop-types";

function ProductRow({ name, stocked, price }) {
    return (
        <div className={styles.productRow}>
            <span
                className={`${styles.name} ${stocked ? "" : styles.notStocked}`}
            >
                {name}
            </span>
            <span className={styles.price}>{price}</span>
        </div>
    );
}

ProductRow.propTypes = {
    name: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
    price: PropTypes.string.isRequired,
};

export default ProductRow;
