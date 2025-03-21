
import { PrismaClient } from '@prisma/client';

export async function getFormData() {
  
  const prisma = new PrismaClient();
  try {
    const form = await prisma.form.findFirst();
    if (form === null) throw new Error('Faied to fetch.');

    return form;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Faied to fetch.');
  }
}