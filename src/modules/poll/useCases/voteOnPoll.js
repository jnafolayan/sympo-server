export default function buildVoteOnPoll({ 
  Poll, 
  Vote, 
  pusher,
  fetchPoll,
  validateVote, 
  createRestError 
}) {
  return async function voteOnPoll(voteDTO) {
    const { error, value: dto } = validateVote(voteDTO);
    if (error)
      throw createRestError(400, error.message);

    const { poll, user, optionId } = dto;

    // check if the poll exists
    let pollDoc;
    // suppress mongo's errors
    try {
      pollDoc = await Poll.findById(poll);
    } catch (err) {
      pollDoc = null;
    }

    if (!pollDoc)
      throw createRestError(404, "Could not find poll");

    // check if option chosen is in Poll
    const foundOption = pollDoc.options.find(option => option._id == optionId);
    if (!foundOption)
      throw createRestError(422, "Attempting to vote an illegal option")

    // ensure user hasn't voted before
    const foundVote = await Vote.findOne({ poll, user });
    if (foundVote)
      throw createRestError(403, "You cannot vote more than once");

    // phew! everything is fine
    const newVote = await Vote.create({ poll, user, optionId });

    // broadcast a message to those currently viewing this poll
    const data = await fetchPoll(poll);
    pusher.trigger(poll, "vote", data);

    return newVote;
  }
}