const socket = io('localhost:3000');
const chatBox = document.getElementById('chatBox')
const nameInput = document.getElementById('nameInput')
const messageInput = document.getElementById('messageInput')
const submitButton = document.getElementById('submitButton')

function sendMsg() {
    socket.emit('sendMsg', { name: nameInput.value, msg: messageInput.value })
    messageInput.value = ""
}

socket.on('getMsg', data => {
    var div = document.createElement('div')
    div.classList.add('message')
    div.innerText = `${data.name} : ${data.msg}`
    chatBox.appendChild(div)
})
messageInput.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) sendMsg()
})
submitButton.addEventListener('click', () => { sendMsg() })