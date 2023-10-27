import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
};
export default function Search() {
  return (
    <>
      <main className='flex items-center justify-center'>
        <h1>Searching...</h1>
      </main>
    </>
  );
}
