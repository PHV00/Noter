export interface ICreateAnnotation {
    title : string;
    content : string;
}

export interface IAnnotationManagement {
    id: number; 
    title: string; 
    content: string; 
    creatAt: Date; 
    updateAt: Date; 
    userId: string;
}
