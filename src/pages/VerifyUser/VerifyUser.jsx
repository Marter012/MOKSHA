import React, { useState } from "react";
import {
  FoundContainerStyled,
  FoundTextStyled,
} from "../PageNotFound/PageNotFoundStyles";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import LoginInput from "../../components/IU/LoginInput/LoginInput";
import Submit from "../../components/IU/Submit/Submit";
import { Form } from "../Login/LoginStyles";
import { verifyUserInitialValues } from "../../Formik/initialValues";
import { verifyUserSchema } from "../../Formik/validationSchema";
import { verifyUser } from "../../axios/axiosUser";
import { setCurrentUser } from "../../redux/user/userSlice";
import useRedirect from "../../hooks/useRedirect";
import ModalVerifyUser from "../../components/ModalPanel/ModalVerifyUser";
import ModalErrors from "../../components/ModalPanel/ModalErrors";

const VerifyUser = () => {
  
  useRedirect("/products");

  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showMsg, setShowMsg] = useState("");

  const userData = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  return (
    <div>
      <ModalVerifyUser show={show} setShow={setShow} />
      <ModalErrors show={showError} setShow={setShowError} msg={showMsg} />

      <FoundContainerStyled>
        <FoundTextStyled>
          <p>Ingrese el codigo enviado a "{userData.user.email}" </p>
          <Formik
            initialValues={verifyUserInitialValues}
            validationSchema={verifyUserSchema}
            onSubmit={async (values) => {
              const valid = await verifyUser(userData.user.email, values.code);
              if (valid?.codeVerify === 1) {
                setShowError(false);
                const user = { ...userData.user, verifiel: true };
                dispatch(
                  setCurrentUser({
                    ...userData,
                    user,
                  })
                ); 
              }else {
                setShowMsg(valid)
                setShowError(!showError);
                return;
              }
            }}
          >
            <Form>
              <LoginInput
                name="code"
                type="text"
                placeholder="Codigo de verificacion"
              />
              <Submit type="button">Verificar</Submit>
            </Form>
          </Formik>
        </FoundTextStyled>
      </FoundContainerStyled>
    </div>
  );
};

export default VerifyUser;
