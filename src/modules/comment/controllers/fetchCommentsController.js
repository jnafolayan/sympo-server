export default function buildFetchCommentsController({ fetchComments }) {
  return async function fetchCommentsController(req, res, next) {
    try {
      const comments = await fetchComments(req.query);
      res.status(200).json({
        data: comments
      });
    } catch (err) {
      next(err);
    }
  }
}
