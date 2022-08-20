import React from 'react'
import { render } from 'react-dom'
import  {View,Button,TextInput,StyleSheet,Text,ToastAndroid, Alert,Image} from 'react-native'
import { RadioButton } from 'react-native-paper';
import SelectList from 'react-native-dropdown-select-list'
import FontAwesome from 'react-native-fontawesome';

const CrimeDeatilsScreenOne = () => {

    const [checked, setChecked] = React.useState('first');
    const [addressChecked, setAddressChecked] = React.useState('haveAddress');
    const [selected, setSelectedState] = React.useState("");
    const [text, setText] = React.useState('');
    // console.log(addressChecked)
    // console.log(checked)


    const data = [{Key: "AN",value: "Andaman and Nicobar Islands"},{Key: "AP",value: "Andhra Pradesh"},{Key: "AR",value: "Arunachal Pradesh"},{Key: "AS",value: "Assam"},{Key: "BR",value: "Bihar"},{Key: "CG",value: "Chandigarh"},{Key: "CH",value: "Chhattisgarh"},{Key: "DH",value: "Dadra and Nagar Haveli"},{Key: "DD",value: "Daman and Diu"},{Key: "DL",value: "Delhi"},{Key: "GA",value: "Goa"},{Key: "GJ",value: "Gujarat"},{Key: "HR",value: "Haryana"},{Key: "HP",value: "Himachal Pradesh"},{Key: "JK",value: "Jammu and Kashmir"},{Key: "JH",value: "Jharkhand"},{Key: "KA",value: "Karnataka"},{Key: "KL",value: "Kerala"},{Key: "LD",value: "Lakshadweep"},{Key: "MP",value: "Madhya Pradesh"},{Key: "MH",value: "Maharashtra"},{Key: "MN",value: "Manipur"},{Key: "ML",value: "Meghalaya"},{Key: "MZ",value: "Mizoram"},{Key: "NL",value: "Nagaland"},{Key: "OR",value: "Odisha"},{Key: "PY",value: "Puducherry"},{Key: "PB",value: "Punjab"},{Key: "RJ",value: "Rajasthan"},{Key: "SK",value: "Sikkim"},{Key: "TN",value: "Tamil Nadu"},{Key: "TS",value: "Telangana"},{Key: "TR",value: "Tripura"},{Key: "UK",value: "Uttar Pradesh"},{Key: "UP",value: "Uttarakhand"},{Key: "WB",value: "West Bengal"}];

    return(
      <View style={styles.firstView}>
        <Text style={styles.crimeOccuringText}>Is the crime occuring right now?</Text>
        <View style={styles.firstRadioButtonView}>
        <RadioButton
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        />
        <Text style={{position:'relative', top:8}}>Yes</Text>
        </View>
        <View style={styles.secondRadioButtonView}>
        <RadioButton
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        />
        <Text style={{position:'relative', top:8}}>No</Text>
        </View>
        <Text style={styles.stateCrimeOccuringText}>What state was this crime in?</Text>
        <View style={styles.stateSelectionView}>
        <SelectList 
        onSelect={() => alert(selected)}
        setSelected={setSelectedState} 
        data={data}  
        // arrowicon={<FontAwesome name="Roboto" size={12} color={'black'} />} 
        // searchicon={<FontAwesome name="Roboto" size={12} color={'black'} />} 
        search={true} 
        boxStyles={{borderRadius:0}}
        placeholder="Select state"
        />
        </View>
        <Text style={styles.cityCrimeOccuringText}>What city?</Text>
        <View style={styles.citySelectionView}>
        <SelectList 
        onSelect={() => alert(selected)}
        setSelected={setSelectedState} 
        data={data}  
        // arrowicon={<FontAwesome name="Roboto" size={12} color={'black'} />} 
        // searchicon={<FontAwesome name="Roboto" size={12} color={'black'} />} 
        search={true} 
        boxStyles={{borderRadius:0}}
        placeholder="Select city"
        />
        </View>
        <Text style={styles.exactAddress}>Do you have an exact address??</Text>
        <View style={styles.firstAddressRadioButtonView}>
        <RadioButton
        status={ addressChecked === 'haveAddress' ? 'checked' : 'unchecked' }
        onPress={() => setAddressChecked('haveAddress')}
        />
        <Text style={{position:'relative', top:8}}>Yes</Text>
        </View>
        <View style={styles.secondAddressRadioButtonView}>
        <RadioButton
        status={ addressChecked === 'notHaveAddress' ? 'checked' : 'unchecked' }
        onPress={() => setAddressChecked('notHaveAddress')}
        />
        <Text style={{position:'relative', top:8}}>No</Text>
        </View>
        <View style={styles.textInputView}>
          <TextInput placeholder='Enter Address'
          onChangeText={newText => setText(newText)}
          style={styles.textInput}
          />
        </View>           
      </View>
    )
  }

 

export default CrimeDeatilsScreenOne;


const styles = StyleSheet.create({

    firstView:{
    margin:20,
    flex: 1,
    flexDirection:'column',
    display:'flex',
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

  crimeOccuringText:{
    margin:7,
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: 16,
  lineHeight: 19,
  color: '#000000',
  },

  stateCrimeOccuringText:{
    margin:7,
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: 16,
  lineHeight: 19,
  color: '#000000',
  },

  stateSelectionView:{
    margin:7,
  },

  citySelectionView:{
    margin:7
  },

  cityCrimeOccuringText:{
    margin:7,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: '#000000',
  },

  exactAddress:{
  margin:7,
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: 16,
  lineHeight: 19,
  color: '#000000',
  },
  
  firstAddressRadioButtonView:{
    margin:7,
    display:'flex',
    flexDirection:'row',
  },

  secondAddressRadioButtonView:{
    margin:7,
    display:'flex',
    flexDirection:'row',
  },

  textInputView:{
    margin:7
  },

  textInput:{
  boxsizing: 'borderbox',
  width: 'auto',
  height: 167,
  textAlign:'center',
  backgroundColor: '#FCFAFA',
  borderWidth: 1, solid: '#919191',
  borderradius: 5,
  },

});
