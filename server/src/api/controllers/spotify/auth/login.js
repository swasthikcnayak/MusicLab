import {
  spotify_client_id,
  base_url,
  spotify_auth_url,
  spotify_scopes,
} from "../../../../config/index.js";
import { errorHelper, getText, logger } from "../../../../utils/index.js";

export default async (req, res) => {
  var state = generateRandomString(16);
  res
    .redirect(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri,
          state: state,
        })
    )
    .catch((err) => {
      return res.status(500).json(errorHelper("00049", req, err.message));
    });

  logger("00093", req.user._id, getText("en", "00050"), "Info", req);
  return res.status(200).json({
    resultMessage: { en: getText("en", "00050") },
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
