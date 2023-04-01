import React from 'react';
import './App.css';

class App extends React.Component {

  degToRad(deg) {
    return deg*(Math.PI/180)
  }

  getCenter(obj) {
    var centerX = obj.offsetLeft + obj.offsetWidth / 2
    var centerY = obj.offsetTop + obj.offsetHeight / 2
    return {'centerX': centerX, 'centerY': centerY}
  }

  translate (thisCenter, containerCenter, rad) {
      
      var diffX = thisCenter['centerX'] - containerCenter['centerX']
      var diffY = thisCenter['centerY'] - containerCenter['centerY']
      var newX = diffX*Math.cos(rad) - diffY*Math.sin(rad)
      var newY = diffY*Math.cos(rad) + diffX*Math.sin(rad)
      return {
          'newX': newX - diffX,
          'newY': newY - diffY
        }
  }

  rotateImage(n) {

    var img_collection = document.getElementsByTagName('img')
    var deg = document.getElementById('angle').value
    if (img_collection.length%2 === 1) {
        var centerImg = img_collection[Math.floor(img_collection.length/2)]
        var containerCenter = this.getCenter(centerImg)
    }
    else {
        containerCenter = {
            'centerX': img_collection[img_collection.length/2].offsetLeft + img_collection[img_collection.length/2].outerWidth,
            'centerY': img_collection[img_collection.length/2].offsetTop + img_collection[img_collection.length/2].outerHeight
        }
    }

    var rad = this.degToRad(deg)

    for (var i=0; i<img_collection.length; i++) {

        var thisCenter = this.getCenter(img_collection[i])  
        var translatedCenter = this.translate(thisCenter, containerCenter, rad)
        img_collection[i].style.transform = 'translate('+translatedCenter['newX']+'px, '+translatedCenter['newY']+'px) rotate('+deg+'deg)'
    }
  }

  render() {
    return (
      <div className="App">
          <div className="inputTag">
              Enter the angle: <input type="number" name="angle" id="angle"/>
              <button className="button" onClick={() => this.rotateImage(3)}>Rotate</button>
          </div>
          <div className="container" id="rotateThis">
              <div className="row">
                  <div className="column">
                      <img src="https://i.postimg.cc/crtmZTTr/image-part-001.jpg" alt="Part1" id="image1" />
                  </div>
                  <div className="column">
                      <img src="https://i.postimg.cc/CBKG24zM/image-part-002.jpg" alt="Part2" id="image2" />
                  </div>
                  <div className="column">
                      <img src="https://i.postimg.cc/nspY4xxD/image-part-003.jpg" alt="Part3" id="image3" />
                  </div>
              </div>
              <div className="row">
                  <div className="column">
                      <img src="https://i.postimg.cc/5YkBWFCB/image-part-004.jpg" alt="Part4" id="image4" />
                  </div>
                  <div className="column">
                      <img src="https://i.postimg.cc/v4dWyycN/image-part-005.jpg" alt="Part5" id="image5" />
                  </div>
                  <div className="column">
                      <img src="https://i.postimg.cc/YjhNf85b/image-part-006.jpg" alt="Part6" id="image6" />
                  </div>
              </div>
              <div className="row">
                  <div className="column">
                      <img src="https://i.postimg.cc/Mnb1KLBK/image-part-007.jpg" alt="Part7" id="image7" />
                  </div>
                  <div className="column">
                      <img src="https://i.postimg.cc/9r9Gs0F9/image-part-008.jpg" alt="Part8" id="image8" />
                  </div>
                  <div className="column">
                      <img src="https://i.postimg.cc/jCmH8PKK/image-part-009.jpg" alt="Part9" id="image9" />
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
}

export default App;
