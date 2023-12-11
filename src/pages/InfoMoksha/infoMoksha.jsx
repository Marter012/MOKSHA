import React, { useState } from "react";
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
import Loader from "../../components/IU/Loader/Loader";
import ModalGeneric from "../../components/ModalPanel/ModalGeneric";

const InfoMoksha = () => {
  const [show, setShow] = useState(false);

  return (
    <InfoContainerStyles>
      <img
        src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1696888593/Moksha/r24ntoenirzbsn83gaw3.jpg"
        alt=""
      />
      <ModalGeneric
        redirecTo={"infoMoksha"}
        show={show}
        setShow={setShow}
        msg={"Mensaje enviado con exito."}
      />

      <InformationContainer>
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
          onSubmit={({ resetForm }) => {
            resetForm();
            setShow(!show);
          }}
        >
          {({ isSubmitting }) => (
            <FormInfo>
              <LoginInput
                name="name"
                type="text"
                placeholder="Nombre y Apellido"
              />
              <LoginInput name="email" type="email" placeholder="Email" />
              <LoginInput
                name="textData"
                type="text"
                placeholder="Tu consulta."
              />
              <Submit type="button" onClick={() => ""} bg_color="#7EC2BF">
                {isSubmitting ? <Loader /> : "Enviar"}
              </Submit>
            </FormInfo>
          )}
        </Formik>
      </FormContacto>
    </InfoContainerStyles>
  );
};

export default InfoMoksha;
