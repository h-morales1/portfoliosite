import { Pressable, Text, StyleSheet } from "react-native";
import {useState} from 'react';

const PillBtn = ({buttonText}) => {
    const [pillvisual, setPillVisual] = useState(styles.PillButton);
    const [pillTextvisual, setPillTextVisual] = useState(styles.BtnText);
    return (
        <Pressable style={pillvisual}
                   onHoverIn={() => {
                       setPillVisual(styles.PillBtnHover);
                       setPillTextVisual(styles.BtnTextHover);
                   }}
            onHoverOut={() => {
                setPillVisual(styles.PillButton);
                setPillTextVisual(styles.BtnText);
            }}
        >
            <Text style={pillTextvisual}>{buttonText}</Text>

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
    BtnTextHover:{
        fontSize: 20,
        fontWeight: 'normal',
        color: "#fff",

    },
    PillBtnHover: {
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 5,

    },
})
