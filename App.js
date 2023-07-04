import { Text, View } from 'react-native';
import LittleLemonHeader from './component/LittleLemonHeader';
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          padding: 15,
          paddingTop:20,
         // backgroundColor: 'skybl',
        }}>
        <LittleLemonHeader />
      </View>
       </>
  );
  }