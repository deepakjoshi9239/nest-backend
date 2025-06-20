import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy as JwtStrategyBase } from "passport-jwt";
import { jwtConstants } from "./auth.constant";




@Injectable()
export class JwtStrategy extends PassportStrategy(JwtStrategyBase) {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        return { id: payload.sub, email: payload.email };
    }
}