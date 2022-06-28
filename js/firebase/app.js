import {
    getDatabase,
    set,
    ref,
    get,
    update,
    child
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

import { firebaseConfig } from "./firebaseConfig.js";
// Initialize Firebase
import { initializeApp } from "../../node_modules/firebase";
const app = initializeApp(firebaseConfig);

export { app, getDatabase, set, update, child, get, ref };