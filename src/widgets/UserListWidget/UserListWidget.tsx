import React from "react";
import styled from "styled-components";
import { api } from "@/app/Api";
import { User } from "@/entities/model/User";
import { useQuery } from "@tanstack/react-query";
import { UserCard } from "@/entities/ui/userCard/UserCard";
import { List } from "antd";
import { Wrapper } from "./UserListWidget.style";

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
            <List 
                itemLayout="horizontal"
                dataSource={result.data} 
                loading={result.isLoading}
                renderItem={(user) => (
                    <List.Item key={user.id}>
                        <UserCard user={user}/>
                    </List.Item>    
                )}
            />
        </Wrapper>
    )
}