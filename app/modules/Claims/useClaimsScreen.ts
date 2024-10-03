import { useEffect, useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { Routes } from '../../constants';
import { getAllClaims } from '../../api/ClaimsApis';
import { useToast } from '../../context';
import { ClaimsDataItem } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { AsyncStorageService } from '../../utils';

const useClaimsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [claimsData, setClaimsData] = useState<ClaimsDataItem[]>([]);
  const { showToast } = useToast();
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const limit: number = 10;

  const handleLogOutPress = async (): Promise<void> => {
    try {
      await AsyncStorageService.clearAll().then(() => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: Routes.login,
            },
          ],
        });
      });
    } catch (e) {
      throw new Error('Failed to load biometrics from async storage.');
    }
  };

  const getClaimsData = async () => {
    if (!hasMore) return;
    try {
      claimsData.length === 0 ? setIsLoading(true) : setIsLoadingMore(true);
      const response = await getAllClaims(page, limit);
      if (response.length > 0) {
        setClaimsData(previousData => [...previousData, ...response]);
      } else {
        setHasMore(false);
      }
    } catch (error: any) {
      showToast(error?.message || 'Something went wrong !', 'ERROR');
    } finally {
      claimsData.length === 0 ? setIsLoading(false) : setIsLoadingMore(false);
    }
  };
  const loadMore = () => {
    if (hasMore && !isLoadingMore) {
      setPage(prevState => prevState + 1);
    }
  };

  useEffect(() => {
    getClaimsData();
  }, [page]);
  return {
    handleLogOutPress,
    isLoading,
    claimsData,
    loadMore,
    isLoadingMore,
  };
};

export default useClaimsScreen;
