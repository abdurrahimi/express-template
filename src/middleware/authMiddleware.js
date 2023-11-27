import jwtUtils from '../utils/utils.js';

export const authenticate = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (token == null) {
        return res.sendStatus(401);
    }

    try {
        const validate = await jwtUtils.verifyJWT(token);
        if (!validate) {
            return res.sendStatus(403);
        }
        next();
    } catch (err) {
        res.sendStatus(500);
    }
};