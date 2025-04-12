
import { PrismaClient } from '@prisma/client';
import { FormSet } from '@/app/constants';

export async function getFormData(id: string) {
  const prisma = new PrismaClient();
  try {
    const form = await prisma.form.findFirst({
      where: {
        id: id
      }
    });
    if (form === null) throw new Error('Faied to fetch.');

    return form;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Faied to fetch.');
  }
}

export async function fetchAllForms() {
  const prisma = new PrismaClient();
  try {
    const forms = await prisma.form.findMany({ orderBy: {
      id: 'asc',
    }});
    if (forms === null) throw new Error('Faied to fetch.');

    return forms;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Faied to fetch.');
  }
}

export async function createForm({
  title,
  desc,
  ui,
} : {
  title: string,
  desc: string,
  ui: FormSet[]
}) {
  const prisma = new PrismaClient();
  try {
    const form = await prisma.form.create({
      data: {
        title: title,
        desc: desc,
        ui: ui as any,
      }
    });
    if (form === null) throw new Error('Faied to fetch.');

    return form;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Faied to fetch.');
  }
}

export async function deleteFormById(id: string) {
  const prisma = new PrismaClient();
  try {
    const form = await prisma.form.delete({
      where: {
        id: id,
      }
    });
    if (form === null) throw new Error('Faied to fetch.');

    return form;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Faied to fetch.');
  }
}