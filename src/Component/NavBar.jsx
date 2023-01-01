import React from 'react'
import { Switch, Route, Link, Routes } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav style={navStyle}>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/MyRecipes">My Recipes</Link>
            <Link style={linkStyle} to="/NewIngredientInput">Add Ingredient</Link>
            <Link style={linkStyle} to="/NewRecipeInput">Add Recipe</Link>
        </nav>
    );
}
const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '0.5rem 1rem'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '1rem',
    fontWeight: 'bold'
};

const activeLinkStyle = {
    ...linkStyle,
    color: '#f00'
};
