import React from 'react'

export default () => {
  const [open, setOpen] = React.useState(false)

  const toggleOpen = () => setOpen(!open)

  const onClose = () => setOpen(false)

  return { open, toggleOpen, onClose }
}
