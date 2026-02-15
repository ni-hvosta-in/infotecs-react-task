import { api } from "@/app/Api";
import { User, UserToCreateDTO } from "@/entities/model/User";

export async function postUser(user: UserToCreateDTO) : Promise<User>{
        return (await api.post("/users", user)).data;
}