
// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {
//     const [textInput, setTextInput] = useState("");
//     const [image, setImage] = useState(null);
//     const [response, setResponse] = useState("");

//     const handleTextSubmit = async () => {
//         try {
//             const res = await axios.post("http://localhost:5000/api/generateListing/generate", {
//                 socialMediaText: textInput,
//             });
//             setResponse(res.data.description);
//         } catch (error) {
//             console.error("Error generating listing from text:", error);
//         }
//     };

//     const handleImageUpload = async (event) => {
//         const file = event.target.files[0];
//         setImage(file);

//         const formData = new FormData();
//         formData.append("image", file);

//         try {
//             const res = await axios.post("http://localhost:5000/api/imageProcess", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });
//             setResponse(res.data.keywords); // Processed keywords from image
//         } catch (error) {
//             console.error("Error processing image:", error);
//         }
//     };

//     return (
//         <div>
//             <h1>Amazon Listing Generator</h1>

//             <div>
//                 <h2>Enter Social Media Caption</h2>
//                 <textarea
//                     value={textInput}
//                     onChange={(e) => setTextInput(e.target.value)}
//                     placeholder="Enter hashtags or product description"
//                 ></textarea>
//                 <button onClick={handleTextSubmit}>Generate Listing</button>
//             </div>

//             <div>
//                 <h2>Upload Image</h2>
//                 <input type="file" onChange={handleImageUpload} />
//             </div>

//             <div>
//                 <h2>Generated Listing</h2>
//                 <p>{response}</p>
//             </div>
//         </div>
//     );
// };

// export default App;
import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Importing styles

const App = () => {
  const [textInput, setTextInput] = useState("");
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState("");

  // Handle text input submission
  const handleTextSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/generateListing/generate",
        { socialMediaText: textInput }
      );
      setResponse(res.data.description);
    } catch (error) {
      console.error("Error generating listing from text:", error);
    }
  };

  // Handle image upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setImage(file);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/imageProcess",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResponse(res.data.keywords); // Processed keywords from image
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Amazon Listing Generator</h1>
      </header>

      <main>
        {/* Text Input Section */}
        <section className="input-section">
          <h2>Enter Social Media Caption</h2>
          <textarea
            className="text-input"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Enter hashtags or product description..."
          ></textarea>
          <button className="btn-primary" onClick={handleTextSubmit}>
            Generate Listing
          </button>
        </section>

        {/* Image Upload Section */}
        <section className="input-section">
          <h2>Upload Image</h2>
          <input
            className="file-input"
            type="file"
            onChange={handleImageUpload}
          />
        </section>

        {/* Generated Listing Section */}
        <section className="result-section">
          <h2>Generated Listing</h2>
          {response ? (
            <ul className="listing">
              {response
                .split(", ")
                .map((item, index) => (
                  <li key={index} className="listing-item">
                    {item}
                  </li>
                ))}
            </ul>
          ) : (
            <p className="placeholder-text">
              Your generated listing will appear here!
            </p>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Amazon Listing Generator</p>
      </footer>
    </div>
  );
};

export default App;
