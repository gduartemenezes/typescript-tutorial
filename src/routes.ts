import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name:'Bicheiro 0 to hero',
        duration:2,
        educator:'Jairzin do Bicho'
    })
    return response.send()
}
