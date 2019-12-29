export default function buildFetchComments({ 
  Comment, 
  createRestError 
}) {
  return async function fetchComments(query={}) {
    query = ["author", "poll"].reduce((out, key) => {
      if (key in query)
        out[key] = query[key];
      return out;
    }, {});
    const comments = await Comment.find(query).sort("createdAt").exec();
    return comments;
  }
}