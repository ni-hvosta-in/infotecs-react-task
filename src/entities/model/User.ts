export interface UserToCreateDTO{
    name: string;
    avatar: string;
}

export interface User extends UserToCreateDTO {
    id: number;
    createdAt: string;
}