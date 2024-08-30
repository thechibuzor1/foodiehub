import React, { useEffect, useState } from "react";
import axios from "axios";
import "./row.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function RowHome({
  name,
  backgroundColor,
  header,
  subHeader,
  iconName,
}: any) {
  const apikey = "d2308e29beb74abd98075418cf1fc2f8";
  const [randomRecipes, setRandomRecipes] = useState([
    {
      title: "Burger",
      id: 433,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1998&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 93,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "A different burger",
      id: 30,
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=1169&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "A kind of different burger",
      id: 90,
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=1022&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "Tasty ass burger ong",
      id: 9,
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=80&w=1115&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "Another mouth watering burger",
      id: 97,
      image:
        "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "An ordinary burger",
      id: 27,
      image:
        "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "A burger",
      id: 91,
      image:
        "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 13,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 43,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 78,
    },
    {
      title: "Another burger",
      id: 33,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readyInMinutes: 45,
      healthScore: 3,
    },
  ]);
  const [showMore, setShowMore] = useState<boolean>(false);

  function toggleContent() {
    setShowMore(!showMore);
  }
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=50&tags=${name}`;
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
        .finally(() => setLoading(false));
    };
    fetchData();
  }, []);

  return (
    <div className="RowHome-container">
      <div className="row-header">
        <FontAwesomeIcon
          className="row-header-icon"
          icon={iconName}
          color="black"
        />
        <h1>{header}</h1>
      </div>

      <h2>{subHeader}</h2>
      <div className="row-container">
        {randomRecipes.map((recipe: any) => (
          <div key={recipe?.id} className={`row-item`}>
            <img loading="lazy" src={recipe?.image} alt={`Slide`} />
            <h1> {recipe?.title}</h1>
            <div className="row-info-align-alt">
              <div className="row-info-align">
                <FontAwesomeIcon
                  className="icon"
                  icon={icon({ name: "clock", style: "regular" })}
                  color="#535353"
                />
                <p>{loading ? <Skeleton /> : recipe?.readyInMinutes} mins</p>
              </div>
              <div className="row-info-align">
                <FontAwesomeIcon
                  className="icon"
                  icon={icon({ name: "hospital", style: "regular" })}
                  color="#535353"
                />
                <h4
                  style={{
                    color:
                      recipe?.healthScore < 30
                        ? "red"
                        : recipe?.healthScore < 75
                        ? "orange"
                        : "green",
                  }}
                >
                  {loading ? <Skeleton /> : recipe?.healthScore}%
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
       
    </div>
  );
}
