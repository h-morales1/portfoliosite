import { Pressable, Text, StyleSheet } from "react-native";

const PillBtn = ({buttonText}) => {
    return (
        <Pressable style={styles.PillButton}>
            <Text style={styles.BtnText}>{buttonText}</Text>

        </Pressable>
    );
}

export default PillBtn;

const styles = StyleSheet.create({
    PillButton: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 5,

    },
    BtnText: {
        fontSize: 20,
        fontWeight: 'normal',

    },
})
