import {ActionTypes} from "./actionTypes";

export class Utils {
    public static sendCustomEvent(data?: ActionTypes) {
        const event = new CustomEvent("UDAW", { "detail": data });
        console.log("dispatching event:", event);
        document.dispatchEvent(event);
    }
}