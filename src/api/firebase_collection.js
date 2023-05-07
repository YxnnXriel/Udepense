

import { db } from "./firebase_api";
import {collection} from "firebase/firestore"

export const depenseCollection = collection(db,"depenses");

