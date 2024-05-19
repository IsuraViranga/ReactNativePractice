import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,TextInput,FlatList,TouchableOpacity,Alert} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [name,setName]=useState("basketball");
  const [age,setage]=useState(24);
  const [subject,setsubject]=useState(
    [
      {
        name:'maths',
        marks:'72.5',
        id:'1'
      },
      {
        name:'physics',
        marks:'78',
        id:'2'
      },
      {
        name:'chemistry',
        marks:'82',
        id:'3'
      },
      {
        name:'bio',
        marks:'60',
        id:'4'
      },
      {
        name:'english',
        marks:'75',
        id:'5'
      },
      {
        name:'IT',
        marks:'80',
        id:'6'
      }
    ]
  );


  const handliClick =()=>{
    if(name=="basketball")
    {
      setName('cricket');
    }
    else{
      setName('basketball');
    }
   
  }

  const pressHandler = (id) => {
    setsubject(prevSubjects => {
      return prevSubjects.filter(sub => sub.id !== id);
    });
  };
  

  return (
    <View style={styles.container}>
      <View>
         <Text style={styles.boldText}>isura</Text>
      </View>
      <View>
         <Text style={styles.boldText}>Gayani</Text>
         <Text style={styles.boldText}>Rasika</Text>
         <Text style={styles.boldText}>{name}</Text>
         <Text style={styles.boldText}>{age}</Text>

      </View>
      <View>
        <Button onPress={handliClick} title='uspdate sport' />
      </View>
      <View>
        <Text style={styles.boldText}>enter your name</Text>
        <TextInput
          placeholder='eg:vinura'
          style={styles.inputStyles}
          onChangeText={(value)=>setName(value)}
        />
        <Text style={styles.boldText}>enter your dss age</Text>
        <TextInput
          placeholder='eg:24'
          style={styles.inputStyles}
          onChangeText={(value)=>setage(value)}
          keyboardType='numeric'
        />
      </View>
      <View>
        <FlatList
         numColumns={1}
         data={subject}
         renderItem={({item})=> (
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
              <Text key={item.id}>{item.name}</Text>
          </TouchableOpacity>
         )}
         keyExtractor={(item) => item.id}
        />
      </View> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  boldText:{
    fontWeight:'bold',
    fontSize:30,
    color:'blue',
    textAlign:'center'
  },
  inputStyles:{
    padding:10,
    borderColor:'red',
    fontWeight:'bold',
    fontSize:20,
    borderWidth:1
  
  },
  inputins: {
    marginTop:10
  }


});

// open folder in vs code
//expo init myproject

// code . 
