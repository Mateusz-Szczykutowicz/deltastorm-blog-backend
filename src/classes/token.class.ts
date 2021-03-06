import md5 from "md5";
import config from "../config";
import { TokenClassI } from "../interface/auth.interface";
import { ID, token } from "../interface/general.interface";

export class Token implements TokenClassI {
    private token: token;
    public constructor() {
        this.token = "";
    }
    public setToken(securityID: ID): void {
        this.token = md5(
            `#${securityID}!${Math.random()}+${config.security.tokenSalt}#`
        );
    }
    public getToken(): token {
        return this.token;
    }
}
