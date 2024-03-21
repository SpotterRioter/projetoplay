import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native"; // Importando useNavigation
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const ConeHitQuiz1 = () => {
  const navigation = useNavigation(); // Inicializando useNavigation

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextButton = () => {
    setShowCorrectAnswer(true);
    if (selectedAnswer === "answer3") {
      setCorrectAnswer("answer3");
    }
    // Navegar para a próxima tela
    navigation.navigate("ConeHitQuiz2");
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
      <Text style={styles.quizNHumano}>Quiz Acerte o Cone</Text>
      <Text style={styles.text}>
        <Text style={styles.text1}>1</Text>
        <Text style={styles.text2}>/5</Text>
      </Text>
      <Text style={styles.noNHumano}>
        Qual a sua missão durante o jogo?
      </Text>
      <View style={[styles.rectangleParent, styles.groupLayout, {top: 360}]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Pressable
          onPress={() => handleAnswerSelection("answer1")}
          style={[
            styles.answerWrapper,
            selectedAnswer === "answer1" && styles.selectedAnswer,
            showCorrectAnswer && correctAnswer === "answer1" && styles.correctAnswer,
            showCorrectAnswer && correctAnswer !== "answer1" && selectedAnswer === "answer1" && styles.incorrectAnswer,
          ]}
        >
          <Text style={styles.answerText}>Ver quem joga a bola mais alto</Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout, {top: 420}]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Pressable
          onPress={() => handleAnswerSelection("answer2")}
          style={[
            styles.answerWrapper,
            selectedAnswer === "answer2" && styles.selectedAnswer,
            showCorrectAnswer && correctAnswer === "answer2" && styles.correctAnswer,
            showCorrectAnswer && correctAnswer !== "answer2" && selectedAnswer === "answer2" && styles.incorrectAnswer,
          ]}
        >
          <Text style={styles.answerText}>Apenas derrubar o cone do adversário</Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout, {top: 480}, {height: 120}]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Pressable
          onPress={() => handleAnswerSelection("answer3")}
          style={[
            styles.answerWrapper,
            selectedAnswer === "answer3" && styles.selectedAnswer,
            showCorrectAnswer && correctAnswer === "answer3" && styles.correctAnswer,
            showCorrectAnswer && correctAnswer !== "answer3" && selectedAnswer === "answer3" && styles.incorrectAnswer,
          ]}
        >
          <Text style={styles.answerText}>Derrubar o cone do adversário e proteger o seu</Text>
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
    top: 136,
    position: "absolute",
  },
  groupLayout: {
    height: 50,
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
    fontSize: FontSize.size_base_3,
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
    top: 235,
    width: 283,
    height: 79,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_4xl,
    left: 38,
    position: "absolute",
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
    top: 322,
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
  },
  groupView: {
    top: 501,
    left: 35,
    width: 290,
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

export default ConeHitQuiz1;