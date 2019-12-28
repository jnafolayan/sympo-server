import { verifyAuthController } from "../auth/controllers";
import { 
  startPollController, 
  voteOnPollController,
  fetchPollController,
  fetchAllPollsController
} from "./controllers";

export default function loadPollModule(router) {
  router.post("/", startPollController);
  router.get("/", fetchAllPollsController);
  router.get("/:pollId", fetchPollController);
  router.post("/:pollId/vote", verifyAuthController, voteOnPollController);
  return router;
}