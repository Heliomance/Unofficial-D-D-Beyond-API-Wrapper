export class LoginHandler {
    private sessionCookie: string;

    constructor() {
        document.addEventListener("UDAW_SessionCookie", (evt: CustomEvent) => {
            this.sessionCookie = evt.detail;
            console.log(this.sessionCookie);
        })
    }

}