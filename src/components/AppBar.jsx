import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'

const AppBar = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1789FC;
  width: 100%;
  height: 70px;
  box-shadow: 0px 2px 10px 0px #000;
`
const AddDocument = styled.button`
  padding: 10px;
  color: #000;
  height: 50px;
  font-size: 28px;
  background: #FFF;
  border-radius: 3px;
  transition: 0.3s;
  &:hover {
    height: 45px;
    box-shadow: 0px 1px 2px 0px #000;
  }
`

export default () => {
  const [ showModal, toggleModal ] = useState(false)

  return (
    <AppBar>
      <AddDocument onClick={() => toggleModal(!showModal)}>
        Adicionar Documento
      </AddDocument>

      <Modal show={showModal} toggle={toggleModal}/>
    </AppBar>
  )
}
