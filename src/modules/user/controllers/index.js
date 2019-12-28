import { findUser, createUser, verifyUser } from "../useCases";
import buildFindUserController from "./findUserController";
import buildCreateUserController from "./createUserController";
import buildVerifyUserController from "./verifyUserController";

const findUserController = buildFindUserController({ findUser });
const createUserController = buildCreateUserController({ createUser });
const verifyUserController = buildVerifyUserController({ verifyUser });

export { findUserController, createUserController, verifyUserController };
