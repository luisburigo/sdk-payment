import {t} from "../../config/trpc";
import {createUserInput, fakeAuthInput} from "./type";
import {createUser, fakeAuth} from "./services";

const userProcedures = {
    createUser: t.procedure
        .input(createUserInput)
        .mutation(req => createUser(req.input)),
    fakeAuth: t.procedure
        .input(fakeAuthInput)
        .mutation(req => fakeAuth(req.input)),
}

export default userProcedures;