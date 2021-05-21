import all from "@/middlewares/all";
import User from "@/models/User";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import nc from "next-connect";

const handler = nc();
handler.use(all);
handler.use(
  NextAuth({
    providers: [
      Providers.Credentials({
        name: "Credentials",
        async authorize(credentials, req) {
          const user = await User.findOne({
            nationalityIDNum: credentials.username,
          });
          if (!user) {
            throw new Error("No user found");
          }
          const isValid = compare(credentials.password, user.password);
          if (!isValid) {
            throw new Error("Password not match");
          }
          return { user };
        },
      }),
    ],
    session: {
      jwt: true,
    },
    callbacks: {
      jwt: async (token, user, account, profile, isNewUser) => {
        user && (token.user = user);
        return token;
      },
      session: async (session, user, sessionToken) => {
        session.user = user.user;
        return session;
      },
    },
  })
);

export default handler;
