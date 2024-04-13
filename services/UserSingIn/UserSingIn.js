import app from "../Inicialize";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import GlobalServices from "../GlobalServices";

export default UserSingIn = async (email, password) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            GlobalServices.userId = user.uid;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error no UserSingIn: " + errorCode)
            GlobalServices.errorCode = errorCode
        });
}