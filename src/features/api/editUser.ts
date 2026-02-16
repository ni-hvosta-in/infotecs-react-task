import { User } from "@/entities/model/User";
import { api } from "@/app/Api";

export async function editUser(newUser: User) : Promise<User>{
    console.log("edit");
    return await api.put(`users/${newUser.id}`, newUser);
}