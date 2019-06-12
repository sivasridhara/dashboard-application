
import 'whatwg-fetch';


let url = 'http://localhost:8080';


export default class RegistrationService {

     static registerUser(payload){
            var user = {"firstName":payload.firstName,"lastName":payload.lastName,"emailAddress":payload.emailAddress,"description":payload.description, "appointment" : payload.appointment,"dob":payload.dob };
            return fetch(url+'/registration', {
                method: 'post',
                body: JSON.stringify(user),
                headers: {'Content-Type' : 'application/json','Accept': 'application/json'},
                credentials: 'same-origin'
            }).then(response => {
                if(response.status === 200){
                    return response.json();
                }
            }).catch(function(error){
            console.log("There has been a problem with your add operation : "+error.message);
            });
    }

}

