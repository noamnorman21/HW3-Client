import React from 'react'
import { useEffect, useState } from 'react'
import Recipe from './Recipe';

export default function MyRecipes(props) {
    const [recipesArr, setRecipesArr] = useState([]);
    useEffect(() => {
        fetch('http://localhost:53700/api/Recipes')
            .then(res => res.json())
            .then(data => {
                setRecipesArr(data)
            })

    }, [])
    return (
        <div style={{ margin: '0 auto' }} className='row'>
            {recipesArr.map((recipe) => {
                return (
                    <Recipe
                        key={recipe.recipeId}
                        name={recipe.recipeName}
                        image={recipe.imgUrl}
                        cookingMethod={recipe.cookingMethod}
                        time={recipe.time}
                        ingredientsArr={recipe.ingredients}
                    />
                )
            })}
        </div>
    )
}
