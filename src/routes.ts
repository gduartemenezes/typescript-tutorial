import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute(
        'Bicheiro 0 to hero',
        2,
        'Jairzin do Bicho'
    )
    return response.send()
}
