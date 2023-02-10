import { spotify_scopes } from "../../../../config/index.js";
import { errorHelper, getText, logger } from "../../../../utils/index.js";
import spotifyAPI from "../spotifyAPI.js";

export default async (req, res) => {
  res.redirect(spotifyAPI.createAuthorizeURL(spotify_scopes)).catch((err) => {
    return res.status(500).json(errorHelper("00049", req, err.message));
  });

  logger("00093", req.user._id, getText("en", "00093"), "Info", req);
  return res.status(200).json({
    resultMessage: { en: getText("en", "00093") },
    resultCode: "00093",
  });
};

/**
 * @swagger
 * /spotify/login:
 *    get:
 *      summary: Authenticate the application for using spotify credentials
 *      parameters:
 *        - in: header
 *          name: Authorization
 *          schema:
 *            type: string
 *          description: Put access token here
 *      tags:
 *        - User
 *      responses:
 *        "200":
 *          description: Successfully logged out.
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Result'
 *        "401":
 *          description: Invalid token.
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Result'
 *        "500":
 *          description: An internal server error occurred, please try again.
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Result'
 */
