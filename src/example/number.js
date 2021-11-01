function number () {
  const app = document.getElementById('app')
  const div = document.createElement('div')
  div.innerText = 1000
  app.appendChild(div)
}

export default number