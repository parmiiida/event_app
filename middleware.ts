import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({
    // we want people to see some content without just loging in or sign up so we specify those pages (routes)
    publicRoutes:[
        '/',
        '/events/:id',
        '/api/webhook/stripe',
        'api/webhook/clerk',
        'api/uploadthing'
    ],
    // we want clrek to ignore some routes
    ignoredRoutes:[
        '/api/webhook/stripe',
        'api/webhook/clerk',
        'api/uploadthing'
    ]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
