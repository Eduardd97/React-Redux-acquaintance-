import { faker } from "@faker-js/faker";

export const createUser = () => {
    return {
        name: faker.person.fullName(),
        age: faker.number.int({ max: 50, min: 10 }),
    };
};
