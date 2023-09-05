var myDraggable = Draggable.create("#dragme", {
  type: 'x',        // Limit dragging to the horizontal axis.
  bounds: "#container",  // Restrict dragging within the element with the ID "container".
});

const checkOverlap = () => {
  const div1 = document.querySelector(".end");
  const div2 = document.getElementById('dragme');
  const rect1 = div1.getBoundingClientRect();
  const rect2 = div2.getBoundingClientRect();
  
  if (rect1.left < rect2.right) {
      document.querySelector("#video1").style.opacity = 0;
      document.querySelector("i").style.opacity = 0;
      document.querySelector(".on-cir").style.backgroundColor = "black";
  } else {
      document.querySelector("#video1").style.opacity = 1;
      document.querySelector("i").style.opacity = 1;
      document.querySelector(".on-cir").style.backgroundColor = "orange";
  }
};
window.addEventListener('mousemove', checkOverlap);
