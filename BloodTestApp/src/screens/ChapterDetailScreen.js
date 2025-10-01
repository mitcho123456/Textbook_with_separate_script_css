/**
 * Chapter Detail Screen Component
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Share,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Colors} from '../utils/Colors';

const {width} = Dimensions.get('window');

const ChapterDetailScreen = ({route, navigation}) => {
  const {chapter} = route.params;
  const [activeSection, setActiveSection] = useState(0);
  const scrollViewRef = useRef(null);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this medical reference: ${chapter.title} - Blood Test Interpretation App by Dr Michael Banovic`,
        title: chapter.title,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const scrollToSection = (index) => {
    setActiveSection(index);
    // Implement smooth scroll to section if needed
  };

  const renderClinicalPearl = (pearl, index) => (
    <LinearGradient
      key={index}
      colors={Colors.gradients.pearl}
      style={styles.clinicalPearl}>
      <View style={styles.pearlHeader}>
        <Icon name="diamond" size={20} color={Colors.textWhite} />
        <Text style={styles.pearlTitle}>Clinical Pearl</Text>
      </View>
      <Text style={styles.pearlSubtitle}>"{pearl.title}"</Text>
      <Text style={styles.pearlContent}>{pearl.content}</Text>
    </LinearGradient>
  );

  const renderRedFlag = (flag, index) => (
    <View key={index} style={styles.redFlagItem}>
      <Icon name="warning" size={16} color={Colors.redFlag} />
      <Text style={styles.redFlagText}>{flag}</Text>
    </View>
  );

  const renderSectionNavigation = () => (
    <View style={styles.sectionNav}>
      <Text style={styles.sectionNavTitle}>Chapter Sections</Text>
      {chapter.sections?.map((section, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.sectionNavItem,
            activeSection === index && styles.sectionNavActive
          ]}
          onPress={() => scrollToSection(index)}>
          <Text style={[
            styles.sectionNavText,
            activeSection === index && styles.sectionNavTextActive
          ]}>
            {index + 1}. {section}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={[chapter.color || Colors.primary, Colors.primaryDark]}
        style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerTop}>
            <View style={styles.headerInfo}>
              <Text style={styles.chapterNumber}>Chapter {chapter.id}</Text>
              <Text style={styles.chapterTitle}>{chapter.title}</Text>
              <Text style={styles.chapterSubtitle}>{chapter.description}</Text>
            </View>
            <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
              <Icon name="share" size={24} color={Colors.textWhite} />
            </TouchableOpacity>
          </View>

          <View style={styles.headerStats}>
            <View style={styles.statItem}>
              <Icon name="schedule" size={16} color={Colors.textWhite} />
              <Text style={styles.statText}>{chapter.estimatedReadTime}</Text>
            </View>
            <View style={styles.statItem}>
              <Icon name="format-list-numbered" size={16} color={Colors.textWhite} />
              <Text style={styles.statText}>{chapter.sections?.length || 0} sections</Text>
            </View>
            {chapter.clinicalPearls && (
              <View style={styles.statItem}>
                <Icon name="diamond" size={16} color={Colors.textWhite} />
                <Text style={styles.statText}>{chapter.clinicalPearls.length} pearls</Text>
              </View>
            )}
          </View>
        </View>
      </LinearGradient>

      <ScrollView
        ref={scrollViewRef}
        style={styles.content}
        showsVerticalScrollIndicator={false}>

        {/* Quick Navigation */}
        {renderSectionNavigation()}

        {/* Content Sections */}
        <View style={styles.contentSection}>
          <Text style={styles.contentTitle}>Chapter Content</Text>
          <Text style={styles.contentText}>
            This chapter provides a comprehensive guide to {chapter.title.toLowerCase()}.
            The content includes systematic approaches, clinical pearls, red flags, and
            practical interpretation guidelines for primary care physicians.
          </Text>

          {/* Key Learning Points */}
          {chapter.sections && (
            <View style={styles.learningPoints}>
              <Text style={styles.sectionTitle}>Key Learning Points</Text>
              {chapter.sections.map((section, index) => (
                <View key={index} style={styles.learningPoint}>
                  <View style={styles.pointNumber}>
                    <Text style={styles.pointNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.pointText}>{section}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Clinical Pearls Section */}
        {chapter.clinicalPearls && chapter.clinicalPearls.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Clinical Pearls</Text>
            {chapter.clinicalPearls.map(renderClinicalPearl)}
          </View>
        )}

        {/* Red Flags Section */}
        {chapter.redFlags && chapter.redFlags.length > 0 && (
          <View style={styles.section}>
            <View style={styles.redFlagHeader}>
              <Icon name="warning" size={24} color={Colors.redFlag} />
              <Text style={styles.redFlagHeaderText}>Red Flags - Urgent Action Required</Text>
            </View>
            <View style={styles.redFlagContainer}>
              {chapter.redFlags.map(renderRedFlag)}
            </View>
          </View>
        )}

        {/* Author Attribution */}
        <View style={styles.attribution}>
          <Text style={styles.attributionText}>
            Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="bookmark-border" size={24} color={Colors.primary} />
          <Text style={styles.actionText}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Icon name="share" size={24} color={Colors.primary} />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="note-add" size={24} color={Colors.primary} />
          <Text style={styles.actionText}>Notes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  headerContent: {
    marginTop: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerInfo: {
    flex: 1,
  },
  chapterNumber: {
    color: Colors.textWhite,
    fontSize: 14,
    opacity: Colors.opacity.high,
    fontWeight: '600',
  },
  chapterTitle: {
    color: Colors.textWhite,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  chapterSubtitle: {
    color: Colors.textWhite,
    fontSize: 16,
    opacity: Colors.opacity.high,
    lineHeight: 22,
  },
  shareButton: {
    padding: 10,
  },
  headerStats: {
    flexDirection: 'row',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  statText: {
    color: Colors.textWhite,
    fontSize: 12,
    marginLeft: 5,
    opacity: Colors.opacity.high,
  },
  content: {
    flex: 1,
  },
  sectionNav: {
    backgroundColor: Colors.cardBackground,
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionNavTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  sectionNavItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  sectionNavActive: {
    backgroundColor: Colors.primary,
  },
  sectionNavText: {
    fontSize: 14,
    color: Colors.textPrimary,
  },
  sectionNavTextActive: {
    color: Colors.textWhite,
    fontWeight: '600',
  },
  contentSection: {
    padding: 15,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  contentText: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
    marginBottom: 20,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 15,
  },
  learningPoints: {
    marginTop: 10,
  },
  learningPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  pointNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  pointNumberText: {
    color: Colors.textWhite,
    fontSize: 12,
    fontWeight: 'bold',
  },
  pointText: {
    flex: 1,
    fontSize: 15,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
  clinicalPearl: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  pearlHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pearlTitle: {
    color: Colors.textWhite,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  pearlSubtitle: {
    color: Colors.textWhite,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pearlContent: {
    color: Colors.textWhite,
    fontSize: 14,
    lineHeight: 20,
  },
  redFlagHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  redFlagHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.redFlag,
    marginLeft: 8,
  },
  redFlagContainer: {
    backgroundColor: Colors.redFlagBackground,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: Colors.redFlag,
  },
  redFlagItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  redFlagText: {
    flex: 1,
    fontSize: 14,
    color: Colors.textPrimary,
    marginLeft: 10,
    lineHeight: 20,
  },
  attribution: {
    padding: 20,
    alignItems: 'center',
  },
  attributionText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontStyle: 'italic',
  },
  actionBar: {
    flexDirection: 'row',
    backgroundColor: Colors.cardBackground,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  actionText: {
    fontSize: 12,
    color: Colors.primary,
    marginTop: 4,
    fontWeight: '500',
  },
});

export default ChapterDetailScreen;