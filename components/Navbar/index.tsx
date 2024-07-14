'use client';

import { Suspense, Fragment, useReducer, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { setCookie } from 'cookies-next';
import { bindMenu, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { useColorScheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from './index.module.css';
import MobileDrawer from './MobileDrawer';
import { useRouter, usePathname, useParams, Link } from '@navigation';
import { LOCALES, defaultLocale } from '@i18n/settings';
import type { Locale } from '@i18n/settings';

const DynamicPageTransitionProgressBar = dynamic(() => import('next13-progressbar'), {
  ssr: false,
});

type MenuItemKey = keyof Messages['common']['navbar'];
type _MenuItem = [MenuItemKey, string, string];
export type MenuItem = [MenuItemKey, string, string | _MenuItem[]];
export type MenuItems = MenuItem[];

interface NavbarProps {
  siteTitle: string;
  logo?: ReactNode;
  menuItems: MenuItems;
}

export default function Navbar({ siteTitle, logo, menuItems }: NavbarProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams<{ locale: Locale }>();
  const t = useTranslations('common.navbar');
  const { mode: colorMode, setMode: setColorMode } = useColorScheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const accountMenuState = usePopupState({ variant: 'popover', popupId: 'account-menu' });
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState<null | HTMLElement>(null);

  const initialMenuState = Object.fromEntries(menuItems.map(([name]) => [name, false]));
  const menuStateReducer = (_state: Record<string, boolean>, payload: [string, boolean]) => {
    const [key, value] = payload;
    return { ...initialMenuState, [key]: value };
  };
  const [menuState, dispatch] = useReducer(menuStateReducer, initialMenuState);
  const toggleTheme = () => setColorMode(colorMode === 'dark' ? 'light' : 'dark');

  return (
    <>
      <AppBar className={styles.root} component={'nav'} position="static">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{
                mr: 2,
                display: { sm: 'none' },
                flexBasis: '20%',
                flexShrink: 1,
                justifyContent: 'flex-start',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box flexBasis={'20%'} flexShrink={1}>
              <Link href="/" passHref>
                {logo || (
                  <Typography
                    variant="h3"
                    sx={{
                      '&:hover': {
                        textDecoration: 'none',
                      },
                      display: {
                        // xs: "none",
                        xs: 'block',
                        sm: 'flex',
                      },
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      textAlign: 'center',
                    }}
                  >
                    {siteTitle}
                  </Typography>
                )}
              </Link>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                flexShrink: 0,
                display: { xs: 'none', sm: 'flex' },
                justifyContent: 'space-evenly',
                columnGap: 2,
              }}
            >
              {menuItems.map(([key, name, hrefOrSubitems]) => (
                <Fragment key={key}>
                  {typeof hrefOrSubitems === 'string' ? (
                    <Link href={hrefOrSubitems} onClick={() => dispatch([key, !menuState[key]])}>
                      <Typography
                        color="inherit"
                        sx={{
                          fontWeight:
                            menuState[key] || pathname === hrefOrSubitems ? 'bold' : 'normal',
                          textTransform: 'capitalize',
                          '&:hover': {
                            textDecoration: 'none',
                          },
                          px: '0.25rem',
                        }}
                      >
                        {t(key) || name}
                      </Typography>
                    </Link>
                  ) : (
                    <div>
                      <Button
                        onClick={(event) => {
                          setDropdownAnchorEl(event.currentTarget);
                          dispatch([key, !menuState[key]]);
                        }}
                        endIcon={
                          menuState[key] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                        }
                        sx={{
                          fontWeight: hrefOrSubitems.map(([, href]) => href).includes(pathname)
                            ? 'bold'
                            : 'normal',
                        }}
                      >
                        {t(key) || name}
                      </Button>
                      <Menu
                        open={menuState[key]}
                        anchorEl={dropdownAnchorEl}
                        onClose={() => {
                          dispatch([key, false]);
                          setDropdownAnchorEl(null);
                        }}
                      >
                        {hrefOrSubitems.map(([subKey, subName, href]) => (
                          <MenuItem key={subKey}>
                            <Link href={href} className={'w-full'}>
                              <Typography
                                color="inherit"
                                fontWeight={pathname === href ? 'bold' : 'normal'}
                              >
                                {t(subKey) || subName}
                              </Typography>
                            </Link>
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  )}
                </Fragment>
              ))}
            </Box>
            <Box
              className={styles['language-selector-container']}
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                flexBasis: '20%',
                flexShrink: 1,
                color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              <FormControl size="small" sx={{ width: '55px' }}>
                <Select
                  className={styles['language-selector']}
                  value={locale ?? defaultLocale}
                  renderValue={(value) => LOCALES[value ?? defaultLocale]?.flag}
                  onChange={(event) => {
                    console.log(pathname);
                    const newLocale = event.target.value;
                    const newPathname = pathname.replace(`/${locale}/`, `/${newLocale}/`);
                    setCookie('NEXT_LOCALE', newLocale);
                    router.push(newPathname);
                  }}
                >
                  {Object.entries(LOCALES).map(([locale, { flag, name }]) => (
                    <MenuItem key={locale} value={locale}>
                      {flag} {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {session?.user && (
                <Box>
                  <IconButton {...bindTrigger(accountMenuState)} sx={{ p: 0 }}>
                    <Avatar alt={`${session.user.name}`} src={`${session.user.image}`} />
                  </IconButton>
                  <Menu
                    sx={{
                      mt: '45px',
                      '& a': { color: 'text.primary' },
                    }}
                    {...bindMenu(accountMenuState)}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <Link href={'/admin'} passHref>
                      <MenuItem sx={{ textAlign: 'center' }}>{'Admin'}</MenuItem>
                    </Link>
                    <MenuItem onClick={toggleTheme}>
                      <FormControlLabel
                        control={<Switch checked={colorMode === 'dark'} disableRipple />}
                        label={'Enable Dark Mode'}
                        // onChange={toggleTheme}
                      />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>
                      Sign out <LogoutIcon sx={{ marginLeft: '0.5rem' }} />
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
        <Suspense>
          <DynamicPageTransitionProgressBar options={{ showSpinner: false }} />
        </Suspense>
      </AppBar>
      <MobileDrawer
        open={mobileOpen}
        setOpen={setMobileOpen}
        siteTitle={siteTitle}
        menuItems={menuItems}
      />
    </>
  );
}
