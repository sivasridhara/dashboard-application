
import 'whatwg-fetch';
//import AppUtils from '../../components/util/AppUtils';

let url = 'http://localhost:8080';
//let url = 'https://dashboard-application.herokuapp.com';

export default class RegistrationService {



     static registerUser(payload){


            //var user = {"firstName":payload.firstName,"lastName":payload.lastName,"contactNo":payload.contactNo,"emailAddress":payload.emailAddress,"description":payload.description};

            var user = {"firstName":payload.firstName,"lastName":payload.lastName,"emailAddress":payload.emailAddress,"description":payload.description, "appointment" : payload.appointment,"dob":payload.dob };
            console.log(JSON.stringify(user));
            return fetch(url+'/registration', {
                method: 'post',
                body: JSON.stringify(user),
                headers: {'Content-Type' : 'application/json','Accept': 'application/json'},
                credentials: 'same-origin'
            }).then(response => {

            if(response.status === 200){

                //resolve(response.json());
                return response.json();

            }

            }).catch(function(error){
            console.log("There has been a problem with your add operation : "+error.message);
            //reject(new Error("Error occured while adding record"));
            });


        }


}

