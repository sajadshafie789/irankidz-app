import React from 'react';
import { View, Pressable, ScrollView } from 'react-native';

import { colors } from '../../../utils/themes';
import { styles } from './styles';
import { TabsProps } from './type';
import { Text } from '..';

const Tabs = ({
  tabs,
  value,
  onChange,
  scrollable = false,
  indicatorColor = colors.primary,
  textColor = colors.textSecondary,
  activeTextColor = colors.primary,
  style,
}: TabsProps) => {
  const content = (
    <View style={styles.row}>
      {tabs.map(tab => {
        const active = tab.value === value;

        return (
          <Pressable
            key={tab.value}
            disabled={tab.disabled}
            onPress={() => onChange(tab.value)}
            accessibilityRole="tab"
            accessibilityState={{
              selected: active,
              disabled: tab.disabled,
            }}
            style={[
              styles.tab,
              !scrollable && styles.flexTab,
              tab.disabled && styles.disabled,
            ]}
          >
            <Text
              numberOfLines={1}
              variant="h4"
              style={[
                styles.label,
                { color: active ? activeTextColor : textColor },
                active && styles.activeLabel,
              ]}
            >
              {tab.label}
            </Text>

            <View
              style={[
                styles.indicator,
                {
                  backgroundColor: active ? indicatorColor : 'transparent',
                },
              ]}
            />
          </Pressable>
        );
      })}
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      {scrollable ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </View>
  );
};

export default Tabs;
