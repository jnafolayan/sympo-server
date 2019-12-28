import { 
  loginUserController, 
  signupUserController
} from "./controllers";

export default function loadAuthModule(router) {
  router.post("/login", loginUserController);
  router.post("/signup", signupUserController);
  return router;
}