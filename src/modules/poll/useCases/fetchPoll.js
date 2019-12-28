export default function buildFetchPoll({ 
  Poll, 
  Vote, 
  createRestError 
}) {
  return async function fetchPoll(pollId) {
    const poll = await Poll.findOne({ _id: pollId });
    if (!poll)
      throw createRestError(404, "Could not find poll");
    
    const votes = await Vote.find({ poll: pollId });

    const votesMap = {};
    poll.options.forEach(option => {
      votesMap[option._id] = votes.filter(vote => vote.optionId == option._id).length;
    });

    return {
      poll,
      votes: votesMap
    };
  }
}