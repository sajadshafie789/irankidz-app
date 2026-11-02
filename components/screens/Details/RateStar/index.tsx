import React, { useState } from 'react';
import { View } from 'react-native';
import { colors } from '../../../../utils/themes';
import { Rating } from 'react-native-ratings';
import { Button, Input, Text } from '../../../core';
import API_ROUTES from '../../../../Api/api';
import { showToast } from '../../../../utils/toast';
import { ProductCommentProps } from '../../../../types/product';
import Ionicons from '@react-native-vector-icons/ionicons';
import { StarRating } from '../../../core';

type Props = {
  title: string | undefined;
  productID: number | undefined;
};

type RateProps = {
  comment: string;

  title: string;
};

export default function RateStar({ title, productID }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rating, setRating] = useState(4);

  const [commentList, setCommentList] = useState<ProductCommentProps[]>([]);
  const [form, setForm] = useState<RateProps>({
    comment: '',
    title: '',
  });
  const handleGetComments = () => {
    API_ROUTES.GetComment(String(productID))
      .then(res => {
        setCommentList(res.data.response);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleSendRate = () => {
    setIsLoading(true);
    API_ROUTES.SendComment(String(productID), { ...form, rate: rating })
      .then(() => {
        setIsLoading(false);
        handleGetComments();
        showToast('success', 'نظر شما با موفقیت ثبت شد');
      })
      .catch(err => {
        setIsLoading(false);
      });
  };

  return (
    <View style={{ backgroundColor: colors.white }}>
      <Text variant="h3" style={{ marginVertical: 24 }}>
        بررسی خود را بنویسید
      </Text>
      <Text
        variant="subtitle1"
        textStyle={{ color: colors.primary }}
        style={{ marginBottom: 24 }}
      >
        {title}
      </Text>
      <Text
        variant="subtitle1"
        textStyle={{ color: colors.textSecondary }}
        style={{ marginBottom: 12 }}
      >
        امتیاز شما*
      </Text>
      <View
        style={{
          borderColor: colors.border,
          borderRadius: 4,
          borderWidth: 2,
          alignItems: 'center',
          flexDirection: 'row',
          padding: 28,
          height: 100,
        }}
      >
        <Text
          variant="h4"
          textStyle={{ color: colors.textSecondary }}
          style={{ marginRight: 8 }}
        >
          {' '}
          ارزش
        </Text>
        <StarRating rating={rating} onChange={setRating} size={28} />
      </View>
      <View style={{ marginVertical: 36 }}>
        <Text
          variant="h5"
          textStyle={{ color: colors.textSecondary }}
          style={{ marginBottom: 4 }}
        >
          نام
        </Text>

        <Input
          placeholder="...اینحا بنویسید"
          onChangeText={val => setForm({ ...form, title: val })}
        />
      </View>
      <View style={{ marginBottom: 24 }}>
        <Text
          variant="h5"
          textStyle={{ color: colors.textSecondary }}
          style={{ marginBottom: 4 }}
        >
          نظرات شما
        </Text>
        <Input
          placeholder="...اینحا بنویسید"
          rows={7}
          multiline
          style={{ height: 120 }}
          textAlignVertical="top"
          onChangeText={val => setForm({ ...form, comment: val })}
        />
      </View>
      <Button title="ارسال برسی" onPress={handleSendRate} loading={isLoading} />

      {commentList.length ? (
        <View style={{ marginTop: 44 }}>
          <Text variant="h3" style={{ marginBottom: 36 }}>
            نظرات شما عزیزان
          </Text>
          {commentList?.map(item => {
            return (
              <View
                key={item.id}
                style={{
                  marginBottom: 80,
                  borderBottomColor: colors.border,
                  borderBottomWidth: 3,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: 12,
                    borderBottomColor: colors.border,
                    borderBottomWidth: 1,
                    marginBottom: 12,
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                      variant="subtitle1"
                      textStyle={{ color: colors.textSecondary }}
                      style={{ marginRight: 12 }}
                    >
                      {item.title} :
                    </Text>
                    <Text variant="h3"> {item.rate} </Text>
                    <Text
                      variant="subtitle1"
                      textStyle={{ color: colors.textSecondary }}
                    >
                      امتیاز از 5
                    </Text>
                  </View>
                  <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={16}
                    startingValue={item.rate}
                    showRating={false}
                    readonly
                  />
                </View>
                <Text
                  variant="body2"
                  textStyle={{ color: colors.textSecondary }}
                >
                  {item.comment}
                </Text>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 40,
                    paddingBottom: 24,
                  }}
                >
                  <Text
                    variant="subtitle2"
                    textStyle={{ color: colors.textSecondary }}
                  >
                    آیا این دیدگاه برایتان مفید بود؟{' '}
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons
                      name="thumbs-up-outline"
                      size={24}
                      color={colors.success}
                      style={{ marginRight: 12 }}
                    />
                    <Ionicons
                      name="thumbs-down-outline"
                      size={24}
                      color={colors.error}
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      ) : (
        ''
      )}
    </View>
  );
}
