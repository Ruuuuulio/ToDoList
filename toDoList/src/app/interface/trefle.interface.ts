export interface TrefleInterface {
    
}

export interface KingdomInterface {
    id: string;
    name: string;
    slug: string;
    links: string[]
}

export interface Species {
    id: number;
    common_name: string;
    slug: string;
    scientific_name: string;
    year: number;
    bibliography: string;
    author: string;
    status: string;
    rank: string;
    family_common_name: string;
    genus_id: number;
    family: string;
    image_url: string;
    genus: string;
}


export interface Plant {
    id: number;
    common_name: string;
    scientific_name: string;
    year: number;
    bibliography: string;
    author: string;
    status: string;
    rank: string;
    family_common_name: string;
    genus_id: number;
    family: string;
    image_url: string;
    genus: string;
    observations: string;
    distribution: string;
    main_species_id: number;
    edible_part: string[];
    edible: boolean;
    vegetable: boolean;
    duration: string[];
}

export interface Genus {
    id: number;
    name: string;
    slug: string;
    links: {
        self: string;
        plants: string;
    };
}

export interface Family {
    id: number;
    name: string;
    common_name: string;
    slug: string;
    links: {
        self: string;
        plants: string;
    };
}

export interface PaginatedResponse<T> {
    data: T[];
    links: {
        first: string;
        last: string;
        prev?: string;
        next?: string;
    };
    meta: {
        total: number;
        current_page: number;
        last_page: number;
        per_page: number;
    };
}

export interface Distribution {
    id: number;
    continent: string;
    countries: string[];
}

export interface SearchParams {
    q?: string;  // Query string pour la recherche de plantes
    page?: number;
    filter?: {
        genus_id?: number;
        family_id?: number;
    };
    range?: {
        year?: {
            min: number;
            max: number;
        };
    };
    sort?: {
        field: string;
        direction: 'asc' | 'desc';
    };
}

export interface Links {
    self: string;
    plants: string;
    genus: string;
    species: string;
}

export interface ApiError {
    status: number;
    message: string;
    errors?: string[];
}
