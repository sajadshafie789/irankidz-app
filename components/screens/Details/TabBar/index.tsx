import React, { useState } from 'react';
import { View } from 'react-native';
import { colors } from '../../../../utils/themes';
import { Tabs, Text } from '../../../core';
import { TabItem } from '../../../core/Tabs/type';
import Rating from '../RateStar';
import { ProductAttribute } from '../../../../types/product';
import Descriptions from '../Description';

type Props = {
  title: string | undefined;
  productID: number | undefined;
  productAttribute?: ProductAttribute[];
};
const tab: TabItem[] = [
  {
    label: 'بررسی ها',
    value: '1',
    disabled: false,
  },

  {
    label: 'ضمانت',
    value: '2',
    disabled: false,
  },
  {
    label: 'توضیحات',
    value: '3',
    disabled: false,
  },
];
export default function TabBar({ title, productID, productAttribute }: Props) {
  const [activeTab, setActiveTab] = useState<string>('3');
  return (
    <View style={{ backgroundColor: colors.white, paddingHorizontal: 8 }}>
      <Tabs value={activeTab} tabs={tab} onChange={val => setActiveTab(val)} />
      {activeTab === '3' && (
        <Descriptions productAttribute={productAttribute} />
      )}
      {activeTab === '2' && (
        <View style={{ padding: 24 }}>
          <Text variant="subtitle2">ضمانت یافت نشد !</Text>
        </View>
      )}
      {activeTab === '1' && <Rating title={title} productID={productID} />}
    </View>
  );
}
