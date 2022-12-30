import connect from "../../lib/mongodb";
import User from '../../model/schema'

connect()

export default async function handler(req,res){

    const {email,password}=req.body
    const user = await User.findOne({email,password})
    console.log(req.body);
    if(!user){
        // return res.json({status:'Not able to find the user'})
        res.redirect('/')
    }
    else{
        res.redirect('/home')
    }
}