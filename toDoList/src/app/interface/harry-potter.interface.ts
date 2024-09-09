export interface Character {
    id: string; // Identifiant unique du personnage
    name: string; // Nom du personnage
    house: string; // Maison (par exemple : Gryffondor, Serpentard)
    patronus: string; // Patronus (par exemple : Cerf, Loutre)
    bloodStatus: string; // Statut du sang (Sang-pur, Sang-mêlé, Né-moldu)
    species: string; // Espèce (Humain, Elf, etc.)
    dateOfBirth?: string; // Date de naissance, optionnel
    wand?: {
      wood: string;
      core: string;
      length: number;
    }; // Baguette magique, optionnel
    animagusForm?: string; // Forme Animagus, optionnel
  }

  export interface Spell {
    id: string; // Identifiant unique du sort
    name: string; // Nom du sort
    type: string; // Type de sort (par exemple : Sortilège, Maléfice)
    effect: string; // Effet du sort
    incantation: string; // Incantation (par exemple : "Expelliarmus")
    creator?: string; // Créateur du sort, optionnel
    difficultyLevel?: string; // Niveau de difficulté, optionnel
  }
  
  export interface House {
    id: string; // Identifiant unique de la maison
    name: string; // Nom de la maison (Gryffondor, Serpentard, etc.)
    founder: string; // Fondateur de la maison
    animal: string; // Animal représentant la maison
    colors: string[]; // Couleurs de la maison
    ghost: string; // Fantôme de la maison
    commonRoom: string; // Salle commune de la maison
    traits: string[]; // Traits caractéristiques des membres de la maison
  }
  
  export interface MagicalObject {
    id: string; // Identifiant unique de l'objet
    name: string; // Nom de l'objet
    type: string; // Type d'objet (par exemple : Horcruxe, Artefact)
    description: string; // Description de l'objet
    owner?: string; // Propriétaire de l'objet, optionnel
    abilities?: string[]; // Capacités ou pouvoirs de l'objet, optionnel
    origin?: string; // Origine de l'objet, optionnel
  }
  
  export interface ApiResponse<T> {
    data: T; // Les données de la réponse
    success: boolean; // Indique si la requête a réussi
    message?: string; // Message d'erreur ou de succès, optionnel
  }
