import React from 'react'
import { render } from 'react-dom'
import  {View,Button,TextInput,StyleSheet,Text,ToastAndroid, Alert,Image} from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker';

const InvestigationVerfication = () =>{


const setToastMsg=msg=>{
  ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER);
};


const uploadFile=()=>{
    let options={
      mediaType:'photo',
      quality:1,
      includeBase64:true,
    };
      launchImageLibrary(options,response=>{
      if(response.didCancel){
          setToastMsg('Cancelled Image Selection');
      }else if((response.errorCode='permission')){
        setToastMsg('Permission not satisfied');
      }else if((response.errorCode='others')){
        setToastMsg(response.errorMessage);
      }else if(response.assets[0].fileSize>2097152){
        Alert.alert('Maximum image size exceeded',
        'Please choose image under 2 MB',
        [{text:'OK'}],
        );
      };
    });
    // .catch(error=>{
    //   console.log(error);
    // })
  };


    
      const [name, setName]=React.useState("");
      const [email, setEmail]=React.useState("");
      const [phoneNo, setPhoneNo]=React.useState("");
      const [govtId, setGovtId]=React.useState("");



    return(
      <View style={styles.firstView}>
          <Text style={styles.subtitle}>Identity Verification</Text>
          <View style={{margin:12}}>
          <Text style={styles.font}>Full Name</Text>
          <TextInput placeholder='Enter Name'
          onChangeText={newText=>setName(newText)}
          style={styles.TextInput1}
          />
          </View>

        <View style={{margin:12}}>
          <Text style={styles.font}>Email ID</Text>
          <TextInput placeholder='Enter Email Id'
          onChangeText={newText=>setEmail(newText)}
          style={styles.TextInput2}
          />
          </View>

        <View style={{margin:12}}>
          <Text style={styles.font}>Phone Number</Text>
          <TextInput placeholder='+91 |'
          onChangeText={newText=>setPhoneNo(newText)}
          style={styles.TextInput3}
          />
          </View>

          <View style={{margin:12}}>
          <Text style={styles.font}>Govt ID</Text>
          <TextInput placeholder='**********'
          secureTextEntry={true}
          onChangeText={newText=>setGovtId(newText)}
          style={styles.TextInput4}
          />
          </View>

          <Text style={styles.TextInput5}>Please upload the same in pdf/doc format.</Text>

          <View style={styles.uploadBorder}>
            <View style={styles.buttonCenterView}>
              <Button mode="contained" style={styles.addFileButton}
                title="Add File" onPress={()=>uploadFile()}>
              </Button>
            </View>
          </View>                    
      </View>
    )
}

  

export default InvestigationVerfication;


const styles = StyleSheet.create({

  firstView:{
    margin:20,
    flex: 1,
    flexDirection:'column',
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  addFileButton:{
  width: 154,
  height: 39,
  backgroundColor: '#4285F4',
  borderRadius: 5,
  },
  pageTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#4285F4",
    padding: 10,
  },
  buttonCenterView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBorder: {
  margin:10,
  width: 308,
  height: 172,
  backgroundColor: '#FCFAFA',
  borderWidth: 2, dashed: '#595959',
  borderRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: 'center',
  },
  font: {
    fontfamily: 'Roboto',
    fontstyle: 'normal',
    fontweight: 400,
    fontsize: 16,
    lineheight: 19,
    color: '#000000',
  },
  TextInput1:{
  textAlign:'center',
  width: 310,
  height: 37,
  backgroundColor: '#F1F1F1',
  borderColor:'black',
  borderWidth: 1 ,solid: '#000000',
  borderRadius: 10,
  },
    TextInput2:{
  width: 310,
  height: 37,
  textAlign:'center',
  backgroundColor: '#F1F1F1',
  borderColor:'black',
  borderWidth: 1 ,solid: '#000000',
  borderRadius: 10,
  },
    TextInput3:{
  width: 310,
  height: 37,
  backgroundColor: '#F1F1F1',
  borderColor:'black',
  textAlign:'center',
  borderWidth: 1 ,solid: '#000000',
  borderRadius: 10,
  },
    TextInput4:{
  width: 310,
  height: 37,
  backgroundColor: '#F1F1F1',
  borderColor:'black',
  textAlign:'center',
  borderWidth: 1 ,solid: '#000000',
  borderRadius: 10,
  },
  TextInput5:{
  //width: 267,
  margin: 5,
  height: 20,
  fontfamily: 'Roboto',
  fontstyle: 'normal',
  fontweight: 400,
  fontsize: 14,
  lineheight: 16,
  color: '#000000',
  }
});
