"use server"

import { IAnnotationManagement, IAnnotationValue, IAnnotationValueComplete } from "../lib/interfaces/interface";
import { prisma } from "../lib/prisma";

export async function createAnnotation(
    annotationTitle : string,
    annotationContent : string,
    userId : string,
    ) {
    try {
        await prisma.annotation.create({
            data:{
                title : annotationTitle,
                content : annotationContent,
                userId:userId,
            }
        });
    } catch (error) {
        throw error; 
    } finally {
        await prisma.$disconnect();
    }
}

export async function updateAnnotation(
    annotationTitle : string,
    annotationContent : string,
    annotationId : number,
    userId : string,
    ) {
    try {
        await prisma.annotation.update({
            data:{
                title : annotationTitle,
                content : annotationContent,
                userId:userId,
            },
            where:{
                id : annotationId,
            }
        });
    } catch (error) {
        throw error; 
    } finally {
        await prisma.$disconnect();
    }
}

export async function deleteAnnotation(
    annotationId : number,
    ) {
    try {
        await prisma.annotation.delete({
            where:{
                id : annotationId,
            }
        });
    } catch (error) {
        throw error; 
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAllAnnotationByUser(userId : string) : Promise<IAnnotationManagement[]>{
    try {
        const annotations : IAnnotationManagement [] = await prisma.annotation.findMany({
            select:{
                id : true,
                title : true,
                content : true,
                creatAt : true,
                updateAt : true,
            },
            where:{
                userId:userId
            }
        });
        return annotations;
    } catch (error) {
        throw error; 
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAnnotationByAnnotationId(userId : string,annotationId : number){
    try {
        const annotations = await prisma.annotation.findUnique({
            where:{
                id:annotationId,
                AND:{
                    userId:userId,
                }
            }
        });
        return annotations;
    } catch (error) {
        throw error; 
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAnnotationById(annotationId : number) : Promise<IAnnotationValueComplete>{
    try {
        const annotations : IAnnotationValueComplete | null = await prisma.annotation.findUnique({
            select:{
                id:true,
                title:true,
                content:true
            },
            where:{
                id:annotationId,
            }
        });

        if(annotations){
            return annotations;
        }else{
            return {
                id:0,
                title:"",
                content:""
            }
        }

    } catch (error) {
        throw error; 
    } finally {
        await prisma.$disconnect();
    }
}
