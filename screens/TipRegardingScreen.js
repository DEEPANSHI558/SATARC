import React from 'react'
import { render } from 'react-dom'
import  {View,Button,TextInput,StyleSheet,Text,ToastAndroid, Alert,Image} from 'react-native'
import { CheckBox } from 'react-native-elements'

const TipRegardingScreen = () =>{

    const [individual, setIndividual]=React.useState(false);
    const [organisation, setOrganisation]=React.useState(false)
    const [fraud, setFraud]=React.useState(false)
    const [school, setSchool]=React.useState(false)
    const [other, setOther]=React.useState(false)

    return(
        <View style={styles.firstView}>
        <Text style={styles.tipReagardingText}>What is this tip regarding?</Text>
        <CheckBox
            title='Individual'
            checkedColor='green'
            checked={individual}
            onPress={()=>setIndividual(!individual)}
            containerStyle={styles.individualContainer}     
        />
        <CheckBox
            title='Organisation'
            checkedColor='green'
            checked={organisation}
            onPress={()=>setOrganisation(!organisation)}
            containerStyle={styles.organisationContainer}       
        />
        <CheckBox
            title='Fraud'
            checkedColor='green'
            checked={fraud}
            onPress={()=>setFraud(!fraud)}
            containerStyle={styles.fraudContainer}       
        />
        <CheckBox
            title='School'
            checkedColor='green'
            checked={school}
            onPress={()=>setSchool(!school)}
            containerStyle={styles.schoolContainer}       
        />
        <CheckBox
            title='Other'
            checkedColor='green'
            checked={other}
            onPress={()=>setOther(!other)}
            containerStyle={styles.otherContainer}      
        />
        </View>
    );
};

export default TipRegardingScreen;

const styles = StyleSheet.create({

    firstView:{
    margin:20,
    flex: 1,
    flexDirection:'column',
    display:'flex',
  },

  tipReagardingText:{
    margin:7,
fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: '700',
fontSize: 16,
lineHeight: 19,
color: '#000000',
  },

  individualContainer:{
    backgroundColor:"transparent",
    borderWidth:0,
  },

    organisationContainer:{
    backgroundColor:"transparent",
    borderWidth:0,
  },

    fraudContainer:{
    backgroundColor:"transparent",
    borderWidth:0,
  },
  
    schoolContainer:{
    backgroundColor:"transparent",
    borderWidth:0,
  },

    otherContainer:{
    backgroundColor:"transparent",
    borderWidth:0,
  },

});