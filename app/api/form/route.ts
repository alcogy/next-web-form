
import { NextRequest, NextResponse  } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  await prisma.form.create({
    data: body
  });
  return NextResponse.json({ result: 'ok' }, { status: 200 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  await prisma.form.update({
    data: body,
    where: {
      id: body.id,
    }
  });
  return NextResponse.json({ result: 'ok' }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  console.log('hreis delete', body.id);
  await prisma.form.delete({
    where: {
      id: body.id,
    }
  });
  return NextResponse.json({ result: 'ok' }, { status: 200 });
}