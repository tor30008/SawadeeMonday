import React,{useState} from "react";

import axios from "axios";

const Allplayer_service = async() =>{
    try{
        const res = await axios.get("http://127.0.0.1:7777/Allplayer");
        const result = await res.data;
        return result;
    }catch(err){
        console.log(err);
    }
}

export default Allplayer_service;