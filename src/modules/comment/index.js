import { verifyAuthController } from "../auth/controllers";
import { 
  makeCommentController,
  upvoteCommentController,
  fetchCommentsController
} from "./controllers";

export default function loadCommentModule(router) {
  router.post("/", verifyAuthController, makeCommentController);
  router.get("/", fetchCommentsController);
  router.post("/:commentId/upvote", verifyAuthController, upvoteCommentController);
  return router;
}