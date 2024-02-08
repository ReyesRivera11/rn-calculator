import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import Buttons from './components/Buttons';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles/styles';
import Screen from './components/Screen';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Screen />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <Buttons value={"AC"} colorText={"white"} color={"#747477"} size={70} />
          <Buttons
            value={"<-"}
            colorText={"white"}
            color={"#747477"} size={70}
            icon={<FontAwesome6 name="delete-left" size={24} color="white" />} />
          <Buttons
            value={"%"}
            colorText={"white"}
            color={"#747477"} size={70} />
          <Buttons
            value={"/"}
            colorText={"white"}
            color={"#4B5EFC"} size={70} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"7"} color={"white"} size={70} />
          <Buttons value={"8"} color={"white"} size={70} />
          <Buttons value={"9"} color={"white"} size={70} />
          <Buttons
            value={"x"}
            colorText={"white"}
            color={"#4B5EFC"} size={70} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"4"} color={"white"} size={70} />
          <Buttons value={"5"} color={"white"} size={70} />
          <Buttons value={"6"} color={"white"} size={70} />
          <Buttons
            value={"-"}
            colorText={"white"}
            color={"#4B5EFC"} size={70} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"1"} color={"white"} size={70} />
          <Buttons value={"2"} color={"white"} size={70} />
          <Buttons value={"3"} color={"white"} size={70} />
          <Buttons
            value={"+"}
            colorText={"white"}
            color={"#4B5EFC"} size={70} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"0"} color={"white"} size={140} />
          <Buttons value={"."} color={"white"} size={70} />
          <Buttons
            value={"="}
            colorText={"white"}
            color={"#4B5EFC"} size={70} />
        </View>

      </View>

    </View>
  );
}

