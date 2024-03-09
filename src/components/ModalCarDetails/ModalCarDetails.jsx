import { useEffect } from 'react'
import Details from 'components/CarsPage/Details/Details';
import { Backdrop, CloseBtn, Modal } from './ModalCarDetails.styled'
import sprite from "icons/icons.svg"

const ModalCarDetails = ({setShowModal, car, showModal}) => {

useEffect(() => {
  if(showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return () => {
    document.body.style.overflow = "auto";
  }
}, [showModal])

 useEffect(() => {

    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
          setShowModal(false);
        }
      };

      const handleOutsideClick = (e) => {
        e.target.id === 'backdrop' && setShowModal(false);
      };

        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleOutsideClick);

        return () => {
          document.removeEventListener('keydown', handleKeyPress);
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [setShowModal]);

  return (
    <Backdrop id='backdrop'>
        <Modal>
            <CloseBtn type="button" onClick={() => setShowModal(false)}>
                <svg width={24} height={24}>
                    <use xlinkHref={`${sprite}#icon-close`}></use>
                </svg>
            </CloseBtn>
            <div>
                <Details car={car}/>
            </div>
        </Modal>
    </Backdrop>
  )
}

export default ModalCarDetails