import axios from "axios"
import React,{useState} from "react"



const Addprofile_service = async(Path,Name,Phone,Type) => {
    console.log(Path);
    console.log(Name);
    console.log(Phone);
    console.log(Type);
    const postdata ={
        Photo:Path,
        Name:  Name,
        Phone: Phone,
        Type:Type
    }
    try{
        const res = await axios.post("http://127.0.0.1:7777/Add_player",postdata)
        const result = await res.data;
        return result;
    }catch(error){
        console.log(error);
    }
}

export default Addprofile_service;