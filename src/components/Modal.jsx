import React, { useState } from 'react'
import styled from 'styled-components'
import api from '../services/api'

const Modal = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  align-items: center;
  justify-content: center;
`
const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFF;
  width: 300px;
  height: 400px;
`
const CloseButton = styled.button`
  position: absolute;
  font-size: 18px;
  color: #d00000FF;
  padding: 10px;
  right: 3px;
  top: 5px;
  transition: 0.3s;
  &:hover {
    color: #d00000A1;
    transform: rotateY(180deg);
  }
`
const Input = styled.input`
  background: #00000033;
  height: 40px;
  width: 80%;
  margin-bottom: 10px;
`
const TextLabel = styled.label`
  font-size: 12px;
  align-self: flex-start;
  margin-left: 30px;
`
const FileUpload = styled.input`
  opacity: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`
const FileLabel = styled.label`
  color: #0D5D87;
  cursor: pointer;
  transition: 0.3s;
  height: 25px;
  &:hover {
    color: #0D5D87A5;
    border-bottom: 1px solid #0D5D87A5;
  }
`
const Submit = styled.button`
  position: absolute;
  color: #FFF;
  font-weight: 700;
  font-size: 16px;
  bottom: 50px;
  background: #3BB449;
  height: 40px;
  width: 70px;
  border-radius: 3px;
  transition: 0.3s;
  &:hover {
    background: #3BB449A5;
  }
`

export default ({ show, toggle, history }) => {
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')
  const [ file, setFile ] = useState(null)

  const closeModal = () => {
    setTitle('')
    setContent('')
    setFile(null)

    toggle(false)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const data = new FormData()

    data.append('title', title)
    data.append('content', content)
    data.append('document', file)

    await api.post('documents', data)

    closeModal()
  }

  return (
    <Modal show={show}>
      <Form id="new-document">
        <CloseButton onClick={closeModal}>X</CloseButton>

        <TextLabel htmlFor="title"> Título: </TextLabel>
        <Input id="title" name="title" type="text" required onChange={(e) => setTitle(e.target.value)} value={title}/>

        <TextLabel htmlFor="content"> Conteúdo: </TextLabel>
        <Input id="content" name="content" type="textarea" onChange={(e) => setContent(e.target.value)} value={content}/>

        <FileLabel htmlFor="file">{ file ? file.name : 'Selecionar PDF'}</FileLabel>
        <FileUpload id="file" name="file" type="file" onChange={(e) => setFile(e.target.files[0])}/>

        <Submit type="submit" onClick={handleSubmit}>Salvar</Submit>
      </Form>
    </Modal>
  )
}
