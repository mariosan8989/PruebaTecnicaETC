 import {Repositorio} from './Repository.mjs';
 
 class Login{
    page: any;
    url: string;
    repositorio: Repositorio;
    username: string;
    password: string;
    
    constructor(page: any, url: string, repositorio: Repositorio, username: string, password: string){
        this.page = page;
        this.repositorio = repositorio;
        this.username = username;
        this.password = password;
        this.url = url;

    }
    async login(){

        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.goto(this.url);
        await this.page.waitForSelector(this.repositorio.usernameInput);
        await this.page.fill(this.repositorio.usernameInput, this.username);
        await this.page.click(this.repositorio.submitButton);
        await this.page.fill(this.repositorio.passwordInput, this.password);
        await this.page.click(this.repositorio.sibmitButtonLogin);
        await this.page.waitForNavigation();
        console.log('Login exitoso');
        }
} 

export default Login;