import React from 'react'
import useModal from './useModal'
import Modal from './Modal'

const ModalContext = React.createContext()

const ModalProvider = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal()

  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
