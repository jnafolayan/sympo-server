export default function buildVoteOnPollController({ voteOnPoll }) {
  return async function voteOnPollController(req, res, next) {
    const poll = req.params.pollId;
    const user = req.user.id;
    const optionId = req.body.optionId;
    const voteDTO = { poll, user, optionId };
    try {
      const vote = await voteOnPoll(voteDTO);
      res.status(201).json({
        data: vote
      });
    } catch (err) {
      next(err);
    }
  }
}
