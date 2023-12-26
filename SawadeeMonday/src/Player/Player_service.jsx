import axios from "axios";
import React, { useState } from "react";

export const Addprofile_service = async (Path, Name, Phone, Type) => {
  const Formdata_newprofile = new FormData();
  Formdata_newprofile.append("image", Path);
  Formdata_newprofile.append("Name", Name);
  Formdata_newprofile.append("Phone", Phone);
  Formdata_newprofile.append("Type", Type);
  try {
    const res = await axios.post(
      "http://127.0.0.1:7777/Add_player",
      Formdata_newprofile,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    const result = await res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const Deleteprofile_service = async (Player_id,Player_status) => {
  const postdata = {
    Player_id: Player_id,
    Player_status:Player_status
  };
  try {
    const res = await axios.post(
      "http://127.0.0.1:7777/Deleteplayer",
      postdata
    );
    const result = await res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const Getprofile_service = async (Player_id) => {
  const postdata = {
    Player_id: Player_id,
  };
  try {
    const res = await axios.post("http://127.0.0.1:7777/Player", postdata);
    const result = await res.data;
    console.log(res);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const Editprofile_service = async (Path, Name, Phone, Type,Player_id) => {
 
  const Formdata_editprofile = new FormData();
  Formdata_editprofile.append("image", Path);
  Formdata_editprofile.append("Name", Name);
  Formdata_editprofile.append("Phone", Phone);
  Formdata_editprofile.append("Type", Type);
  Formdata_editprofile.append("Player_id",Player_id);
  try {
    const res = await axios.post("http://127.0.0.1:7777/Editplayer",Formdata_editprofile,{ headers: { "Content-Type": "multipart/form-data" } });
    const result = await res.data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const Getplayerjointoday_service = async() => { 
  try{
    const res = await axios.post("http://127.0.0.1:1111/getplayerjointoday");
    const result = await res.data;
    return result;
  }catch(error){
    console.log(error);
  }
}

export const Getplayernotjointoday_service = async() => { 
  try{ 
    const res = await axios.post("http://127.0.0.1:1111/getplayernotjointoday");
    const result = await res.data;
    return result
  }catch(error){
    console.log(error);
  }
}