import app from "../Inicialize";
import { collection, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
import moment from "moment";
import GamePull from "./GamePull";

export default GamePush = async (game) => {
    const db = getFirestore(app);
    const data = moment().format("YYYY") + moment().format("MM");

    const handleCheck = async () => {
        let valuesFromDB = await GamePull(game);

        const handleUpdate = async (gameIndex) => {
            const ref = doc(db, "Games", gameIndex)
            const valueToUpdate = valuesFromDB
            await updateDoc(ref, {
                TotalDeAcessos: valueToUpdate + 1,
            });
        }

        if (valuesFromDB || valuesFromDB == 0) {
            handleUpdate(game)
        } else {
            //Previnindo erros
            const newDocRef = collection(db, 'Games');
            const rePush = async(gameIndex, gameName) =>{
                await setDoc(doc(newDocRef, gameIndex), {
                    Nome: gameName,
                    TotalDeAcessos: 0,
                    Remaked: true
                })
            }
            
            rePush("Game1", "No Humano"); rePush("Game2", "Acerte o cone")
            rePush("Game3", "Bola Voadora");rePush("Game4", "Cubo Magico")
            rePush("Game5", "Queimado Xadrez");rePush("Game6", "Sinal de Transito")

            return true
        }
    }
    handleCheck().then(async(e)=>{
        if(e){ await handleCheck(); console.log("Send game Acessos failed, sending again...") } else {
            console.log("Send game Acessos to " + game + " sucess")
        }
    })
}