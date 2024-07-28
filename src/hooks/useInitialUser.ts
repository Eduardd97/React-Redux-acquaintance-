import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { createUser } from "../utils/createFakerUser";
import { setInitialUser } from "../redux/slices/users";

export const useIntialUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const users = new Array(5).fill({}).map(() => createUser())
        dispatch(setInitialUser(users))
    }, [dispatch])
}