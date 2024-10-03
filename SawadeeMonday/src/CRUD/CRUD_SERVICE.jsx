import React,{useState} from "react";

import axios from "axios";

export const getshop_service = async() => {
    try{
        const res = await axios.get("http://127.0.0.1:1111/shop");
        const result = await res.data;
        console.log(result);
        return result
    }catch(err){
        console.log(err);
    }
};

export const deleteshop_service = async(id) => {
    let data = {
        shopId : id
    }
    try{
        const res = await axios.post("http://127.0.0.1:1111/deleteshop",data);
        const result = await res.data;
        return result;
    }catch(err){
        console.log(err)
    }
}
export const insertshop_service = async(id , name) => {
    let data = {
        shopId : id ,
        shopName : name
    }
    try{
        const res = await axios.post("http://127.0.0.1:1111/insertshop",data);
        const result = await res.data;
        return result;
    }catch(err){
        console.log(err);
    }
}

export const updateshop_service =async(data)=> {
    try{
        const res = await axios.post("http://127.0.0.1:1111/updateshop",data);
        const result = await res.data;
        return result;
    }catch(err){
        console.log(err);
    }
}