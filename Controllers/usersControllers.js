import Users from '../Models/usersModel.js'
export const getTest = (_, res) => {
    res.send({
        name: 'Hardcoders'
    })
}

export const postTest = (req, res) => {
    res.send(req.body)
}

export const addUsers = async (req, res) => {
    const users = new Users(req.body)

    try {
        await users.save()
        res.send(users)
    }
    catch (err) {
        res.status(500).send(users)
    }
}