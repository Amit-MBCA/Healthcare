import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../../themes/colors';
import { fontFamily } from '../../assets/fonts/fontFamily';
import fontSizes from '../../themes/fontSizes';

const { width } = Dimensions.get('window');

interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.icon}>👋</Text>
          <Text style={styles.title}>Are you sure?</Text>
          <Text style={styles.subtitle}>You will be logged out of your account.</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
              <Text style={[styles.buttonText, { color: colors.dimSecondayColor }]}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={onConfirm}>
              <Text style={[styles.buttonText, { color: colors.white }]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBox: {
    width: width * 0.85,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8
  },
  icon: {
    fontSize: 40,
    marginBottom: 10
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSizes.f24,
    color: colors.pText,
    marginBottom: 8
  },
  subtitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSizes.f16,
    color: colors.dimSecondayColor,
    textAlign: 'center',
    marginBottom: 24
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButton: {
    backgroundColor: colors.lightGrayBg,
    marginRight: 10
  },
  logoutButton: {
    backgroundColor: colors.todo,
    marginLeft: 10
  },
  buttonText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSizes.f16,
  }
});

export default LogoutModal;
