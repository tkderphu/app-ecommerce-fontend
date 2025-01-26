// import * as Stomp from 'stompjs';
// import * as SockJS from 'sockjs-client';
import SockJS from "sockjs-client"
import {Stomp} from "@stomp/stompjs"
import { BASE_URL, Request } from '../common/api.call';
import { getToken } from "../common/common";
class StompService {

    private topicQueue: Map<string, number> = new Map<string, number>
    private stompClient: any;

    constructor() {
        this.stompClient = Stomp.over(new SockJS(`${BASE_URL}/ws`));
        this.stompClient.connect(this.getAuthHeader(), (frame: any) => {
            console.log("todo something: ", frame)
        })
    }



    send(url: string, data: any): void {
        this.stompClient.send(
            url,
            {},
            JSON.stringify(data)
        )
    }


    public getStompClient(): any {
        return this.stompClient
    }


    subscribe(topic: string, callback: any): void {
        if (this.topicQueue.has(topic)) {
            return;
        } else {
            this.topicQueue.set(topic, 1);
        }
        this.stompClient.subscribe(topic, (response: any) => {
            console.log("message: ", response)
            callback(response);
        });
    }


    private getAuthHeader = () => {
        const token = getToken()?.accessToken;
        return (token && token.length)
            ? { 'Authorization': `UUID ${token}` }
            : {}
    }
}
export default StompService