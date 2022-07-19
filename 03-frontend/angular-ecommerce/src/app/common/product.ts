export class Product {

    sku!: string;
    name!: string;
    description!: string;
    unitPrice!: string;
    imageUrl!: string;
    active!: boolean;
    unitsInStock!: number;
    dateCreated!: Date;
    lastUpdated!: Date;

}

// used ! definite assignment assertion
// variable not available at compile time will be available at runtime