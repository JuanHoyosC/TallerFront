import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VillainService {

   //private villain:any[]=
   private villain:Villain[]=
   [
       {
         nombre: "Siniestro",
         bio: "Es un supervillano ficticio que aparece en los cómics publicados por DC Comics. Sinestro es un exmiembro del Green Lantern Corps que fue dado de baja deshonrosamente por abusar de su poder. Es el archienemigo de Hal Jordan y fundador del Cuerpo de Sinestro.",
         img: "assets/img/Siniestro.png",
         aparicion: "1961-08-16",
         casa:"DC"
       },
       {
         nombre: "Flash reverso",
         bio: "Flash Reverso (o Reverse Flash) es un nombre utilizado por los supervillanos ficticios en los cómics publicados por la editorial DC. Algunos son archienemigos de diversos héroes velocistas que han usado (o heredaron) el nombre Flash a lo largo de los años en diferentes épocas de cómics. Estos villanos tienen todas las mismas habilidades de Flash, pero sus poderes provienen de la ''Fuerza de Velocidad Negativa'', usan una versión de colores invertidos del traje de Flash, y por lo general llegan a ser un duro oponente para este héroe.",
         img: "assets/img/Reverse-flash.png",
         aparicion: "1949-02-12",
         casa:"DC"
       },
       {
         nombre: "Venom",
         bio: "El personaje es un extraterrestre sensible simbionte con una forma amorfa, semi-líquido, que sobrevive mediante la unión con un huésped, por lo general humano. Esta forma de vida dual recibe poderes mejorados y generalmente se refiere a sí misma como «Venom»",
         img: "assets/img/Venom.png",
         aparicion: "1984-05-07",
         casa: "Marvel"
       },
       {
         nombre: "Thanos",
         bio: "Su nombre es en parte un juego de palabras que hace referencia al término griego Θάνατος (Thánatos), que significa muerte, pero principalmente es una deformación del nombre del dios de la muerte no violenta, Tánatos. Él es el hijo de Mentor y el hermano de Starfox. Thanos es uno de los villanos más poderosos de todo el Mundo Marvel y se ha enfrentado con muchos héroes, incluidos los Vengadores, los Guardianes de la Galaxia, los Cuatro Fantásticos, los X-Men, entre otros.",
         img: "assets/img/Thanos.png",
         aparicion: "1973-02-15",
         casa:"Marvel"
       },
       {
         nombre: "Joker",
         bio: "Si bien sus orígenes y rasgos han variado con el transcurso del tiempo, por lo general se le asocia con una personalidad psicópata con un humor sádico y retorcido, lo que le ha llevado a ser catalogado como la antítesis de Batman. Con la excepción de una etapa en la que mantuvo un rol de bromista simple.",
         img: "assets/img/Joker.png",
         aparicion: "1940-04-23",
         casa: "DC"
       },
       {
         nombre: "Darkseid",
         bio: "Él es el padre de Orión, Kalibak, Grayven y Grial. Como el gobernante tiránico del planeta Apokolips, el objetivo final de Darkseid es conquistar el universo y eliminar todo el libre albedrío y los seres sensibles. Uno de los seres más poderosos en el Universo DC, el personaje se convirtió en un villano de Superman y es considerado el archienemigo de la Liga de la Justicia.",
         img: "assets/img/Darkseid.png",
         aparicion: "1970-11-5",
         casa: "DC"
       },
       {
         nombre: "Magneto",
         bio: "Poderoso mutante con la habilidad de generar y controlar campos magnéticos mentales, Magneto ha sido el más eminente enemigo que hayan tenido los X-Men desde su creación. En sus primeras apariciones su motivación se debía a la megalomanía, pero posteriormente los guionistas han dado cuerpo al personaje y su origen, revelando que es un superviviente del holocausto judío (Shoah), cuyas acciones se encaminan a la protección de la raza mutante y evitar que sufra un destino similar.",
         img: "assets/img/magneto.png",
         aparicion: "1963-9-01",
         casa: "Marvel"
       }
];

constructor(){
   console.log("Servicio listo para usar!!");
}

//getHeros(){
getVillains():Villain[]{
   return this.villain;
}

getVillain(id:number){
   return this.villain[id];   
}

buscarVillain(palabra:string):Villain[]{
 let villainArr:Villain[] = [];
 palabra = palabra.toLowerCase();
 for( let villain of this.villain){
   let nombre = villain.nombre.toLowerCase();
   if(nombre.indexOf(palabra)>=0){
    villainArr.push(villain);
   }
 }
 return villainArr;
}

}

export interface Villain{
nombre:string,
bio:string,
img:string,
aparicion:string,
casa:string
}
