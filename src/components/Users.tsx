import React from "react";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import { create, UserType } from "../redux/slices/users";

export const Users = () => {
    const users = useAppSelector((store) => store.users);
    const dispatch = useDispatch();

    const onCreateUserClick = () => {
        const userData = {
            name: faker.person.fullName(),
            age: faker.number.int({ max: 50, min: 10 }),
        };

        dispatch(create(userData));
    };
    return (
        <div>
            <button onClick={onCreateUserClick}>Create User</button>

            {users.map((user: UserType) => <div key={user.name}>
                <h5>{user.name}</h5>
                <span>{user.age}</span>
            </div>)}
        </div>
    );
};
