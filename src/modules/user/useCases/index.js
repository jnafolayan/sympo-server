import { User } from "../../../db/models";
import createRestError from "../../../util/createRestError";
import { createHash, compareHash } from "../../../util/hasher";
import buildFindUser from "./findUser";
import buildCreateUser from "./createUser";
import buildVerifyUser from "./verifyUser";
import { validateUser, validateLogin } from "../validations";

const findUser = buildFindUser({ User, createRestError });
const createUser = buildCreateUser({ User, createRestError, validateUser, createHash });
const verifyUser = buildVerifyUser({ User, createRestError, validateLogin, compareHash });

export { findUser, createUser, verifyUser };
