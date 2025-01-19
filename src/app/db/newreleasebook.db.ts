import { disponible, genre, IBook, IBookTop } from "../models/type.model";

export const newReleaseBookDb: IBook[] = [
    {
        title: "La saga de L'Épée de vérité ",
        author: "Terry Goodkind",
        sortie: new Date(1994,1,1),
        genre: genre.Fantastic,
        disponible: disponible.OUI
    },
    {
        title: "La Machine à explorer le temps",
        author: "H.G. Wells",
        sortie: new Date(1895,1,1),
        genre: genre.Adventure,
        disponible: disponible.OUI
    },
    {
        title: "La Sélection",
        author: "Kiera Cass",
        sortie: new Date(2012,1,1),
        genre: genre.Romance,
        disponible: disponible.OUI
    },
    {
        title: "Le Pacte des marchombres",
        author: "Pierre Bottero",
        sortie: new Date(2004,1,1),
        genre: genre.Adventure,
        disponible: disponible.OUI
    },
    {
        title: "Les Chroniques de Narnia",
        author: "C.S. Lewis",
        sortie: new Date(1950,1,1),
        genre: genre.Fantastic,
        disponible: disponible.OUI
    },
    {
        title: "Cinquante nuances de Grey",
        author: " E.L. James ",
        sortie: new Date(2009,1,1),
        genre: genre.Romance,
        disponible: disponible.OUI
    },
    {
        title: "Le Livre des Baltimore",
        author: " Joël Dicker ",
        sortie: new Date(2015,1,1),
        genre: genre.Romance,
        disponible: disponible.OUI
    },
    {
        title: "Les Trois Mousquetaires",
        author: "Alexandre Dumas ",
        sortie: new Date(1844,1,1),
        genre: genre.Adventure,
        disponible: disponible.OUI
    },
    {
        title: "L'Empire des anges ",
        author: "Bernard Werber",
        sortie: new Date(2000,1,1),
        genre: genre.Fantastic,
        disponible: disponible.OUI
    },
    {
        title: "Les Chroniques de la guerre de Lodoss ",
        author: " Ryo Mizuno ",
        sortie: new Date(1988,1,1),
        genre: genre.Adventure,
        disponible: disponible.OUI
    },
]

export const get = (pageIndex: number): IBook[] =>{
    let newBook : IBook[] = []

    for (let i=pageIndex*7; (i< (pageIndex+1)*7) && (i<newReleaseBookDb.length);i++){
        newBook.push(newReleaseBookDb[i])
    }
    return newBook;
}

export const top = (): IBookTop[] =>{
    return [
        {
            title: "La Sélection",
            author: "Kiera Cass",
            sortie: new Date(2012,1,1),
            genre: genre.Romance,
            disponible: disponible.OUI,
            nombre_emprunt: 4,
        },
        {
            title: "Le Pacte des marchombres",
            author: "Pierre Bottero",
            sortie: new Date(2004,1,1),
            genre: genre.Adventure,
            disponible: disponible.OUI,
            nombre_emprunt: 4,
        },
        {
            title: "Les Chroniques de Narnia",
            author: "C.S. Lewis",
            sortie: new Date(1950,1,1),
            genre: genre.Fantastic,
            disponible: disponible.OUI,
            nombre_emprunt: 4,
        },
        {
            title: "Cinquante nuances de Grey",
            author: " E.L. James ",
            sortie: new Date(2009,1,1),
            genre: genre.Romance,
            disponible: disponible.OUI,
            nombre_emprunt: 4,
        },
        {
            title: "Le Livre des Baltimore",
            author: " Joël Dicker ",
            sortie: new Date(2015,1,1),
            genre: genre.Romance,
            disponible: disponible.OUI,
            nombre_emprunt: 4,
        },
        {
            title: "Les Trois Mousquetaires",
            author: "Alexandre Dumas ",
            sortie: new Date(1844,1,1),
            genre: genre.Adventure,
            disponible: disponible.OUI,
            nombre_emprunt: 4,
        },
        {
            title: "L'Empire des anges ",
            author: "Bernard Werber",
            sortie: new Date(2000,1,1),
            genre: genre.Fantastic,
            disponible: disponible.OUI,
            nombre_emprunt: 4,
        },
        {
            title: "Les Chroniques de la guerre de Lodoss ",
            author: " Ryo Mizuno ",
            sortie: new Date(1988,1,1),
            genre: genre.Adventure,
            disponible: disponible.OUI,
            nombre_emprunt: 4,
        }
    ]
}