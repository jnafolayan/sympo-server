export default function buildGoogleLogin({ 
  initGoogleAuth,
  getGoogleAuthUrl 
}) {
  /**
   * Generates a google login url for the client
   * @returns {string}
   */
  return async function googleLogin() {
    const oAuth2Client = initGoogleAuth();
    const url = getGoogleAuthUrl(oAuth2Client);
    
    console.log(url);
    return url;
  }
}