export interface LifeSpan {
    begin: string;
    end?: any;
    ended: boolean;
}

export interface Area {
    "sort-name": string;
    id: string;
    "iso-3166-1-codes": string[];
    type?: any;
    disambiguation: string;
    name: string;
    "type-id"?: any;
}

export interface BeginArea {
    id: string;
    "sort-name": string;
    "iso-3166-2-codes": string[];
    type?: any;
    disambiguation: string;
    name: string;
    "type-id"?: any;
}

export interface BeginArea2 {
    id: string;
    "sort-name": string;
    "iso-3166-2-codes": string[];
    type?: any;
    disambiguation: string;
    name: string;
    "type-id"?: any;
}

export interface Artist {
    disambiguation: string;
    "life-span": LifeSpan;
    "type-id": string;
    "sort-name": string;
    ipis: string[];
    end_area?: any;
    id: string;
    "gender-id": string;
    country: string;
    isnis: string[];
    area: Area;
    begin_area: BeginArea;
    "begin-area": BeginArea2;
    "end-area"?: any;
    type: string;
    gender: string;
    name: string;
}
