
import 'whatwg-fetch';

let url = 'http://localhost:8080';


export default class RecordDetailsService {

    static fetchUser(payload){

        return fetch(url+'/registration/'+payload.registrationId,{
              method: 'get',
              headers: {
                  'pragma': 'no-cache',
                  'cache-control': 'no-cache'
              }
          }).then(response => {return response.json();})
           .catch(errorResp => { console.log(errorResp)});
    }

}