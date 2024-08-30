import React, { useEffect, useState } from "react";
import "./StartOff.css";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function StartOff() {
  const apikey = "d2308e29beb74abd98075418cf1fc2f8";
  const [loading, setLoading] = useState<boolean>(false);
  const [randomRecipes, setRandomRecipes] = useState([
    {
      title: "Burger",
      id: 433,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1998&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "A different burger",
      id: 30,
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=1169&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "A kind of different burger",
      id: 90,
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=1022&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Tasty ass burger ong",
      id: 9,
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=80&w=1115&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Another mouth watering burger",
      id: 97,
      image:
        "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "An ordinary burger",
      id: 27,
      image:
        "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "A burger",
      id: 91,
      image:
        "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=7`;
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      return axios
        .get(url)
        .then((response) => {
          setRandomRecipes(response.data?.recipes);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="startOff-container">
      <h1> Let's get you started with these</h1>
      <h2>Some random fun recipes to begin with</h2>
      <div className="grid-container">
        {randomRecipes.map((recipe: any, index) => (
          <div
            key={recipe?.id}
            className={`box box-${index % 3 === 0 ? "large" : "small"}`}
          >
            {loading ? (
              <Skeleton
                className={`box box-${index % 3 === 0 ? "large" : "small"}`}
              />
            ) : (
              <img loading="lazy" src={recipe?.image} alt={`img`} />
            )}

            <p>{loading ? <Skeleton /> : recipe?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
