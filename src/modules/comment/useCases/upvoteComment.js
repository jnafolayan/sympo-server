export default function buildUpvoteComment({ 
  Upvote,
  Comment,
  pusher,
  validateUpvote,
  createRestError 
}) {
  return async function upvoteComment(upvoteDTO) {
    const { error, value: dto } = validateUpvote(upvoteDTO);
    if (error)
      throw createRestError(400, error.message);

    const { voter, comment } = dto;

    // ensure comment exists
    const commentDoc = await Comment.findOne({ _id: comment });
    if (!commentDoc)
      throw createRestError(404, "Comment not found");

    // ensure user hasn't upvoted before
    const foundUpvote = await Upvote.findOne({ voter, comment });
    if (foundUpvote)
      throw createRestError(403, "You cannot upvote a comment more than once");

    // make upvote
    commentDoc.upvotes += 1;
    await commentDoc.save();

    // make an entry
    await Upvote.create({ voter, comment });

    // notify everyone of the upvote
    pusher.trigger(commentDoc.poll.toString(), "upvote", {
      commentId: comment, 
      upvotes: commentDoc.upvotes
    });

    return commentDoc;
  }
}