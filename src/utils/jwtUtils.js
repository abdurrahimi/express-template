import jwt from 'jsonwebtoken';
import config from '../../config/app.js'

export const generateJWT = async (params, expiresIn = '1d') => {
    try {
        const token = jwt.sign(params, config.jwtSecret, { expiresIn: expiresIn });
        return token;
    } catch (err) {
        console.error(err);
        return null; // Atau tangani kesalahan pembuatan token sesuai kebutuhan Anda
    }
};

export const verifyJWT = async (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        return null; // Atau tangani kesalahan verifikasi sesuai kebutuhan Anda
    }
};
