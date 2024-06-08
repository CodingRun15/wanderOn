# wanderOn
 # Description
 <p>Designed a signup signin page using jwt and maintaining a session. The project involes using XSS to sanitise input and validation for taking valid inputs. </p>
 <h2>The folder struxture is as follows</h2>
 ```
📦 
├─ .gitattributes</br>
├─ README.md</br>
├─ backend</br>
│  ├─ .gitignore</br>
│  ├─ configs</br>
│  │  ├─ .env</br>
│  │  └─ db.js</br>
│  ├─ controller</br>
│  │  └─ authController.js</br>
│  ├─ index.js</br>
│  ├─ middleware</br>
│  │  └─ auth.js</br>
│  ├─ models</br>
│  │  ├─ blacklist.js
│  │  └─ userModel.js
│  ├─ package.json
│  └─ routes
│     └─ authRoutes.js
└─ client
   ├─ .eslintrc.cjs
   ├─ .gitignore
   ├─ README.md
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ vite.svg
   ├─ src
   │  ├─ App.css
   │  ├─ App.jsx
   │  ├─ Contexts
   │  │  └─ authContext.jsx
   │  ├─ Routes
   │  │  ├─ Allroutes.jsx
   │  │  └─ PrivateRoute.jsx
   │  ├─ assets
   │  │  └─ react.svg
   │  ├─ index.css
   │  ├─ main.jsx
   │  └─ pages
   │     ├─ Dashboard.jsx
   │     ├─ SignIn.jsx
   │     └─ SignUp.jsx
   └─ vite.config.js
```
# Tech Stack
<h2>Frontend</h2>
1. React
<h2>Backend</h2>
1. Node.js
2. Express.js
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
