export interface IAnnotationValue {
    title : string;
    content : string;
}

export interface IAnnotationManagement {
    id: number; 
    title: string; 
    content: string; 
    creatAt: Date; 
    updateAt: Date; 
}
export interface IAnnotationValueComplete {
    id: number;
    title : string;
    content : string;
}