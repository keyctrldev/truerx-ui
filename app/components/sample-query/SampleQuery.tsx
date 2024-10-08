import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { CREATE_POST, DELETE_POST, GET_POST, UPDATE_POST } from '../../api';
import AppText from '../app-text/AppText';
import CustomButton from '../custom-button/CustomButton';
import { styles } from './SampleQueryStyle';

const SampleQuery = () => {
  const { loading, error, data, refetch } = useQuery(GET_POST);

  const [createPost] = useMutation(CREATE_POST);
  const [updatePost] = useMutation(UPDATE_POST);
  const [deletePost] = useMutation(DELETE_POST);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const handleCreate = async () => {
    try {
      await createPost({ variables: { input: { title, body } } });
    } catch (error) {
      throw new Error('Error in Creating Post');
    }
  };

  const handleUpdate = async () => {
    try {
      await updatePost({ variables: { input: { body } } });
    } catch (error) {
      throw new Error('Error in Updating Post');
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await deletePost({ variables: { id } });
      refetch();
    } catch (error) {
      throw new Error('Error in Deleting Post');
    }
  };

  return (
    <View style={styles.queryContainer}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Body" value={body} onChangeText={setBody} />
      <CustomButton title="Create Post" onPress={handleCreate} />

      <View>
        <AppText>{data.post.title}</AppText>
        <AppText>{data.post.body}</AppText>
      </View>

      <View>
        <TextInput placeholder="Body" value={body} onChangeText={setBody} />
        <CustomButton title="Update" onPress={() => handleUpdate()} />
      </View>
      <View>
        <CustomButton title="Delete" onPress={() => handleDelete(data.post.id)} />
      </View>
    </View>
  );
};

export default SampleQuery;
