export interface OrderModel {
    id: number;
    dateIn: string;
    dateOut: string;
    price: number;
    noteOrder: string | null;
    name: string;
    age: number;
    gender: number;
    type: string;
    breed: string;
    notePet: string | null;
    ownerFIO: string;
    phone: string;
    address: string;
    noteOwner: string | null;
}