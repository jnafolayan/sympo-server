import { startPoll, voteOnPoll, fetchPoll, fetchAllPolls } from "../useCases";
import buildStartPollController from "./startPollController";
import buildVoteOnPollController from "./voteOnPollController";
import buildFetchPollController from "./fetchPollController";
import buildFetchAllPollsController from "./fetchAllPollsController";

const startPollController = buildStartPollController({ startPoll });
const voteOnPollController = buildVoteOnPollController({ voteOnPoll });
const fetchPollController = buildFetchPollController({ fetchPoll });
const fetchAllPollsController = buildFetchAllPollsController({ fetchAllPolls });

export { startPollController, voteOnPollController, fetchPollController, fetchAllPollsController };
