import base from 'paths.macro';
import React from 'react';

import { getStoryName } from '@lib/getStoryName';

import { Layout } from './Layout';

export default {
  title: getStoryName(base),
};

export const Default = () => (
  <Layout
    errGlobalMsg=""
    onCancel={() => {}}
    onSubmit={() => {}}
  />
);

export const ErrorGlobal = () => (
  <Layout
    errGlobalMsg="Internal server error"
    onCancel={() => {}}
    onSubmit={() => {}}
  />
);
