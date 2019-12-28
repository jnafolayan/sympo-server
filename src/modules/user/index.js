import { 
  createUserController, 
  findUserController, 
  verifyUserController 
} from "./controllers";

export default function loadUserModule(router) {
  router.post("/", createUserController);
  router.post("/verify", verifyUserController);
  router.get("/:username", findUserController);
  return router;
}