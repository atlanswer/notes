import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // publicRoutes: ["/", "/ielts(.*)", "/unreal(.*)", "/tip(.*)"],
  publicRoutes: ["/", "/ielts(.*)", "/tip(.*)"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
