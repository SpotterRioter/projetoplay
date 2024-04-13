import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput, Alert, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import GlobalServices from "../services/GlobalServices";
import CreateUser from "../services/UserLogin/CreateUser";

const CadastroDados = () => {
  const navigation = useNavigation();

  // Definindo estados para o nome, dia, mês e ano
  const [nome, setNome] = React.useState('Pedro henrique');
  const [email, setEmail] = React.useState('Phal@etepd.com');
  const [senha, setSenha] = React.useState('Lino2006/');
  const [dia, setDia] = React.useState('15');
  const [mes, setMes] = React.useState('11');
  const [ano, setAno] = React.useState('2006');
  const simbolos = ['!', '|', '\\', '@', '#', '$', '£', '%', '¢', '¨', '¬', '&', '*', ',', '.', '*', '(', ')', '<', '>', '-', '_', ';', ':', '=', '+', '§', '[', ']', '{', '}', 'ª', 'º', '/', '?', '°', '~', '^', '']

  const validarData = () => {
    const diaNumero = parseInt(dia);
    const mesNumero = parseInt(mes);
    const anoNumero = parseInt(ano);

    if (isNaN(diaNumero) || isNaN(mesNumero) || isNaN(anoNumero)) {
      Alert.alert('Aviso', 'Por favor, preencha a data corretamente.');
      return;
    }

    if (diaNumero < 1 || diaNumero > 31 || mesNumero < 1 || mesNumero > 12 || anoNumero < 1900 || anoNumero > 2100) {
      Alert.alert('Aviso', 'Por favor, insira uma data válida.');
      return;
    }

    let senhaForte = false;

    switch (true) {
      case senha.length < 8: Alert.alert('Aviso', 'Por favor, insira uma senha maior.'); break;
      case senha.length >= 8:
        for (let i = 0; senha.length > i; i++) {
          for (let z = 0; simbolos.length > z; z++) {
            if (senha[i] == simbolos[z]) {
              senhaForte = true;
            }
          }
        }
        if (!senhaForte) {
          Alert.alert('Aviso', 'Por favor, insira uma senha que possua simbolos, numeros ou letras maiúsculas.');
          return
        }
        break;

    }

    if (!email.includes("@")) {
      Alert.alert('Aviso', 'Por favor, insira uma senha que possua simbolos, numeros ou letras maiúsculas.');
      return
    }

    GlobalServices.nome = nome
    GlobalServices.dataNasc = String(diaNumero + "/" + mesNumero + "/" + anoNumero)
    GlobalServices.email = email
    GlobalServices.senha = senha

    navigation.navigate("CadastroDados1");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Ionicons
          name="arrow-back"
          size={32}
          color={Color.colorHotpink}
          style={[styles.icon, { marginTop: "15%" }]}
          onPress={() => navigation.navigate("Login")}
        />
        <Text style={[styles.title, { marginTop: "40%" }]}>Fale mais sobre você</Text>
        <View style={[styles.inputContainer]}>
          <Text style={styles.inputLabel}>Qual é o seu nome?</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Qual a data do seu aniversário?</Text>
          <View style={styles.dateContainer}>
            <TextInput
              style={[styles.input, styles.dateInput]}
              placeholder="Dia"
              keyboardType="numeric"
              value={dia}
              onChangeText={text => setDia(text)}
            />
            <TextInput
              style={[styles.input, styles.dateInput]}
              placeholder="Mês"
              keyboardType="numeric"
              value={mes}
              onChangeText={text => setMes(text)}
            />
            <TextInput
              style={[styles.input, styles.dateInput]}
              placeholder="Ano"
              keyboardType="numeric"
              value={ano}
              onChangeText={text => setAno(text)}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Qual o seu email?</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Qual senha você deseja ter?</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={validarData}
        >
          <Ionicons name="arrow-forward" size={24} color={Color.colorWhite} />
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: FontFamily.leagueSpartan,
    color: Color.colorGray,
    marginBottom: 20,
    textAlign: "center"
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.leagueSpartan,
    color: Color.colorGray,
    marginBottom: 5,
  },
  input: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_lgi,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.leagueSpartan,
    color: Color.colorGray,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: "row",
  },
  dateInput: {
    marginRight: 10,
    flex: 1,
  },
  button: {
    backgroundColor: Color.colorHotpink,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: Border.br_sm,
    alignItems: "center",
  },
});

export default CadastroDados;
