import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
};

const App = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
      .catch((err) => console.error("API hatası:", err));
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="flex items-center gap-3 p-6 bg-white shadow-sm">
        <div className="bg-orange-500 p-2 rounded-lg">
          <span className="text-white text-2xl">👨‍🍳</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">RecipeHub</h1>
          <p className="text-gray-500 text-sm">
            Discover delicious recipes from around the world
          </p>
        </div>
      </header>

      <main
        className="p-6 grid gap-6 
        sm:grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4"
      >
        {meals.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            image={meal.strMealThumb}
            title={meal.strMeal}
            category={meal.strCategory}
            area={meal.strArea}
            instructions={meal.strInstructions}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
