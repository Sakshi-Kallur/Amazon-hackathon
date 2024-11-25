# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This project allows users to upload images and input social media content to dynamically generate listings. It includes both a React frontend and an Express backend.

Prerequisites
Ensure the following are installed on your system:

Node.js (v16 or later)
npm (Node Package Manager, included with Node.js)
Installation
1. Clone the repository
bash
Copy code
git clone https://github.com/your-repo-name.git
cd your-repo-name
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
The following packages are installed for the backend:

express: Web server framework
cors: To enable Cross-Origin Resource Sharing
multer: Middleware for handling file uploads
sharp: For image resizing and comparison
fs and path: Built-in Node.js modules for file system and path handling
Start the backend server:

bash
Copy code
node server.js
The backend will start on http://localhost:5000.

Ensure the images folder is populated with images to match against uploaded images.

Frontend Setup

Navigate to the frontend directory:
bash
Copy code
cd frontend

Install dependencies:
bash
Copy code
npm install
The following packages are installed for the frontend:

react: For building user interfaces
react-dom: To render React components to the DOM
axios: To handle HTTP requests between the frontend and backend

Start the React development server:

bash
Copy code
npm start
The frontend will start on http://localhost:3000.

Running the Application
Start the backend server as described above.
Start the frontend development server.
Open your browser and go to http://localhost:3000.

Usage
Input Box: Enter your social media content in the provided input box.
Upload Image: Upload an image 
Generate Listing Button: After inputting your content and uploading an image, click this button to process the image and fetch relevant details

Folder Structure
Frontend: Contains React files for the user interface.
Backend: Contains the Express server and API logic.
Uploads: Temporary folder where uploaded images are stored.

Troubleshooting
CORS Issues: Ensure the backend server has CORS enabled using the cors middleware.
Frontend Errors: Use the browser's developer console to view errors.
Port Conflicts: Ensure the backend is running on port 5000 and the frontend is running on port 3000. Modify if necessary in the server.js and React package.json files.

Additional Notes
Frontend Dependencies: Installed using npm install in the frontend folder.
Backend Dependencies: Installed using npm install in the backend folder.

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
