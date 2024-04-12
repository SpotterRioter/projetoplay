import * as React from "react";
//#region
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import CadastroDados from "./screens/CadastroDados";
import CadastroDados1 from "./screens/CadastroDados1";
import CadastroDados2 from "./screens/CadastroDados2";
import BeloCharacter from "./components/BeloCharacter";
import CadastroDados3 from "./screens/CadastroDados3";
import Home from "./screens/Home";
import NoHumano from "./screens/NoHumano";
import AcerteoCone from "./screens/AcerteoCone";
import BolaVoadora from "./screens/BolaVoadora";
import CuboMagico from "./screens/CuboMagico";
import SinalTransito from "./screens/SinalTransito";
import QueimadoXadrez from "./screens/QueimadoXadrez";
import HumanNodeQuiz1 from "./screens/HumanNodeQuiz1";
import HumanNodeQuiz2 from "./screens/HumanNodeQuiz2";
import HumanNodeQuiz3 from "./screens/HumanNodeQuiz3";
import HumanNodeQuiz4 from "./screens/HumanNodeQuiz4";
import HumanNodeQuiz5 from "./screens/HumanNodeQuiz5";
import ConeHitQuiz1 from "./screens/ConeHitQuiz1";
import ConeHitQuiz2 from "./screens/ConeHitQuiz2";
import ConeHitQuiz3 from "./screens/ConeHitQuiz3";
import ConeHitQuiz4 from "./screens/ConeHitQuiz4";
import ConeHitQuiz5 from "./screens/ConeHitQuiz5";
import MagicCubeQuiz1 from "./screens/MagicCubeQuiz1";
import MagicCubeQuiz2 from "./screens/MagicCubeQuiz2";
import MagicCubeQuiz3 from "./screens/MagicCubeQuiz3";
import MagicCubeQuiz4 from "./screens/MagicCubeQuiz4";
import MagicCubeQuiz5 from "./screens/MagicCubeQuiz5";
import ChessBurnQuiz1 from "./screens/ChessBurnQuiz1";
import ChessBurnQuiz2 from "./screens/ChessBurnQuiz2";
import ChessBurnQuiz3 from "./screens/ChessBurnQuiz3";
import ChessBurnQuiz4 from "./screens/ChessBurnQuiz4";
import ChessBurnQuiz5 from "./screens/ChessBurnQuiz5";
import ChessBurnQuiz6 from "./screens/ChessBurnQuiz6";
import ChessBurnQuiz7 from "./screens/ChessBurnQuiz7";
import ChessBurnQuiz8 from "./screens/ChessBurnQuiz8";
import TrafficSignalQuiz1 from "./screens/TrafficSignalQuiz1";
import TrafficSignalQuiz2 from "./screens/TrafficSignalQuiz2";
import TrafficSignalQuiz3 from "./screens/TrafficSignalQuiz3";
import TrafficSignalQuiz4 from "./screens/TrafficSignalQuiz4";
import TrafficSignalQuiz5 from "./screens/TrafficSignalQuiz5";
import TrafficSignalQuiz6 from "./screens/TrafficSignalQuiz6";
import FlyingBallQuiz1 from "./screens/FlyingBallQuiz1";
import FlyingBallQuiz2 from "./screens/FlyingBallQuiz2";
import FlyingBallQuiz3 from "./screens/FlyingBallQuiz3";
import FlyingBallQuiz4 from "./screens/FlyingBallQuiz4";
import FlyingBallQuiz5 from "./screens/FlyingBallQuiz5";
//#endregion

//back-end imports
import SimpleCalls from "./services/SimpleCalls";
import SimplePull from "./services/SimplePull";
import moment from "moment";

const Stack = createNativeStackNavigator();
//#region 
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "LeagueSpartan-ExtraLight": require("./assets/fonts/LeagueSpartan-ExtraLight.ttf"),
    "LeagueSpartan-Light": require("./assets/fonts/LeagueSpartan-Light.ttf"),
    "LeagueSpartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
    "LeagueSpartan-Medium": require("./assets/fonts/LeagueSpartan-Medium.ttf"),
    "LeagueSpartan-SemiBold": require("./assets/fonts/LeagueSpartan-SemiBold.ttf"),
    "LeagueSpartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  //#endregion
  
  //Enviando um sinal para a database de login
  SimpleCalls("checkin");
  //Se der tudo certo no terminal aparecera "Send use complete :)"
  
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroDados"
              component={CadastroDados}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroDados1"
              component={CadastroDados1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroDados2"
              component={CadastroDados2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BeloCharacter"
              component={BeloCharacter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroDados3"
              component={CadastroDados3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NoHumano"
              component={NoHumano}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AcerteoCone"
              component={AcerteoCone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BolaVoadora"
              component={BolaVoadora}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CuboMagico"
              component={CuboMagico}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QueimadoXadrez"
              component={QueimadoXadrez}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SinalTransito"
              component={SinalTransito}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HumanNodeQuiz1"
              component={HumanNodeQuiz1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HumanNodeQuiz2"
              component={HumanNodeQuiz2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HumanNodeQuiz3"
              component={HumanNodeQuiz3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HumanNodeQuiz4"
              component={HumanNodeQuiz4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HumanNodeQuiz5"
              component={HumanNodeQuiz5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConeHitQuiz1"
              component={ConeHitQuiz1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConeHitQuiz2"
              component={ConeHitQuiz2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConeHitQuiz3"
              component={ConeHitQuiz3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConeHitQuiz4"
              component={ConeHitQuiz4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConeHitQuiz5"
              component={ConeHitQuiz5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MagicCubeQuiz1"
              component={MagicCubeQuiz1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MagicCubeQuiz2"
              component={MagicCubeQuiz2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MagicCubeQuiz3"
              component={MagicCubeQuiz3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MagicCubeQuiz4"
              component={MagicCubeQuiz4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MagicCubeQuiz5"
              component={MagicCubeQuiz5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChessBurnQuiz1"
              component={ChessBurnQuiz1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChessBurnQuiz2"
              component={ChessBurnQuiz2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChessBurnQuiz3"
              component={ChessBurnQuiz3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChessBurnQuiz4"
              component={ChessBurnQuiz4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChessBurnQuiz5"
              component={ChessBurnQuiz5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChessBurnQuiz6"
              component={ChessBurnQuiz6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChessBurnQuiz7"
              component={ChessBurnQuiz7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChessBurnQuiz8"
              component={ChessBurnQuiz8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrafficSignalQuiz1"
              component={TrafficSignalQuiz1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrafficSignalQuiz2"
              component={TrafficSignalQuiz2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrafficSignalQuiz3"
              component={TrafficSignalQuiz3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrafficSignalQuiz4"
              component={TrafficSignalQuiz4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrafficSignalQuiz5"
              component={TrafficSignalQuiz5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrafficSignalQuiz6"
              component={TrafficSignalQuiz6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FlyingBallQuiz1"
              component={FlyingBallQuiz1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FlyingBallQuiz2"
              component={FlyingBallQuiz2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FlyingBallQuiz3"
              component={FlyingBallQuiz3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FlyingBallQuiz4"
              component={FlyingBallQuiz4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FlyingBallQuiz5"
              component={FlyingBallQuiz5}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
