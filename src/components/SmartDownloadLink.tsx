'use client';

import type { ComponentPropsWithoutRef, MouseEvent } from 'react';

import { DOWNLOAD_FALLBACK_URL, getDownloadDestination } from '@/lib/storeLinks';

type SmartDownloadLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  fallbackHref?: string;
};

export default function SmartDownloadLink({
  fallbackHref = DOWNLOAD_FALLBACK_URL,
  onClick,
  ...props
}: SmartDownloadLinkProps) {
  const href = getDownloadDestination(fallbackHref);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const destination = getDownloadDestination(fallbackHref);
    if (destination === fallbackHref) {
      return;
    }

    event.preventDefault();
    window.location.assign(destination);
  };

  return <a {...props} href={href} onClick={handleClick} suppressHydrationWarning />;
}