'use server';

import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get('text');
  const amountValue = formData.get('amount');

  if (!textValue || !amountValue) {
    return { error: 'Text or amount is missing' };
  }

  const text = textValue.toString();
  const amount = parseFloat(amountValue.toString());

  const { userId } = await auth();

  if (!userId) return { error: 'User not found' };

  // ✅ Ensure the user exists in DB
  let user = await db.user.findUnique({ where: { clerkUserId: userId } });

  if (!user) {
    // You can also fetch name, email, image from Clerk if needed
    user = await db.user.create({
      data: {
        clerkUserId: userId,
        email: '', // optional
      },
    });
  }

  try {
    const transactionData = await db.transaction.create({
      data: {
        text,
        amount,
        userId, // ✅ Safe now — the user exists
      },
    });

    revalidatePath('/');

    return { data: transactionData };
  } catch (error) {
    console.error('Failed to create transaction:', error);
    return { error: 'Transaction not added' };
  }
}

export default addTransaction;
               