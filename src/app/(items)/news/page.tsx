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

function PostBlock({ post }: { post: Post }) {
  return (
    <div className="py-4">
      <div className="rounded-3xl bg-white px-10 py-2 shadow-xl">
        <h2>{post.title}</h2>
        {post.data.split("\n\n").map((paragraph) => <p>{paragraph}</p>)}
      </div>
    </div>
  );
}

export default async function Page() {
  const data = await getPosts();

  return (
    <div>
      {data.map((post) => <PostBlock post={post} />)}
    </div>
  );
}
