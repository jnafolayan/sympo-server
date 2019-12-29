export default function buildMakeCommentController({ makeComment }) {
  return async function makeCommentController(req, res, next) {
    const author = req.user.id;
    const message = req.body.message;
    const pollId = req.body.pollId;
    const dto = { author, message, pollId };

    try {
      const comment = await makeComment(dto);
      res.status(201).json({
        data: comment
      });
    } catch (err) {
      next(err);
    }
  }
}
