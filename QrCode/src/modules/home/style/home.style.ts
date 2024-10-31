import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', // Alinha o conteúdo horizontalmente no centro
        backgroundColor: '#232323',
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center', // Centraliza o texto do título
        marginBottom: 20,    // Espaçamento abaixo do título para dar mais organização visual
    },
    qrCodeImage: {
        width: 150,
        height: 150,
    },
    download: {
        width: 40,
        height: 40,
        marginTop: 10,
        marginBottom: 10
    }
});

export default styles;