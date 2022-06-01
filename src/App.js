import './App.css';
import React, { useState } from 'react';

function App() {
  const initialState = {
    'recipe-name': '',
    'recipe-instructions': '',
  };
  const [recipes, setRecipes] = useState(initialState);
  const [recipeList, setRecipeList] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  function addRecipe(event) {
    event.preventDefault();
    setRecipeList([...recipeList, recipes]);
    setRecipes(initialState);
  }
  function handleInput(event) {
    setRecipes((prevRecipes) => {
      return {
        ...prevRecipes,
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleClick() {
    setButtonClicked(true);
  }

  if (!buttonClicked) {
    return (
      <div>
        <h1 className='doNotRemoveMe'>Hello world.</h1>
        {/* ^ Do not remove this element ^ */}
        <h1>My Recipes</h1>
        <button onClick={handleClick}>Add Recipe</button>

        <p>There are no recipes to list.</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className='doNotRemoveMe'>Hello world.</h1>
        {/* ^ Do not remove this element ^ */}
        <h1>My Recipes</h1>

        <form onSubmit={addRecipe}>
          <label htmlFor='recipe-name'>Recipe Name</label>
          <input
            type='text'
            name='recipe-name'
            id='recipe-name'
            value={recipes['recipe-name']}
            onChange={handleInput}
          />
          <label htmlFor='recipe-instructions'>Recipe Instructions</label>
          <input
            type='text'
            name='recipe-instructions'
            id='recipe-instructions'
            value={recipes['recipe-instructions']}
            onChange={handleInput}
          />
          <button>Submit</button>
        </form>

        {recipeList.map((recipe, index) => {
          return (
            <ul>
              <li key={index}>Name: {recipe['recipe-name']}</li>
              <li key={index}>Instructions: {recipe['recipe-instructions']}</li>
            </ul>
          );
        })}
        <p>{recipeList.length > 0 ? '' : 'There are no recipes to list.'}</p>
      </div>
    );
  }
}

export default App;
