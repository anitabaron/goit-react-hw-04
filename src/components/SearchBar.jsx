export default function SearchBar({ handleSubmit }) {
  return (
    <div>
      <header className="headerLine">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
}
