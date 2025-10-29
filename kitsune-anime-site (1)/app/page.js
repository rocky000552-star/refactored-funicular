
import { searchAnime } from "../lib/kitsune";

export default async function Home({ searchParams }) {
  const query = searchParams?.q || "";
  const data = query ? await searchAnime(query) : null;

  return (
    <main style={{ padding: 20 }}>
      <h1>Anime Search</h1>
      <form>
        <input name="q" placeholder="Search anime..." defaultValue={query} />
        <button type="submit">Search</button>
      </form>

      {data && (
        <ul>
          {data.results.map(anime => (
            <li key={anime.id}>
              <a href={`/watch?id=${anime.id}`}>{anime.title}</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
