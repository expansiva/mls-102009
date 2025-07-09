/// <mls shortName="projectStates" project="102009" enhancement="_blank" />

import {
  getState,
  setState,
  subscribe,
  unsubscribe,
  notify,
  initState
} from './_100554_collabState';


export const homeVersion = 3;
export const aboutVersion = 2;
export const contactVersion = 5;

export type PageVersions = {
  home: number;
  about: number;
  contact: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
  active?: boolean;
};

// ex: ui.actualPage
initState('ui', {
    actualPage: 'home',
    pageVersions: {
      home: homeVersion,
      about: aboutVersion,
      contact: contactVersion
    }
});
initState('auth', {
    user: null
});
