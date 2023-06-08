import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import mongoose from 'mongoose';
import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

import logger from '@/lib/logger';

import { discord, mongoDbUri } from '@/constant/env';

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: discord.clientId,
      clientSecret: discord.clientSecret,
    }),
  ],
  adapter: MongoDBAdapter(
    (async () => {
      logger('Connecting to db...');
      return mongoose.connect(mongoDbUri).then((v) => {
        logger('Connected to db!');
        return v.connection.getClient();
      });
    })()
  ),
};

export default NextAuth(authOptions);
