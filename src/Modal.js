import React from 'react'
import ReactDOM from 'react-dom'

/**
 * NOTE:: props definition
 * two types scroll,
 *    scroll = 'body' (scroll fullscreen)  ||
 *    scroll = 'paper' (scroll paper)
 *    open = true/false (If true, show modal)
 *    toggleOpen = function (modal show/hide)
 *    children (modal content)
 *    disableBackdropClick = true/false (If true, clicking the backdrop will not fire)
 *    close = true/false (If false, modal closing button will not be shown)
 *    maxWidth = any amount of number, like 400 (modal maximum width)
 *    fullScreen = true/false (If true, modal will be full screen)
 **/

const Modal = ({
  open,
  onClose,
  toggleOpen,
  children,
  scrollType = 'body',
  disableBackdropClick = false,
  close = true,
  maxWidth = 400,
  fullScreen = false,
}) => {
  const handleModal = (e) => {
    if (!disableBackdropClick) {
      e.stopPropagation()
      toggleOpen()
    }
  }

  const handleModalClassName = () => {
    let classes = ''

    if (scrollType === 'paper' && !fullScreen) {
      classes = `${classes} paper-scroll`
    }

    if (fullScreen) {
      classes = `${classes} full-screen`
    }

    return classes
  }

  const modalClassName = handleModalClassName()

  if (open) {
    return ReactDOM.createPortal(
      <div
        className={`modal-container ${
          scrollType === 'body' ? 'body-scroll' : ''
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
            className={`modal ${modalClassName}`}
          >
            {close && (
              <button className="modal-close" onClick={ () => toggleOpen()}>
                &times;
              </button>
            )}
            {children}
          </div>
        </div>
      </div>,
      document.querySelector('#modal-root'),
    )
  } else return null
}

export default Modal
