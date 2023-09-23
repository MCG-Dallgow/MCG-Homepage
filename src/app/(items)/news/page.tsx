import PostBlock from "~/components/post";
import { env } from "~/env.mjs";

interface Post {
  id: number;
  title: string;
  authorId: string;
  creationDate: Date;
  editedDate: Date;
  data: string;
}

async function getPosts(): Promise<Post[]> {
  const response = await fetch(env.API_BASE_URL + "/news");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = (await response.json()).data;
  return data;
}

export default async function Page() {
  const data = await getPosts();

  return (
    <div>
      { data.map((post) => <PostBlock post={post}/>) }
    </div>
  );
}
