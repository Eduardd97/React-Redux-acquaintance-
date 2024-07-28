import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import {
    create,
    deleteUser,
    setUserAdmin,
    UserType,
} from "../redux/slices/users";
import { createUser } from "../utils/createFakerUser";
import { useIntialUsers } from "../hooks/useInitialUser";

export const Users = () => {
    const users = useAppSelector((store) => store.users);
    const dispatch = useDispatch();

    useIntialUsers();

    const onCreateUserClick = () => {
        const userData = createUser();

        dispatch(create(userData));
    };

    const onDeleteUser = (userName: string) => {
        dispatch(deleteUser(userName));
    };

    const onSetUserAdmin = (name: string) => {
        dispatch(setUserAdmin(name));
    };
    return (
        <div>
            <button onClick={onCreateUserClick}>Create User</button>

            {users.map((user: UserType) => (
                <div key={user.name}>
                    <h5>{user.name}</h5>
                    <span>{user.age}</span>
                    <button onClick={() => onDeleteUser(user.name)}>
                        Delete User
                    </button>
                    <button
                        onClick={() => onSetUserAdmin(user.name)}
                        style={{
                            background: user.isAdmin ? "blue" : "lightgray",
                        }}
                    >
                        Set Admin
                    </button>
                </div>
            ))}
        </div>
    );
};
