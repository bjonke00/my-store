export class User{
    id:number;
    username:string;
    password:string;
    // email:string;

    // constructor(id:number, username:string){
    //     this.id=id;
    //     this.username=username;
    // }

    public getUsername(){
        return this.username;
    }
    public setUsername(username:string){
        this.username=username;
    }
}