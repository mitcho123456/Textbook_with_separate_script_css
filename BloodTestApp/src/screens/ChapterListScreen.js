/**
 * Chapter List Screen Component
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Colors} from '../utils/Colors';
import {chaptersData, searchKeywords} from '../data/chaptersData';

const {width} = Dimensions.get('window');

const ChapterListScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredChapters, setFilteredChapters] = useState(chaptersData);

  const handleSearch = (text) => {
    setSearchText(text);

    if (text.trim() === '') {
      setFilteredChapters(chaptersData);
      return;
    }

    const filtered = chaptersData.filter((chapter) => {
      const searchLower = text.toLowerCase();
      const titleMatch = chapter.title.toLowerCase().includes(searchLower);
      const descriptionMatch = chapter.description.toLowerCase().includes(searchLower);
      const keywordMatch = searchKeywords[chapter.id]?.some(keyword =>
        keyword.toLowerCase().includes(searchLower)
      );

      return titleMatch || descriptionMatch || keywordMatch;
    });

    setFilteredChapters(filtered);
  };

  const navigateToChapter = (chapter) => {
    navigation.navigate('ChapterDetail', {chapter});
  };

  const renderChapterCard = ({item, index}) => (
    <TouchableOpacity
      style={styles.chapterCard}
      onPress={() => navigateToChapter(item)}
      activeOpacity={0.8}>
      <LinearGradient
        colors={[Colors.cardBackground, Colors.sectionBackground]}
        style={styles.cardGradient}>

        {/* Chapter Header */}
        <View style={styles.cardHeader}>
          <View style={[styles.iconContainer, {backgroundColor: item.color}]}>
            <Icon name={item.icon} size={28} color={Colors.textWhite} />
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.chapterNumber}>Chapter {item.id}</Text>
            <Text style={styles.readTime}>{item.estimatedReadTime}</Text>
          </View>
        </View>

        {/* Chapter Content */}
        <View style={styles.cardContent}>
          <Text style={styles.chapterTitle}>{item.title}</Text>
          <Text style={styles.chapterDescription} numberOfLines={2}>
            {item.description}
          </Text>

          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, {backgroundColor: item.color}]} />
            </View>
            <Text style={styles.progressText}>
              {item.sections?.length || 0} sections
            </Text>
          </View>

          {/* Features */}
          <View style={styles.featuresRow}>
            {item.clinicalPearls && (
              <View style={styles.featureTag}>
                <Icon name="diamond" size={12} color={Colors.pearlPrimary} />
                <Text style={styles.featureText}>Clinical Pearls</Text>
              </View>
            )}
            {item.redFlags && (
              <View style={styles.featureTag}>
                <Icon name="warning" size={12} color={Colors.redFlag} />
                <Text style={styles.featureText}>Red Flags</Text>
              </View>
            )}
          </View>
        </View>

        {/* Arrow Indicator */}
        <Icon
          name="chevron-right"
          size={24}
          color={Colors.textSecondary}
          style={styles.arrowIcon}
        />
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Icon name="search-off" size={64} color={Colors.textSecondary} />
      <Text style={styles.emptyTitle}>No chapters found</Text>
      <Text style={styles.emptySubtitle}>
        Try adjusting your search terms
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color={Colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search chapters, topics, tests..."
            placeholderTextColor={Colors.textSecondary}
            value={searchText}
            onChangeText={handleSearch}
            returnKeyType="search"
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <Icon name="clear" size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Results Count */}
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>
          {filteredChapters.length} chapter{filteredChapters.length !== 1 ? 's' : ''} found
        </Text>
      </View>

      {/* Chapters List */}
      <FlatList
        data={filteredChapters}
        renderItem={renderChapterCard}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyState}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.sectionBackground,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  resultsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  resultsText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  chapterCard: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardGradient: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  headerInfo: {
    alignItems: 'center',
  },
  chapterNumber: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  readTime: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  cardContent: {
    flex: 1,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 5,
  },
  chapterDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 15,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: Colors.border,
    borderRadius: 2,
    marginRight: 10,
  },
  progressFill: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  featuresRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  featureTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.sectionBackground,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  featureText: {
    fontSize: 10,
    color: Colors.textSecondary,
    marginLeft: 4,
    fontWeight: '500',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginTop: 15,
    marginBottom: 5,
  },
  emptySubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});

export default ChapterListScreen;