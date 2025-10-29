
import axios from "axios";
const BASE = process.env.NEXT_PUBLIC_KITSUNE_API;

export async function searchAnime(q) {
  const res = await axios.get(`${BASE}/api/v1/search`, { params: { q } });
  return res.data;
}
