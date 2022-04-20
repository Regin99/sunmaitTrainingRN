import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';

import {useDispatch, useSelector} from 'react-redux';
import {logOutActions} from '../../redux/actions/logOutActions';

import PAGES from '../pages';

//icons
import ProfileIcon from '../../assets/ProfileIcon.js';
import FavoriteIcon from '../../assets/FavoriteIcon.js';
import SettingsIcon from '../../assets/SettingsIcon';

import styles from './styles';

const {logOutRequest} = logOutActions;

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {avatar, email} = useSelector(state => state.auth.user);
  const {theme} = useSelector(state => state.settings);

  return (
    <View style={[styles.container, styles.containerThemed[theme]]}>
      <View style={styles.centeredContainer}>
        <UploadPhoto avatar={avatar} />
        <Text style={[styles.text, styles.textThemed[theme], styles.email]}>
          {email}
        </Text>
      </View>
      <View>
        <View style={styles.button}>
          <FavoriteIcon size={20} />
          <TouchableOpacity>
            <Text style={[styles.buttonText, styles.buttonTextThemed[theme]]}>
              My Favorites
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <ProfileIcon size={20} />

          <TouchableOpacity
            onPress={() => navigation.navigate(PAGES.EDIT_PROFILE)}>
            <Text style={[styles.buttonText, styles.buttonTextThemed[theme]]}>
              Account Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <SettingsIcon size={20} />
          <TouchableOpacity onPress={() => navigation.navigate(PAGES.SETTINGS)}>
            <Text style={[styles.buttonText, styles.buttonTextThemed[theme]]}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.logOutButton}
        onPress={() => dispatch(logOutRequest())}>
        <Text style={[styles.text, styles.buttonTextThemed[theme]]}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
