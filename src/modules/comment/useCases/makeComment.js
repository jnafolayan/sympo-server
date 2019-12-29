export default function buildMakeComment({ 
  Comment, 
  pusher,
  validateComment, 
  createRestError 
}) {
  return async function makeComment(commentDTO) {
    const { error, value: dto } = validateComment(commentDTO);
    if (error)
      throw createRestError(400, error.message);

    const newComment = await Comment.create(dto);

    // notify everyone of the new comment
    pusher.trigger(dto.poll, "comment", newComment);

    return newComment;
  }
}