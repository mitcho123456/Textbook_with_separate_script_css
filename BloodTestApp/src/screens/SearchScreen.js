/**
 * Search Screen Component
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Colors} from '../utils/Colors';
import {chaptersData, searchKeywords, normalRanges} from '../data/chaptersData';

const SearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);

    if (text.trim() === '') {
      setResults([]);
      return;
    }

    const searchLower = text.toLowerCase();
    const searchResults = [];

    // Search chapters
    chaptersData.forEach((chapter) => {
      if (
        chapter.title.toLowerCase().includes(searchLower) ||
        chapter.description.toLowerCase().includes(searchLower) ||
        searchKeywords[chapter.id]?.some(keyword =>
          keyword.toLowerCase().includes(searchLower)
        )
      ) {
        searchResults.push({
          type: 'chapter',
          data: chapter,
        });
      }
    });

    // Search normal ranges
    Object.entries(normalRanges).forEach(([category, ranges]) => {
      Object.entries(ranges).forEach(([test, range]) => {
        if (test.toLowerCase().includes(searchLower)) {
          searchResults.push({
            type: 'range',
            data: {category, test, range},
          });
        }
      });
    });

    setResults(searchResults);
  };

  const renderSearchResult = ({item}) => {
    if (item.type === 'chapter') {
      return (
        <TouchableOpacity
          style={styles.resultItem}
          onPress={() => navigation.navigate('ChaptersTab', {
            screen: 'ChapterDetail',
            params: {chapter: item.data},
          })}>
          <Icon name={item.data.icon} size={24} color={item.data.color} />
          <View style={styles.resultContent}>
            <Text style={styles.resultTitle}>{item.data.title}</Text>
            <Text style={styles.resultSubtitle}>{item.data.description}</Text>
          </View>
          <Icon name="chevron-right" size={20} color={Colors.textSecondary} />
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.resultItem}>
        <Icon name="info" size={24} color={Colors.info} />
        <View style={styles.resultContent}>
          <Text style={styles.resultTitle}>{item.data.test}</Text>
          <Text style={styles.resultSubtitle}>Normal: {item.data.range}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color={Colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search tests, chapters, normal ranges..."
            placeholderTextColor={Colors.textSecondary}
            value={searchText}
            onChangeText={handleSearch}
            autoFocus
          />
        </View>
      </View>

      {results.length > 0 ? (
        <FlatList
          data={results}
          renderItem={renderSearchResult}
          keyExtractor={(item, index) => `${item.type}-${index}`}
          style={styles.resultsList}
        />
      ) : searchText.length > 0 ? (
        <View style={styles.emptyState}>
          <Icon name="search-off" size={64} color={Colors.textSecondary} />
          <Text style={styles.emptyTitle}>No results found</Text>
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Icon name="search" size={64} color={Colors.textSecondary} />
          <Text style={styles.emptyTitle}>Start typing to search</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    color: Colors.textWhite,
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  resultsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  resultContent: {
    flex: 1,
    marginLeft: 15,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  resultSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 18,
    color: Colors.textSecondary,
    marginTop: 15,
  },
});

export default SearchScreen;