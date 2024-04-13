import * as React from "react";
import { StyleSheet, View, Text, Pressable, BackHandler } from "react-native";
import { Image } from "expo-image";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CuboMagico = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true;
    };


    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    // Remover o event listener quando o componente for desmontado ou quando a tela deixar de ser ativa
    return () => backHandler.remove();

  }, []);

  return (
    <View style={styles.androidLarge2}>
      <Text style={[styles.jogueOQuiz, styles.jogueOQuizPosition]}>
        Jogue o Quiz
      </Text>
      <Video
        style={styles.videoPlayer}
        source={require("../assets/Cubo Mágico.mp4")} // Insira o caminho do vídeo aqui
        useNativeControls={true} // Use controles nativos do dispositivo
        resizeMode="contain" // Ajuste o modo de redimensionamento conforme necessário
        shouldPlay={false} // O vídeo deve ser reproduzido automaticamente ao ser carregado?
      />
      <View style={styles.androidLarge2Inner}>
    
      </View>
      <View
        style={[styles.androidLarge2Child, styles.androidLarge2ChildLayout]}
      />
      <Text style={[styles.nHumano, styles.nHumanoClr]}>Cubo Mágico</Text>
      <Text style={[styles.osParticipantesDevero, styles.descubraSeVocTypo]}>
       Os participantes são divididos em equipes, formam 2 filas diante de quadrados 3x3 com 9 objetos de cores misturadas. Ao lado, há um desenho do cubo mágico como referência de cores. Cada participante pode realizar apenas um movimento para trocar as cores de lugar, retornando ao final da fila da sua equipe para o próximo da fila realizar o movimento. O objetivo é reorganizar as cores para igualar o cubo mágico. A equipe que resolver mais rápido vence. Se quiser deixar mais desafiador experimente mover as peças somente na vertical e na horizontal.
      </Text>
      <Image
        style={styles.beloLendo1}
        contentFit="cover"
        source={require("../assets/belo-lendo-1.png")}
      />
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.play, styles.playLayout]}
        onPress={() => navigation.navigate("MagicCubeQuiz1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/play4.png")}
        />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 45,
    width: 292,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    opacity: 0.3,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs_2,
    top: 5,
    textAlign: "left",
    position: "absolute",
  },
  androidLarge2ChildLayout: {
    width: 310,
    left: 26,
  },
  returnPosition: {
    top: 31,
    position: "absolute",
  },
  nHumanoClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  descubraSeVocTypo: {
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
  },
  playLayout: {
    width: 42,
    position: "absolute",
  },
  cooperaoTypo: {
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xs_4,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  parentLayout: {
    height: 60,
    width: 42,
    top: 258,
    position: "absolute",
  },
  instancePosition: {
    bottom: "30.03%",
    height: "69.97%",
    borderRadius: 8,
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
 
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChild: {
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 26,
    elevation: 26,
    shadowOpacity: 1,
    borderRadius: Border.br_6xs,
  },
  playcircleIcon: {
    width: "12.21%",
    right: "87.79%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    maxWidth: "100%",
    height: "100%",
  },
  groupItem: {
    top: 22,
    borderRadius: 6,
    backgroundColor: "rgba(185, 188, 190, 0.6)",
    width: 222,
    height: 3,
    left: 40,
    position: "absolute",
  },
  text: {
    left: 40,
  },
  text1: {
    left: 242,
  },
  playcircleParent: {
    height: "71.11%",
    width: "89.73%",
    top: "15.56%",
    right: "5.14%",
    bottom: "13.33%",
    left: "5.14%",
    position: "absolute",
  },
  androidLarge2Inner: {
    top: 801,
    left: 32,
    height: 45,
    width: 292,
    position: "absolute",
  },
  androidLarge2Child: {
    top: 583,
    borderRadius: 28,
    backgroundColor: "#a9c6ff",
    height: 205,
    position: "absolute",
  },
  androidLarge2Item: {
    backgroundColor: Color.colorGainsboro_100,
    width: 312,
    height: 212,
    left: 24,
    borderRadius: Border.br_6xs,
  },
  nHumano: {
    top: 277,
    fontSize: 32,
    fontWeight: "700",
    fontFamily: FontFamily.leagueSpartanBold,
    left: 24,
    textAlign: "left",
    color: Color.colorBlack,
  },
  osParticipantesDevero: {
    top: 329,
    fontSize: FontSize.size_base,
    textAlign: "justify",
    color: Color.colorBlack,
    position: "absolute",
    width: 310,
    left: 26,
  },
  cooperao: {
    top: "87.74%",
  },
  instanceChild: {
    height: "78.68%",
    bottom: "21.32%",
    backgroundColor: Color.colorDarkorange_100,
    borderRadius: 8,
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  vectorIcon: {
    height: "31.7%",
    width: "54.92%",
    top: "24.34%",
    right: "23.26%",
    bottom: "43.96%",
    left: "21.82%",
  },
  cooperaoParent: {
    height: 53,
    top: 258,
    width: 42,
    left: 26,
  },
  coordenaoMotora: {
    top: "78.02%",
  },
  instanceItem: {
    backgroundColor: Color.colorDarkturquoise,
  },
  vectorIcon1: {
    height: "34.56%",
    width: "40.29%",
    top: "17.79%",
    right: "28.78%",
    bottom: "47.65%",
    left: "30.94%",
  },
  coordenaoMotoraParent: {
    left: 87,
  },
  playIcon: {
    top: 114,
    left: 152,
    width: 57,
    height: 57,
    position: "absolute",
    overflow: "hidden",
  },
  return: {
    left: 25,
    width: 24,
    height: 24,
  },
  beloLendo1: {
    top: 570,
    left: 105,
    width: 143,
    height: 136,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    top: 690,
    left: 37,
    borderRadius: Border.br_sm,
    width: 285,
    height: 85,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  descubraSeVoc: {
    top: 738,
    fontSize: 12,
    width: 140,
    height: 19,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
  },
  jogueOQuiz: {
    top: 608,
    fontSize: FontSize.size_4xl,
    fontWeight: "100",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    width: 19,
    height: 15,
  },
  icon1: {
    overflow: "hidden",
  },
  play: {
    left: 238,
    top: 712,
    height: 42,
  },
  instanceInner: {
    backgroundColor: Color.colorPurple,
  },
  vectorIcon2: {
    height: "14.06%",
    width: "58.51%",
    top: "17.95%",
    right: "21.58%",
    bottom: "47.99%",
    left: "19.9%",
  },
  racioccioLgicoParent: {
    left: 147,
  },
  tabbar6Icon: {
    top: 859,
    left: 4,
    width: 360,
    height: 70,
    position: "absolute",
  },
  androidLarge2: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  jogueOQuiz: {
    // Estilo para "Jogue o Quiz"
    color: Color.colorBlack,
    fontSize: FontSize.size_4xl,
    fontWeight: "100",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    width: 150, // Ajuste a largura conforme necessário
  },
  jogueOQuizPosition: {
    // Posição absoluta do texto "Jogue o Quiz"
    left: 80, // Ajuste a posição horizontal conforme necessário
    top: 710, // Ajuste a posição vertical conforme necessário
    position: "absolute",
    zIndex: 1, // Define a ordem de empilhamento do componente
  },
  videoPlayer: {
    width: "100%", // Ajuste a largura conforme necessário
    height: 200, // Ajuste a altura conforme necessário
    marginBottom: 20, // Ajuste a margem inferior conforme necessário
    top: 50
  },
  icon1: {
    overflow: "hidden",
  },

  osParticipantesDevero: {
    top: 329,
    fontSize: 17, // Aumenta a fonte em 5px
    textAlign: "justify",
    color: Color.colorBlack,
    position: "absolute",
    width: 310,
    left: 26,
  },
});

export default CuboMagico;
