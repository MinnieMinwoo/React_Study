import styles from "./SearchBar.module.css";

function SearchBar({ searchData, setText, setBox }) {
    const textChange = (e) => {
        setText(e.target.value);
    };
    const checkboxChange = (e) => {
        setBox(e.target.checked);
    };
    return (
        <div>
            <form>
                <input
                    className={styles.searchBar}
                    placeholder="Search..."
                    value={searchData.filterText}
                    onChange={textChange}
                />
                <input
                    className={styles.searchCheckBox}
                    type="checkbox"
                    checked={searchData.inStockOnly || false}
                    onChange={checkboxChange}
                />
                <label>Only show products in stock</label>
            </form>
        </div>
    );
}
export default SearchBar;
