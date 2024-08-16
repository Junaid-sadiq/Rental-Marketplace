import { NextResponse } from 'next/server';

import getCurrentUser from '../../../actions/getCurrentUser';
import prisma from '../../../libs/prismadb';

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      return NextResponse.error();
    }
  
    const { listingId } = params;
  
    if (!listingId || typeof listingId !== 'string') {
      throw new Error('Invalid ID');
    }
  
    let favoriteIds = [...(currentUser.favoriteIds || [])];
    favoriteIds.push(listingId);
  
    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds: favoriteIds,
      },
    });
  
    return NextResponse.json(user);
  } catch (error) {
    console.error('POST /api/favorites/[listingId] error:', error);
    return NextResponse.error();
  }
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      return NextResponse.error();
    }
  
    const { listingId } = params;
  
    if (!listingId || typeof listingId !== 'string') {
      throw new Error('Invalid ID');
    }
  
    let favoriteIds = [...(currentUser.favoriteIds || [])];
    favoriteIds = favoriteIds.filter((id) => id !== listingId);
  
    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds: favoriteIds,
      },
    });
  
    return NextResponse.json(user);
  } catch (error) {
    console.error('DELETE /api/favorites/[listingId] error:', error);
    return NextResponse.error();
  }
}
