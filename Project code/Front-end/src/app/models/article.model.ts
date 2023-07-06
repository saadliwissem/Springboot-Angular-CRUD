import { FileHandle } from "./file-handle.model";

export class Article {
    ref!: number
    pAcha!:number;
    pVente!:number;
    qte!:number;
    src!:string;
    name!:string;
    description!:string;
    
    [key: string]: string|number|FileHandle[]|undefined;
}
