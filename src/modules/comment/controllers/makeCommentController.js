export default function buildMakeCommentController({ makeComment }) {
  return async function makeCommentController(req, res, next) {
    const author = req.user.id;
    const message = req.body.message;
    const poll = req.body.poll;
    const dto = { author, message, poll };

    try {
      const comment = await makeComment(dto, req.user.username);
      res.status(201).json({
        data: comment
      });
    } catch (err) {
      next(err);
    }
  }
}
