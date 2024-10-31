// utils/downloadImage.js
import RNFS from 'react-native-fs';
import { Alert } from 'react-native';

export const downloadImage = async (imageUrl: string) => {
  if (!imageUrl) return;

  try {
    const downloadDest = `${RNFS.DownloadDirectoryPath}/qr_code_image.png`;

    await RNFS.downloadFile({
      fromUrl: imageUrl,
      toFile: downloadDest,
    }).promise;

    Alert.alert("Download", "Imagem baixada com sucesso!");
  } catch (error) {
    console.log("Erro ao baixar a imagem:", error);
    Alert.alert("Erro", "Falha ao baixar a imagem.");
  }
};