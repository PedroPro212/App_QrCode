import React, { useState } from 'react';
import { View, Image, Text, Alert, Button, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs';

import styles from '../style/home.style';
import Input from '../../../shared/components/input/Input';
import ButtonCustom from '../../../shared/components/button/Button';

import { generateQRCode } from '../../../shared/functions/gerarQrCode/gerarQRCode';
import { downloadImage } from '../../../shared/functions/downloadQrCode/downloadQRCode';

const Home = ({ navigation }: { navigation: any }) => {

    const [text, setText] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar QR Code personalizado</Text>

            {qrCodeUrl ? (
                <>
                    <Image source={{ uri: qrCodeUrl }} style={styles.qrCodeImage} />
                    <TouchableOpacity onPress={() => downloadImage(qrCodeUrl)}>
                        <Image style={styles.download} source={require('../../../shared/imgs/download.png')} />
                    </TouchableOpacity>
                </>
            ) : null}

            <Input
                placeholder="Digite aqui:"
                placeholderTextColor="#000000B3"
                value={text}
                onChangeText={(value) => setText(value)}
            />

            <ButtonCustom onPress={() => generateQRCode(text, setQrCodeUrl)} />
        </View>
    );
};

export default Home;
