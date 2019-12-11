import React from 'react'
import styled from 'styled-components'
import api from '../services/api'

const Document = styled.div`
  position: relative;
  background-color: #FFFFFF;
  padding: 10px;
  width: 350px;
  height: 400px;
  margin: 25px;
  border-radius: 3px;
  box-shadow: 0px 1px 4px 0px;
`
const Title = styled.h4`
  color: #15202b;
  margin-bottom: 15px;
`
const Content = styled.div`
  font-size: 10px;
  color: #263A4D;
  overflow: auto;
  height: 250px;
  word-spacing: 5px;
  line-height: 1rem;
`
const Actions = styled.div`
  display: flex;
  width: 250px;
  height: 40px;
  position: absolute;
  bottom: 10px;
  left: 45px;
  justify-content: space-evenly;
`
const Button = styled.button `
  width: 100px;
  height: 40px;
  border-radius: 2px;
  background: ${props => props.edit ? '#3AC122' : '#D00000'};
  color: #FFF;
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`

const deleteDocument = async (id) => await api.delete(`/documents/${id}`)

export default ({ _id, title, content }) =>
  <Document>
    <Title>{ title }</Title>
    <Content>{ content }</Content>
    <Actions>
      <Button edit>Editar</Button>
      <Button delete onClick={() => deleteDocument(_id)}>Deletar</Button>
    </Actions>
  </Document>
