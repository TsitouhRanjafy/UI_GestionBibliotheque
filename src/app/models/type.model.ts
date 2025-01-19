export interface IEventEmitNotification {
    title: string,
    status: boolean
}

export enum genre{
    Fantastic = 'Fantastic',
    Romance = 'Romance',
    Drame = 'Drame',
    Adventure = 'Adventure'
}

export interface IBookSingle {
    title: string,
    genre: genre,
    dateRetour : Date
}

export interface IBook {
    title: string,
    author: string,
    genre: genre,
    sortie: Date | undefined,
    disponible: disponible,
}
export interface IBookTop {
    title: string,
    author: string,
    genre: genre,
    sortie: Date | undefined,
    disponible: disponible,
    nombre_emprunt: number;
}

export enum disponible {
    OUI = "oui",
    NON = 'non'
}