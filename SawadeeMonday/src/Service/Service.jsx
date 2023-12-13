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

export default FetchData;
