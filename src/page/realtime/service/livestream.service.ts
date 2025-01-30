import { Request } from "../../../common/api.call"

const path = "/realtime/livestreams"
class LivestreamService {
    getListLivestream() {
        return Request.call(path, "get")
    }
    getLivestream(streamId: any) {
        return Request.call(`${path}/${streamId}`, 'get')
    }
}
export default new LivestreamService()