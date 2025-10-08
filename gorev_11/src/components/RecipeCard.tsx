import { useState } from "react";

type RecipeCardProps = {
  image: string;
  title: string;
  category: string;
  area: string;
  instructions: string;
};

const RecipeCard = ({
  image,
  title,
  category,
  area,
  instructions,
}: RecipeCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer 
                 hover:shadow-xl transition duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-56 object-cover transition duration-300 ${
          hovered ? "opacity-40" : "opacity-100"
        }`}
      />

      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center p-3">
          <p className="bg-white bg-opacity-80 text-gray-800 text-sm p-3 rounded-lg max-h-40 overflow-hidden text-center">
            {instructions.split(".").slice(0, 2).join(".") + "."}
          </p>
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{category}</span>
          <span>{area}</span>
        </div>
        <p className="text-gray-500 text-xs mt-2">⏱️ 30 min</p>
      </div>
    </div>
  );
};

export default RecipeCard;
