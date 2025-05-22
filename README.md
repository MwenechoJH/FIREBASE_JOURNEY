# FIREBASE_JOURNEY
This will be documentation about the things that I learn along my journey in firebase
It will be a way for me to keep track of my learning and also a means to display my knowledge to whom it may concern.

I will keep it as **N3ch0** as I can. I will include the meanings of terms if need be. With that being said, let's begin.

### Module Bundlers
One of the first things that I got introduced to on this journey was the concept of module bundlers.<br>
**Module Bundlers** are just ways of managing complex networks of Javascript Dependencies. What they essentially do is **make one JS file** containing all the dependencies that were used by the root file.

I started with one called **WEBPACK**, probably the most well known. Though I can't be sure since I am relatively a beiginner at the time of writing this.

During my introduction to firebase, this was the first time I encountered `npm init -y`, where i got to see a *package.json* for what I wanna call the first time. <br>
I related this package.json file to something that I am more familiar with in python called a *requirements.txt* file, which just keeps tack of dependencies incase other people ever want to recreate your code. It makes sharing files much much more easier.


ran the code `npm install webpack webpack-cli -D`<br>
The next time I was doing this (Now on a linux), I ran into the cammand `npm install --save-dev webpack webpack-cli`<br>
After a little research, I found out that these commands are basically the same. They allow me to install `webpack` and `webpack-cli` as dev dependencies (for development only). they are saved in the `devDependencies` in my `package.json`

`-D` = `--save-dev` (it's just the shorthand method)

### `package.json` file

>>I will include something explaining package.json
`package.json` has `"scripts"`, which are custom shortcuts that a user creates for long and repetetive commands. they are added int the format `"command":"the order -of cammand"`<br>
The shorthands ca be run by `npm run script_name`

`package.json` has `"devDependencies"`