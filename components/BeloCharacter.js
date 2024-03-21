import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const BeloCharacter = ({ onClose }) => {
  return (
    <View style={[styles.beloCharacter, styles.beloLayout]}>
      <View style={[styles.beloCharacterChild, styles.beloLayout1]} />
      <Text style={[styles.pele, styles.peleTypo]}>Pele</Text>
      <Text style={[styles.chapeu, styles.peleTypo]}>Chapeu</Text>
      <Image
        style={[styles.beloCharacterItem, styles.beloLayout]}
        contentFit="cover"
        source={require("../assets/group-4.png")}
      />
      <View style={styles.instanceParent}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-8.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-4.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
        <Image
          style={[styles.frameChild3, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-6.png")}
        />
        <Image
          style={[styles.frameChild4, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-7.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  beloLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  beloLayout1: {
    height: 258,
    width: 320,
  },
  peleTypo: {
    textAlign: "right",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  frameChildLayout: {
    height: 50,
    width: 55,
    top: 16,
    position: "absolute",
  },
  beloCharacterChild: {
    top: 0,
    left: 0,
    borderRadius: 28,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  pele: {
    top: 60,
    left: 27,
  },
  chapeu: {
    top: 158,
    left: 28,
  },
  beloCharacterItem: {
    height: "9.38%",
    width: "9.06%",
    top: "7.36%",
    right: "80.31%",
    bottom: "83.26%",
    left: "10.63%",
    position: "absolute",
  },
  frameChild: {
    left: 11,
  },
  frameItem: {
    left: 92,
  },
  frameInner: {
    left: 173,
  },
  vectorIcon: {
    left: 254,
  },
  frameChild1: {
    left: 335,
  },
  frameChild2: {
    left: 416,
  },
  frameChild3: {
    left: 497,
  },
  frameChild4: {
    left: 578,
  },
  instanceParent: {
    top: 77,
    width: 293,
    height: 77,
    left: 27,
    position: "absolute",
  },
  beloCharacter: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 258,
    width: 320,
  },
});

export default BeloCharacter;
