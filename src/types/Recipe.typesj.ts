export interface Recipe{

    id?: string; // undefined olabilir.
    title: string;
    description?: string; // undefined olabilir.
    ingredients?: string[];
    steps?: string[];

}