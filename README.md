# wanderOn
 # Description
 <p>Designed a signup signin page using jwt and maintaining a session. The project involes using XSS to sanitise input and validation for taking valid inputs. </p>
 <h2>The folder structure is as follows</h2>
 
# Deployed Links
 # Frontend
 https://wander-on-six.vercel.app/
 # Backend
 https://wanderon-2ihc.onrender.com/
 
```
├── .gitattributes
├── README.md
├── backend
│ ├── .gitignore
│ ├── configs
│ │ ├── .env
│ │ └── db.js
│ ├── controller
│ │ └── authController.js
│ ├── index.js
│ ├── middleware
│ │ └── auth.js
│ ├── models
│ │ ├── blacklist.js
│ │ └── userModel.js
│ ├── package.json
│ └── routes
│ └── authRoutes.js
└── client
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│ └── vite.svg
├── src
│ ├── App.css
│ ├── App.jsx
│ ├── Contexts
│ │ └── authContext.jsx
│ ├── Routes
│ │ ├── Allroutes.jsx
│ │ └── PrivateRoute.jsx
│ ├── assets
│ │ └── react.svg
│ ├── index.css
│ ├── main.jsx
│ └── pages
│ ├── Dashboard.jsx
│ ├── SignIn.jsx
│ └── SignUp.jsx
└── vite.config.js
```
# Tech Stack
<h2>Frontend</h2>
1. React
<h2>Backend</h2>
1. Node.js
2. Express.js

# Database
MongoAtlas
# Tools
1. XSS
2. bcrypt
3. jsonwebtoken

# Installation
<h2>Frontend</h2>
cd client
npm install 
npm run dev
<h2>Backend</h2>
cd backend
npm install
node index.js
```
