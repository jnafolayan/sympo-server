export default function buildFetchPollController({ fetchPoll }) {
  return async function fetchPollController(req, res, next) {
    try {
      const data = await fetchPoll(req.params.pollId);
      res.status(200).json({
        data
      });
    } catch (err) {
      next(err);
    }
  }
}
