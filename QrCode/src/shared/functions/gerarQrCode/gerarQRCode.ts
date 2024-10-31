import { Alert } from 'react-native';

export const generateQRCode = async (text: string, setQrCodeUrl: (url: string) => void) => {
    if (text) {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
        setQrCodeUrl(url);
    } else {
        Alert.alert('Digite algum texto para gerar o QR Code!');
    }
};