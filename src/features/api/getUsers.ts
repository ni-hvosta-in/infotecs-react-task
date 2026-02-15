import { User } from "@/entities/model/User";
import { api } from "@/app/Api";

export async function getUsers(): Promise<User[]>{
    
    const data = await api.get("/users");
    return data.data

}