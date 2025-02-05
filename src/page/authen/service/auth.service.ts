import { Request } from "../../../common/api.call"
import { AuthLoginReqVO } from "../record/record.req.vo"


const PATH = "/system/auth"

class AuthService {
    login(req: any) {
        return Request.call(PATH + "/login", "post", req)
    }
    logout()  {
        return Request.call(PATH + "/login", "get")
    }
    
}
export default new AuthService()