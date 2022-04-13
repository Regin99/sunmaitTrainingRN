import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {logOutActions} from '../../redux/actions/logOutActions';

const {logOutRequest} = logOutActions;

const ProfilePage = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>ProfilePage</Text>
      <TouchableOpacity
        style={styles.logOutButton}
        onPress={() => dispatch(logOutRequest())}>
        <Text style={styles.logOutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfilePage;
