import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const JogarContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupChildPosition}>
      <Image
        style={[styles.groupChild, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/frame-13.png")}
      />
      <Pressable
        style={[styles.jogar, styles.jogarPosition]}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <View style={[styles.jogarChild, styles.iconLayout]} />
        <Text style={[styles.jogar1, styles.jogar1Typo]}>Jogar</Text>
        <Image
          style={[styles.playIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/play.png")}
        />
      </Pressable>
      <Text style={[styles.verMais, styles.jogar1Typo]}>ver mais</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.nHumano, styles.jogarPosition]}>Nó Humano</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 162,
    width: 314,
    left: 0,
    top: 0,
    position: "absolute",
  },
  jogarPosition: {
    left: "7.8%",
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  jogar1Typo: {
    textAlign: "right",
    fontFamily: FontFamily.leagueSpartanRegular,
    position: "absolute",
  },
  groupChild: {
    overflow: "hidden",
  },
  jogarChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhite,
  },
  jogar1: {
    top: "30.59%",
    left: "38.87%",
    fontSize: FontSize.size_lgi_6,
    color: Color.colorMediumvioletred,
  },
  playIcon: {
    top: 6,
    left: 9,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  jogar: {
    height: "21.8%",
    width: "32.2%",
    top: "55.78%",
    right: "60%",
    bottom: "22.42%",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 1.962499976158142,
      height: 4.90625,
    },
    shadowRadius: 4.91,
    elevation: 4.91,
    shadowOpacity: 1,
  },
  verMais: {
    top: 132,
    left: 57,
    fontSize: FontSize.size_base_1,
    color: Color.colorGray_400,
    width: 53,
  },
  vectorIcon: {
    height: "4.01%",
    width: "3.63%",
    top: "83.08%",
    right: "83.25%",
    bottom: "12.91%",
    left: "13.12%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  nHumano: {
    width: "45%",
    top: "24.83%",
    fontSize: FontSize.size_8xl_5,
    fontWeight: "700",
    fontFamily: FontFamily.leagueSpartanBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
});

export default JogarContainer;
