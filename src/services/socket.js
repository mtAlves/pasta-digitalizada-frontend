import io from 'socket.io-client'
console.log(process.env.REACT_APP_API)
const socket = io(process.env.REACT_APP_API || 'http://localhost:3333')

export default socket
