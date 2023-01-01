import React, { useEffect } from 'react'
import { useState } from 'react'
import Ingredients from './Ingredients'

export default function () {
    const [recipeName, setRecipeName] = useState('')
    const [recipeCookingMethod, setRecipeCookingMethod] = useState('')
    const [recipeTime, setRecipeTime] = useState('')
    const [recipeImage, setRecipeImage] = useState('')
    const [recipeIngredients, setRecipeIngredients] = useState([])
    const [tempRecipeIngr, setTempRecipeIngr] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:53700/api/Ingredients');
            const data = await response.json();
            setRecipeIngredients(data);
        }
        fetchData();
    }, []);

    const addRecipeToDB = () => {
        fetch('http://localhost:53700/api/Recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipeName: recipeName,
                cookingMethod: recipeCookingMethod,
                time: recipeTime,
                imgUrl: recipeImage,
                ingredients: tempRecipeIngr
            })
        })
    }
    const clearRecipe = () => {
        setRecipeName('')
        setRecipeCookingMethod('')
        setRecipeTime('')
        setRecipeImage('')
        setTempRecipeIngr([])
        // Clear the checkboxes
        const checkboxes = document.querySelectorAll('input[type=checkbox]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
    }

    const changeCheckBox = (key, isChecked) => {
        let ingredient = recipeIngredients.find(ingredient => ingredient.ingredientName === key)
        if (isChecked) {
            setTempRecipeIngr([...tempRecipeIngr, ingredient])
        } else {
            setTempRecipeIngr(tempRecipeIngr.filter(ingredient => ingredient.ingredientName !== key))
        }
    }

    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1rem',
    };
    const inputStyles = {
        margin: '0.5rem',
        padding: '0.5rem',
        fontSize: '1rem',
    };
    const buttonStyles = {
        margin: '0.5rem',
        padding: '0.5rem',
        fontSize: '1rem',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };
    return (
        <div className="container">
            <div style={containerStyles} >
                <input style={inputStyles} onChange={(e) => { setRecipeName(e.target.value) }} value={recipeName} type="text" placeholder="Enter Recipe Name" />
                <input style={inputStyles} onChange={(e) => { setRecipeCookingMethod(e.target.value) }} value={recipeCookingMethod} type="text" placeholder="Enter Cooking Method" />
                <input style={inputStyles} onChange={(e) => { setRecipeTime(e.target.value) }} value={recipeTime} type="text" placeholder="Enter Time" />
                <input style={inputStyles} onChange={(e) => { setRecipeImage(e.target.value) }} value={recipeImage} type="text" placeholder="Enter Image Url" />
            </div>
            <h1>Ingredients</h1>
            <div className='row'>
                {recipeIngredients.map((ingredient) => {
                    return (
                        <Ingredients
                            key={ingredient.ingredientId}
                            name={ingredient.ingredientName}
                            image={ingredient.imgUrl}
                            calories={ingredient.calories}
                            showCheckBox={true}
                            checkBoxChange={changeCheckBox}
                        />
                    )
                })}
            </div>
            <div className='row'>
                <button style={buttonStyles} onClick={addRecipeToDB} className='btn btn-secondary'>Add</button>
                <button style={buttonStyles} onClick={clearRecipe} className='btn btn-secondary'>Clear</button>
            </div>
        </div>
    )
}