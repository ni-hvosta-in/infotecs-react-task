import React from "react";
import { User } from "../../model/User";
import {Avatar} from "antd"
import { Wrapper, WraperInfo, Name, CreatedAt } from "./UserCard.style";
import dayjs from "dayjs";

interface UserProps {
    user: User;
    onClick?: (user: User) => void;
}

export function UserCard ({user, onClick} : UserProps) {
    return (
        <Wrapper>
            <Avatar src={user.avatar} alt={user.name} size={60} onClick={() => onClick?.(user)} style={{cursor: "pointer"}}/>
            <WraperInfo>
                <Name onClick={() => onClick?.(user)}>{user.name}</Name>
                <CreatedAt>Зарегистрирован {dayjs(user.createdAt).format('DD.MM.YYYY')}</CreatedAt>
            </WraperInfo>
        </Wrapper>
    );
}