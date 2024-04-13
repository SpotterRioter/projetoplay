import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, BackHandler, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import CreateDocUser from "../services/UserLogin/CreateDocUser";
import GlobalServices from "../services/GlobalServices";
import CreateUser from "../services/UserLogin/CreateUser";

const CadastroDados3 = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false)

  const handleLogin = async () => {
    CreateUser(GlobalServices.email, GlobalServices.senha)
  }
  handleLogin()

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



  const handleVerification = async () => {
    if (!GlobalServices.userId || !GlobalServices.errorCode) {
      setTimeout(() => {
        if (GlobalServices.userId) {
          navigation.navigate("Home")
          return
        }
        if (GlobalServices.errorCode) {
          if (GlobalServices.errorCode == 'auth/invalid-email') {
            Alert.alert("Aviso", "Email invalido")
          }
          if (GlobalServices.errorCode == 'auth/email-already-in-use') {
            Alert.alert("Aviso", "Email ja utilizado, tente usar outro ou redefina a senha")
            navigation.navigate("Login")
          }
          setLoading(false)
          GlobalServices.errorCode = undefined
          return
        }
        handleVerification()
      }, 1000)
    }
  }

  handleVerification()

  const navigateToHome = () => {
    CreateDocUser().then(()=>{
      setLoading(true)
    }).catch((e)=>{ console.log("Error on CadastroDados3: " + e) })
  };
  return (
    <View style={styles.cadastroDados5}>
      <Image
        style={styles.semTtulo11}
        contentFit="cover"
        source={require("../assets/sem-ttulo1-1.png")}
      />
      <View style={styles.cadastroDados5Child} />
      <View style={styles.bemVindoParent}>
        <Text style={[styles.bemVindo, styles.bemVindoFlexBox]}>Bem Vindo</Text>
        <Text style={[styles.aproveiteESe, styles.bemVindoFlexBox]}>
          Aproveite e se Divirta
        </Text>
      </View>
      <Pressable style={styles.inicioButton} onPress={navigateToHome}>
        <Text style={styles.inicioButtonText}>Início</Text>
      </Pressable>
      <Image
        style={styles.cadastroDados5Item}
        contentFit="cover"
        source={require("../assets/group-45.png")}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  bemVindoFlexBox: {
    textAlign: "center",
    color: Color.colorGray,
    position: "absolute",
  },
  semTtulo11: {
    left: -73,
    width: 506,
    height: 710,
    top: 0,
    position: "absolute",
  },
  cadastroDados5Child: {
    top: 574,
    left: -132,
    borderRadius: 184,
    backgroundColor: Color.colorWhite,
    width: 529,
    height: 400,
    transform: [
      {
        rotate: "-10.01deg",
      },
    ],
    position: "absolute",
  },
  bemVindo: {
    left: 49,
    fontSize: FontSize.size_4xl * 0.9, // Redução de 10%
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    width: 193,
    height: 31,
    top: 50,
  },
  aproveiteESe: {
    top: 72,
    left: 0,
    fontSize: FontSize.size_4xl * 0.9, // Redução de 10%
    fontWeight: "300",
    fontFamily: FontFamily.leagueSpartanLight,
    height: 24,
    width: 298,
  },
  bemVindoParent: {
    top: 543, // Descido em 50 pixels
    left: 31,
    height: 67,
    width: 298,
    position: "absolute",
  },
  inicioButton: {
    backgroundColor: Color.colorHotpink,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    position: "absolute",
    top: 683, // Descido em 50 pixels em relação ao bemVindoParent
  },
  inicioButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_4xl * 0.9, // Redução de 10%
    fontFamily: FontFamily.leagueSpartanBold,
  },
  cadastroDados5Item: {
    top: 197,
    left: 14,
    width: 324,
    height: 356,
    position: "absolute",
  },
  cadastroDados5: {
    backgroundColor: "#53f559",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default CadastroDados3;
