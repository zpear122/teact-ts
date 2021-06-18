import { httpGet,httpPost } from "../utils/http";
import base from "./base";
/**
 * 集中在一起 
 * redux:action
 */

const api = {
    getChenpin(){
        return httpGet(base.ownUrl + base.chengpin);
    },
    postLogin(params){
        return httpPost(base.ownUrl + "api/blueberrypai/login.php",params)
    }
}

export default api;