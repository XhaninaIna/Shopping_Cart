export default function Search({ query, setQuery }) {
  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search a product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}
