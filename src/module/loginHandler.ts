import {Utils} from "./utils";
import {ActionTypes} from "./actionTypes";

export class LoginHandler {
    private sessionCookie: string;

    constructor() {
        document.addEventListener("UDAW_SessionCookie", (evt: CustomEvent) => {
            this.sessionCookie = evt.detail;
            console.log("unofficial-ddb-api-wrapper | cookie recieved:", this.sessionCookie);
        })
    }

    public requestSessionCookie(): void {
        console.log("unofficial-ddb-api-wrapper | requesting cookie")
        Utils.sendCustomEvent(ActionTypes.GetSessionCookie);
    }
}