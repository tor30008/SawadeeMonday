import React, { useState } from "react";
import axios from "axios";

/*const FetchData = async () => {
  await axios
    .get("http://127.0.0.1:7777/Type_player")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {});
};*/

const FetchData = async () => {
  try{
    const response = await axios.get("http://127.0.0.1:7777/Type_player");
    return response.data;
  }catch(error){
    console.warn(error);
    throw error;
  }
}//Typeplayer


export const Jointoday_service = async(Player_id,Joinday_status) => { 
  const data = { 
    Player_id : Player_id,
    Joinday_status : Joinday_status
  }
  try{
    const res = await axios.post("http://127.0.0.1:7777/Jointoday",data);
    const result = res.data;
    return result;
  }catch(error){
    console.log(error);
  }
}

export default FetchData;
