import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Text } from '../../../core';
import { ProductAttribute } from '../../../../types/product';
import { colors } from '../../../../utils/themes';

type Props = {
  productAttribute?: ProductAttribute[];
};

export default function Descriptions({ productAttribute }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="subtitle2">کفش صورتی دخترانه طرح اکلیلی جلو چسبی.</Text>

      <View style={{ marginTop: 80 }}>
        <Text variant="h4" color={colors.primary} style={{ marginBottom: 12 }}>
          مشخصات
        </Text>

        <View style={styles.table}>
          {productAttribute?.map((item, index) => (
            <View key={index} style={styles.row}>
              <View style={styles.attributeColumn}>
                <Text variant="h5">{item.attribute.faName}</Text>
              </View>

              <View style={styles.valueColumn}>
                <Text variant="h5">{item.subAttribute.faName}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
