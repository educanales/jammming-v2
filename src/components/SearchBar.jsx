export default function SearchBar({ value, onChange, searchTracks }) {

  return (
    <section className="search-bar">
      <form onSubmit={searchTracks}>
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