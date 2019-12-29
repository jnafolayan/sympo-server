export default function buildUpvoteCommentController({ upvoteComment }) {
  return async function upvoteCommentController(req, res, next) {
    const voter = req.user.id;
    const comment = req.params.commentId;
    const dto = { voter, comment };

    try {
      await upvoteComment(dto);
      res.status(201).json({
        message: "Upvote successful"
      });
    } catch (err) {
      next(err);
    }
  }
}
