import {initializeApp} from 'firebase/app';
import { getDatabase, set, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCK2RDrF2zeFoPhf2v509ada3xX8jatRfE",
  authDomain: "josh-3bd10.firebaseapp.com",
  databaseURL:"https://josh-3bd10-default-rtdb.firebaseio.com/",
  projectId: "josh-3bd10",
  storageBucket: "josh-3bd10.firebasestorage.app",
  messagingSenderId: "1069974348479",
  appId: "1:1069974348479:web:86d5e18c3213f98719dc0a",
  measurementId: "G-HMNS7TBVV3"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const updt_btn = document.getElementById("update");


function sendUpdate(){
  set(ref(db,"data/"),{
    name:"Josh",
    age:19
})
}
function updateData(name, age, color){
  set(ref(db,'updates'),{
    name:name,
    age:age,
    color:color
  })
}

updt_btn.addEventListener("click",()=>{
  const name_ipt = document.getElementById("name");
  const age_ipt = document.getElementById("age");
  const color_ipt = document.getElementById("color");
  updateData(name_ipt.value, age_ipt.value, color_ipt.value);
}) 

