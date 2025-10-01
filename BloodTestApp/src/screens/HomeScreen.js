/**
 * Home Screen Component
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Colors} from '../utils/Colors';
import {chaptersData} from '../data/chaptersData';

const {width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const quickAccessChapters = chaptersData.slice(0, 4); // Show first 4 chapters

  const navigateToChapter = (chapter) => {
    navigation.navigate('ChaptersTab', {
      screen: 'ChapterDetail',
      params: {chapter},
    });
  };

  const navigateToAllChapters = () => {
    navigation.navigate('ChaptersTab');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <LinearGradient
          colors={Colors.gradients.primary}
          style={styles.headerGradient}>
          <View style={styles.headerContent}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.titleText}>Blood Test Interpretation</Text>
            <Text style={styles.subtitleText}>
              Comprehensive guide for primary care physicians
            </Text>
            <Text style={styles.authorText}>
              Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
            </Text>
          </View>
        </LinearGradient>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Icon name="book" size={30} color={Colors.primary} />
            <Text style={styles.statNumber}>{chaptersData.length}</Text>
            <Text style={styles.statLabel}>Chapters</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="assignment" size={30} color={Colors.secondary} />
            <Text style={styles.statNumber}>50+</Text>
            <Text style={styles.statLabel}>Clinical Pearls</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="warning" size={30} color={Colors.redFlag} />
            <Text style={styles.statNumber}>30+</Text>
            <Text style={styles.statLabel}>Red Flags</Text>
          </View>
        </View>

        {/* Quick Access Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Access</Text>
            <TouchableOpacity onPress={navigateToAllChapters}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.quickAccessGrid}>
            {quickAccessChapters.map((chapter, index) => (
              <TouchableOpacity
                key={index}
                style={styles.quickAccessCard}
                onPress={() => navigateToChapter(chapter)}>
                <LinearGradient
                  colors={[Colors.cardBackground, Colors.sectionBackground]}
                  style={styles.cardGradient}>
                  <Icon
                    name={chapter.icon}
                    size={40}
                    color={Colors.primary}
                    style={styles.cardIcon}
                  />
                  <Text style={styles.cardTitle}>{chapter.shortTitle}</Text>
                  <Text style={styles.cardSubtitle} numberOfLines={2}>
                    {chapter.description}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Features</Text>

          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <Icon name="offline-bolt" size={24} color={Colors.success} />
              <Text style={styles.featureText}>Offline Access</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="search" size={24} color={Colors.info} />
              <Text style={styles.featureText}>Quick Search</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="bookmark" size={24} color={Colors.warning} />
              <Text style={styles.featureText}>Bookmarks</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="share" size={24} color={Colors.secondary} />
              <Text style={styles.featureText}>Share Content</Text>
            </View>
          </View>
        </View>

        {/* Clinical Pearl Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Clinical Pearl</Text>
          <LinearGradient
            colors={Colors.gradients.pearl}
            style={styles.clinicalPearl}>
            <Icon name="diamond" size={24} color={Colors.textWhite} />
            <Text style={styles.pearlTitle}>Never Read in Isolation</Text>
            <Text style={styles.pearlText}>
              A single abnormal value means little - it's the pattern of abnormalities that reveals the diagnosis.
            </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerGradient: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  headerContent: {
    alignItems: 'center',
  },
  welcomeText: {
    color: Colors.textWhite,
    fontSize: 16,
    opacity: Colors.opacity.high,
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  subtitleText: {
    color: Colors.textWhite,
    fontSize: 16,
    textAlign: 'center',
    opacity: Colors.opacity.high,
    fontStyle: 'italic',
  },
  authorText: {
    color: Colors.textWhite,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    opacity: Colors.opacity.medium,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: Colors.cardBackground,
    marginHorizontal: 20,
    marginTop: -15,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginTop: 5,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  viewAllText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickAccessCard: {
    width: (width - 60) / 2,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardGradient: {
    padding: 20,
    alignItems: 'center',
    height: 150,
    justifyContent: 'center',
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    padding: 15,
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: '500',
  },
  clinicalPearl: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  pearlTitle: {
    color: Colors.textWhite,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  pearlText: {
    color: Colors.textWhite,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default HomeScreen;