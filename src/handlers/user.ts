import prisma from '../modules/db'
import { createJWT, hashPassword } from '../modules/auth'


export const createNewUser = async(req, res)=>{
    const hash = await hashPassword(req.body.password)

    const user = await prisma.user.create({
        data:{
            username: req.body.username,
            password: hash
        }
    })

    const token = createJWT(user)
    res.json({token})
}

