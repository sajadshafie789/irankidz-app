
import React from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

import { styles } from './styles';
import { InputProps } from './type';



const GlobalInput: React.FC<InputProps> = ({
  label,
  error,
  containerStyle,
  style,
  ...inputProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text style={styles.label}>{label}</Text>
      ) : null}

      <TextInput
        {...inputProps}
        style={[
          styles.input,
          error ? styles.inputError : undefined,
          style,
        ]}
        placeholderTextColor="#9CA3AF"
      />

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
    </View>
  );
};

export default GlobalInput;
