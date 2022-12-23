import express, {Request, Response, } from "express"

const router = express.Router()

router.get("/", (req: Request, res: Response, next: Function): void =>{
    res.status(200).json({message: "User is Created"})
});

export default router;