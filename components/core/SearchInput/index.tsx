import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';

import styles from './styles';
import { Text } from '..';
import { colors } from '../../../utils/themes';
import { SearchInputProps } from './type';

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  onSearch,
  placeholder = 'جست‌وجو...',
  containerStyle,
  showClearButton = true,
  returnKeyType = 'search',
  ...textInputProps
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, focused && styles.focused, containerStyle]}>
      <Pressable
        onPress={() => onSearch?.(value.trim())}
        style={styles.searchButton}
        accessibilityRole="button"
        accessibilityLabel="جست‌وجو"
      >
        <Text variant="h5" color={colors.textSecondary} align="center">
          ⌕
        </Text>
      </Pressable>

      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
        textAlign="right"
        returnKeyType={returnKeyType}
        onSubmitEditing={() => onSearch?.(value.trim())}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        underlineColorAndroid="transparent"
      />

      {showClearButton && value.length > 0 && (
        <Pressable
          onPress={() => onChangeText('')}
          style={styles.clearButton}
          accessibilityRole="button"
          accessibilityLabel="پاک کردن جست‌وجو"
          hitSlop={8}
        >
          <Text variant="body1" color={colors.textSecondary} align="center">
            ×
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default SearchInput;
