import React from 'react'
import { render } from 'react-dom'
import  {View,Button,TextInput,StyleSheet,Text,ToastAndroid, Alert,Image} from 'react-native'
import { CheckBox } from 'react-native-elements'
import { RadioButton } from 'react-native-paper'

const SuspectInfoScreen = () =>{

    const [inforRegardingSuspect, setinforRegardingSuspect] = React.useState('first');
    const [inforRegardingVehicle, setinforRegardingVehicle] = React.useState('first');;
    
    return(
        <View style={styles.firstView}>
        <Text style={styles.inforRegardingSuspect}>Do you have info regarding the suspect?</Text>
        <View style={styles.firstRadioButtonView}>
        <RadioButton
        status={ inforRegardingSuspect === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setinforRegardingSuspect('first')}
        />
        <Text style={{position:'relative', top:8}}>Yes</Text>
        </View>
        <View style={styles.secondRadioButtonView}>
        <RadioButton
        status={ inforRegardingSuspect === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setinforRegardingSuspect('second')}
        />
        <Text style={{position:'relative', top:8}}>No</Text>
        </View>
        <Text style={styles.vehicleInvolvedText}>Is there a vehicle involved?</Text>
        <View style={styles.vehicleInvolvedFirst}>
        <RadioButton
        status={ inforRegardingVehicle === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setinforRegardingVehicle('first')}
        />
        <Text style={{position:'relative', top:8}}>Yes</Text>
        </View>
        <View style={styles.vehicleInvolvedSecond}>
        <RadioButton
        status={ inforRegardingVehicle === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setinforRegardingVehicle('second')}
        />
        <Text style={{position:'relative', top:8}}>No</Text>
        </View>
        <Text style={syles.evidenceText}>Do you have any evidence?</Text>                                
        </View>
    )
}

export default SuspectInfoScreen

const styles = StyleSheet.create({

firstView:{
    margin:20,
    flex: 1,
    flexDirection:'column',
    display:'flex',
  },

inforRegardingSuspect:{

fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: '700',
fontSize: 16,
lineHeight: 19,
color: '#000000',

},

    firstRadioButtonView:{
        margin:7,
        display:'flex',
        flexDirection:'row',
    },

    secondRadioButtonView:{
        margin:7,
        display:'flex',
        flexDirection:'row',
    },

    vehicleInvolvedText:{
        marginLeft:0,
        margin:7,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
    },

    vehicleInvolvedFirst:{
        margin:7,
        display:'flex',
        flexDirection:'row',
    },

    vehicleInvolvedSecond:{
        margin:7,
        display:'flex',
        flexDirection:'row',
    },

    evidenceText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000'
    }

});