import {AsyncStorage} from 'react-native';

export async function saveToStorage(key,data){
    await AsyncStorage.setItem(key,JSON.stringify(data));
}
export async function getFromStorage(key){
  data =   await AsyncStorage.getItem(key );
  if (!data) return undefined
  return JSON.parse(data);
}

export default {
  getFromStorage,
  saveToStorage
}