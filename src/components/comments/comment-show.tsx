import CommentCreateForm from "./comment-create-form";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface CommentShowProps {
  commentId: string;
  postId: string;
}

export default async function CommentShow({
  commentId,
  postId,
}: CommentShowProps) {
  const comments = await fetchCommentsByPostId(postId);
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return <CommentShow key={child.id} commentId={child.id} postId={postId} />;
  });

  return (
    <div className="p-4 border rounded-md mt-2 mb-1">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src={comment.user.image || ""} />
          <AvatarFallback>{comment.user.name}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-4">
          <p className="font-semibold">{comment.user.name}</p>
          <p>{comment.content}</p>
          <CommentCreateForm postId={comment.postId} parentId={comment.id} />
        </div>
      </div>
      <div className="pl-4">{renderedChildren}</div>
    </div>
  );
}
