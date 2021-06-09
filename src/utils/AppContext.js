import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [sourceForNews, setSourceForNews] = useState('');
  const [settingDefaultSource, setSettingDefaultSource] = useState('');

  const settingsSetDefaultNewsSource = async (source) => {
    await AsyncStorage.setItem('default', source);
    setSettingDefaultSource(source)
  }

  return (
    <AppContext.Provider value={{ sourceForNews, setSourceForNews, settingDefaultSource, settingsSetDefaultNewsSource }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;