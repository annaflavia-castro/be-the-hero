import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
   container: {
      backgroundColor: '#000',
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 20
   },

   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
   },

   incident: {
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom: 16,
      marginTop: 30
   },

   incidentProperty: {
      fontSize: 14,
      color: '#C94107',
      fontWeight: 'bold',
      marginTop: 24
   },

   incidentValue: {
      marginTop: 8,
      fontSize: 15,
      color: '#1D1D21'
   },

   contactBox: {
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom: 16,
   },

   heroTitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: '#0CB6FF',
      lineHeight: 30
   },

   heroDescription: {
      fontSize: 15,
      color: '#1D1D21',
      marginTop: 16,
   },

   actions: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-between'
   },

   action: {
      backgroundColor: '#0CB6FF',
      borderRadius: 8,
      height: 50,
      width: '48%',
      justifyContent: 'center',
      alignItems: 'center'
   },

   actionText: {
      color: '#FFF',
      fontSize: 15,
      fontWeight: 'bold'
   }
});
