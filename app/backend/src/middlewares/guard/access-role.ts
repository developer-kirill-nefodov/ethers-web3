import {fullCheckJWT} from "../../helpers/token/token";
import {TOKENS_NAME_DATA} from "../../constants";

export const accessRole = async (req, res) => {
  const accessToken = req.headers.authorization?.split(' ')[1];
  const refreshToken = req.cookies[TOKENS_NAME_DATA.refreshToken.name];

  const checkJWT = await fullCheckJWT(accessToken, refreshToken);

  if(checkJWT.code === 400) {
    return res.status(200).json({
      code: 200,
      role: {
        name: 'VISITOR',
        permissions: null
      }
    });
  }

  if(checkJWT.code === 403) {
    return res.status(403).json({
      message: checkJWT.message,
      role: {
        name: 'VISITOR',
        permissions: null
      }
    });
  }

  res.status(200).json(checkJWT.userData);
}
