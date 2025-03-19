
class Funciones {
    constructor() {
    }
    async getProfileByName(profiles: any, opction: string, locator?: string) {
        const count = await profiles.count();
       for (let i = 0; i < count; i++) {
        let name: string | null = null;
        if(locator){
            name = await profiles.nth(i).locator(locator).textContent();
        }else{
            name = await profiles.nth(i).textContent();
        }
            
        // console.log(`Índice: ${i}, Nombre encontrado: ${name?.trim()}`); // Debug  
            if (name?.trim() === opction) {
              //  console.log(`Índice: ${i}, Nombre encontrado: ${name?.trim()}`); // Debug
                return i
            }
        }
        return null; // Retorna null si no encuentra el perfil
    }

    async getNameElement (profiles: any, element: number, locator?: string): Promise<string[]> {
        const count = await profiles.count();
        let names: string[] = [];
        const elementsToGet = Math.min(element, count);
        for (let i = 0; i < elementsToGet; i++) {
            let name: string;

              if(locator){
                  name = await profiles.nth(i).locator(locator).textContent();
                }else{
                  name = await profiles.nth(i).textContent();               
                }
             if (name) {
                    names.push(name.trim()); 
                }
 
            }
      return names;
    }
    

}

export default Funciones;