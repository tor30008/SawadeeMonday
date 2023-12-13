import React from "react";
import axios from "axios";

export const Addcourt_service = async(Name,Price) => {
    const data = {
        Name: Name,
        Price : Price
    }
    try{
        const res = await axios.post("http://127.0.0.1:7777/Addcourt",data);
        const result = await res.data;
        return result;
    }catch(error){
        console.log(error);
    }
}

export const Allcourt_service = async() => {
    try{
        const res = await axios.post("http://127.0.0.1:7777/Allcourt");
        const result = await res.data;
        return result;
    }catch(error){
        console.log(error)
    }
};
export const Editcourt_service = async(Id,Name,Price) => {
    const data = {
        Court_Id : Id,
        Court_name : Name,
        Court_price : Price
    }
    try{
        const res = await axios.post("http://127.0.0.1:7777/Editcourt",data);
        const result = await res.data;
        return result
    }catch(error){
        console.log(error);
    }
};
export const Editcourtstatus_service = async(id,status) => {
    const data = {
        Court_Id : id,
        Court_status : status
    }
    try{
        const res = await axios.post("http://127.0.0.1:7777/Editcourtstatus",data);
        const result = await res.data;
        return result;
    }catch(error){
        console.log(error);
    }

}