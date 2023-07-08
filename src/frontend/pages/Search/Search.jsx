import React from "react";
import "./Search.css";
import "../../styles.css";
import {useState} from "react";

export default function Search(){
    const [recipeLink, setRecipeLink]=useState("");
    async function fetchData(){
        try{
            const response=((await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=33eef802&app_key=8ebc6ae94cc66037076a9fd9c7e9c5fa")));
            //console.log(response);
            const data=await response.json();
            //console.log(data);
            setRecipeLink(data.hits[0].recipe.url);
            //console.log(jsonData.count);
        } catch (error){
            console.log(error);
        } 
    }
    fetchData();
    return(
        <div>
            <h1 className="h1">If you ran out of recipes....</h1>
            <p>
                {recipeLink}
            </p>
        </div>
    )
}
