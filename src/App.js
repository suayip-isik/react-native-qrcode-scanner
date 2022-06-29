import React from 'react';

import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

// qr okuma işlemi için kullanılması gereken paketler 
// Kurulum ve detaylı kullanım örneği için: https://www.npmjs.com/package/react-native-qrcode-scanner
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const ScanScreen = () => {

  const qrDetail = (e) => {
    const data = e.data.toString();
    console.log("QR CODE BİLGİLERİ: ", e.data);
    //Alert.alert(data);
    // return (
    // console.log("return edilecek veri ");
    //  );
  }
  const isActive = () => {
    return false;
  }

  return (
    <QRCodeScanner
      onRead={(e) => qrDetail(e)}// qr code okutulduğu anda qr kodun bilgilerinin tutulduğu bir obje döner ve bu objeyi qrDetail() fonksiyonuna yollarız. Aynı zamanda qr okuma işlemi başarılı olduktan sonra yapılacak işlemler burada yazılır.
      flashMode={RNCamera.Constants.FlashMode.off}// telefonun flaşını kapatmak için (torch ile de açılır)
      topContent={
        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
      cameraTimeout={3000} //Kamera açıldıktan sonra kaç saniye sonra kapanacağını belirtir. 1000 = 1 saniye
      reactivate={isActive()} // true olduğunda sürekli qr okuma işlemi yapar
    //reactivateTimeout={800} // yeniden qr okumanın ne kadar süre olmasına karar verir.(milisaniye olarak)
    //showMarker={true} // Yeşil kare çizer
    //fadeIn={false}

    />
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default ScanScreen;