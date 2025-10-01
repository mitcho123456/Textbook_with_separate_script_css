/**
 * Settings Screen Component
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../utils/Colors';

const SettingsScreen = ({navigation}) => {
  const showComingSoon = () => {
    Alert.alert('Coming Soon', 'This feature will be available in a future update.');
  };

  const settingsOptions = [
    {
      title: 'About',
      subtitle: 'App information and credits',
      icon: 'info',
      onPress: () => navigation.navigate('About'),
    },
    {
      title: 'Notifications',
      subtitle: 'Manage notification preferences',
      icon: 'notifications',
      onPress: showComingSoon,
    },
    {
      title: 'Font Size',
      subtitle: 'Adjust text size for reading',
      icon: 'text-fields',
      onPress: showComingSoon,
    },
    {
      title: 'Offline Content',
      subtitle: 'Download chapters for offline use',
      icon: 'offline-bolt',
      onPress: showComingSoon,
    },
    {
      title: 'Export Notes',
      subtitle: 'Export your bookmarks and notes',
      icon: 'download',
      onPress: showComingSoon,
    },
  ];

  const renderSettingsItem = (item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.settingsItem}
      onPress={item.onPress}
      activeOpacity={0.7}>
      <Icon name={item.icon} size={24} color={Colors.primary} />
      <View style={styles.settingsContent}>
        <Text style={styles.settingsTitle}>{item.title}</Text>
        <Text style={styles.settingsSubtitle}>{item.subtitle}</Text>
      </View>
      <Icon name="chevron-right" size={20} color={Colors.textSecondary} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {settingsOptions.map(renderSettingsItem)}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  settingsContent: {
    flex: 1,
    marginLeft: 15,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  settingsSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});

export default SettingsScreen;