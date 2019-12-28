import mongoose from "mongoose";
import uuidv4 from "uuidv4";
import buildUserModel from "./user";
import buildPollModel from "./poll";
import buildVoteModel from "./vote";

const { Schema } = mongoose;
const uuid = uuidv4;

export const User = buildUserModel({ mongoose, Schema, uuid });
export const Poll = buildPollModel({ mongoose, Schema, uuid });
export const Vote = buildVoteModel({ mongoose, Schema, uuid });
