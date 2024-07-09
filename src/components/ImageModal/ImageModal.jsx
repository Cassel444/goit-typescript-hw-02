import css from "./ImageModal.module.css";
import ReactModal from "react-modal";

function ImageModal({ isOpen, onClose, photo: { description, urls } }) {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      onRequestClose={onClose}
      className={css.modalOverlay}
    >
      <div className={css.modalBoxOverlay}>
        <img className={css.imageModal} src={urls.regular} alt={description} />
        <div className={css.textContainer}>
          <h2 className={css.modalText}>{description}</h2>
        </div>
      </div>
    </ReactModal>
  );
}
export default ImageModal;
