import {Repositorio} from './Repository.mjs';
import Funciones from '../utilitario/funciones';

class Principal{
    page: any;
    repositorio: Repositorio;
    funciones: Funciones;
    opcionP : string;
    countElenment : number;
    constructor(page : any, repositorio: Repositorio, funciones: Funciones,opcionP? : string, countElenment?: number){
        this.countElenment = countElenment ?? 0;
        this.opcionP = opcionP?? '';
        this.page = page;
        this.repositorio = repositorio;
        this.funciones = funciones;

    }

    async principal(){
        const  menu = await this.page.locator(this.repositorio.menuMovieSeries);
        const index = await this.funciones.getProfileByName(menu, this.opcionP);
        if (index !== null) {
            await this.page.locator(this.repositorio.menuMovieSeries).nth(index).click();
        }
        else {
            throw new Error(`Menu with name ${this.opcionP} not found`);
        }
        await this.page.waitForSelector(this.repositorio.generos);
        await this.page.locator(this.repositorio.generos).click();
        console.log(' Ingreso exitoso Menu Peiculas');
    }

    async generos(){
       const generos = await this.page.locator(this.repositorio.allGeneros);
       const index = await this.funciones.getProfileByName(generos, this.opcionP);
       if(index !== null){
        await this.page.locator(this.repositorio.allGeneros).nth(index).click();
       }else{
           throw new Error(`Genero with name ${this.opcionP} not found`);
       }
       await this.page.waitForSelector(this.repositorio.titleGenero);
    }

    async getNameElement(){
        const MoviesElement = await this.page.locator(this.repositorio.NameMovies);
        const namesArray = await this.funciones.getNameElement(MoviesElement, this.countElenment);
        if(namesArray.length > 0){
            namesArray.forEach((element) => {
                console.log(element);
            });
            return namesArray;
        }else{
            console.log('No se encontraron elementos');
        }
           
    }


}

export default Principal;
