/**
 * Token information
 */
export type OAuth2Token = {

  /**
   * OAuth2 Access Token
   */
  accessToken: string;

  /**
   * When the Access Token expires.
   *
   * This is expressed as a unix timestamp in milliseconds.
   */
  expiresAt: number | null;

  /**
   * OAuth2 refresh token
   */
  refreshToken: string | null;
};

export type OidcToken = OAuth2Token & {
  /**
   * OIDC identity token
   */
  idToken: string;
}
