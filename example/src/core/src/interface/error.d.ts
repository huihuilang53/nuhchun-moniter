export interface PromiseErrorInfo {
    type: 'Error'
    name: 'Promise Error'
    data: {
        reason: string
        url: string
    }
}
export interface JsErrorInfo {
    type: 'Error'
    name: 'JS Error'
    data: {
        reason: string
        url: string | undefined
        row: number | undefined
        col: number | undefined
        error: any
    }
}
export interface ConsoleErrorInfo {
    type: 'Error'
    name: 'Console Error'
    data: {
        reason: string
        url: string
    }
}
export interface ResourceErrorInfo {
    type: 'Error'
    name: 'Resoure Error'
    data: {
        reason: string
        url: string
    }
}
export type ErrorInfo = JsErrorInfo | PromiseErrorInfo | ResourceErrorInfo | ConsoleErrorInfo