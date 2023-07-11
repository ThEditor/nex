/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const nex = {
  url: process.env.NEX_CLOUD_URL!,
};
