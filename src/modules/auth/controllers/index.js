import { decodeJWT } from "../../../util/token";
import createRestError from "../../../util/createRestError";
import { loginUser, signupUser } from "../useCases";
import buildLoginUserController from "./loginUserController";
import buildSignupUserController from "./signupUserController";
import buildVerifyAuthController from "./verifyAuthController";

const loginUserController = buildLoginUserController({ loginUser });
const signupUserController = buildSignupUserController({ signupUser });
const verifyAuthController = buildVerifyAuthController({ decodeJWT, createRestError });

export { loginUserController, signupUserController, verifyAuthController };