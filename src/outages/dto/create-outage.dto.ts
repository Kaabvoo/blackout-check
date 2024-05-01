export class CreateOutageDto {
    link?: string
    http_code?: number
    http_message?: string
    date: string
    wasSuccessful: boolean
}

export class getQuery {
    page?: number
    skip?: number
    take?: number
    fromDate?: Date
    toDate?: Date
}