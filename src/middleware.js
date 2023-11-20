import { NextResponse } from 'next/server'
import { isAuthenticated } from '../utils/auth';
import { parse } from 'cookie';

// Limit the middleware to paths starting with `/api/`
export const config = {
    matcher: '/dashboard',
}

export function middleware(request) {

    if (request.cookies.getAll().length == 0) {
        return NextResponse.redirect(new URL('/', request.url).toString(), { status: 307 });
    }
    else {
        if (request.cookies.get('myCookieName')?.value != "") {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/', request.url).toString(), { status: 307 });
        }
    }
}