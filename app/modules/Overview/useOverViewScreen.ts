import { useEffect, useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Routes } from '../../constants';

const useOverViewScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [users, setUsers] = useState<any[]>([]);
  const currentUserUid = useSelector((state: RootState) => state.user.currentUserId);

  // Fetch All Available users from firebase users collection
  const fetchUsers = async () => {
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    const filteredUsers = usersList.filter(user => user.id !== currentUserUid);
    setUsers(filteredUsers);
  };

  const handleUserPress = (user: any) => {
    navigation.push(Routes.chatFeed, { data: user });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    fetchUsers,
    users,
    handleUserPress,
    navigation,
  };
};

export default useOverViewScreen;
