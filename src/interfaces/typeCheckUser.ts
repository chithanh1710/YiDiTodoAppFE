import { UseMutateFunction } from "@tanstack/react-query";
import { propsSignIn } from "./propsSignIn";

export type checkUser = UseMutateFunction<any, Error, propsSignIn, unknown>;
