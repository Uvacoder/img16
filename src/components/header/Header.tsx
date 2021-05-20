import Link from 'next/link';
import { useRouter } from 'next/router';
import { Wrapper, NavList, NavListItem, A, Logo } from './Header.style';

const LINKS = [
  { path: '/', name: 'Home' },
  { path: '/photography', name: 'Photography' },
  { path: '/video', name: 'Video' },
  { path: '/contact', name: 'Contact' },
];

const Header = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Link href={'/'}>
        <A active={true}>
          <Logo src='/logo/logo-white.png' alt='Logo' />
        </A>
      </Link>

      <nav>
        <NavList>
          {LINKS.map(({ path, name }) => (
            <NavListItem key={path}>
              <Link href={path}>
                <A active={router.pathname === path}>{name}</A>
              </Link>
            </NavListItem>
          ))}
        </NavList>
      </nav>
    </Wrapper>
  );
};

export default Header;
