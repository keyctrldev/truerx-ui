import React from 'react';
import { ActivityLoader, AppText, SafeAreaContainer } from '../../components';
import { useQuery } from '@apollo/client';
import { FlatList, View } from 'react-native';
import { GET_COUNTRIES } from '../../api';
import { styles } from './styles';

const OverviewScreen = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (error)
    return (
      <View style={styles.errorContainer}>
        <AppText>Error: {error.message}</AppText>
      </View>
    );

  return (
    <SafeAreaContainer style={styles.container}>
      {loading && <ActivityLoader isVisible={loading} />}
      <AppText>Countries List</AppText>
      <FlatList
        data={data?.countries}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <AppText style={styles.name}>{item.name}</AppText>
            {item?.languages && (
              <>
                <AppText style={styles.name}>{`Languages : ${item.languages?.length}`}</AppText>
                {item?.languages.length > 0 && (
                  <AppText
                    style={styles.languages}>{`${item.languages?.map((lang: any) => lang.name).join(', ')}`}</AppText>
                )}
              </>
            )}
          </View>
        )}
      />
    </SafeAreaContainer>
  );
};

export default OverviewScreen;
