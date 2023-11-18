import * as adminService from '../service/adminService.js'
import * as adminRepo from '../repository/adminRepository.js'

export const create = async (req, res) => {
    try{
        const validate = adminService.validateRequest(req.body)
        if ( !validate ) {
            return res.status(400).json({ //ini bisa tanpa status kalau untuk return 200 ok
                message: "request not valid"
            })
        }

        await adminRepo.storeDataUser(req.body)

        return res.json({
            message: "success"
        })
    } catch(e) {
        return res.status(500).json({
            message: "error"
        })
    }
}

export const getList = async (req, res) => {
    const user = await adminRepo.getuserList()
    return res.json({message:'okok', data:user})
}
