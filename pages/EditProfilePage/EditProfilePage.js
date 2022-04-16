import React, {useLayoutEffect, useState, useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import ThemeContext from '../../Contexts/ThemeContext';
import {colors} from '../../constants/styleConstans';
import styles from './styles';

const EditProfilePage = ({navigation}) => {
  const {theme} = useContext(ThemeContext);

  const userData = useSelector(state => state.auth.user);

  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [email, setEmail] = useState(userData.email);
  const [number, setNumber] = useState(userData.number);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{color: colors.blue}}>Done</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={[styles.container, styles.containerThemed[theme]]}>
      <Text style={styles.label}>PUBLIC PROFILE</Text>
      <View style={[styles.itemContainerThemed[theme], styles.itemContainer]}>
        <View style={styles.inputContainer}>
          <Text style={[styles.textThemed[theme], styles.text]}>
            First name
          </Text>
          <TextInput
            placeholder="First name"
            placeholderTextColor={colors.grey}
            value={firstName}
            onChangeText={setFirstName}
            style={[styles.textThemed[theme], styles.text]}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.textThemed[theme], styles.text]}>Last Name</Text>
          <TextInput
            placeholder="Last name"
            placeholderTextColor={colors.grey}
            value={lastName}
            onChangeText={setLastName}
            style={[styles.textThemed[theme], styles.text]}
          />
        </View>
      </View>
      <Text style={[styles.label]}>PRIVATE DETAILS</Text>
      <View style={[styles.itemContainerThemed[theme], styles.itemContainer]}>
        <View style={styles.inputContainer}>
          <Text style={[styles.textThemed[theme], styles.text]}>Email</Text>
          <TextInput
            placeholder="Your email"
            placeholderTextColor={colors.grey}
            value={email}
            onChangeText={setEmail}
            style={[styles.textThemed[theme], styles.text]}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.textThemed[theme], styles.text]}>
            Phone Number
          </Text>
          <TextInput
            placeholder="Your phone number"
            placeholderTextColor={colors.grey}
            value={number}
            onChangeText={setNumber}
            style={[styles.textThemed[theme], styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfilePage;
