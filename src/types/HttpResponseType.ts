export type HttpResponseType = {
    success: boolean
    statusCode: number
    message: string
    request: {
        ip?: string | null
        method: string
        url: string
    },
    data: unknown
}

export type HttpErrorType = {
    success: boolean
    statusCode: number
    message: string
    request: {
        ip?: string | null
        method: string
        url: string
    },
    data: unknown
    trace?: object | null
}