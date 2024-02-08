import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import SvgComponent from './assets/home/SvgComponent';
import { NameIconSvg } from './assets/home/NameIconSvg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>

        <Pressable style={styles.pillButtons}>
          <Text style={styles.buttonText}>LinkedIn</Text>
        </Pressable>
        <Pressable style={styles.pillButtons}>
          <Text style={styles.buttonText}>Github</Text>
        </Pressable>
        <Pressable style={styles.pillButtons}>
          <Text style={styles.buttonText}>GitLab</Text>
        </Pressable>
      </View>

      <View style={styles.titleSvgContainer}>
        <SvgComponent
          height={"60%"}
          width={"60%"}
        />
        <NameIconSvg
          style={styles.nameIcon}
          height={"20%"}
          width={"20%"}
        />
      </View>

      <View>
        <Text>{"</>"}</Text>
        <Text>{"Software Engineer"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  topRow: {
    flexDirection: 'row-reverse',
    gap: 30,
    paddingRight: 60,
    paddingTop: 60,
  },
  titleSvgContainer: {
    flexDirection: 'row-reverse',
    gap: 100,
    paddingTop: 70,
    paddingRight: 80,
  },
  nameIcon: {
    paddingVertical: 150,
  },
  pillButtons: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,

  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'normal',

  }
});
