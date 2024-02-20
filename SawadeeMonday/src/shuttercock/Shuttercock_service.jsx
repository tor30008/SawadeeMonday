import React from 'react';
import axios from 'axios';

export const AddShuttercock_service = async(Name,Price,Speed) => {
    try{
        const data = {
            Name : Name,
            Price : Price,
            Speed : Speed
        }
        const res = await axios.post(import.meta.env.VITE_HTTP_API+"AddShuttercock",data);
        const result = await res.data;
        return result;
    }catch(err){
        console.log(err);
    }
}

export const GetShuttercock_service = async() => {
    try{
        const res = await axios.get(import.meta.env.VITE_HTTP_API+"GetShuttercock");
        const result = await res.data;
        return result;
    }catch(err){
        console.log(err);
    }
}

export const EditShuttercock_Service = async(data) => {
    try{
        const res = await axios.patch(import.meta.env.VITE_HTTP_API+"EditShuttercock",data);
        const result = await res.data;
        return result;
    }catch(err){
        console.log(err);
    }
}