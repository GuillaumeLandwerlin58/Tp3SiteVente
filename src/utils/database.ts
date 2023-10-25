import prisma from "./prisma";
import {cache} from "react";

export const getCategories = cache(async () => {
    return await prisma.productCategory.findMany({
        include: {
            products: true,
        },
    });
});

export const getCategory = cache(async (slug: string) => {
    return await prisma.productCategory.findFirst({
        where: {
            slug,
        },
        include: {
            products: true,
        },
    });
})