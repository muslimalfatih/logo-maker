import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export function bounceText() {
  gsap.to(".maker-container .char", {
    duration: 0.3,
    y: 10,
    ease: "power3.out",
    stagger: {
      yoyo: true,
      each: 0.1,
      from: "start",
      axis: "x",
      amount: 0.3,
    }
  })
}

export function iterateDraggableText(el, splitText) {
  for(let i = 0; i < splitText.length; i++) {
    el.innerHTML += `<span class='char'>${splitText[i]}</span>`
  }

  Draggable.create('.char', {
    bounds: el
  })
}
export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function debounce(callback, milliseconds) {
  let timeout;

  return (argument) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(argument), milliseconds);
  }
}

export function modalHandler(el, val) {
  if (val) {
    fadeIn(modal);
  } else {
    fadeOut(modal);
    while (el.hasChildNodes()) {
      el.removeChild(el.firstChild);
    }
  }
}

export function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

export function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "flex";
  (function fade() {
    let val = parseFloat(el.style.opacity);
    if (!((val += 0.2) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}