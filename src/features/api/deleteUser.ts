import { api } from "@/app/Api";
import { User } from "@/entities/model/User";

export function deleteUser(user : User) : Promise<User>{
    return api.delete(`/users/${user.id}`);
}