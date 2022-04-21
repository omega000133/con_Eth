import { Language, PageType } from '@prisma/client';
import { useEffect, useMemo } from 'react';
import { HomeLayout } from '../components/layouts';
import { HomePage } from '../components/templates';
import { IContent } from '../interfaces/landing';
import { prisma } from '../lib/prisma/prisma';

interface Props {
  data: {
    content: IContent;
  };
}

export default function Home({ data: { content } }: Props) {
  const memoContent = useMemo(() => content, [content]);

  useEffect(() => {
    console.log('Landing page is ready');
  }, []);

  return (
    <HomeLayout data={memoContent}>
      <HomePage data={memoContent.main} />
    </HomeLayout>
  );
}

export const getStaticProps = async ({ locale = 'TR' }) => {
  const data = await prisma.page.findFirst({
    select: {
      content: true,
    },
    where: {
      language: locale.toLocaleUpperCase() === 'EN' ? Language.EN : Language.TR,
      page: PageType.HOME,
    },
  });

  return {
    props: { data },
  };
};
