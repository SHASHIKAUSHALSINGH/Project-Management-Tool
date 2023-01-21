import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import { reduxWrapper } from '@Redux/lib/configureStore';
import { TAppPage } from '@Redux/types';

import { RetroSession } from '@components/domains/retro/RetroSession';
import { RetroSessionSubscriber } from '@components/domains/retro/utils/RetroSessionSubscriber';
import { spaceHelpers } from '@components/domains/space/helpers';
import { SpaceProvider } from '@components/domains/space/SpaceProvider';

import { PageLayout } from '@components/uiKit/PageLayout';

import { TRANS } from '@components/utils/types';
import { WakeLockProcessor } from '@components/utils/WakeLockProcessor';

import { getInitialPropsRetroSessionPage } from '@Next/ssr';

import { auth } from '@lib/auth';

const RetroSessionPage: TAppPage<{}, {}> = () => (
  <SpaceProvider>
    <PageLayout
      maxWidth="initial"
      py={0}
      pt={6}
      pl={0}
      px={0}
    >
      <RetroSession />
      <RetroSessionSubscriber />
      <WakeLockProcessor />
    </PageLayout>
  </SpaceProvider>
);

export const getServerSideProps = reduxWrapper.getServerSideProps((store) => async (ctx) => {
  spaceHelpers.initPage(store, ctx);
  await getInitialPropsRetroSessionPage(store, ctx);

  const { locale } = ctx;
  const currLocale = locale || 'en';

  return {
    props: {
      ...(await serverSideTranslations(currLocale, [TRANS.MAIN, TRANS.SEO])),
    },
  };
});

export default auth.withAuthSync(RetroSessionPage, {
  needConfirmEmail: true,
});
