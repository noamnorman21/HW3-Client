import React from 'react'
import { useState } from 'react'

export default function () {
  const [ingredientName, setIngredientName] = useState('')
  const [ingredientCalories, setIngredientCalories] = useState('')
  const [ingredientImage, setIngredientImage] = useState('')

  const addIngreditnToDB = () => {
    alert(ingredientName)
    fetch('http://localhost:53700/api/Ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredientsName: ingredientName,
        calories: ingredientCalories,
        imgUrl: ingredientImage
      })
    })

  }
  const clearTxtInput = () => {
    setIngredientName('')
    setIngredientCalories('')
    setIngredientImage('')
  }
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
  };
  const inputStyles = {
    margin: '1rem',
    border: '1px solid #ccc',
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
    <div style={containerStyles} className="container">
      <input style={inputStyles} onChange={(e) => { setIngredientName(e.target.value) }} value={ingredientName} type="text" placeholder="Enter Ingredient Name" />
      <input style={inputStyles} onChange={(e) => { setIngredientCalories(e.target.value) }} value={ingredientCalories} type="number" placeholder="Enter Calories" />
      <input style={inputStyles} onChange={(e) => { setIngredientImage(e.target.value) }} value={ingredientImage} type="text" placeholder="Enter Image URL" />
      <button style={buttonStyles} onClick={addIngreditnToDB} className='btn btn-secondary'>Add</button>
      <button style={buttonStyles} onClick={clearTxtInput} className='btn btn-secondary'>Clear</button>
    </div>
  )
}