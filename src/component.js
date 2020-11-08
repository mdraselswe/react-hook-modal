import React from 'react'
import { ModalContext } from './modalContext'

const Child = () => {
  let { handleModal } = React.useContext(ModalContext)

  return (
    <div>
      <button onClick={() => handleModal('Parent')}>Child button</button>
      <h3>Child header</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, ea.</p>
    </div>
  )
}

const Parent = () => {
  let { handleModal } = React.useContext(ModalContext)

  //   const parentHandleModal  = (child) => {

  //     handleModal(child)
  //     handleModal()
  //   }

  return (
    <div>
      {/* <button onClick={() => parentHandleModal(<Child />)}>
        parent button
      </button> */}
      <button onClick={() => handleModal()}>parent button</button>
      <h3>Parent header</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, ea.</p>
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
  let { handleModal } = React.useContext(ModalContext)

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quidem
        asperiores?
      </p>
      <button
        className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
        onClick={() => handleModal(<Parent />)}
      >
        open this modal!
      </button>
    </>
  )
}

export default Component