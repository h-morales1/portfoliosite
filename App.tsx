import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SvgComponent from './assets/home/SvgComponent';
import { NameIconSvg } from './assets/home/NameIconSvg';
import  PillBtn  from './components/PillBtn';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.innerContainer}>
      <View style={styles.topRow}>

        <PillBtn
                  buttonText={"LinkedIn"}
                  buttonUrl={"www.linkedin.com/in/herbert-morales-9b3666293"}
        />
        <PillBtn
                  buttonText={"Github"}
                  buttonUrl={"https://www.github.com/h-morales1"}
        />
        <PillBtn
                  buttonText={"GitLab"}
                  buttonUrl={"https://www.gitlab.com/holzelh"}

        />
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

      <View style={styles.paraContainer}>
        <Text style={styles.paragraphPoint}>{"<>"}</Text>
        <Text style={styles.paragraph}>{"Software Engineer"}</Text>

        <Text style={styles.paragraph}>{"Graduated 2023"}</Text>
      </View>
      <View style={styles.divider}></View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
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

  },
  paraContainer: {
    paddingLeft: "5%",
    flexDirection: 'row',
    gap: 20,

  },
  paragraphPoint: {
    fontSize: 40,
    fontWeight: 'bold',

  },
  paragraph: {
    fontSize: 40,
    fontFamily: 'Inter-Regular',

  },
  divider: {
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    width: '90%',
    paddingTop: 80,

  },
});
