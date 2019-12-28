import Pusher from "pusher";
import { pusher as config } from "./config";

const pusher = new Pusher({
  appId: config.appId,
  key: config.key,
  secret: config.secret,
  cluster: config.cluster,
  useTLS: true
});

export default pusher;