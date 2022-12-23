import express, {Request, Response, } from "express"
import app from "../app";

const router = express.Router()

router.get("/", (req: Request, res: Response, next: Function): void =>{
    res.status(200).json({message: "User is Created"})
});

router.get("/user/:id", (req: Request, res: Response, next: Function): void =>{
    let id = req.params.id
    let a = async ()=>{
        let result 
        if(id=='all')
        result = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
        else
        result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        let rrr = await result.json();
        res.send(rrr)
    }
    a()
})

export default router;