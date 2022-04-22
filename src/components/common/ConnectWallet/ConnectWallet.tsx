import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { useError } from '../../../hooks/useError';
import { classNames, getConnectWalletTexts } from '../../../utils/utils';
import Icon, { Icons } from '../Icon/Icon';
import Spinner from '../Spinner/Spinner';

interface Props {
  icon?: boolean;
  defaultText?: string;
}

const ConnectWallet = ({ icon, defaultText }: Props) => {
  const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();
  const { addError, clearErrors } = useError();

  const router = useRouter();
  const currentLocale = router.locale || 'en';

  const { text, connecting } = getConnectWalletTexts(currentLocale);

  useEffect(() => {
    if (isAuthenticated) router.replace('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated && !isAuthenticating) {
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          if (!user) throw Error('User is null');
          else {
            console.log(user.get('ethAddress'));
            clearErrors();
            console.log('logged in user:', user);
          }
        })
        .catch(function (err) {
          console.log(err);
          addError(err);
        });
    }
  };

  return (
    <button
      onClick={login}
      disabled={isAuthenticated}
      type="button"
      className={`border focus:ring-4 focus:outline-none font-medium btn rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-brand bg-brand border-brand hover:border-gray-800 text-white hover:bg-gray-700 ${
        (isAuthenticating && classNames('opacity-50', 'cursor-not-allowed'),
        !icon && 'py-4')
      }`}
    >
      <>
        {icon && !isAuthenticating && (
          <Icon icon={Icons.METAMASK} alt="metamask" />
        )}
        <span className={`${icon && 'hidden md:block'}`}>
          {isAuthenticating ? (
            <>
              <Spinner /> {connecting}
            </>
          ) : (
            defaultText ?? text
          )}
        </span>
      </>
    </button>
  );
};

export default ConnectWallet;
