import * as React from "react";
import { StyleSheet, Text, View, Pressable, FlatList, Alert, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from '@expo/vector-icons';
import HumanoidContainer from "../components/HumanoidContainer";

import GameUsePush from "../services/GameUse/GameUsePush";
import GamePush from "../services/Games/GamePush";
import GlobalServices from "../services/GlobalServices";
import UsersFavoritePush from "../services/UsersFavorite/UsersFavoritePush";
import UserUselessPush from "../services/UsersUseless/UserUselessPush";

const Home = ({ iconColor = "white", iconSize = 24, iconPosition = "absolute", iconTop = 50, iconLeft = 260 }) => {
  const navigation = useNavigation();
  console.log("UserUUID: "+GlobalServices.userId)

  React.useEffect(()=>{
    if(!GlobalServices.userUseless){
      UserUselessPush()
    }
  }, [])

  React.useEffect(() => {
    const backAction = () => {
        // Impede o comportamento padrão do botão de voltar
        return true;
    };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        // Remover o event listener quando o componente for desmontado ou quando a tela deixar de ser ativa
        return () => backHandler.remove();
    
}, []);

  const handleGameAcess = (gameName, gameIndex) =>{
    if (GlobalServices.userId) {
        GameUsePush(gameName)
        console.log("GameUsePush")
        GamePush(gameIndex)
        console.log("GamePush")
        navigation.navigate(gameName)
        UsersFavoritePush(gameName)
        return
    } else {
        if (!GlobalServices.UserCreated) {
            Alert.alert("Aviso", "Senha ou email incorretos.")
        } else {
            Alert.alert("Aviso", "Error no seu cadastro, contate os desenvolvedores.")
        }
        navigation.navigate("Login")
        return 
    }
  }
  return (
    <View style={styles.home}>
      <Pressable
        style={styles.vectorParent}
        onPress={() => navigation.navigate("AndroidLarge")}
      />
      <View style={styles.jogarParent}>
        <Text style={styles.jogar}>Jogar</Text>
        <View style={[styles.jogoAleatorio, styles.groupItemShadowBox]}>
          <View
            style={[styles.jogoAleatorioChild, styles.jogarChildPosition]}
          />
          <Pressable
            style={styles.nextButton}
            onPress={() => navigation.navigate("AndroidLarge1")}
          >
            <View style={[styles.nextButtonChild, styles.jogarChildPosition]} />
            <Text style={styles.jogoAleatrio}>Jogo Aleatório</Text>
            <Fontisto name="random" size={iconSize} color={iconColor} style={[styles.randomIcon, {position: iconPosition, top: iconTop, left: iconLeft}]} />
          </Pressable>
          <Text style={styles.noSabeO}>Não sabe o que jogar?</Text>
        </View>
      </View>
      <HumanoidContainer />
      <Text style={styles.inicio}>Início</Text>
      <Pressable
        style={styles.humanNodeButton}
        onPress={()=>{handleGameAcess("NoHumano", "Game2")}}
      >
        <Text style={styles.humanNodeButtonText}>Nó Humano</Text>
      </Pressable>
      <Pressable
        style={styles.humanNodeButton2}
        onPress={()=>{handleGameAcess("AcerteoCone", "Game2")} }
      >
        <Text style={styles.humanNodeButtonText}>Acerte o Cone</Text>
      </Pressable>
      <Pressable
        style={styles.humanNodeButton3}
        onPress={()=>{handleGameAcess("BolaVoadora", "Game3")}}
      >
        <Text style={styles.humanNodeButtonText}>Bola Voadora</Text>
      </Pressable>
      <Pressable
        style={styles.humanNodeButton4}
        onPress={()=>{handleGameAcess("CuboMagico", "Game4")}}
      >
        <Text style={styles.humanNodeButtonText}>Cubo Mágico</Text>
      </Pressable>
      <Pressable
        style={styles.humanNodeButton5}
        onPress={()=>{handleGameAcess("QueimadoXadrez", "Game5")}}
      >
        <Text style={styles.humanNodeButtonText}>Queimado Xadrez</Text>
      </Pressable>
      <Pressable
        style={styles.humanNodeButton6}
        onPress={()=>{handleGameAcess("SinalDeTransito", "Game6")}}
      >
        <Text style={styles.humanNodeButtonText}>Sinal de Trânsito</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  vectorParent: {
    position: "absolute",
    top: 20,
    left: 10,
    height: 50,
    width: 50,
  },
  jogarParent: {
    position: "absolute",
    top: 30,
    left: 10,
    height: 150,
    width: "80%",
  },
  jogar: {
    position: "absolute",
    top: 50,
    left: 10,
    fontSize: 20,
    color: "#666666",
    fontFamily: "LeagueSpartan-Light",
    fontWeight: "800",
  },
  jogoAleatorio: {
    position: "absolute",
    top: -90,
    left: 0,
    right: 0,
    bottom: 0,
    shadowRadius: 14.5,
    elevation: 14.5,
  },
  nextButtonChild: {
    position: "absolute",
    top: 10,
    left: 10,
    height: 100,
    width: 330,
    borderRadius: 30,
    backgroundColor: "#ff8c05",
  },
  jogoAleatrio: {
    position: "absolute",
    top: 30,
    left: 30,
    fontSize: 20,
    textAlign: "right",
    fontFamily: "LeagueSpartan-SemiBold",
    color: "#ffffff",
    fontWeight: "600",
  },
  randomIcon: {
    position: "absolute",
    height: 100,
    width: 100,
  },
  nextButton: {
    position: "absolute",
    top: 200,
    left: 10,
    height: 100,
    width: "50%",
  },
  noSabeO: {
    position: "absolute",
    top: 260,
    left: 40,
    fontSize: 20,
    fontFamily: "LeagueSpartan-Bold",
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
  },
  inicio: {
    position: "absolute",
    top: 350,
    left: 30,
    fontSize: 33,
    color: "#000000",
    fontFamily: "LeagueSpartan-SemiBold",
    fontWeight: "600",
    textAlign: "left",
  },
  homeInner: {
    position: "absolute",
    top: 500,
    left: 10,
    height: 369,
    width: "80%",
    overflow: "hidden",
  },
  humanNodeButton: {
    position: "absolute",
    top: 450, // Ajuste conforme necessário
    left: 10, // Ajuste conforme necessário
    width: "28%", // Ajuste conforme necessário
    height: 80, // Ajuste conforme necessário
    backgroundColor: "hotpink",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  humanNodeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  humanNodeButton2: {
    position: "absolute",
    top: 450, // Ajuste conforme necessário
    left: 130, // Ajuste conforme necessário
    width: "28%", // Ajuste conforme necessário
    height: 80, // Ajuste conforme necessário
    backgroundColor: "hotpink",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  humanNodeButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  humanNodeButton3: {
    position: "absolute",
    top: 450, // Ajuste conforme necessário
    left: 250, // Ajuste conforme necessário
    width: "28%", // Ajuste conforme necessário
    height: 80, // Ajuste conforme necessário
    backgroundColor: "hotpink",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  humanNodeButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  humanNodeButton4: {
    position: "absolute",
    top: 550, // Ajuste conforme necessário
    left: 10, // Ajuste conforme necessário
    width: "28%", // Ajuste conforme necessário
    height: 80, // Ajuste conforme necessário
    backgroundColor: "hotpink",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  humanNodeButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  humanNodeButton5: {
    position: "absolute",
    top: 550, // Ajuste conforme necessário
    left: 130, // Ajuste conforme necessário
    width: "28%", // Ajuste conforme necessário
    height: 80, // Ajuste conforme necessário
    backgroundColor: "hotpink",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  humanNodeButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  humanNodeButton6: {
    position: "absolute",
    top: 550, // Ajuste conforme necessário
    left: 250, // Ajuste conforme necessário
    width: "28%", // Ajuste conforme necessário
    height: 80, // Ajuste conforme necessário
    backgroundColor: "hotpink",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  humanNodeButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Home;
