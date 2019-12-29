import pusher from "../../../pusher";
import { Comment, Upvote } from "../../../db/models";
import createRestError from "../../../util/createRestError";
import buildMakeComment from "./makeComment";
import buildUpvoteComment from "./upvoteComment";
import buildFetchComments from "./fetchComments";
import { validateComment, validateUpvote } from "../validations";

const makeComment = buildMakeComment({ 
  Comment,
  pusher,
  validateComment, 
  createRestError 
});

const upvoteComment = buildUpvoteComment({ 
  Comment,
  Upvote,
  pusher,
  validateUpvote,
  createRestError 
});

const fetchComments = buildFetchComments({ 
  Comment,
  createRestError 
});

export { makeComment, upvoteComment, fetchComments };
