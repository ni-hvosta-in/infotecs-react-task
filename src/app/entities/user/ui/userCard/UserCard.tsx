import React from "react";
import { User } from "../../model/User";
import {Image, Avatar} from "antd"
import { Wrapper, WraperInfo, Name, CreatedAt } from "./UserCard.style";
import dayjs from "dayjs";

interface UserProps {
    user: User;
}

export function UserCard ({user} : UserProps) {
    return (
        <Wrapper>
            <Avatar src={user.avatar} alt={user.name} size={60} />
            <WraperInfo>
                <Name>{user.name}</Name>
                <CreatedAt>Зарегистрирован {dayjs(user.createdAt).format('DD.MM.YYYY')}</CreatedAt>
            </WraperInfo>
        </Wrapper>
    );
}