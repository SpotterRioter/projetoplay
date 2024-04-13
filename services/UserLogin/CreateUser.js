import app from "../Inicialize";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import GlobalServices from "../GlobalServices";

export default CreateUser = async (email, password) => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            GlobalServices.userId = user.uid
            console.log(GlobalServices.userId)
            GlobalServices.error = false
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            GlobalServices.errorCode = errorCode
            GlobalServices.error = true
            console.log(errorCode)
        })
}