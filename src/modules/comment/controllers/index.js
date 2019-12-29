import { makeComment, upvoteComment, fetchComments } from "../useCases";
import buildMakeCommentController from "./makeCommentController";
import buildUpvoteCommentController from "./upvoteCommentController";
import buildFetchCommentsController from "./fetchCommentsController";

const makeCommentController = buildMakeCommentController({ makeComment });
const upvoteCommentController = buildUpvoteCommentController({ upvoteComment });
const fetchCommentsController = buildFetchCommentsController({ fetchComments });

export { makeCommentController, upvoteCommentController, fetchCommentsController };
