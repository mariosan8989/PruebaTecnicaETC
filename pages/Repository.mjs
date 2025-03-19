export class Repositorio {
   usernameInput;
   passwordInput;
   submitButton;
   sibmitButtonLogin;
   ListProfile;
   localizadorProfile;
   menuPrincipal;
   LocalizadorPricipalP;
   generos;
   allGeneros;
   titleGenero;
   NameMovies;
  constructor() {
    this.usernameInput = 'xpath = //div[contains (@class ,\'default-ltr-cache-1rqw1gv\')]//input[contains (@class ,\'input_nativeElementStyles__1euouia0\')]';
    this.passwordInput = 'xpath = //input[contains(@name,\'password\')]';
    this.submitButton = 'xpath = //div[contains (@class ,\'default-ltr-cache-1rqw1gv\')]//button[contains (@class ,\'pressable_styles__a6ynkg0 button_styles__1kwr4ym0  default-ltr-cache-1jcp5p1-StyledBaseButton e1ax5wel2\')]';
    this.sibmitButtonLogin = '//button[contains(@type,\'submit\')]';
    this.ListProfile = 'xpath=//a[contains(@class,\'profile-link\')]';
    this.menuMovieSeries = 'xpath=//a[contains(@data-navigation-tab-name, "genreCategory")]';
    this.generos = 'xpath=//div[contains(@class,\'label\')]';
    this.localizadorProfile = '.profile-name';
    this.allGeneros= 'xpath = //ul[contains(@class, "sub-menu-list multi-column")]//a[contains(@class,"sub-menu-link")]';
    this.titleGenero = 'xpath=//span[contains(@class,"genreTitle")]';
    this.NameMovies = 'xpath=//div[contains(@class,"lolomoRow lolomoRow_title_card ltr-0")]//p[contains(@class,"fallback-text")]';
 
  }

}



