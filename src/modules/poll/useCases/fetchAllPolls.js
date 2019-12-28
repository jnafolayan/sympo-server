export default function buildFetchAllPolls({ 
  Poll, 
  createRestError 
}) {
  return async function fetchAllPolls() {
    const polls = await Poll.find({}).sort("createdAt");
    return polls;
  }
}