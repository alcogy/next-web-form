
import { NextRequest, NextResponse  } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const form = await prisma.form.findFirst();
  return NextResponse.json(form);
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  await prisma.form.updateMany({
    data: body
  });
  return NextResponse.json({ result: 'ok' }, { status: 200 });
}