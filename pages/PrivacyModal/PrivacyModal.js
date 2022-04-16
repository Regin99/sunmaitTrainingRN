import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';

import PAGES from '../pages';

const PrivacyModal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.textContainer}
        contentContainerStyle={styles.scrollView}>
        <Text>
          "Wir nutzen Hotjar, um die Bedürfnisse unserer Nutzer besser zu
          verstehen und das Angebot und die Erfahrung auf dieser Webseite zu
          optimieren. Mithilfe der Technologie von Hotjar bekommen wir ein
          besseres Verständnis von den Erfahrungen unserer Nutzer (z.B. wieviel
          Zeit Nutzer auf welchen Seiten verbringen, welche Links sie anklicken,
          was sie mögen und was nicht etc.) und das hilft uns, unser Angebot am
          Feedback unserer Nutzer auszurichten. Hotjar arbeitet mit Cookies und
          anderen Technologien, um Daten über das Verhalten unserer Nutzer und
          über ihre Endgeräte zu erheben, insbesondere IP Adresse des Geräts
          (wird während Ihrer Website-Nutzung nur in anonymisierter Form erfasst
          und gespeichert), Bildschirmgröße, Gerätetyp (Unique Device
          Identifiers), Informationen über den verwendeten Browser, Standort
          (nur Land), zum Anzeigen unserer Webseite bevorzugte Sprache. Hotjar
          speichert diese Informationen in unserem Auftrag in einem
          pseudonymisierten Nutzerprofil. Hotjar ist es vertraglich verboten,
          die in unserem Auftrag erhobenen Daten zu verkaufen."Wir nutzen
          Hotjar, um die Bedürfnisse unserer Nutzer besser zu verstehen und das
          Angebot und die Erfahrung auf dieser Webseite zu optimieren. Mithilfe
          der Technologie von Hotjar bekommen wir ein besseres Verständnis von
          den Erfahrungen unserer Nutzer (z.B. wieviel Zeit Nutzer auf welchen
          Seiten verbringen, welche Links sie anklicken, was sie mögen und was
          nicht etc.) und das hilft uns, unser Angebot am Feedback unserer
          Nutzer auszurichten. Hotjar arbeitet mit Cookies und anderen
          Technologien, um Daten über das Verhalten unserer Nutzer und über ihre
          Endgeräte zu erheben, insbesondere IP Adresse des Geräts (wird während
          Ihrer Website-Nutzung nur in anonymisierter Form erfasst und
          gespeichert), Bildschirmgröße, Gerätetyp (Unique Device Identifiers),
          Informationen über den verwendeten Browser, Standort (nur Land), zum
          Anzeigen unserer Webseite bevorzugte Sprache. Hotjar speichert diese
          Informationen in unserem Auftrag in einem pseudonymisierten
          Nutzerprofil. Hotjar ist es vertraglich verboten, die in unserem
          Auftrag erhobenen Daten zu verkaufen.
        </Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate(PAGES.SIGN_UP)}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrivacyModal;
