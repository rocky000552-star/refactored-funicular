
import { getEpisodeSources, getAnimeInfo } from "../../lib/kitsune";

export default async function Watch({ searchParams }) {
  const id = searchParams?.id;
  if (!id) return "No ID Provided";

  const info = await getAnimeInfo(id);
  const episodeId = info.episodes[0].id;
  const player = await getEpisodeSources(episodeId);

  return (
    <main style={{ padding: 20 }}>
      <h1>{info.title}</h1>
      <iframe src={player.sources[0].url} width="100%" height="500"></iframe>
    </main>
  );
}
