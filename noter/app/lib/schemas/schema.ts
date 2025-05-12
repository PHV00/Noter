import {z} from 'zod';

export const creatAnnotationSchema = z.object({
    title : z.string().min(1,{message:'Please insert minimun 1 characters'}),
    content : z.string().min(1,{message:'Please insert minimun 1 characters'}),
})

export type CreateAnnotationSchema = z.infer<typeof creatAnnotationSchema>