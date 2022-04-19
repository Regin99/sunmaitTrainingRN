import React, {useLayoutEffect, useState, useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import ThemeContext from '../../Contexts/ThemeContext';
import {COLORS} from '../../constants/styleConstans';
import styles from './styles';

const EditProfile = ({navigation}) => {
  const {theme} = useContext(ThemeContext);

  const userData = useSelector(state => state.auth.user);

  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [email, setEmail] = useState(userData.email);
  const [number, setNumber] = useState(userData.number);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={[styles.container, styles.containerThemed[theme]]}>
      <Text style={styles.label}>PUBLIC PROFILE</Text>
      <View style={[styles.itemThemed[theme], styles.itemContainer]}>
        <View style={styles.inputContainer}>
          <Text style={[styles.itemThemed[theme], styles.text]}>
            First name
          </Text>
          <TextInput
            placeholder="First name"
            placeholderTextColor={COLORS.grey}
            value={firstName}
            onChangeText={setFirstName}
            style={[styles.itemThemed[theme], styles.text]}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.itemThemed[theme], styles.text]}>Last Name</Text>
          <TextInput
            placeholder="Last name"
            placeholderTextColor={COLORS.grey}
            value={lastName}
            onChangeText={setLastName}
            style={[styles.itemThemed[theme], styles.text]}
          />
        </View>
      </View>
      <Text style={[styles.label]}>PRIVATE DETAILS</Text>
      <View style={[styles.itemThemed[theme], styles.itemContainer]}>
        <View style={styles.inputContainer}>
          <Text style={[styles.itemThemed[theme], styles.text]}>Email</Text>
          <TextInput
            placeholder="Your email"
            placeholderTextColor={COLORS.grey}
            value={email}
            onChangeText={setEmail}
            style={[styles.itemThemed[theme], styles.text]}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.itemThemed[theme], styles.text]}>
            Phone Number
          </Text>
          <TextInput
            placeholder="Your phone number"
            placeholderTextColor={COLORS.grey}
            value={number}
            onChangeText={setNumber}
            style={[styles.itemThemed[theme], styles.text]}
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
