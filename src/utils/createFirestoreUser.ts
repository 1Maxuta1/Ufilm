import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export const createFirestoreUser = async (data: {
  email: string;
  nickname: string;
}) => {
  const docRef = await addDoc(collection(db, "users"), data);
  console.log("Document written with ID: ", docRef.id);
};
