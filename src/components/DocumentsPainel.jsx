import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Document from './Document'
import api from '../services/api'
import socket from '../services/socket'

const DocumentsPainel = styled.section`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 45px;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  background: #D5DADE;
`

const getAllDocuments = async () => {
  const { data } = await api.get('/documents')
  return data
}

export default () => {
  const [ documents, setDocuments ] = useState([])

  useEffect(() => {
    getAllDocuments().then(setDocuments)
  }, [])

  useEffect(() => {
    socket.on('create', (newDocument) => setDocuments(documents.concat(newDocument)))
    socket.on('delete', (deleted) => setDocuments(documents.filter(document => document._id !== deleted._id)))
  })

  return (
    <DocumentsPainel>
      { documents.map(document => <Document key={document._id} _id ={document._id} title={document.title} content={document.content}/>) }
    </DocumentsPainel>
  )
}
