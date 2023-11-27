import User from '../models/user.js'

export const storeDataUser = async(user) => {
    await User.create({
        id:2,
        name:'asdawd'
    })
}

export const getuserList = async(query) => {
    const user = await User.findAll()
    return user
}