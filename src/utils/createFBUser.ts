// import firebase from "../lib/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const createFBUser = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = response.user;
    console.log("user", user);
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);

    return null;
  }
};
