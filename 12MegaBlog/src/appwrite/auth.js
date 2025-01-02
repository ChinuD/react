import conf from '../conf/conf.js'
import {Client, Account, ID} from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)
            // .setKey('')
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, name)
            if(userAccount){
                return this.login({email, password})
            }
            else{
                return userAccount
            }
        } catch (e) {         
            throw e
        }
    }

    async login({email, password}) {
        try {
            const session = await this.account.createEmailSession(email, password)
            return session
        } catch (e) {
            throw e
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("Appwrite service  :: getCurrentUser :: error", error)
        }

        return null;
    }

    async logout(){
        try{
            await this.account.deleteSession('current');
        }catch(error){
            console.log("Appwrite service  :: logout :: error", error)
        }
    }
}

const authService = new AuthService();

export default authService;