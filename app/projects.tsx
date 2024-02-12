import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ProjectsList from '../assets/projectsList/ProjectListSvg';

export default function Page() {
    return (
        <SafeAreaView>
            <View>
                <Text>Projects</Text>
            </View>
            <View>
                <ProjectsList
                    height={"100%"}
                    width={"100%"}
                />
            </View>
        </SafeAreaView>

    );
}
