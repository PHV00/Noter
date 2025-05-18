import {z} from 'zod';

export const updateAnnotationSchema = z.object({
    title : z.string().min(1,{message:'Please insert minimun 1 characters'}),
    content : z.string().min(1,{message:'Please insert minimun 1 characters'}),
})

export type UpdateAnnotationSchema = z.infer<typeof updateAnnotationSchema>