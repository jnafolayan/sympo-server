import mongoose from "mongoose";
import uuidv4 from "uuidv4";
import buildUserModel from "./user";

const { Schema } = mongoose;
const uuid = uuidv4;

export const User = buildUserModel({ mongoose, Schema, uuid });
