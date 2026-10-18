
import React from 'react';
import {
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';

import { styles } from './styles';
import { ModalProps } from './type';



const GlobalModal: React.FC<ModalProps> = ({
  visible,
  onClose,
  title,
  description,
  children,
  closeOnBackdrop = true,
  showCloseButton = true,
  animationType = 'fade',
  contentStyle,
}) => {
  const handleRequestClose = () => {
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType={animationType}
      statusBarTranslucent
      onRequestClose={handleRequestClose}
    >
      <View style={styles.overlay}>
        <Pressable
          style={styles.backdrop}
          onPress={() => {
            if (closeOnBackdrop) {
              onClose();
            }
          }}
          accessibilityLabel="بستن پنجره"
          accessibilityRole="button"
        />

        <View style={styles.centeredContent}>
          <View style={[styles.content, contentStyle]}>
            {(title || showCloseButton) && (
              <View style={styles.header}>
                <View style={styles.headerText}>
                  {title ? (
                    <Text style={styles.title}>{title}</Text>
                  ) : null}

                  {description ? (
                    <Text style={styles.description}>
                      {description}
                    </Text>
                  ) : null}
                </View>

                {showCloseButton && (
                  <Pressable
                    onPress={onClose}
                    hitSlop={10}
                    accessibilityRole="button"
                    accessibilityLabel="بستن"
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeText}>×</Text>
                  </Pressable>
                )}
              </View>
            )}

            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GlobalModal;
