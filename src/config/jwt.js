export default function getJWTEnv({ joi, env }) {

  const envSchema = joi.object({
    JWT_SECRET: joi.string(),
    JWT_EXPIRY: joi.string()
  }).unknown().required();

  const { error, value: envVars } = joi.validate(env, envSchema);

  if (error)
    throw new Error(`Config validation error: ${error.message}`);

  return {
    secret: envVars.JWT_SECRET,
    expiry: envVars.JWT_EXPIRY
  };

}