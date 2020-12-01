import { Hotel } from './hotel';

export interface Forfait {
    destination: string,
    villeDeDepart: string,
    hotel: Hotel,
    dateDepart: string,
    dateRetour: string,
    prix: number,
    forfaitVedette: boolean,
    rabais: number,
}
