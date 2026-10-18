
import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { styles } from './styles';
import { GlobalSelectProps, SelectOption } from './type';



const GlobalSelect: React.FC<GlobalSelectProps> = ({
  label,
  placeholder = 'انتخاب کنید',
  options,
  value,
  onChange,
  error,
  disabled = false,
  searchable = false,
  searchPlaceholder = 'جست‌وجو...',
  containerStyle,
}) => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');

  const selectedOption = options.find(
    option => option.value === value,
  );

  const filteredOptions = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    if (!query) {
      return options;
    }

    return options.filter(option =>
      option.label.toLocaleLowerCase().includes(query),
    );
  }, [options, search]);

  const closeModal = () => {
    setVisible(false);
    setSearch('');
  };

  const handleSelect = (option: SelectOption) => {
    onChange(option.value);
    closeModal();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text style={styles.label}>{label}</Text>
      ) : null}

      <Pressable
        onPress={() => !disabled && setVisible(true)}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel={label ?? placeholder}
        style={[
          styles.select,
          error ? styles.selectError : undefined,
          disabled ? styles.disabled : undefined,
        ]}
      >
        <Text
          numberOfLines={1}
          style={[
            styles.selectedText,
            !selectedOption && styles.placeholderText,
          ]}
        >
          {selectedOption?.label ?? placeholder}
        </Text>

        <Text style={styles.arrow}>⌄</Text>
      </Pressable>

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.overlay}>
          <Pressable
            style={styles.backdrop}
            onPress={closeModal}
            accessibilityLabel="بستن فهرست"
            accessibilityRole="button"
          />

          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {label ?? 'انتخاب گزینه'}
              </Text>

              <Pressable
                onPress={closeModal}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel="بستن"
              >
                <Text style={styles.closeButton}>×</Text>
              </Pressable>
            </View>

            {searchable ? (
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder={searchPlaceholder}
                placeholderTextColor="#9CA3AF"
                style={styles.searchInput}
                autoCapitalize="none"
                autoCorrect={false}
              />
            ) : null}

            <FlatList
              data={filteredOptions}
              keyExtractor={item => item.value}
              keyboardShouldPersistTaps="handled"
              style={styles.list}
              ListEmptyComponent={
                <Text style={styles.emptyText}>
                  گزینه‌ای پیدا نشد
                </Text>
              }
              renderItem={({ item }) => {
                const isSelected = item.value === value;

                return (
                  <Pressable
                    onPress={() => handleSelect(item)}
                    style={[
                      styles.option,
                      isSelected && styles.selectedOption,
                    ]}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        isSelected && styles.selectedOptionText,
                      ]}
                    >
                      {item.label}
                    </Text>

                    {isSelected ? (
                      <Text style={styles.checkmark}>✓</Text>
                    ) : null}
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GlobalSelect;
