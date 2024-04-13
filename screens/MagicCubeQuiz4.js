import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native"; // Importando useNavigation
import { FontSize, Color, FontFamily } from "../GlobalStyles";

import UserScorePush from "../services/UsersScore/UserScorePush";

const  MagicCubeQuiz4 = () => {
  const navigation = useNavigation(); // Inicializando useNavigation

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextButton = () => {
    setShowCorrectAnswer(true);
    if (selectedAnswer === "true") {
      setCorrectAnswer("true");
      UserScorePush("Game4", true)
    } else {
      UserScorePush("Game4", false)
    }
    // Navegar para a próxima tela
    navigation.navigate("MagicCubeQuiz5");
  };

  return (
    <View style={styles.quiz}>
      <Image
        style={styles.background1Icon}
        contentFit="cover"
        source={require("../assets/background-11.png")}
      />
      <View style={styles.quizChild} />
      <View style={[styles.quizItem, styles.quizPosition]} />
      <View style={[styles.quizInner, styles.quizPosition]} />
      <Text style={styles.quizNHumano}>Quiz Cubo Mágico</Text>
      <Text style={styles.text}>
        <Text style={styles.text1}>4</Text>
        <Text style={styles.text2}>/5</Text>
      </Text>
      <Text style={styles.noNHumano}>
        O que o jogador deve fazer depois de trocar as cores de lugar?
      </Text>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Pressable
          onPress={() => handleAnswerSelection("false")}
          style={[
            styles.answerWrapper,
            selectedAnswer === "false" && styles.selectedAnswer,
            showCorrectAnswer && correctAnswer === "false" && styles.correctAnswer,
            showCorrectAnswer && correctAnswer !== "false" && selectedAnswer === "false" && styles.incorrectAnswer,
          ]}
        >
          <Text style={styles.answerText}>Deve sair do jogo</Text>
        </Pressable>
      </View>
      <View style={[styles.groupView, styles.groupLayout, {top: 440}, {height: 300}]}>
        <View style={[styles.groupChild, styles.groupChildPosition, {height: 60}]} />
        <Pressable
          onPress={() => handleAnswerSelection("true")}
          style={[
            styles.answerWrapper,
            selectedAnswer === "true" && styles.selectedAnswer,
            showCorrectAnswer && correctAnswer === "true" && styles.correctAnswer,
            showCorrectAnswer && correctAnswer !== "true" && selectedAnswer === "true" && styles.incorrectAnswer,
          ]}
        >
          <Text style={styles.answerText}>Deve voltar para o final da fila e esperar para ir de novo</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.nextButton}
        onPress={handleNextButton}
      >
        <Text style={styles.nextButtonText}>Próxima</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  quizPosition: {
    height: 10,
    borderRadius: 13,
    left: 26,
    top: 256,
    position: "absolute",
  },
  groupLayout: {
    height: 80,
    width: 290,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  answerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  answerText: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    fontFamily: FontFamily.leagueSpartanRegular,
  },
  selectedAnswer: {
    backgroundColor: "lightblue",
  },
  correctAnswer: {
    backgroundColor: "lightgreen",
  },
  incorrectAnswer: {
    backgroundColor: "lightcoral",
  },
  nextButton: {
    width: 160,
    height: 50,
    position: "absolute",
    backgroundColor: "hotpink",
    alignItems: "center",
    justifyContent: "center",
    top: 571,
    left: 100,
    borderRadius: 20,
  },
  nextButtonText: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorWhite,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  background1Icon: {
    top: -8,
    left: -31,
    width: 421,
    height: 817,
    position: "absolute",
    overflow: "hidden",
  },
  quizChild: {
    height: "60.26%",
    width: "92.83%",
    top: "22.54%",
    right: "3.56%",
    bottom: "17.2%",
    left: "3.61%",
    borderRadius: 22,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  quizItem: {
    backgroundColor: Color.colorGray_300,
    width: 307,
  },
  quizInner: {
    backgroundColor: Color.colorBlueviolet,
    width: 31,
  },
  quizNHumano: {
    top: 116,
    left: 48,
    fontSize: FontSize.size_base_2,
    width: 264,
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  text1: {
    color: Color.color,
  },
  text2: {
    color: Color.colorWhite,
  },
  text: {
    top: 155,
    left: 33,
    fontSize: FontSize.size_mid_3,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  noNHumano: {
    top: 225,
    width: 283,
    height: 119,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_4xl,
    left: 38,
    position: "absolute",
    zIndex: 1
  },
  groupChild: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 2.9,
    height: 50,
    width: 290,
    position: "absolute",
  },
  darAsMos: {
    top: 19,
    left: 19,
  },
  rectangleParent: {
    top: 370,
    left: 35,
    width: 290,
  },
  memorizarQuemEst: {
    top: 20,
    width: 264,
  },
  rectangleGroup: {
    top: 382,
    left: 35,
    width: 290,
  },
  seEntrelaarCom: {
    top: 19,
    left: 19,
    width: 264,
  },
  rectangleContainer: {
    top: 441,
    left: 35,
    width: 290,
    height: 300,
  },
  groupView: {
    top: 501,
    left: 35,
    width: 290,
    height: 300,
  },
  vectorIcon: {
    width: "15.86%",
    top: "0%",
    right: "84.14%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  reporteOQuizParent: {
    top: 589,
    width: 101,
    height: 16,
    left: 38,
    position: "absolute",
  },
  groupChild1: {
    borderRadius: 17,
    backgroundColor: Color.colorDarkviolet,
    left: 0,
    top: 0,
  },
  prxima: {
    top: 17,
    left: 39,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleParent1: {
    top: 671,
    left: 166,
  },
  icon: {
    width: "100%",
  },
  wrapper: {
    left: "8.33%",
    top: "4.75%",
    right: "85%",
    bottom: "92.25%",
    width: "6.67%",
    height: "3%",
    position: "absolute",
  },
  quiz: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MagicCubeQuiz4;
