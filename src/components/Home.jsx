import React, { useState } from 'react';

export default function ImageUploader() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [sharpness, setSharpness] = useState(0);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file);
    // Function to handle download
    window.open(url);
  };

  const handlePreview = (file) => {
    const url = URL.createObjectURL(file);
    // Function to handle image preview
    setPreviewImage(url);
  };

  const handleClosePreview = () => {
    // Function to close image preview
    setPreviewImage(null);
  };

  const handleBrightnessChange = (event) => {
    // Function to handle brightness change
    setBrightness(event.target.value);
  };

  const handleSharpnessChange = (event) => {
    // Function to handle sharpness change
    setSharpness(event.target.value);
  };

  return (
    <div className='container'>
        <nav
            class="navbar navbar-expand-sm navbar-light bg-light"
        >
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button
                    class="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="#" aria-current="page"
                                >Home
                                <span class="visually-hidden">(current)</span></a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >Dropdown</a
                            >
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownId"
                            >
                                <a class="dropdown-item" href="#"
                                    >Action 1</a
                                >
                                <a class="dropdown-item" href="#"
                                    >Action 2</a
                                >
                            </div>
                        </li>
                    </ul>
                    <form class="d-flex my-2 my-lg-0">
                        <input
                            class="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                        />
                        <button
                            class="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        
      <h2 className='mt-3'>Image Uploader</h2>
      <input type="file" onChange={handleImageChange} multiple className='mt-3 mb-5'/>
      <div className="row">
        {selectedImages.map((image, index) => (
          <div key={index} className="col-sm-3">
            <div className="card fit-content">
              <div className="card-body">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Image ${index + 1}`}
                  height={200}
                  style={{ cursor: 'pointer', filter: `brightness(${brightness}%) contrast(${sharpness}%)` }}
                  onClick={() => handlePreview(image)}
                />
              </div>
              <div>
                <label htmlFor="brightness">Brightness:</label>
                <input type="range" id="brightness" min="0" max="200" value={brightness} onChange={handleBrightnessChange} />
              </div>
              <div>
                <label htmlFor="sharpness">Sharpness:</label>
                <input type="range" id="sharpness" min="-100" max="100" value={sharpness} onChange={handleSharpnessChange} />
              </div>
              <button onClick={() => handleDownload(image)}>Download</button>
            </div>
          </div>
        ))}
      </div>
      {previewImage && (
        <div className="modal">
          <div className="modal-content"
          >
            <span className="close" onClick={handleClosePreview}>&times;</span>
            <img src={previewImage} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
}
