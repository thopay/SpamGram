import RNLocation from 'react-native-library';
import React, {useState} from 'react';
RNLocation.configure({
distanceFilter: null


})
//implment to the front end
const permissionHandle = async() =>{

    console.log('here')

    let permission = await RNLocation.checkPermission({
android: {
    detail: 'coarse'
}

        
    });

console.log('here2')
console.log(permission)

}

if(!permission){
permission = await RNLocation.requestPermission({
android: {

    detail: "coarse",
    rationale: {
        title: "We need to access your location to use the app",
        buttonPositive : "OK",
        buttonNegative: "Cancel"
    }
}

})

console.log(permission)
location = await RNLocation.getLatestLocation({timeout:100})
console.log(location, location.longitude, location.latitude, location.timestamp)
}else{

console.log("Here 7")
location = await RNLocation.getLatestLocation({timeout:100})
console.log(location,location.longitude, location.latitude, location,timestamp)


}




/*import * as Location from 'expo-location';
import React, {useEffect, useState} from 'react';


export default function Location(){

    
const [errorMessage, setErrorMessage] = useState(null);
useEffect(() =>{
load()
}, [])
async function load(){

    try{

        let {status} = await Location.requestPermissionsAsync()
        if(status != 'granted'){
            setErrorMessage('Access to location is needed to run the app')
            return
        }
        const location = await Location.getCurrentPositionAsync()

        const {latitude, longitude} = location.coords
        alert('Latitude: ${latitude}, longitude: ${longitude}')
    }catch(error){

    }
}



}
*/