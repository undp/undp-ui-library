import type React from 'react';
import { cn } from '@/lib/utils';
import { H5, P } from './typography';

function Footer({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      {...props}
      className={cn(
        'h-auto w-full bg-footer-background px-3 pt-14 pb-12 text-content-reverse',
        className,
      )}
    >
      <div className={cn('mx-auto w-full sm:w-[83.333%]')}>{children}</div>
    </footer>
  );
}

function FooterContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto h-auto w-full sm:w-[83.333%]', className)} {...props}>
      {children}
    </div>
  );
}

function FooterLogoUnit({
  className,
  link,
  children,
  locale = 'en',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  link?: string;
  locale?: 'en' | 'fr' | 'es';
}) {
  return (
    <div
      {...props}
      className={cn(
        'mb-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-6 border-b border-b-background px-3 pt-0 pb-12',
        className,
      )}
    >
      <div className='m-0 flex items-center gap-4'>
        <a href={link || 'https://www.undp.org/'} target='_blank' rel='noreferrer'>
          <img
            alt='undp logo'
            src={`https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/${locale === 'es' || locale === 'fr' ? 'pnud' : 'undp'}-logo-white.svg`}
            className='w-15'
          />
        </a>
        <H5 className='text-content-reverse' marginBottom='none'>
          United Nations
          <br />
          Development Programme
        </H5>
      </div>
      <div>{children}</div>
    </div>
  );
}

function FooterMainNavUnit({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
}

function FooterCopyrightUnit({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-6', className)}
    >
      <P className='m-0 px-0 py-0 text-content-reverse text-sm md:m-0 md:text-base lg:text-base'>
        © United Nations Development Programme
      </P>
      <div className='flex flex-wrap gap-x-4 gap-y-6'>
        {children}
        <a
          href='https://www.undp.org/copyright-terms-use'
          target='_blank'
          rel='noopener noreferrer'
          className='text-content-reverse text-sm opacity-100 hover:opacity-70 md:text-base'
        >
          Terms of use
        </a>
      </div>
    </div>
  );
}

function FooterSocialMediaIconUnit({
  socialMediaLinks,
  areIconsWhite = true,
}: {
  socialMediaLinks: {
    socialMedia: 'twitter-x' | 'linkedin' | 'instagram' | 'youtube' | 'threads' | 'facebook';
    link?: string;
  }[];
  areIconsWhite?: boolean;
}) {
  const defaultSocialMediaLinks = {
    facebook: 'https://www.facebook.com/UNDP',
    'twitter-x': 'https://x.com/UNDP',
    instagram: 'https://www.instagram.com/undp/',
    youtube: 'https://www.youtube.com/user/UNDP',
    linkedin: 'https://www.linkedin.com/company/undp',
    threads: 'https://www.threads.com/@undp',
  };
  return (
    <div className='flex flex-wrap items-center gap-x-6 gap-y-4'>
      {socialMediaLinks.map((el) => (
        <a
          key={el.socialMedia}
          href={el.link || defaultSocialMediaLinks[el.socialMedia]}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            alt={`${el.socialMedia} logo`}
            src={`https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/${el.socialMedia}${areIconsWhite ? '-white' : ''}.svg`}
            className='h-5 w-5'
          />
        </a>
      ))}
    </div>
  );
}

export {
  Footer,
  FooterContent,
  FooterCopyrightUnit,
  FooterLogoUnit,
  FooterMainNavUnit,
  FooterSocialMediaIconUnit,
};
