import { Request } from "../../../common/api.call"

const PATH = "/system/users"
class UserService {
    createUserMember(req: any) {
        return Request.call(PATH, "post", req)
    }
}
export default new UserService()