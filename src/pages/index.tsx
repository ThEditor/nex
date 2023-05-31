import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='flex min-h-screen items-center justify-center'>
        <h1>Hi!</h1>
      </main>
    </Layout>
  );
}
