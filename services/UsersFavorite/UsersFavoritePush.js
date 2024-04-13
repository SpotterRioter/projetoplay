import app from "../Inicialize";
import { collection, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
import moment from "moment";
import UsersFavoritePull from "./UsersFavoritePull";
import GlobalServices from "../GlobalServices";

export default UsersFavoritePush = async (game) => {
    const db = getFirestore(app);
    const data = moment().format("YYYY") + moment().format("MM");

    const handleCheck = async () => {
        //{"Game1Acess": 0, "Game2Acess": 0, "Game3Acess": 0, "Game4Acess": 0, "Game5Acess": 0, "Game6Acess": 0}
        let valuesFromDB = await UsersFavoritePull();

        const handleUpdate = async (gameIndex) => {
            const ref = doc(db, "UsersFavorite", GlobalServices.userId)
            const valueToUpdate = valuesFromDB[gameIndex]
            await updateDoc(ref, {
                [gameIndex]: valueToUpdate + 1,
            });
        }

        if (valuesFromDB) {
            switch (true) {
                case game == "NoHumano": handleUpdate("Game1Acess"); break;
                case game == "AcerteoCone": handleUpdate("Game2Acess"); break;
                case game == "BolaVoadora": handleUpdate("Game3Acess"); break;
                case game == "CuboMagico": handleUpdate("Game4Acess"); break;
                case game == "QueimadoXadrez": handleUpdate("Game5Acess"); break;
                case game == "SinalDeTransito": handleUpdate("Game6Acess"); break;
            }
        } else {
            const newDocRef = collection(db, 'UsersFavorite');
            await setDoc(doc(newDocRef, GlobalServices.userId), {
                Game1Acess: 0,
                Game2Acess: 0,
                Game3Acess: 0,
                Game4Acess: 0,
                Game5Acess: 0,
                Game6Acess: 0,
            })
            return true
        }
    }
    handleCheck().then(async(e)=>{
        if(e){ await handleCheck(); console.log("Send use game failed, sending again...") } else {
            console.log("Send use game to " + game + " sucess")
        }
    })
}