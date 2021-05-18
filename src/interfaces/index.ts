export interface User {
    id: number;
    fullName: string;
    firstName: string;
    lastName: string;
}

export interface Comment {
    id: number
    body: string
    user: User
    created_at: string
    updated_at: string
}


export interface Story {
    id: number;
    title: string;
    body: string;
    author: string
    image: string
    tags?: Array<string>
    comments?: Comment[]
}

export interface StorySample {
    id: number,
    userId: number,
    title: string,
    body: string
}

export interface StorySampleResult {
    data: StorySample[]
}
export type Status = "idle" | "pending" | "rejected" | "resolved"

export interface Err {
    errorMessage: string | null 
  }