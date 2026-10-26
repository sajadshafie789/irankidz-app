import React from 'react';
import { FlatList, View } from 'react-native';

import HomeHeader from '../../../../components/layouts/header';

import ImagesBox from '../../../../components/screens/home/ImagesBox';
import Option from '../../../../components/screens/home/Options';
import { colors } from '../../../../utils/themes';
import Categories from '../../../../components/screens/home/Categories';
import TwoImage from '../../../../components/screens/home/TwoImage';
import IrankidzNewest from '../../../../components/screens/home/IrankidzNewest';
import ProductNewest from '../../../../components/screens/home/ProductNewest';
import Clothing from '../../../../components/screens/home/Clothing';
import Sets from '../../../../components/screens/home/Sets';
import Games from '../../../../components/screens/home/Games';
import BrandList from '../../../../components/screens/home/Brands';
import Favorite from '../../../../components/screens/home/Favorite';
import BestSeller from '../../../../components/screens/home/BestSeller';
import MostViewer from '../../../../components/screens/home/MostViewer';

const Home: React.FC = ({}) => {
  return (
    <FlatList
      data={[]}
      keyExtractor={(_, index) => String(index)}
      ListHeaderComponent={
        <View style={{ paddingHorizontal: 8 }}>
          <HomeHeader />
          <ImagesBox />
          <Option />
          <Categories />
          <TwoImage />
          <IrankidzNewest />
          <ProductNewest />
          <Clothing />
          <Sets />
          <Games />
          <BrandList />
          <Favorite />
          <BestSeller />
          <MostViewer />
        </View>
      }
      style={{ flex: 1, backgroundColor: colors.white }}
      contentContainerStyle={{ paddingBottom: 16 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Home;
