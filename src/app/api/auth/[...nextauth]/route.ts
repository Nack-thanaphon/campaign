import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Define admin emails
const ADMIN_EMAILS = ['e21bvz@gmail.com', 'porphanpen@gmail.com'];

const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "qR7KGtmMdYBY+kxh8OhgU8jHlb4a/iB2mZwZoL0He5k=",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // 30 minutes
  },
  callbacks: {
    async signIn({ user }) {
      const email = user.email?.toLowerCase() || '';
      const isAdmin = ADMIN_EMAILS.includes(email);
      if (!isAdmin) {
        console.log(`Unauthorized access attempt from: ${email}`);
      }
      return isAdmin;
    },
    
    async jwt({ token, user }) {
      if (user?.email) {
        const email = user.email.toLowerCase();
        if (!ADMIN_EMAILS.includes(email)) {
          console.error(`Unauthorized email attempt: ${email}`);
          // Return the token without admin privileges instead of null
          return { ...token };
        }
        // Set admin privileges
        return {
          ...token,
          email: email,
          role: "admin",
          loginTime: new Date().toISOString(),
          isAdmin: true,
        };
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          role: token.role || "user",
          loginTime: token.loginTime || null,
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };