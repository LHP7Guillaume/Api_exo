import Express from "express";
import { getTest, postTest, addUsers } from "../Controllers/usersControllers";
const router = Express.Router();

router.get('/', (_, res) => {
    res.send('hello les hardcoders')
})

router.get('/test', getTest)

router.post('/test', postTest)

router.post('/users', addUsers)

export default router 