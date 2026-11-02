import React from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './styles';
import { RadioProps } from './type';
import { Text } from '..';

const Radio = ({ label, selected, onPress, disabled = false }: RadioProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected, disabled }}
      style={({ pressed }) => [
        styles.container,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <Text variant="h6">{label}</Text>
      <View style={[styles.outerCircle, selected && styles.selectedCircle]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
    </Pressable>
  );
};

export default Radio;
