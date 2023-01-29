import { Environment } from "./Environment";

export class MainServices {
    AppData: any;
    MainUrl: string;

    constructor() {
        this.AppData = Environment;
        this.MainUrl = this.AppData.URLs.MainUrl;
    }

    GetAllCharacters = async (): Promise<any> => {
        return fetch(`${this.MainUrl + this.AppData.EndPoints.AllCharacters}`, {
            method: "GET",
            headers: {
                "Accept": "/",
                "Content-Type": "application/json"
            },
        })
            .then((response: any) => response.json())
    }
}
