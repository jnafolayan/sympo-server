import pusher from "../../../pusher";
import { Poll, Vote } from "../../../db/models";
import createRestError from "../../../util/createRestError";
import buildStartPoll from "./startPoll";
import buildVoteOnPoll from "./voteOnPoll";
import buildFetchPoll from "./fetchPoll";
import buildFetchAllPolls from "./fetchAllPolls";
import { validatePoll, validateVote } from "../validations";

const startPoll = buildStartPoll({ 
  Poll, 
  Vote, 
  pusher,
  validatePoll, 
  createRestError 
});

const fetchPoll = buildFetchPoll({
  Poll,
  Vote,
  createRestError
});

const voteOnPoll = buildVoteOnPoll({
  Poll,
  Vote,
  pusher,
  fetchPoll,
  validateVote,
  createRestError
});

const fetchAllPolls = buildFetchAllPolls({
  Poll,
  createRestError
});

export { startPoll, voteOnPoll, fetchPoll, fetchAllPolls };
