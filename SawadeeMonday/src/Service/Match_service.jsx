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

export const Randommatch_service = async() => {
    try{
        const res = await axios.get(import.meta.env.VITE_HTTP_API+"Randommatch");
        const result = await res.data;
        return result;
    }catch(err){
        console.log(err)
    }
}

export const deleteMatchid_service = async(matchId,TOO_ID,TOW_ID,TWO_ID,TWW_ID,match_timestart) => {
    let data = {
        Match_id : matchId,
        Teamone_playerone : TOO_ID,
        Teamone_playertwo : TOW_ID,
        Teamtwo_playerone : TWO_ID,
        Teamtwo_playertwo : TWW_ID,
        Match_timestart : match_timestart
    }
    try{
        const res = await axios.delete(`${import.meta.env.VITE_HTTP_API}manageMatch`,{params : {data}});
        const result = res.data
        console.log(result);
        return result;
    }catch(err){
        console.log(err);
    }
}
export const finishMatchid_service = async (matchId,TOO_ID,TOW_ID,TWO_ID,TWW_ID,match_timestart,scoreTeamone,scoreTeamtwo) => {
    let data = { 
        Match_id : matchId,
        Teamone_playerone : TOO_ID,
        Teamone_playertwo : TOW_ID,
        Teamtwo_playerone : TWO_ID,
        Teamtwo_playertwo : TWW_ID,
        Match_timestart : match_timestart,
        Score_teamone : scoreTeamone,
        Score_teamtwo : scoreTeamtwo
    }
    try{
        const res = await axios.patch(`${import.meta.env.VITE_HTTP_API}finishMatch`,{params : {data}})
        const result = res.data 
        return result;
    }catch(error){
        console.log(error);
    }

}
