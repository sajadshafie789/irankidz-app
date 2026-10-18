
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
} from 'react-native';

import { styles } from './styles';
import { ButtonProps } from './type';
import { colors } from '../../../utils/themes';



const GlobalButton: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  loading = false,
  disabled = false,
  fullWidth = true,
  textStyle,
  buttonStyle,
  onPress,
  ...pressableProps
}) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      {...pressableProps}
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
      style={({ pressed }) => [
        styles.button,
        styles[variant],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        pressed && !isDisabled && styles.pressed,
        buttonStyle,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' ? colors.primary : '#FFFFFF'}
          size="small"
        />
      ) : (
        <Text
          style={[
            styles.text,
            styles[`${variant}Text`],
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default GlobalButton;
