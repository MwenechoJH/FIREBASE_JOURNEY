# FIREBASE_JOURNEY
This will be documentation about the things that I learn along my journey in firebase
It will be a way for me to keep track of my learning and also a means to display my knowledge to whom it may concern.

(Funny how I came back to this after like 3 months and completely forgot things, I am grateful I was documenting what I was learning 22-08-2025)

I will keep it as **N3ch0** as I can. I will include the meanings of terms if need be. With that being said, let's begin.


### Node.js Modules (CommonJS/ ES Modules)
**>>check out how Node.js handles file imports**
<code>
// math.js
module.exports = { add: (a, b) => a + b };  // CommonJS
// or
export const add = (a, b) => a + b;         // ES Modules

// app.js
const { add } = require('./math');          // CommonJS
// or
import { add } from './math.js';            // ES Modules
</code>

### Module Bundlers
One of the first things that I got introduced to on this journey was the concept of module bundlers.<br>
**Module Bundlers** are just ways of managing complex networks of Javascript Dependencies. What they essentially do is **make one JS file** containing all the dependencies that were used by the root file.

I started with one called **WEBPACK**, probably the most well known. Though I can't be sure since I am relatively a beiginner at the time of writing this.

During my introduction to firebase, this was the first time I encountered `npm init -y`, where i got to see a *package.json* for what I wanna call the first time. <br>
I related this package.json file to something that I am more familiar with in python called a *requirements.txt* file, which just keeps tack of dependencies incase other people ever want to recreate your code. It makes sharing files much much more easier.


ran the code `npm install webpack webpack-cli -D`<br>
The next time I was doing this (Now on a linux), I ran into the cammand `npm install --save-dev webpack webpack-cli`<br>
After a little research, I found out that these commands are basically the same. They allow me to install `webpack` and `webpack-cli` as dev dependencies (for development only). they are saved in the `devDependencies` in my `package.json`

`-D` = `--save-dev` (it's just the shorthand method) -> this concept has been solidified in me since I have also worked with Linux a little. 

(I need to be practicing often, I have noticed that the knowledge is leaving me )


### `package.json` file

>>I will include something explaining package.json

`package.json` has `"scripts"`, which are custom shortcuts that a user creates for long and repetetive commands. they are added int the format `"command":"the order -of cammand"`<br>
The shorthands ca be run by `npm run script_name`

`package.json` has `"devDependencies"`

## Firebase

### Steps for Initializing firebase in a Web project
<h1>1. Create Firebase Project</h1>
first we create a project in the firebase console. Basically the online application

Firebase gives you a firebaseConfig object:
    This object contains: Api key, authDomain, projectId, storageBucket etc

I recall that at some point I needed to add another element when creating a certain application. I will update when I encounter it again.

<h1>2. Install Firebase SDK</h1>

`npm install firebase` - this is the command for installling use npm

Now for the code and initializing the application

<code>
// Import the function you need
import { initializeApp } from "firebase/app";

// Here there are many functions, like database or something like that.
// The functions just give different access to how firebase works

// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// const db = getFirestore(app);
// const auth = getAuth(app);

const firebaseConfig = {
  apiKey: "AIzaSyA...",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

</code>


## Firebase Hosting
It a fast, secure CDN (Content Delivery Network) for serving web apps.
That is static files (HTML, CSS, JS, images etc)

It provides free SSL (Secure Sockets Layer) certificate

Easy to deploy using Firebase CLI

`npm install -g firebase-tools`<br>
`firebase --version` Obviously just shows the version you have. Can also serve as a way of confirming the installation.<br>
`firebase login`

logging out is as simple as `firebase logout` or `firebase logout --all`

`firebase init` - is used to connect a local directory to a firebase project. Static assets are kept in the local project directory.

`firebase deploy` - this is when you finally want to deploy the website.

When you deploy but want to undo. You can just go on the firebase console and click a button. Which buttong ? I don't know. But we will probably find out soon enough.

`firebase emulators:start` - used for simulation on local url or something like that

`firebase hosting:channel:deploy` - used for a preview of the site before final hosting. This can be used for testing


**YOU CAN ALSO LINK TO A FIREBASE WEB APPLICATION**
(Do Research on That!)




#  EXAMPLE WORKFLOW I DID
Created a git repo<br>
cloned the git repo<br>
installed firbase tools `npm install -g firebase-tools` <br>
ran `npm init` though it was unncessary<br>
created a **public** folder <br>
added html, css and js to the public directory<br>
initialized firebase `firebase init` <br>
tested the page `firebase serve` or  `firebase emulators:start` <br>
DEPLOYED THE PAGE  `firebase deploy`






