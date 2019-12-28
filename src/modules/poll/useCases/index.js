import { Poll, Vote } from "../../../db/models";
import createRestError from "../../../util/createRestError";
import buildStartPoll from "./startPoll";
import buildVoteOnPoll from "./voteOnPoll";
import { validatePoll, validateVote } from "../validations";

const startPoll = buildStartPoll({ 
  Poll, 
  Vote, 
  validatePoll, 
  createRestError 
});

const voteOnPoll = buildVoteOnPoll({
  Poll,
  Vote,
  validateVote,
  createRestError
})

export { startPoll, voteOnPoll };
