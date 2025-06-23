import { NextResponse } from 'next/server';
import { MOCK_DATA } from '@/lib/data';

// Simulate a network delay
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
  await sleep(2500);  
  return NextResponse.json(MOCK_DATA);
}
