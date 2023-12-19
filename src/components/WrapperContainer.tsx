import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  KeyboardAvoidingView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import Loader from './Loader';

const WrapperContainer = ({children, isLoading, wrapperStyles}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SafeAreaView>
        <KeyboardAvoidingView behavior="padding" style={{...wrapperStyles}}>
          {/* <View style={{...styles.styles, ...backgroundStyle}}></View> */}
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      {/* <Loader isLoading={isLoading} /> */}
    </View>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
