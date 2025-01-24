export interface ILivreGet {
    id: string,
    titre: string,
    auteur: string | null,
    sortie: string | null,
    disponible: string,
    genre: string,
    nombre_emprunts: number,
    image_url: string | null,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null
}
