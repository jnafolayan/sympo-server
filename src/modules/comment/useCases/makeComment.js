export default function buildMakeComment({ 
  Comment, 
  pusher,
  validateComment, 
  createRestError 
}) {
  return async function makeComment(commentDTO, username="") {
    const { error, value: dto } = validateComment(commentDTO);
    if (error)
      throw createRestError(400, error.message);

    const newComment = await Comment.create(dto);

    // notify everyone of the new comment
    pusher.trigger(dto.poll, "comment", [newComment].map(comment => ({
      _id: comment._id,
      author: username,
      message: dto.message,
      poll: comment.poll,
      upvotes: 0,
      createdAt: comment.createdAt
    }))[0]);

    return newComment;
  }
}