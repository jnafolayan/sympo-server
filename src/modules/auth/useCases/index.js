// import axios from "axios";
// import { google } from "googleapis";
import createRestError from "../../../util/createRestError";
import { generateJWT, decodeJWT } from "../../../util/token";
import * as config from "../../../config";
import buildLoginUser from "./loginUser";
import buildSignupUser from "./signupUser";
import { verifyUser, createUser } from "../../user/useCases";

// alias axios
// const http = axios;

// import buildGoogleLogin from "./googleLogin";
// import buildGoogleAuthCallback from "./googleAuthCallback";

// const initGoogleAuth = () => new google.auth.OAuth2(config.clientId, config.clientSecret, "http://localhost:5000/auth/google-login");
// const getGoogleAuthUrl = auth => auth.generateAuthUrl({
//   access_type: "offline",
//   prompt: "consent",
//   scope: ["profile", "email"]
// });

// const googleLogin = buildGoogleLogin({ initGoogleAuth, getGoogleAuthUrl });
// const googleAuthCallback = buildGoogleAuthCallback({ initGoogleAuth, getGoogleAuthUrl });

const loginUser = buildLoginUser({ verifyUser, createRestError, generateJWT });
const signupUser = buildSignupUser({ createUser, createRestError, generateJWT });

export { loginUser, signupUser };
