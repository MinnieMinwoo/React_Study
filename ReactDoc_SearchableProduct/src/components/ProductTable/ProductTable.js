import ProductCategoryRow from "./ProductCategoryRow.js";
import jsonSort from "../../jsonSort.js";
import styles from "./ProductTable.module.css";

function ProductTable({ json, searchData }) {
    const jsonList = jsonSort(json, searchData);
    return (
        <div className={styles.main}>
            <div className={styles.productTable}>
                <span className={styles.name}>Name</span>
                <span className={styles.price}>Price</span>
            </div>
            {jsonList.map((jsonData) => (
                <ProductCategoryRow
                    key={jsonData[0].category}
                    data={jsonData}
                />
            ))}
        </div>
    );
}
export default ProductTable;
