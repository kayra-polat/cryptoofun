import React from 'react';
import Cryptoofun from '../assets/cryptoofun.svg';
import Market from '../assets/market.svg';
import Leaderboard from '../assets/leaderboard.svg';
import LogOut from '@/assets/logout.svg';
import Wallet from '../assets/wallet.svg';
import Lobbies from '../assets/lobbies.svg';
import Profile from '../assets/profile.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import HeaderLink from './HeaderLink';

const routes = [
  {
    name: 'Market',
    href: '/market',
    icon: Market,
  },
  {
    name: 'Leaderboard',
    href: '/leaderboard',
    icon: Leaderboard,
  },
  {
    name: 'Lobbies',
    href: '/lobbies',
    icon: Lobbies,
  },
  {
    name: 'Wallet',
    href: '/wallet',
    icon: Wallet,
  },
];

const loginRoute = {
  name: 'Log In',
  href: '/api/auth/login',
  icon: LogOut, // TODO: Change with LogIn icon
};

const profileRoute = {
  name: 'Profile',
  href: '/profile',
  icon: Profile,
};

const logoutRoute = {
  name: 'Log Out',
  href: '/api/auth/logout',
  icon: LogOut,
};

const Header = () => {
  const { user } = useUser();

  return (
    <div className="bg-dark fixed w-full z-10 items-center">
      <div className="flex rounded-b-3xl w-full relative h-14 bg-gradient-to-r from-turkuaz via-gri to-gri">
        <div className="flex items-center mt-1 ml-3 w-52 cursor-pointer">
          <Link href={'/'}>
            <Image className="" src={Cryptoofun} alt="logo" />
          </Link>
        </div>

        <ul className="px-4 flex items-center ml-auto">
          {routes.map((route, i) => (
            <li key={i} className="mx-2 hover:scale-110">
              <HeaderLink {...route} />
            </li>
          ))}

          <hr className="" />

          {user ? (
            <>
              <li className="mx-2 hover:scale-110">
                <HeaderLink {...profileRoute} />
              </li>
              <li className="mx-2">
                <HeaderLink {...logoutRoute} />
              </li>
            </>
          ) : (
            <li className="mx-2">
              <HeaderLink {...loginRoute} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
