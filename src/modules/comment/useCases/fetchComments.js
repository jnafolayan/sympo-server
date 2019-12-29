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
    const comments = await Comment
      .find(query)
      .populate("author")
      .sort("-upvotes").exec();
    return comments.map(comment => ({
      _id: comment._id,
      author: comment.author.username,
      message: comment.message,
      poll: comment.poll,
      upvotes: comment.upvotes,
      createdAt: comment.createdAt
    }));
  }
}