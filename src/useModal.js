import { useState } from 'react'

const useModal = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  const onClose = () => setOpen(false)

  return { open, toggleOpen, onClose }
}

export default useModal
