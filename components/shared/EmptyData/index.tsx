import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { colors } from '../../../utils/themes';

type Props = {
  message?: string | React.ReactNode;
  onClose?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export default function EmptyData({ message, onClose, containerStyle }: Props) {
  return (
    <View
      style={[
        styles.container,
        onClose ? styles.containerWithClose : styles.containerCentered,
        containerStyle,
      ]}
    >
      {typeof message === 'string' ? (
        <Text style={styles.message}>{message}</Text>
      ) : (
        message
      )}

      {onClose && (
        <Pressable
          onPress={onClose}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="بستن"
          style={styles.closeButton}
        >
          <Text style={styles.closeText}>✕</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    borderRadius: 100,
  },
  containerCentered: {
    justifyContent: 'center',
  },
  containerWithClose: {
    justifyContent: 'space-between',
  },
  message: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  closeButton: {
    marginLeft: 8,
  },
  closeText: {
    color: '#CA8A04',
    fontSize: 12,
  },
});
