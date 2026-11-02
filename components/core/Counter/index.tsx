import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { CounterProps } from './type';
import { styles } from './styles';
import { Text } from '..';

const Counter = ({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange,
}: CounterProps) => {
  const [count, setCount] = useState(
    Math.min(max, Math.max(min, initialValue)),
  );

  const updateCount = (value: number) => {
    const nextValue = Math.min(max, Math.max(min, value));
    setCount(nextValue);
    onChange?.(nextValue);
  };

  return (
    <View style={styles.container}>
      {/* منفی - سمت چپ */}
      <Pressable
        style={[styles.button, count >= max && styles.disabled]}
        onPress={() => updateCount(count + 1)}
        disabled={count >= max}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>

      {/* تعداد */}
      <Text style={styles.count} variant="subtitle1">
        {count}
      </Text>

      {/* مثبت - سمت راست */}
      <Pressable
        style={[styles.button, count <= min && styles.disabled]}
        onPress={() => updateCount(count - 1)}
        disabled={count <= min}
      >
        <Text style={styles.buttonText}>−</Text>
      </Pressable>
    </View>
  );
};

export default Counter;
