
// import React, { useState } from "react";
// import axios from "axios";
// import "./App.css"; // Importing styles

// const App = () => {
//   const [textInput, setTextInput] = useState("");
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null); // For displaying uploaded image
//   const [response, setResponse] = useState("");

//   // Handle text input submission
//   const handleTextSubmit = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/generateListing/generate",
//         { socialMediaText: textInput }
//       );
//       setResponse(res.data.description);
//     } catch (error) {
//       console.error("Error generating listing from text:", error);
//     }
//   };

//   // Handle image upload
//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     setImage(file);

//     // Create a local preview URL for the uploaded image
//     setImagePreview(URL.createObjectURL(file));

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/imageProcess",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//       setResponse(res.data.keywords); // Processed keywords from image
//     } catch (error) {
//       console.error("Error processing image:", error);
//     }
//   };

//   return (
//     <div className="app-container">
//       <header className="app-header">
//         <h1>
//           <span className="shopping-cart-icon">🛒</span>Amazon Listing Generator
//         </h1>
//       </header>

//       <main className="app-main">
//         {/* Left Section */}
//         <div className="left-section">
//           {/* Enter Social Media Content */}
//           <div className="input-box">
//             <h2>Enter Social Media Content</h2>
//             <textarea
//               className="text-input"
//               value={textInput}
//               onChange={(e) => setTextInput(e.target.value)}
//               placeholder="Enter hashtags or product description..."
//             ></textarea>
//           </div>

//           {/* Upload Product Image */}
//           <div className="input-box">
//             <h2>Upload Product Image</h2>
//             <input
//               className="file-input"
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//             />
//             {/* Display the uploaded image */}
//             {imagePreview && (
//               <div className="image-preview">
//                 <img src={imagePreview} alt="Uploaded" />
//               </div>
//             )}
//           </div>

//           {/* Generate Listing Button */}
//           <button className="btn-primary" onClick={handleTextSubmit}>
//             Generate Listing
//           </button>
//         </div>

//         {/* Right Section */}
//         <div className="right-section">
//           {/* Generated Listing */}
//           <div className="output-box">
//             <h2>Generated Listing</h2>
//             {response ? (
//               <div className="listing-section">
//                 <h3>Title</h3>
//                 <p>{textInput}</p>

//                 <h3>Description</h3>
//                 <p>{response.description || "Description will appear here."}</p>

//                 <h3>Key Features</h3>
//                 <ul>
//                   {(response.features || []).map((feature, index) => (
//                     <li key={index}>{feature}</li>
//                   ))}
//                 </ul>

//                 <h3>Keywords</h3>
//                 <div className="keyword-container">
//                   {(response.keywords || []).map((keyword, index) => (
//                     <div className="keyword" key={index}>
//                       {keyword}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <p className="placeholder-text">
//                 Your generated listing will appear here!
//               </p>
//             )}
//           </div>
//         </div>
//       </main>

//       <footer className="app-footer">
//         <p>&copy; 2024 Amazon Listing Generator</p>
//       </footer>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [textInput, setTextInput] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [keyFeatures, setKeyFeatures] = useState([]);
  const [keywords, setKeywords] = useState("");

  // Handle image upload and preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);

    // Create a local preview URL for the uploaded image
    setImagePreview(URL.createObjectURL(file));
  };

  // Handle "Generate Listing" button click
  const handleGenerateListing = async () => {
    if (!image) {
      alert("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("socialMediaText", textInput);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/compare-images",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.matchFound) {
        // Match found: display the matched image's details
        setDescription(response.data.description);
        setKeyFeatures(response.data.keyFeatures);
        setKeywords(response.data.keywords.join(", "));
      } else {
        // No match: set fallback message
        setDescription("No matching image found.");
        setKeyFeatures([]);
        setKeywords("");
      }
    } catch (error) {
      console.error("Error while generating listing:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>
          <span className="shopping-cart-icon">🛒</span>Amazon Listing Generator
        </h1>
      </header>

      <main className="app-main">
        {/* Left Section */}
        <div className="left-section">
          {/* Enter Social Media Content */}
          <div className="input-box">
            <h2>Enter Social Media Content</h2>
            <textarea
              className="text-input"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Enter hashtags or product description..."
            ></textarea>
          </div>

          {/* Upload Product Image */}
          <div className="input-box">
            <h2>Upload Product Image</h2>
            <input
              className="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {/* Display the uploaded image */}
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Uploaded" />
              </div>
            )}
          </div>

          {/* Generate Listing Button */}
          <button className="btn-primary" onClick={handleGenerateListing}>
            Generate Listing
          </button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Generated Listing */}
          <div className="output-box">
            <h2>Generated Listing</h2>
            <div className="listing-section">
              <h3>Title</h3>
              <p>{textInput}</p>

              <h3>Description</h3>
              <p>{description}</p>

              <h3>Key Features</h3>
              <ul>
                {keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3>Keywords</h3>
              <div className="keyword-container">
                {keywords.split(", ").map((keyword, index) => (
                  <div className="keyword" key={index}>
                    {keyword}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Amazon Listing Generator</p>
      </footer>
    </div>
  );
};

export default App;
