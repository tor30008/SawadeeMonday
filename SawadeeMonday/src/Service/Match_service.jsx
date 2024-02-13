import React,{useState} from "react";
import axios from "axios";

export const Getallmatchplaying_today_service = async() => {
    try{
        const res = await axios.post("http://127.0.0.1:7777/getmatching_willplaying");
        const result = await res.data;
        return result;
    }catch(error){
        console.log(error);
    }
    
}