import React from "react";
import {
  FormContacto,
  FormInfo,
  InfoContainerStyles,
  InformationContainer,
} from "./infoMokshaStyles";
import { Formik } from "formik";
import LoginInput from "../../components/IU/LoginInput/LoginInput";
import { contactoInitialValues } from "../../Formik/initialValues";
import { contactoValidationSchema } from "../../Formik/validationSchema";
import Submit from "../../components/IU/Submit/Submit";

const InfoMoksha = () => {
  return (
    <InfoContainerStyles>
      <InformationContainer>
        <img
          src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1696889359/Moksha/tash47bkjazliqz2exei.webp"
          alt=""
        />
        <div>
          <p>¿Que es MOKSHA?</p>
          <span>
            Moksha nace en pandemia, en plena búsqueda para generar nuevos
            ingresos y sólo sabiendo que mi esencia estaría allí. Moksha es una
            palabra hindú con un significado hermoso: es la liberación del alma
            de todos los karmas. La verdadera libertad del alma! Y llegó justo
            después de un proceso personal valorando la vida, sentí que
            representaba perfectamente ese presente. Libertad personal,
            creativa, artística. Siempre un alma libre.
          </span>
        </div>
      </InformationContainer>
      <FormContacto>
        <h3>Comunicate con nosotros.</h3>
        <Formik
          initialValues={contactoInitialValues}
          validationSchema={contactoValidationSchema}
          onSubmit={(values,{resetForm}) => {resetForm();alert("Mensaje Enviado")}}
        >
          <FormInfo>
            <LoginInput name="name" type="text" placeholder="Nombre y Apellido"  />
            <LoginInput name="email" type="email" placeholder="Email"  />
            <LoginInput name="textData" type="text" placeholder="Tu consulta."  />
            <Submit type="button" onClick={()=>""} bg_color="#7EC2BF"  >Enviar</Submit>
          </FormInfo>
        </Formik>
      </FormContacto>
    </InfoContainerStyles>
  );
};

export default InfoMoksha;
