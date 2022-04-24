import Link from 'next/link';
import { APP_NAME } from '../../../../../utils/constants';
import { LanguageSelector } from '../../../../common';
import Icon, { Icons } from '../../../../common/Icon/Icon';

const Footer = () => (
  <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
    <div className="sm:flex sm:items-center sm:justify-between">
      <ul className="flex items-center mb-6 text-sm sm:mb-0">
        <Link href="/">
          <a className="hover:cursor-pointer inline-flex sm:mb-0 text-gray-800 hover:opacity-80 text-xl font-bold items-center">
            <Icon icon={Icons.ETHEREUM} alt="ethereum" />
            {APP_NAME}
          </a>
        </Link>
      </ul>
      <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <LanguageSelector />
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © {new Date().getFullYear()}{' '}
      <Link href="/">
        <a className="hover:underline">{APP_NAME}</a>
      </Link>
      . All Rights Reserved.
    </span>
  </footer>
);

export default Footer;
