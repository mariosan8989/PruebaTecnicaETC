import { test, expect, TestInfo } from '@playwright/test';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import  Funciones  from '../utilitario/funciones';
import Principal from '../pages/PaginaPrincipal';
import { Repositorio } from '../pages/Repository.mjs';
import packageJson from '../package.json';
import { Given, When, Then } from '@cucumber/cucumber';

const { Credencials, Url, Profiles, OpcionesMenu,OpcionesGenero,TotalNamesMovies } = packageJson;
const repositorio = new Repositorio();
const funciones = new Funciones();


//   Scenario: El usuario Obtiene 3 peliculas de Terror y Obtiene la Url En Curso

test('El usuario está en la página de login y Ingresa las Credenciales', async ({ page},testInfo) => {
  const newLogin = new Login(page, `https://${Url.url}`, repositorio, Credencials.user, Credencials.password);
  await newLogin.login();
  await expect(page).toHaveURL(/browse/);

  await test.step('El usuario Selecciona Un Perfil', async () => {
    const profile = new Perfil(page, repositorio,funciones, Profiles.profile);
    await profile.perfil();
  
  });
  await test.step('El usuario Selecciona el menu Películas', async () => {
    const principal = new Principal(page, repositorio,funciones, OpcionesMenu.opcion1);
    await principal.principal();
  });
  await test.step('El usuario selecciona un genero', async () => {
    const principal = new Principal(page, repositorio,funciones, OpcionesGenero.opcion1);
    await principal.generos();
  });
  await test.step('El usuario Obtiene los nombres de las Películas y se Imprime en el Reporte html', async () => {
    const principal = new Principal(page, repositorio,funciones,'',TotalNamesMovies.total);
    const elementArray =  await principal.getNameElement();
    // pitar los nombres en el reporte 
    if(elementArray && elementArray.length > 0){
      elementArray.forEach((element) => {
          console.log(element);
          testInfo.attach('Pelicula encoantrada', {
            body: element,
            contentType: 'text/plain',
          });
      });
    }else{
     console.log('No se encontraron elementos');
     testInfo.attach('Mensaje', {
        body: 'No se encontraron elementos',
        contentType: 'text/plain',
      });
    }

  });
  await test.step('El usuario obtiene la Url y se Imprime en el Reporte html', async () => {
   testInfo.attach('UrlCurrent', {
      body: page.url(),
      contentType: 'text/plain'
   });
   console.log(page.url());
  });        
  
  
});




  



