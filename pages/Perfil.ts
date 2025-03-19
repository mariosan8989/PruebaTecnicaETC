import {Repositorio} from './Repository.mjs';
import Funciones from '../utilitario/funciones';
class Perfil{
    page: any;
    repositorio: Repositorio;
    funciones: Funciones;
    NombrePerfil : string;
    constructor(page : any, repositorio: Repositorio, funciones: Funciones,NombrePerfil : string){
        this.NombrePerfil = NombrePerfil;
        this.page = page;
        this.repositorio = repositorio;
        this.funciones = funciones;
    }
    async perfil(){
    
        const profiles = await this.page.locator(this.repositorio.ListProfile);
        const index = await this.funciones.getProfileByName(profiles, this.NombrePerfil,this.repositorio.localizadorProfile);
        if (index !== null) {
            await this.page.locator(this.repositorio.ListProfile).nth(index).click();
        } else {
            throw new Error(`Profile with name ${this.NombrePerfil} not found`);
        }
        await this.page.waitForSelector(this.repositorio.menuMovieSeries);
        console.log(' Ingreso Perfil exitoso');
    }
}

export default Perfil;