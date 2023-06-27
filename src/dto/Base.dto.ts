import { IsNotEmpty } from "class-validator";

export class BaseDTO {

   
    createdBy: string | null;

    createdAt: Date | null;
   
    updatedBy: string | null;

    updatedAt: Date | null;
}