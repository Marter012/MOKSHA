import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  DescriptionContainer,
  HomeContainerStyles,
  SectionSlider,
  SliderInfo,
  SliderInfoButtons,
} from "./HomeStyles";
import Hero from "../../components/Hero/Hero";
import { Slider } from "../../components/Slider/Slider";
import { ButtonStyled } from "../../components/IU/Button/ButtonStyled";
import { selectCategory } from "../../redux/categories/categoriesSlice";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <HomeContainerStyles>
      <Hero />
      <DescriptionContainer>
        <section>
          <div>
            <img src="" alt="" />
            <p>DURABILIDAD</p>
            <span>
              Nuestros mates estan elaborados con materia prima de primera
              índole, garantizando una mejor durabilidad y mayor calidad.
            </span>
          </div>
        </section>
        <section>
          <div>
            <img src="" alt="" />
            <p>LIBRE EXPRESION</p>
            <span>
              Si queres mates personalizados, no busques mas! <br/> Trabajamos mates
              prediseñados con posibilidad de darle un toque personal.
            </span>
          </div>
        </section>
      </DescriptionContainer>
      <SectionSlider>
        <Slider />
        <SliderInfo>
          <div>
            <h2>¿Que producto te interesa conocer?</h2>
            <p>
            Podes encontrar tu set matero perfecto, para disfrutar y/o compartir esta tradicion que tanto nos acompaña.
            </p>
          </div>
          <SliderInfoButtons>
            <ButtonStyled
              whileTap={{ scale: 0.5 }}
              bg_color="#154C40"
              padding_set="1rem"
              color="white"
              onClick={() => {
                navigate("/products");
                dispatch(selectCategory("mates"));
              }}
            >
              Mates
            </ButtonStyled>
            <ButtonStyled
              whileTap={{ scale: 0.5 }}
              bg_color="#154C40"
              color="white"
              onClick={() => {
                navigate("/products");
                dispatch(selectCategory("yerbas"));
              }}
            >
              Yerbas
            </ButtonStyled>
            <ButtonStyled
              whileTap={{ scale: 0.5 }}
              bg_color="#154C40"
              color="white"
              onClick={() => {
                navigate("/products");
                dispatch(selectCategory("bombillas"));
              }}
            >
              Bombillas
            </ButtonStyled>
          </SliderInfoButtons>
        </SliderInfo>
      </SectionSlider>
    </HomeContainerStyles>
  );
};

export default Home;
