import React from "react";
import styled from "styled-components";
import { api } from "@/app/Api";
import { User } from "@/entities/model/User";
import { useQuery } from "@tanstack/react-query";
import { UserCard } from "@/entities/ui/userCard/UserCard";
const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

async function getUsers(): Promise<User[]>{
    
    const data = await api.get("/users");
    return data.data

}

export function UserListWidget () {
    
    const result = useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    });

    return (
        <Wrapper>
            {result.data?.map((user) => (
                <div key={user.id}>
                    <UserCard user={user}/>
                </div>
            ))}   
        </Wrapper>
    )
}