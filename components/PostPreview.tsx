import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-[#ab57ff] p-4 m-4 rounded-md shadow-sm
    bg-[#35654d] hover:bg-[#298055] hover:scale-110 transition-all duration-300"
    >
      <p className="text-sm text-[#ffce9b] mb-2">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className="  text-[#ffab56] hover:text-[#ff9226] hover:underline mb-4">
          {props.title}
        </h2>
      </Link>
      <p className="text-[#cd9bff]">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
