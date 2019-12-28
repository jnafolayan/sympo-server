import { 
  startPollController, 
  voteOnPollController 
} from "./controllers";

export default function loadPollModule(router) {
  router.post("/", startPollController);
  router.post("/:pollId/vote", voteOnPollController);
  return router;
}