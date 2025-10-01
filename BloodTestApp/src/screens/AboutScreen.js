/**
 * About Screen Component
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../utils/Colors';

const AboutScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

        {/* App Header */}
        <LinearGradient colors={Colors.gradients.primary} style={styles.header}>
          <Icon name="medical-services" size={64} color={Colors.textWhite} />
          <Text style={styles.appTitle}>Blood Test Interpretation</Text>
          <Text style={styles.appSubtitle}>For Primary Care</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
        </LinearGradient>

        {/* Author Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Created By</Text>
          <View style={styles.authorCard}>
            <Icon name="person" size={40} color={Colors.primary} />
            <View style={styles.authorInfo}>
              <Text style={styles.authorName}>Dr Michael Banovic</Text>
              <Text style={styles.authorCredentials}>MBBS MSc IM(Edin) MRCGP</Text>
              <Text style={styles.authorDescription}>
                Primary Care Physician and Medical Educator
              </Text>
            </View>
          </View>
        </View>

        {/* About App */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About This App</Text>
          <Text style={styles.description}>
            Blood Test Interpretation is a comprehensive mobile reference guide designed
            specifically for primary care physicians. It provides systematic approaches
            to interpreting common blood tests, clinical pearls, red flags, and
            evidence-based guidelines.
          </Text>

          <View style={styles.features}>
            <Text style={styles.featuresTitle}>Features:</Text>
            <View style={styles.featureItem}>
              <Icon name="check-circle" size={16} color={Colors.success} />
              <Text style={styles.featureText}>13 comprehensive chapters</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="check-circle" size={16} color={Colors.success} />
              <Text style={styles.featureText}>50+ clinical pearls</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="check-circle" size={16} color={Colors.success} />
              <Text style={styles.featureText}>Red flag identification</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="check-circle" size={16} color={Colors.success} />
              <Text style={styles.featureText}>Offline access</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="check-circle" size={16} color={Colors.success} />
              <Text style={styles.featureText}>Search functionality</Text>
            </View>
          </View>
        </View>

        {/* Disclaimer */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medical Disclaimer</Text>
          <View style={styles.disclaimer}>
            <Icon name="warning" size={20} color={Colors.warning} />
            <Text style={styles.disclaimerText}>
              This app is designed for educational purposes and clinical reference.
              It should not replace clinical judgment or formal medical training.
              Always consider individual patient circumstances and seek senior
              advice when uncertain.
            </Text>
          </View>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact & Support</Text>
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => openLink('mailto:support@bloodtestapp.com')}>
            <Icon name="email" size={20} color={Colors.primary} />
            <Text style={styles.contactText}>support@bloodtestapp.com</Text>
          </TouchableOpacity>
        </View>

        {/* Legal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal</Text>
          <TouchableOpacity style={styles.legalItem}>
            <Text style={styles.legalText}>Privacy Policy</Text>
            <Icon name="chevron-right" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.legalItem}>
            <Text style={styles.legalText}>Terms of Service</Text>
            <Icon name="chevron-right" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.legalItem}>
            <Text style={styles.legalText}>Licenses</Text>
            <Icon name="chevron-right" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* Copyright */}
        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>
            © 2024 Dr Michael Banovic. All rights reserved.
          </Text>
          <Text style={styles.copyrightText}>
            Made with ❤️ for primary care physicians
          </Text>
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
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 30,
  },
  appTitle: {
    color: Colors.textWhite,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  appSubtitle: {
    color: Colors.textWhite,
    fontSize: 16,
    opacity: Colors.opacity.high,
    marginTop: 5,
  },
  version: {
    color: Colors.textWhite,
    fontSize: 14,
    opacity: Colors.opacity.medium,
    marginTop: 10,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 15,
  },
  authorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    padding: 20,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  authorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  authorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  authorCredentials: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600',
    marginTop: 2,
  },
  authorDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
    marginBottom: 20,
  },
  features: {
    backgroundColor: Colors.cardBackground,
    padding: 20,
    borderRadius: 15,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: Colors.textPrimary,
    marginLeft: 10,
  },
  disclaimer: {
    flexDirection: 'row',
    backgroundColor: '#fff3cd',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: Colors.warning,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 14,
    color: Colors.textPrimary,
    lineHeight: 20,
    marginLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    padding: 15,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  contactText: {
    fontSize: 16,
    color: Colors.primary,
    marginLeft: 10,
    fontWeight: '500',
  },
  legalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  legalText: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  copyright: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  copyrightText: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default AboutScreen;