import React from "react";
import "./Categories.css";
import {
  cuisines_images,
  diet_categories,
  intolerances,
  meal_categories,
} from "../../contants";
export default function Categories() {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="category-circles-grid">
        {meal_categories.map((recipe: any, index) => (
          <div key={index} className="category-circles">
            <img loading="lazy" src={recipe.image} alt={`img`} />
            <p>{recipe.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
