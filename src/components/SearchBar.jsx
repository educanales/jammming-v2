export default function SearchBar({ value, onChange }) {

  return (
    <section className="search-bar">
      <input
        name="searchBar"
        type="text"
        placeholder="Search here"
        value={value}
        onChange={onChange}
      />
      <button>
        Search
      </button>
    </section>
  )
}