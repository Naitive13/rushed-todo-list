import "./Header.css";

export default function Header(props) {
  return (
    <>
      <div id="headerContainer">
        <form id="filter" onSubmit={props.filter}>
          <label htmlFor="filter">filter by:</label>
          <select required id="priorityFilter" name="filter">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button>Filter</button>
        </form>

        <button className="reset" onClick={props.reset}>
          RESET
        </button>

        <form id="sort" onSubmit={props.sort}>
          <label htmlFor="sort">sort by:</label>
          <select required id="sortFilter" name="sort">
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>
          <button>Sort</button>
        </form>
      </div>

      <form id="search" onSubmit={props.search}>
        <input
          type="search"
          id="searchInput"
          placeholder="Search a task here"
        />
        <button>Search</button>
      </form>
    </>
  );
}
