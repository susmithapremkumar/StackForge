import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
    const user = await currentUser();

    //check for current user
    if (!user) {
        return null;
    }
    
    // check if the user is already in the database
    const loggedInUser = await db.user.findUnique({
        where: {
            clerkUserId: user.id,
        },
    });

    // If user is in database, return user
    if (loggedInUser) {
        return loggedInUser;
    }

    // If not in database, create new user
    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            name: `${user.firstName} ${user?.lastName}`,
            imageUrl: user?.imageUrl,
            email: user?.emailAddresses[0].emailAddress
        }
    })
    return newUser;
}