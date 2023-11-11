
import { useNavigate } from 'react-router-dom';
import Button from '../../components/IU/Button/Button';
import {
  FoundContainerStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from './PageNotFoundStyles';

const PageNotFound = () => {

  const navigate = useNavigate();
  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
          <FoundTitleStyled>404 Error</FoundTitleStyled>
          <p>Pagina no encontrada.</p>
          <Button onClick={()=> navigate("/")} bg_color={"red"}>Volver</Button>
        </FoundTextStyled>
        
        <img
          src='https://res.cloudinary.com/dsgcmsjv4/image/upload/v1696872456/Moksha/mfmsclrpd5503ztuygvx.jpg'
          alt=''
          className='imgNotFound'
        />
      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;
