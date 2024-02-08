import { NextFunction } from "express"
import { ObjectSchema } from "joi"
import { StatusCodes,ReasonPhrases } from "http-status-codes"

const validate = (schema: ObjectSchema) => {
    return (req:Request,res:Response,next:NextFunction)=>{
        const {error} = schema.validate(req.body,{
            abortEarly: false
        });
        if (error) res.status(422).json({ error: error.details });
        next()
    }
}

export default validate;
