import axios from "axios";
import react,{useState} from "react";

export const getshuttercockMatchId = async(id) => {
    let data = {
        match_id : id
    }
    try{
        const res = await axios.post(import.meta.env.VITE_HTTP_API+"matchShuttercock",data);
        console.log(import.meta.env.VITE_HTTP_API)
        const result = await res.data;
        return result; 
    }catch(err){
        console.log(err);
    }
}

export const addmoreshuttercockMatchId = async(Match_id,Type_BB_id) => {
    let data = {
        Match_id : Match_id,
        Type_badmintonball_id : Type_BB_id
    }
    try{
        const res = await axios.post(import.meta.env.VITE_HTTP_API+"addshuttercockMatchid",data);
        const result = res.data;
        return result;
    }catch(err){
        console.log(err);
    }
}

export const deletemoreshuttercockMatchId = async(Match_id,MTB_id,MTB_TIME) => {
        try{
            const res = await axios.delete(`${import.meta.env.VITE_HTTP_API}deleteshuttercockMatchid?Match_id=${Match_id}&MTB_TIME=${MTB_TIME}&MTB_id=${MTB_id}`);
            return res;
        }catch(err){
            console.log(err);
        }
}