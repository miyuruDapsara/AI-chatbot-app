

export interface IMessageHistory{
    role: string;
    parts: [{text:string}];
}

export  interface IMessageHistoryCollection{
    history: IMessageHistory[];
}