import axios from "axios"
import React,{useState} from "react"



export const Addprofile_service = async(Path,Name,Phone,Type) => {
    /*console.log(Path);
    console.log(Name);
    console.log(Phone);
    console.log(Type);
    const postdata ={
        Photo:Path,
        Name:  Name,
        Phone: Phone,
        Type:Type
    }*/

    const Formdata_newprofile = new FormData();
    Formdata_newprofile.append('image',Path);
    Formdata_newprofile.append('Name',Name);
    Formdata_newprofile.append('Phone',Phone);
    Formdata_newprofile.append('Type',Type);
    try{
        const res = await axios.post("http://127.0.0.1:7777/Add_player",Formdata_newprofile,{headers : {'Content-Type':'multipart/form-data'}});
        const result = await res.data;
        return result;
    }catch(error){
        console.log(error);
    }
}

export const Deleteprofile_service = async(Player_id) =>{
    const postdata = {
        'Player_id': Player_id
    }
    try{
        const res = await axios.post("http://127.0.0.1:7777/Deleteplayer",postdata);
        const result = await res.data;
        return result;
    }catch(error){
        console.log(error);
    }
}
