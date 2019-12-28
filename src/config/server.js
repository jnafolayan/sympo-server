export default function getServerEnv({ joi, env }) {

  const envSchema = joi.object({
    PORT: joi.string().required()
  }).unknown().required();

  const { error, value: envVars } = joi.validate(env, envSchema);

  if (error)
    throw new Error(`Config validation error: ${error.message}`);

  return {
    port: envVars.PORT
  };

}