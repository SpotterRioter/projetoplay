import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  const handleCadastroPress = () => {
    navigation.navigate("CadastroDados");
  };


  return (
    <View style={styles.login}>
    
      
      <TextInput
        style={[styles.input, styles.email]}
        placeholder="E-mail"
      />
      <TextInput
        style={[styles.input, styles.senha]}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout, {left: 10}]} />
        <Text style={[styles.entrar, styles.entrarTypo, {left: 100}]}>Entrar</Text>
      </Pressable>
      <Text style={[styles.noTemContaContainer, styles.ouPosition, {left: 200}]}>
        <Text style={styles.noTemConta}>{`Não tem conta? `}</Text>
        <Text style={styles.cadastreSe} onPress={handleCadastroPress}>Cadastre-se</Text>
      </Text>
   
      <View style={styles.belo}>
        <Image
        style={styles.logoUfpe}
        source={require("../assets/logoufpe.svg")} // Altere o caminho conforme a localização do seu arquivo de imagem
      />
      <Image
        style={styles.etepd}
        source={require("../assets/etepdlogo.svg")} // Altere o caminho conforme a localização do seu arquivo de imagem
      />
       <Image
        style={styles.belo2}
        source={require("../assets/belo.svg")} // Altere o caminho conforme a localização do seu arquivo de imagem
      />
      </View>
      <Image
        style={styles.logoUfpeInicial1}
        contentFit="cover"
        source={require("../assets/logo-ufpe-inicial-1.png")}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  loginLayout: {
    height: 43,
    width: 43,
    borderRadius: 10,
    top: 413,
    position: "absolute",
  },
  loginInnerLayout: {
    height: 40,
    width: 272,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_6xs,
    left: 44,
    position: "absolute",
  },
  ouTypo: {
    fontSize: FontSize.leagueSpartan_size,
    textAlign: "right",
    color: Color.colorGray,
    fontFamily: FontFamily.leagueSpartan,
  },
  groupChildLayout: {
    height: 39,
    width: 188,
    position: "absolute",
  },
  entrarTypo: {
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
  },
  ouPosition: {
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 2,
    backgroundColor: Color.colorGainsboro_100,
    top: 4,
    width: 100,
    position: "absolute",
  },
  groupIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout1: {
    width: "29.45%",
    height: "34.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    width: "22.42%",
    height: "11.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginChild: {
    left: 99,
    backgroundColor: "#ff2828",
  },
  loginItem: {
    left: 217,
    backgroundColor: "#549dca",
  },
  loginInner: {
    top: 139,
  },
  rectangleView: {
    top: 223,
  },
  input: {
    height: 40,
    width: 292,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorGainsboro_200,
    paddingLeft: 10,
    marginBottom: 10,
    alignItems: "center"
  },
  email: {
    top: 228,
    left: 44,
    position: "absolute",
    alignItems: "center"
  },
  senha: {
    top: 282,
    left: 44,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorHotpink,
    left: 0,
    top: 0,
  },
  entrar: {
    marginLeft: -33,
    top: 2,
    fontSize: FontSize.size_4xl,
    color: Color.colorWhite,
    width: 63,
    left: "50%",
    position: "absolute",
    textAlign: "right",
  },
  rectangleParent: {
    top: 372,
    left: 86,
  },
  noTemConta: {
    fontWeight: "300",
    fontFamily: FontFamily.leagueSpartanLight,
  },
  cadastreSe: {
    fontFamily: FontFamily.leagueSpartan,
    color: "hotpink",
  },
  noTemContaContainer: {
    marginLeft: -99,
    top: 422,
    fontSize: 13,
    textAlign: "center",
    width: 158,
    height: 15,
    color: Color.colorGray,
  },
  politicas: {
    fontWeight: "700",
    fontFamily: FontFamily.leagueSpartanBold,
  },
  aoSeCadastrarContainer: {
    top: 468,
    left: 61,
    fontSize: 11,
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  loginChild1: {
    top: 495,
    left: 30,
    borderRadius: 3,
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderStyle: "solid",
    borderColor: "#b9bcbe",
    borderWidth: 2,
    width: 16,
    height: 16,
    position: "absolute",
  },
  googleSeeklogocom1Icon: {
    top: 423,
    left: 109,
    width: 23,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  facebookNew2019SeeklogocomIcon: {
    top: 417,
    left: 223,
    width: 31,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  ou: {
    marginLeft: -8.5,
    top: 0,
    textAlign: "right",
    color: Color.colorGray,
    fontFamily: FontFamily.leagueSpartan,
    fontSize: FontSize.leagueSpartan_size,
  },
  groupItem: {
    left: 149,
  },
  groupInner: {
    left: 0,
  },
  ouParent: {
    marginLeft: -125,
    top: 379,
    width: 249,
    height: 11,
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  groupIcon: {
    height: "17.53%",
    width: "11.89%",
    top: "19.26%",
    right: "11.45%",
    bottom: "63.22%",
    left: "76.65%",
  },
  groupIcon1: {
    width: "6.53%",
    right: "84.41%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
  },
  groupIcon2: {
    height: "63.66%",
    width: "13.95%",
    top: "29.77%",
    bottom: "6.57%",
    left: "86.05%",
    right: "0%",
  },
  group: {
    height: "27.57%",
    width: "88.72%",
    top: "47.42%",
    right: "6.37%",
    bottom: "25.01%",
    left: "4.91%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "0.85%",
    width: "0.53%",
    top: "66.43%",
    right: "84.56%",
    bottom: "32.72%",
    left: "14.91%",
  },
  vectorIcon3: {
    height: "0.4%",
    width: "0.68%",
    top: "20.99%",
    right: "81.56%",
    bottom: "77.61%",
    left: "17.75%",
  },
  vectorIcon4: {
    height: "1.04%",
    width: "0.26%",
    top: "61.45%",
    right: "19.49%",
    bottom: "37.51%",
    left: "80.24%",
  },
  groupIcon3: {
    top: "17.71%",
    right: "18.48%",
    bottom: "47.5%",
    left: "52.07%",
  },
  groupIcon4: {
    height: "17.37%",
    width: "11.32%",
    top: "23.22%",
    right: "76.5%",
    bottom: "59.41%",
    left: "12.18%",
  },
  groupIcon5: {
    top: "18.38%",
    right: "51.19%",
    bottom: "46.83%",
    left: "19.36%",
  },
  groupIcon6: {
    height: "10.43%",
    width: "22.91%",
    top: "55.6%",
    right: "37.05%",
    bottom: "33.96%",
    left: "40.04%",
  },
  groupIcon7: {
    top: "6.78%",
    right: "22.16%",
    bottom: "81.39%",
    left: "55.42%",
  },
  groupIcon8: {
    top: "7.07%",
    right: "58.52%",
    bottom: "81.1%",
    left: "19.05%",
  },
  belo: {
    height: "48.29%",
    width: "126.11%",
    top: "73.5%",
    right: "-13.89%",
    bottom: "-21.79%",
    left: "-12.22%",
    position: "absolute",
  },
  logoUfpeInicial1: {
    top: 84,
    left: 125,
    height: 98,
    width: 130,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
  logoUfpe: {
    width: 150,
    height: 80,
    position: "absolute",
    top: -120, // Ajuste conforme a posição desejada
    left: 90, // Ajuste conforme a posição desejada
  },
  etepd: {
    width: 100,
    height: 100,
    position: "absolute",
    top: -130, // Ajuste conforme a posição desejada
    left: 280, // Ajuste conforme a posição desejada
  },
  belo2: {
    width: 400,
    height: 250,
    position: "absolute",
    top: 0, // Ajuste conforme a posição desejada
    left: 40, // Ajuste conforme a posição desejada
  },
});

export default Login;
