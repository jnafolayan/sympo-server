import { startPoll } from "../useCases";
import buildStartPollController from "./startPollController";
import buildVoteOnPollController from "./voteOnPollController";

const startPollController = buildStartPollController({ startPoll });
const voteOnPollController = buildVoteOnPollController({ startPoll });

export { startPollController, voteOnPollController };
