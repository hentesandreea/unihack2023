import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import KContainer from '../../ui-components/KContainer';
import axios from 'axios';
import { useState } from 'react';
import KSpacer from '../../ui-components/KSpacer';
import designColors from '../../../constants/Colors';
import KButton from '../../ui-components/KButton';
import KTag from '../../ui-components/KTag';
import generalConstants from '../../../constants/GeneralConstants';
import { generateCauses } from '../../../helpers/generalCauses';
import { auth, database } from '../../../firebase/config';
import { addThought } from '../../../firebase/addThought';
import { update, child, get, ref } from 'firebase/database';
import formatDateToString from '../../../helpers/formatDate';
function Journal() {
  const [journalNote, setJournalNote] = useState('');
  const [listOfCauses, setListOfCauses] = useState([]);
  const [emotionToSend, setEmotionToSend] = useState('');
  const [today, setToday] = useState(formatDateToString(new Date().toString()));
  return (
    <KContainer>
      <KSpacer h={20} />
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 32, fontWeight: '500' }}>My thoughts</Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '400',
            color: designColors.iconColorUnfocused,
          }}>
          {today}
        </Text>
      </View>
      <KSpacer h={20} />
      <View
        style={{
          width: '90%',
          alignItems: 'flex-start',
          paddingHorizontal: 5,
        }}>
        <Text style={{ fontSize: 14, color: designColors.iconColorUnfocused }}>
          {journalNote.length} / 200
        </Text>
      </View>
      <KSpacer h={5} />
      <TextInput
        multiline={true}
        placeholeder={'Write something here'}
        value={journalNote}
        autoComplete={'off'}
        style={{
          fontSize: 18,
          borderRadius: 10,
          height: 400,
          width: '90%',
          backgroundColor: 'rgba(255,255,255,0.92)',
          padding: 15,
        }}
        onChangeText={text => setJournalNote(text)}
      />
      <KSpacer h={20} />
      <View
        style={{
          width: '90%',
          alignItems: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
        }}>
        {generalConstants.emotions.map(emotion => (
          <KTag
            key={emotion}
            color={
              emotion !== emotionToSend
                ? designColors.gradient3
                : designColors.gradient2
            }
            label={emotion}
            onPress={() => {
              setEmotionToSend(emotion);
            }}
          />
        ))}
      </View>
      <KSpacer h={30} />
      <KButton
        color={designColors.gradient2}
        label={'Send data'}
        onPress={async () => {
          if (journalNote !== '' && emotionToSend !== '') {
            generateCauses({
              journalNote: journalNote,
              emotion: emotionToSend,
            }).then(response => {
              setListOfCauses(response.split('/').map(el => el.toLowerCase()));
            });
            console.log(listOfCauses);

            if (listOfCauses.length === 0) {
              Alert.alert(
                'Something went wrong',
                'Please try again to send your data',
                [
                  {
                    text: 'Sure',
                    onPress: () => {},
                  },
                ]
              );
            } else {
              //sending the thing to db
              let currentUser;

              get(child(ref(database), '/users/' + auth.currentUser.uid))
                .then(snapshot => {
                  currentUser = snapshot.val();

                  addThought(
                    currentUser.id + currentUser.listOfThoughtsID.length,
                    journalNote,
                    emotionToSend,
                    listOfCauses,
                    currentUser.id,
                    new Date().toString()
                  ).then(r => {
                    const newListOfToughts = [
                      ...currentUser.listOfThoughtsID,
                      currentUser.id + currentUser.listOfThoughtsID.length,
                    ];

                    update(ref(database, '/users/' + currentUser.id + '/'), {
                      listOfThoughtsID: newListOfToughts,
                    })
                      .then(r => {})
                      .catch(e => console.log(e));
                  });
                })
                .catch(error => {
                  console.error(error);
                });

              setListOfCauses([]);
              setJournalNote('');
              setEmotionToSend('');
            }
          } else {
            Alert.alert(
              'Something went wrong',
              'Please complete all the inputs',
              [
                {
                  text: 'Sure',
                  onPress: () => {},
                },
              ]
            );
          }
        }}
      />
      <KSpacer h={20} />
    </KContainer>
  );
}

export default Journal;
