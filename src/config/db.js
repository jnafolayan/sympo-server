export default function getDBEnv({ joi, env }) {

  const envSchema = joi.object({
    DB_URL: joi.string()
  }).unknown().required();

  const { error, value: envVars } = joi.validate(env, envSchema);

  if (error)
    throw new Error(`Config validation error: ${error.message}`);

  return {
    url: envVars.DB_URL
  };

}