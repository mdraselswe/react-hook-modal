import React from 'react'
import Modal from './Modal'
import useModal from './useModal'

const Child = () => {
  let { open: childOpen, toggleOpen: childToggle } = useModal()

  return (
    <div>
      <Modal open={childOpen} toggleOpen={childToggle} maxWidth={800}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et veritatis
          omnis explicabo voluptas eum expedita, dignissimos non deserunt cum
          vel.
        </p>
      </Modal>

      <button
        onClick={childToggle}
        style={{
          backgroundColor: 'lightblue',
          padding: 20,
        }}
      >
        Open child modal!
      </button>
      <h3>child header</h3>
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
  let { open, toggleOpen } = useModal()

  const toggleOpens = () => {
    toggleOpen()
  }

  return (
    <>
      <Modal open={open} toggleOpen={toggleOpens}>
        <Child />
      </Modal>

      <h1>Hello, Welcome to Modal Testing Screen </h1>
      <button
        onClick={() => toggleOpens()}
        style={{
          backgroundColor: 'salmon',
          padding: 20,
        }}
      >
        open this modal!
      </button>
    </>
  )
}

export default Component
