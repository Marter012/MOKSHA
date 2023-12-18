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
import ModalErrors from "../../components/ModalPanel/ModalErrors";
import ModalGeneric from "../../components/ModalPanel/ModalGeneric";
import Loader from "../../components/IU/Loader/Loader";

const VerifyUser = () => {

  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showMsg, setShowMsg] = useState("");

  const userData = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  return (
    <div>
      <ModalGeneric
        show={show}
        setShow={setShow}
        msg={"Verificacion Exitosa, ya podes realizar compras."}
        redirecTo={"products"}
      />
      <ModalErrors show={showError} setShow={setShowError} msg={showMsg} />

      <FoundContainerStyled>
        <FoundTextStyled>
          <p>Ingrese el codigo enviado a "{userData?.user.email}" </p>
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
                setShow(!show)
                setShowMsg("");
                console.log("hola")
              } else {
                setShowMsg(valid);
                setShowError(!showError);
                return;
              }
            }}
          >
            {({isSubmitting})=>(
              <Form>
              <LoginInput
                name="code"
                type="text"
                placeholder="Codigo de verificacion"
              />
              <Submit type="button">{isSubmitting ? <Loader/> : "Verificar"}</Submit>
            </Form>
            )}
          </Formik>
        </FoundTextStyled>
      </FoundContainerStyled>
    </div>
  );
};

export default VerifyUser;
