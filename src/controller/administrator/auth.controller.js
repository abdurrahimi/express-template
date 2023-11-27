import jwtUtils from "../../utils/jwtUtils"

export const handleLogin = async (req, res) => {
    try {
        const token = await jwtUtils.generateJWT({
            name: 'user'
        })
    
        return res.json({
            message: 'success',
            token: token
        })
    } catch (err) {
        return res.status(500).json({
            message: 'success',
            token: token
        })
    }
}

export const getProfile = async (req, res) => {
    return "pok"
}