export default function buildStartPoll({ 
  Poll, 
  Vote, 
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
    return newPoll;
  }
}