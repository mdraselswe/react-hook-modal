import React from 'react'
import Modal from './Modal'
import useModal from './useModal'

const Parent = ({onClose}) => {

  let { open: parentOpen, toggleOpen: parentToggle, onClose: parentClose } = useModal()

//   let { toggleOpen } = useModal()

  //   const parenttoggleOpen  = (child) => {

  //     toggleOpen(child)
  //     toggleOpen()
  //   }

  return (
    <div>
     <Modal open={parentOpen} onClose={parentClose} toggleOpen={parentToggle}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et veritatis omnis explicabo voluptas eum expedita, dignissimos non deserunt cum vel.</p>
    </Modal>

      <button onClick={() => parentToggle()}>parent button</button>
      <h3>Parent header</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, ea.</p> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit
        unde nesciunt beatae eos ut magnam adipisci totam sapiente reprehenderit
        officia fugit cupiditate repudiandae at fugiat perferendis porro placeat
        sunt natus, labore alias mollitia explicabo? At facilis hic, maxime illo
        sint quidem voluptates natus nisi laboriosam unde aspernatur sapiente
        odit inventore, quaerat voluptate cum obcaecati repellendus libero,
        quisquam consequuntur tempora ut reiciendis laudantium temporibus! Eius
        delectus mollitia vel, tempore neque natus veritatis vero unde ullam eos
        numquam voluptate quas id sed totam quos! Ducimus optio animi porro, eum
        autem modi, iste voluptatum, quod mollitia necessitatibus sit excepturi
        pariatur at corporis magni illo debitis adipisci? Accusantium eos,
        voluptates aliquam quis odit dolore ipsam maiores in ab, ea porro
        pariatur nam! Alias iure iste nobis corporis. Impedit, facere, dolorem
        delectus non, porro sit eaque dignissimos ipsa nulla obcaecati quos
        labore. Quasi illum cupiditate distinctio molestias obcaecati, ea
        quaerat facere assumenda ipsa aut magni dolores nesciunt alias maxime
        dolorum consectetur corporis optio similique laudantium libero adipisci
        deleniti. Ex, eum quam autem voluptatum earum magnam! Quis dolores cum
        iusto excepturi quia ullam nostrum qui placeat sed maxime. Quae, aut
        ratione provident porro culpa commodi vel tempore! Corrupti tempore
        temporibus ducimus assumenda ea voluptate deserunt.
      </p>
    </div>
  )
}

const Component = () => {
  let { open, toggleOpen, onClose } = useModal()

const toggleOpens = () => {
    toggleOpen()
}

  return (
    <>

    <Modal open={open} toggleOpen={toggleOpens}>
        <Parent onClose={onClose} />
        {/* Hello */}
    </Modal>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quidem
        asperiores?
      </p>
      <button
        className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
        onClick={() => toggleOpens()}
      >
        open this modal!
      </button>
    </>
  )
}

export default Component
