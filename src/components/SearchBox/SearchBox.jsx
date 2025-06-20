import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.filters.name);

  const handleQueryUpdate = (event) => {
    const query = event.target.value;
    dispatch(changeFilter(query));
  };

  return (
    <div className={styles.search}>
      <p>Find contacts by name</p>
      <input type="text" value={name} onChange={handleQueryUpdate} />
    </div>
  );
};

export default SearchBox;
