export default function PostBlock({ post }: {
  post: {
    id: number;
    title: string;
    authorId: string;
    creationDate: Date;
    editedDate: Date;
    data: string;
  } 
}) {
  return (
    <div className="py-4">
      <div className="rounded-3xl bg-white px-10 py-2 shadow-xl">
        <h2>{post.title}</h2>
        { post.data.split("\n\n").map((paragraph) => <p>{paragraph}</p>) }
      </div>
    </div>
  );
}
