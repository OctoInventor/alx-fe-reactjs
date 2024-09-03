import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails'; // Adjust the import path

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Other routes */}
        <Route path="/recipes/:recipeId" component={RecipeDetails} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default Routes;