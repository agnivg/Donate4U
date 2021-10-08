import {Environment} from "./env";

export const OrgEnvironment : Environment = {
    // jwt_secret : 'token'
    db_url:'mongodb://localhost:27017/CharityDb',
    jwt_secret : 'organization'
};