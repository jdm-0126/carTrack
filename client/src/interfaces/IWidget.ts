export default interface IWidget{
    name: string;
    username: string;
    id: number;
    email: string;
    address: string;
    phone: string;
    website: string;
    company: string;
}

export default interface ICompany {
    name: string;
    catchPhrase: string;
    id: number;
    bs: string;
}

export default interface IAdress {
    street: string;
    suite: string;
    id: number;
    city: string;
    zipcode: string;
    geo: string;
}

export default interface IGeo {
    lat: string;
    lng: string;
}