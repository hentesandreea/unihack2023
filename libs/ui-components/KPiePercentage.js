import PieChart from 'react-native-pie-chart';
import { useEffect, useState } from 'react';
import designColors from '../../constants/Colors';
import { useWindowDimensions, View, Text, FlatList } from 'react-native';
import KSpacer from './KSpacer';
import KTag from './KTag';
import { getEmotionAndCauses } from '../../firebase/getEmotionAndCauses';
import { auth } from '../../firebase/config';
import getPercentageTime from '../../helpers/getPercentage';
import LottieView from 'lottie-react-native';
import { getEmotionAndCausesAll } from '../../firebase/getEmotionsAndCausesAll';

export default function KPiePercentage({ forUser }) {
  const { width } = useWindowDimensions();
  const [listOfEmotions, setListOfEmotions] = useState([]);
  const [period, setPeriod] = useState('week');

  useEffect(() => {
    const func = async () => {
      if (forUser) {
        await getEmotionAndCauses({ id: auth.currentUser.uid }).then(res => {
          if (res.length !== 0) {
            getPercentageTime(res, period).then(resp => {
              setListOfEmotions(resp.split(', ').map(el => el.split(': ')));
            });
          }
        });
      } else {
        getEmotionAndCausesAll().then(res => {
          getPercentageTime(res, period).then(resp => {
            setListOfEmotions(resp.split(', ').map(el => el.split(': ')));
          });
          console.log(listOfEmotions);
        });
      }
    };

    func();

    console.log(listOfEmotions);
  }, [period]);

  return (
    <View
      style={{
        width: '95%',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.83)',
        paddingVertical: 20,
        borderRadius: 20,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <KTag
          label={'Week'}
          color={
            period === 'week' ? designColors.gradient3 : designColors.gradient1
          }
          onPress={() => setPeriod('week')}
        />
        <KTag
          label={'Month'}
          color={
            period === 'month' ? designColors.gradient3 : designColors.gradient1
          }
          onPress={() => setPeriod('month')}
        />
        <KTag
          label={'Year'}
          color={
            period === 'year' ? designColors.gradient3 : designColors.gradient1
          }
          onPress={() => setPeriod('year')}
        />
      </View>
      <KSpacer h={30} />
      {listOfEmotions.length !== 0 ? (
        <PieChart
          widthAndHeight={width * 0.5}
          s
          series={listOfEmotions.map(emotion =>
            parseInt(emotion[1].replace('%', ''))
          )}
          sliceColor={listOfEmotions.map(
            emotion => designColors.emotionsColors[emotion[0].toLowerCase()]
          )}
          coverRadius={0.45}
          coverFill={'transparent'}
        />
      ) : (
        <LottieView
          source={require('../../lottie/nodata.json')}
          style={{ height: 250, width: 250 }}
        />
      )}
      <KSpacer h={30} />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 20,
        }}>
        {listOfEmotions.map(emotion => (
          <View
            key={listOfEmotions.indexOf(emotion)}
            style={{
              width: width * 0.3,
              height: width * 0.05,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: '80%',
                width: width * 0.04,
                backgroundColor:
                  designColors.emotionsColors[emotion[0].toLowerCase()],
                borderRadius: 2,
              }}>
              <Text></Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: '500' }}>
              {' '}
              {emotion[0]} - {emotion[1]}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
