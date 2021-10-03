import {Environment} from "./env";

export const OrgEnvironment : Environment = {
    //db_url : 'mongodb+srv://admin:admin123@cluster0.yk9sl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    //db_url : 'mongodb+srv://adminuser:useradmin@charitydb.fivwx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    // jwt_secret : 'token'
    db_url:'mongodb://localhost:27017/CharityDb',
    jwt_secret : 'organization'
};