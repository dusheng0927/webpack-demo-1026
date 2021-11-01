import Icon from '../dog.jpg'
import '../style.css'

const loadImage = () => {
  const img = new Image()
  img.src = Icon
  img.classList = ['img']

  document.body.appendChild(img)
}
export default loadImage