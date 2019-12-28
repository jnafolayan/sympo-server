export default function buildStartPoll({ 
  Poll, 
  Vote, 
  pusher,
  validatePoll, 
  createRestError 
}) {
  return async function startPoll(pollDTO) {
    const { error, value: dto } = validatePoll(pollDTO);
    if (error)
      throw createRestError(400, error.message);

    const { question, details, options } = dto;

    const newOptions = options.map(option => ({
      label: option
    }));

    const newPoll = await Poll.create({ 
      question, 
      details: details || "", 
      options: newOptions 
    });

    // notify everyone
    pusher.trigger("polls", "poll", {
      question,
      _id: newPoll.id,newPoll,
      details: newPoll.details
    });
    
    return newPoll;
  }
}