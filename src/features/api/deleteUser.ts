import { api } from "@/app/Api";
import { User } from "@/entities/model/User";

export async function deleteUser(user : User) : Promise<User>{
    return (await api.delete(`/users/${user.id}`)).data;
}