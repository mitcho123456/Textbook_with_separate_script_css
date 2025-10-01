/**
 * Clinical Pearl Card Component
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../utils/Colors';

const ClinicalPearlCard = ({pearl, index}) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'interpretation': return 'insights';
      case 'diagnostic': return 'search';
      case 'differential': return 'compare';
      case 'oncology': return 'warning';
      case 'hematology': return 'bloodtype';
      case 'clinical': return 'medical-services';
      default: return 'lightbulb';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'interpretation': return '#3498db';
      case 'diagnostic': return '#27ae60';
      case 'differential': return '#f39c12';
      case 'oncology': return '#e74c3c';
      case 'hematology': return '#8e44ad';
      case 'clinical': return '#2c3e50';
      default: return Colors.primary;
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={Colors.gradients.pearl}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>

        {/* Pearl Header */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Icon name="diamond" size={20} color={Colors.textWhite} />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Clinical Pearl</Text>
            {pearl.category && (
              <View style={styles.categoryContainer}>
                <Icon
                  name={getCategoryIcon(pearl.category)}
                  size={12}
                  color={Colors.textWhite}
                />
                <Text style={styles.categoryText}>
                  {pearl.category.charAt(0).toUpperCase() + pearl.category.slice(1)}
                </Text>
              </View>
            )}
          </View>
          <Text style={styles.pearlNumber}>#{index + 1}</Text>
        </View>

        {/* Pearl Content */}
        <View style={styles.content}>
          <Text style={styles.pearlTitle}>"{pearl.title}"</Text>
          <Text style={styles.pearlText}>{pearl.content}</Text>
        </View>

        {/* Bottom accent */}
        <View style={styles.bottomAccent} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  gradient: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  headerTitle: {
    color: Colors.textWhite,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    color: Colors.textWhite,
    fontSize: 10,
    marginLeft: 4,
    opacity: 0.9,
    fontWeight: '500',
  },
  pearlNumber: {
    color: Colors.textWhite,
    fontSize: 12,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  content: {
    marginBottom: 10,
  },
  pearlTitle: {
    color: Colors.textWhite,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: 24,
  },
  pearlText: {
    color: Colors.textWhite,
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.95,
  },
  bottomAccent: {
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    marginTop: 10,
  },
});

export default ClinicalPearlCard;