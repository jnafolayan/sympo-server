export default function buildStartPollController({ startPoll }) {
  return async function startPollController(req, res, next) {
    const pollDTO = req.body;
    try {
      const poll = await startPoll(pollDTO);
      res.status(201).json({
        data: poll
      });
    } catch (err) {
      next(err);
    }
  }
}
