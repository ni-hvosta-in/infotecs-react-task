import React from "react";
import { User } from "@/entities/model/User";
import { useQuery } from "@tanstack/react-query";
import { UserCard } from "@/entities/ui/userCard/UserCard";
import { List } from "antd";
import { Wrapper } from "./UserListWidget.style";
import { getUsers } from "@/features/api/getUsers";

interface UserListWidgetProps {
    onClick?: (user: User) => void;
}

export function UserListWidget ({onClick} : UserListWidgetProps) {
    
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
                        <UserCard user={user} onClick={onClick}/>
                    </List.Item>    
                )}
            />
        </Wrapper>
    )
}