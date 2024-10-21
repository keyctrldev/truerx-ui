import React, { useEffect, useState } from 'react';
import { ActivityLoader } from '../../../components';

const ActivityLoaderScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <ActivityLoader isVisible={isLoading} color={'black'} />;
};

export default ActivityLoaderScreen;
