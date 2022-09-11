import React, { useState } from 'react'
import './recipe.css'
import axios from 'axios'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'

function Recipe() {

    const [recipes, setRecipes] = useState([])

    const getRecipe = () =>
    {
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((response) =>{console.log(response.data.meals)
    setRecipes(response.data.meals)
    }) }

    useEffect(()=>{
        getRecipe()
    }, [])

 
    
  return (

    
    <div>
        <section >

      

        <h1 className='title'>Random Recipe Generator</h1> 
        <button className='getRecipe-btn' onClick= {getRecipe} >Get a New Recipe</button>

        {recipes.map((recipe) => {
            const {idMeal, strMeal, strInstructions, strArea, strMealThumb, strYoutube, strSource, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
                strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13,
                strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20 ,
                strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10,
                strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20 } = recipe
            return(
                <article key={idMeal} >  
                <h2 className='mealname'> {strMeal} </h2>
                <h3 className='cuisine'> <span> Cuisine :  </span> {strArea} </h3>

                <h4><span>Ingredients : </span> {strMeasure1} {strIngredient1} &nbsp;&nbsp; {strMeasure2} {strIngredient2} &nbsp; {strMeasure3} {strIngredient3} &nbsp; {strMeasure4} {strIngredient4} &nbsp; {strMeasure5} {strIngredient5} &nbsp;
                {strMeasure6} {strIngredient6} &nbsp; {strMeasure7} {strIngredient7}&nbsp; {strMeasure8} {strIngredient8} &nbsp; {strMeasure9} {strIngredient9} &nbsp; {strMeasure10} {strIngredient10} &nbsp;
                {strMeasure11} {strIngredient11} &nbsp; {strMeasure12} {strIngredient12} &nbsp; {strMeasure13} {strIngredient13} &nbsp; {strMeasure14} {strIngredient14} &nbsp; {strMeasure15} {strIngredient15} &nbsp;
                {strMeasure16} {strIngredient16} &nbsp; {strMeasure17} {strIngredient17} &nbsp; {strMeasure18} {strIngredient18} &nbsp; {strMeasure19} {strIngredient19} &nbsp; {strMeasure20} {strIngredient20}</h4>
                
                <p className='instruction'> <span >How to Cook : </span>  {strInstructions}</p>

                <button className="source" onClick={()=>{window.open(strSource, '_blank')}}  >Source</button>

                <div className='video'>
                <ReactPlayer /* style = {playerstyle } */ controls url={strYoutube} />
                
                <img src={strMealThumb} alt = {strMeal}/>
                </div>
                </article>
            )
        })}

        </section>

       
    </div>
    
  )
}

export default Recipe