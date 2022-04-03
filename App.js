/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Checkbox from './components/Checkbox/Checkbox';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useState, useRef} from 'react';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [imageSource, setImageSource] = useState({
    uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png',
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const numberRef = useRef(null);
  const passwordRef = useRef(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log(imageSource);
  const selectImage = option => {
    switch (option) {
      case 'camera':
        launchCamera({}, response => {
          setModalVisible(!modalVisible);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            setImageSource({uri: response.assets[0].uri});
          }
        });
        break;
      case 'gallery':
        launchImageLibrary({}, response => {
          setModalVisible(!modalVisible);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            setImageSource({uri: response.assets[0].uri});
          }
        });
        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Modal
          visible={modalVisible}
          animationType="fade"
          style={styles.modal}
          transparent={true}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableWithoutFeedback
            style={{height: '100%', width: '100%'}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.modal}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  selectImage('camera');
                }}>
                <Text>From camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  selectImage('gallery');
                }}>
                <Text>From gallery</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableOpacity
          style={styles.uploadContainer}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Image style={styles.avatarIcon} source={imageSource} />
          <Text>Upload a photo</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="email-address"
            placeholder="Enter your email"
            onSubmitEditing={() => numberRef.current.focus()}
          />
          <TextInput
            ref={numberRef}
            keyboardType="phone-pad"
            placeholder="Enter your numer"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              ref={passwordRef}
              placeholder="Enter your password"
              secureTextEntry={showButton}
            />
            <TouchableOpacity onPress={() => setShowButton(!showButton)}>
              <Text>{showButton ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
          </View>
          <Checkbox type="square" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatarIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modal: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalButton: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  uploadContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none',
  },

  backgroundStyle: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
