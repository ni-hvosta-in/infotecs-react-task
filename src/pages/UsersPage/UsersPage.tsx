import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/app/entities/user/model/User";
import styled from "styled-components";
import { UserCard } from '@/app/entities/user/ui/userCard/UserCard';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const server: string = "https://698f535cdcc9a4df204a5b66.mockapi.io/api";

async function getUsers(): Promise<User[]>{
    
    const data = await axios.get(server + "/users");
    return data.data

}

export function UserPage() {

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
    );
}