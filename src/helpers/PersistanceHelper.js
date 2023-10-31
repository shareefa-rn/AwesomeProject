import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistanceHelper {
  setValue = (key, value) => {
    try {
      AsyncStorage.setItem(key, value);

      console.log('written successfully');
    } catch (e) {
      console.log(e);
    }
  };

  getValue = async (key, success, failure) => {
    try {
      const value = await AsyncStorage.getItem(key);

      return value;
    } catch (ex) {
      console.log(ex);
    }
  };

  setObject = (key, Object) => {
    this.setValue(key, JSON.stringify(Object));
  };
  getObject = async key => {
    const val = await this.getValue(key);
    return JSON.parse(val);
  };
}
export default new PersistanceHelper();
