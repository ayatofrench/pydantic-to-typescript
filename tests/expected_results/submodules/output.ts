import * as z from "zod";


export const CatBreedSchema = z.enum([
    "bengal",
    "domestic shorthair",
    "persian",
    "siamese",
]);
export type CatBreed = z.infer<typeof CatBreedSchema>;


export const DogBreedSchema = z.enum([
    "golden retriever",
    "labrador",
    "mutt",
]);
export type DogBreed = z.infer<typeof DogBreedSchema>;

export const DogSchema = z.object({
    "age": z.number(),
    "breed": DogBreedSchema,
    "name": z.string(),
});
export type Dog = z.infer<typeof DogSchema>;

export const CatSchema = z.object({
    "age": z.number(),
    "breed": CatBreedSchema,
    "declawed": z.boolean(),
    "name": z.string(),
});
export type Cat = z.infer<typeof CatSchema>;

export const AnimalShelterSchema = z.object({
    "address": z.string(),
    "cats": z.array(CatSchema),
    "dogs": z.array(DogSchema),
});
export type AnimalShelter = z.infer<typeof AnimalShelterSchema>;

export const CliSubmodulesSchema = z.object({
    "AnimalShelter": AnimalShelterSchema,
    "Cat": CatSchema,
    "Dog": DogSchema,
});
export type CliSubmodules = z.infer<typeof CliSubmodulesSchema>;
