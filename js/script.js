//Recieves the obj (button are sent with this, obj passed in )
//Then the member value is then extracted 
function goToFile(path){
  location.href = path.value;
};

function goToLink(link){
 
    console.log(link.value);
    window.open(link.value);
};

var addZoom = target => {
    // (A) get container and image source
    let container = document.getElementById(target),
        imgsrc = container.currentStyle || window.getComputedStyle(container, false);
        imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, "");
   
    // (B) LOAD IMAGE + ATTACH ZOOM
    let img = new Image();
    img.src = imgsrc;
    img.onload = () => {
      // (B1) CALCULATE ZOOM RATIO
      let ratio = img.naturalHeight / img.naturalWidth,
          percentage = ratio * 100 + "%";
   
      // (B2) ATTACH ZOOM ON MOUSE MOVE
      container.onmousemove = e => {
        let rect = e.target.getBoundingClientRect(),
            xPos = e.clientX - rect.left,
            yPos = e.clientY - rect.top,
            xPercent = xPos / (container.clientWidth / 80) + "%",
            yPercent = yPos / ((container.clientWidth * ratio) / 100) + "%";
   
        Object.assign(container.style, {
          backgroundPosition: xPercent + " " + yPercent,
          backgroundSize: img.naturalWidth + "px"
        });
      };
   
      // (B3) RESET ZOOM ON MOUSE LEAVE
      container.onmouseleave = e => {
        Object.assign(container.style, {
          backgroundPosition: "center",
          backgroundSize: "cover"
        });
      };
    }
  };
   
  // (C) ATTACH FOLLOW ZOOM
  window.onload = () => addZoom("zoomC");