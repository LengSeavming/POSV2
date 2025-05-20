// ================================================================>> Custom Library
import { Data as DataSale } from '../sale/sale.types';

// Interface for the list of sales orders
export interface List {
    data: Data[]; // An array of Data objects representing sales orders
}

export interface List {
    petdata: PetData[]; // An array of Data objects representing sales orders
}

// Interface for a single sales order
export interface Data {
    id: number;
    name: string;
    products: Product[];
}

export interface PetData {
    id: number;
    name: string;
    pets: Pet[];
}

// Interface for a product within a sales order
export interface Product {
    id: number;
    name: string;
    image: string;
    unit_price: number;
    code: string;
    type: ProductType;
}


interface ProductType {
    name: string;
}
// Interface for a pet within a sales order
export interface Pet {
    id: number;
    name: string;
    image: string;
    unit_price: number;
    code: string;
    type: PetType;
}

interface PetType {
    name: string;
}

// Interface for the response of creating or updating a sales order
export interface ResponseOrder {
    data: DataSale;
    petdata: DataSale;
    message: string;
}

// export interface ResponseOrder {
//     petdata: DataSale;
//     message: string;
// }
