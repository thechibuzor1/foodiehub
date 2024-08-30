import React, { useEffect, useState } from "react";
import "./Slider.css";
import { cuisines_images, diet_categories, intolerances } from "../../contants";

export default function Slider() {
  const [data, setData] = useState(cuisines_images);
  const [active, setActive] = useState(data[0]);
  const [activeSection, setActiveSection] = useState<string>("Cuisines");
  const sections = ["Cuisines", "Diets", "Intolerances"];
  const itemStyle = {
    background: `linear-gradient(to right, rgb(0 0 0 /0.7), rgb(0 0 0 / 0)), url(${active.image}) center/contain`,
  };

  useEffect(() => {
    switch (activeSection) {
      case "Cuisines": {
        setActive(cuisines_images[0]);
        setData(cuisines_images);
        break;
      }
      case "Diets": {
        setData(diet_categories);
        setActive(diet_categories[0]);
        break;
      }

      case "Intolerances": {
        setData(intolerances);
        setActive(intolerances[0]);
        break;
      }

      default:
        setData(cuisines_images);
    }
  }, [activeSection, data]);

  return (
    <div className="sliderMain" style={itemStyle}>
      <div className="top-buttons">
        {sections.map((item, index) => (
          <h2
            className={`sectionBtn ${activeSection === item ? "active" : ""} `}
            onClick={() => setActiveSection(item)}
          >
            {item}
          </h2>
        ))}
      </div>

      <div className="slider-Body">
        <div className="slider-squares-con">
         
          <div className="sliderMainTextCon">
            <h1>{active.name}</h1>
          </div>
          {data.map((recipe: any, index) => (
            <div
              onClick={() => {
                setActive(recipe);
              }}
              key={index}
              className={`slider-squares ${
                recipe.name === active.name ? "active" : ""
              }`}
            >
              <img loading="lazy" src={recipe.image} alt={`img`} />
              <p>{recipe.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
