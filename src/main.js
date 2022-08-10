
import domtoimage from 'dom-to-image';
import { 
  bounceText, 
  debounce,
  iterateDraggableText,
  removeAllChildNodes,
  modalHandler,
  fadeIn
} from "./helper"

const inputName = document.getElementById("inputName")
const inputRange = document.getElementById("inputRange")
const rangeValue = document.getElementById("rangeValue")
const textColor = document.getElementById("textColor")
const saveImage = document.getElementById("saveImage")
const makerContainer = document.querySelector(".maker-container")
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal")
const modalContent = document.getElementById("modalContent")

let defaultLetter = "Maker"
let splitText

window.addEventListener('load', () => {
  splitText = defaultLetter.split("")

  iterateDraggableText(makerContainer, splitText)
  bounceText()
})

inputName.addEventListener('input', debounce((e) => {
  removeAllChildNodes(makerContainer)
  defaultLetter = e.target.value
  splitText = defaultLetter.split("")

  iterateDraggableText(makerContainer, splitText)
  bounceText()
}, 500))

inputRange.addEventListener('change', (e) => {
  const fontSize = e.target.value

  for(let i = 0; splitText.length; i++) {
    makerContainer.querySelectorAll('.char')[i].style.fontSize = fontSize + "px"
    rangeValue.innerText = fontSize + "px"
  }
})

saveImage.addEventListener('click', () => {
  fadeIn(modal, "flex")
  domtoimage.toPng(makerContainer)
    .then(function (dataUrl) {
      let img = new Image();
      img.src = dataUrl;
      modalContent.appendChild(img);
    })
    .catch(function (error) {
      console.error('Oops, something went wrong!', error);
    });
})

closeModal.addEventListener('click', (e) => {
  modalHandler(modalContent, e.target.value)
})

for (let i = 0; i < textColor.children.length; i++) {
  textColor.children[i].onclick = function(e) {
    const textColor = e.target.style.background

    for(let i = 0; i < splitText.length; i++) {
      makerContainer.querySelectorAll('.char')[i].style.color = textColor
    }
  }
}

