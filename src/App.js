import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  rotateImage(n) {
  }

  render() {
    return (
      <div className="App">
          <div className="inputTag">
              Enter the angle: <input type="number" name="angle" id="angle"/>
              <button className="button" onClick={() => this.rotateImage(3)}>Rotate</button>
          </div>
          <div className="container">
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
