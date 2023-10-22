export default function SearchBar({ value, onChange, searchTracks }) {

  return (
    <section>
      <form className="search-bar" onSubmit={searchTracks}>
        <input
          name="searchBar"
          type="text"
          placeholder="Search here"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          Search
        </button>      
      </form>      
    </section>
  )
}