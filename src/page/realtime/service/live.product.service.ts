import { Request } from "../../../common/api.call"

const path = "/realtime/live/products"
class LiveProductService {
    getListByStreamId(streamId: any) {
        return Request.callAdmin(`${path}/livestream/${streamId}`, 'get')
    }
}
export default new LiveProductService()