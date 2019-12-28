export default function buildFetchAllPollsController({ fetchAllPolls }) {
  return async function fetchAllPollsController(req, res, next) {
    try {
      const data = await fetchAllPolls();
      res.status(200).json({
        data: data.map(poll => ({
          _id: poll._id,
          question: poll.question,
          details: poll.details
        }))
      });
    } catch (err) {
      next(err);
    }
  }
}
