import * as z from "zod";


export const ProfileSchema = z.object({
    "age": z.union([z.number(), z.null()]).optional(),
    "hobbies": z.array(z.string()),
    "username": z.string(),
});
export type Profile = z.infer<typeof ProfileSchema>;

export const LoginResponseDataSchema = z.object({
    "profile": ProfileSchema,
    "token": z.string(),
});
export type LoginResponseData = z.infer<typeof LoginResponseDataSchema>;

export const LoginCredentialsSchema = z.object({
    "password": z.string(),
    "username": z.string(),
});
export type LoginCredentials = z.infer<typeof LoginCredentialsSchema>;

export const CliSingleModuleSchema = z.object({
    "LoginCredentials": LoginCredentialsSchema,
    "LoginResponseData": LoginResponseDataSchema,
    "Profile": ProfileSchema,
});
export type CliSingleModule = z.infer<typeof CliSingleModuleSchema>;
