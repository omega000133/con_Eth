import { Page } from '@prisma/client';
import { useRouter } from 'next/router';

interface Props {
  data: Page['content'];
}

const HomePage = ({ data }: Props) => {
  const router = useRouter();
  console.log(data);
  return (
    <div className="p-6 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4 m-20">
      <h3 className="text-lg md:text-xl font-medium text-black">Language</h3>
      <p className="text-gray-500">{router.locale?.toLocaleUpperCase()}</p>
    </div>
  );
};
export default HomePage;
