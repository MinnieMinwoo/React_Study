import ProductTable from "./ProductTable/ProductTable.js";
import SearchBar from "./SearchBar.js";
import { useState } from "react";

function FilterableProductTable({ json }) {
    const [searchData, setSearchData] = useState({
        filterText: "",
        inStockOnly: false,
    });
    const setTextFilter = (text) => {
        setSearchData({ filterText: text, inStockOnly: searchData.checked });
    };
    const setBoxFilter = (checked) => {
        setSearchData({
            filterText: searchData.filterText,
            inStockOnly: checked,
        });
    };
    return (
        <div>
            <SearchBar
                searchData={searchData}
                setText={setTextFilter}
                setBox={setBoxFilter}
            />
            <ProductTable json={json} searchData={searchData} />
        </div>
    );
}

export default FilterableProductTable;
