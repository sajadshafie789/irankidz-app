
import React from 'react';
import {
  Pressable,
  Text,
  View,

} from 'react-native';

import { styles } from './styles';
import { CheckboxProps } from './type';


const GlobalCheckbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  error,
  containerStyle,
  checkboxStyle,
  labelStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Pressable
        onPress={() => onChange(!checked)}
        disabled={disabled}
        accessibilityRole="checkbox"
        accessibilityState={{ checked, disabled }}
        style={({ pressed }) => [
          styles.container,
          disabled && styles.disabled,
          pressed && !disabled && styles.pressed,
        ]}
      >
        <View
          style={[
            styles.checkbox,
            checked && styles.checked,
            error && styles.errorBorder,
            checkboxStyle,
          ]}
        >
          {checked && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </View>

        {label ? (
          <Text style={[styles.label, labelStyle]}>
            {label}
          </Text>
        ) : null}
      </Pressable>

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
    </View>
  );
};

export default GlobalCheckbox;
