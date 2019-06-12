

export default class AppUtils{

    static getHeader(){
        let applicationHeader = new Headers();
        applicationHeader.append("Content-Type","application/json");
        applicationHeader.append('pragma','no-cache');
        applicationHeader.append('cache-control','no-cache');
        return applicationHeader;
    }

    static handleResponse(response){
        try{
            if(response.status !== 200){
                throw response.json();
            }
            return response.json();
        }catch(errorResponse){
            return errorResponse.then((errorObject)=> {throw errorObject});
        }
    }

}