import * as z from "zod";


export const ProfileSchema = z.object({
    "age": z.union([z.number(), z.null()]),
    "hobbies": z.array(z.string()),
    "username": z.string(),
});
export type Profile = z.infer<typeof ProfileSchema>;

export const CliExcludingModelsSchema = z.object({
    "Profile": ProfileSchema,
});
export type CliExcludingModels = z.infer<typeof CliExcludingModelsSchema>;
