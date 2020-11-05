import { UserModel } from "app/models/models";

const users = [
  {
    login: "darth.vader@starwars.com",
    password: "darthvader",
    token: "darth.vader@starwars.comdarthvader",
  },
  {
    login: "luke.skywalker@starwars.com",
    password: "lukestalwalker",
    token: "luke.skywalker@starwars.comlukestalwalker",
  },
  {
    login: "obi.wan.kenobi@starwars.com",
    password: "obiwankenobi",
    token: "obi.wan.kenobi@starwars.comobiwankenobi",
  },
  {
    login: "han.solo@starwars.com",
    password: "hansolo",
    token: "han.solo@starwars.comhansolo",
  },
  {
    login: "c3po@starwars.com",
    password: "c3po",
    token: "c3po@starwars.comc3po",
  },
];

type Nullable<T> = { [P in keyof T]: T[P] | null };

export const useProfile = (
  userToVerify: Nullable<UserModel["user"]>
): boolean => {
  return users.some((user) => user.token === userToVerify.token);
};
