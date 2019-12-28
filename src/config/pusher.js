export default function getDBEnv({ joi, env }) {

  const envSchema = joi.object({
    PUSHER_APP_ID: joi.number(),
    PUSHER_APP_KEY: joi.string(),
    PUSHER_APP_SECRET: joi.string(),
    PUSHER_APP_CLUSTER: joi.string(),
  }).unknown().required();

  const { error, value: envVars } = joi.validate(env, envSchema);

  if (error)
    throw new Error(`Config validation error: ${error.message}`);

  return {
    appId: envVars.PUSHER_APP_ID,
    key: envVars.PUSHER_APP_KEY,
    secret: envVars.PUSHER_APP_SECRET,
    cluster: envVars.PUSHER_APP_CLUSTER,
  };

}