export default function buildGoogleAuthCallback({ 
  initGoogleAuth,
  createRestError 
}) {
  /**
   * Generates a google login url for the client
   * @returns {string}
   */
  return async function goggleAuthCallback(code) {
    if (!code)
      throw createRestError(400, "Auth code not found");

    const oAuth2Client = initGoogleAuth();
    try {
      const { tokens } = await oAuth2Client.getToken(code);
      oAuth2Client.setCredentials(tokens);
    } catch (error) {
      throw createRestError(500, "Could not get tokens", "GOOGLE_AUTH_FAILED");
    }
  }
}