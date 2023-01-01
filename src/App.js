import './App.css';
import Ingredient from './Component/Ingredients';
import Recipe from './Component/Recipe';
import NewIngredientInput from './Component/NewIngredientInput';
import MyRecipes from './Component/MyRecipes';
import MyIngredients from './Component/MyIngredients';
import { Switch, Route, Link, Routes } from 'react-router-dom';
import NewRecipeInput from './Component/NewRecipeInput';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<div><h1 style={{ 'text-align': 'center', paddingTop: '20%' }}>Welcome To Noam & Oryan Kitchen</h1></div>} />
          <Route path='/MyRecipes' element={<MyRecipes />} />
          <Route path='/NewIngredientInput' element={<NewIngredientInput />} />
          <Route path='/NewRecipeInput' element={<NewRecipeInput />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;