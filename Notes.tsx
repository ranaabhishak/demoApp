// Notes.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { addNote, noteSelector,Note } from './redux/notesSlice';

const Notes = () => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const dispatch = useAppDispatch();
  const notes = useAppSelector(noteSelector);
console.log(notes,'ppppppppppppppp')
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{ borderBottomWidth: 1, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Description"
        value={desc}
        onChangeText={(text) => setDesc(text)}
        multiline
        style={{ borderBottomWidth: 1, marginBottom: 16 }}
      />
      <Pressable
        onPress={() => {
          dispatch(addNote({ title, desc }));
          setTitle('');
          setDesc('');
        }}
        style={{
          backgroundColor: 'blue',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Add Note</Text>
      </Pressable>
      <FlatList
      data={notes}
      renderItem={({item}:{item:Note})=>{
        return(
            <View>
                <Text>{item?.title}</Text>
                <Text>{item?.desc}</Text>

                </View>
        )
      }}></FlatList>
    </View>
  );
};

export default Notes;
