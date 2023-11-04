import axios from "axios";


export class PokeApiAdapter {

    private readonly axios = axios;

    async get (url:string){
        //petición get
        const { data } = await this.axios.get(url);
        return data;
    }
    async post (url:string, data: any){
        //petición get
        return;
    }
    async patch (url:string, data: any){
        //petición get
        return;
    }
    async delete (url:string){
        //petición get
        return;
    }
}
