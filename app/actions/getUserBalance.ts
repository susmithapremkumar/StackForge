'use server'

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getUSerBalance(): Promise<{
    balance?: number;
    error?: string;
}> {
    const { userId } = await auth();

    if (!userId) {
        return { error: 'User not found' }
    }

    try {
        const transactions = await  db.transaction.findMany({
            where: { userId }
        });

        const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
        return { balance }
    } catch (error) {
        console.log(error, "Database connection failed!")
        return {error: 'Database error' };
    }
}

export default getUSerBalance;