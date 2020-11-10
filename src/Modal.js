import React from 'react'
import ReactDOM from 'react-dom'

// scroll = 'body' || scroll = 'paper'
const Modal = ({
  open,
  toggleOpen,
  children,
  scrollType = 'body',
  disableBackdropClick = false,
  cross = true,
  maxWidth = 400,
  fullScreen = false,
}) => {
  const handleModal = (e) => {
    // When disableBackdropClick  is true the background is not closed
    if (!disableBackdropClick) {
      e.stopPropagation()
      toggleOpen()
    }
  }

  const handleModalContainerClassName = () => {
    let names = ''

    if (scrollType === 'paper' && !fullScreen) {
      names = `${names} paper-scroll`
    }

    if (fullScreen) {
      names = `${names} full-screen`
    }

    return names
  }

  if (open) {
    return ReactDOM.createPortal(
      <div
        className={`modal fade-in ${
          scrollType === 'body' ? 'modal__scroll' : ''
        }`}
        onClick={handleModal}
      >
        <div
          style={{ height: fullScreen ? '100%' : 'initial' }}
          className="flex-row-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: !fullScreen && `${maxWidth}px` }}
            className={`modal-container ${handleModalContainerClassName()}`}
          >
            {cross && (
              <button className="modal-close" onClick={() => toggleOpen()}>
                &times;
              </button>
            )}
            <p>{children}</p>
          </div>
        </div>
      </div>,
      document.querySelector('#modal-root'),
    )
  } else return null
}

export default Modal
