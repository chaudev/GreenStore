import React from 'react';
import {language} from '~/config';
import {tabRouer} from '../tabRouter';
import {TabItem} from './TabItem';

export const Tabs = ({
  color,
  route,
  tabs,
}: {
  color: string;
  route: string;
  tabs: number;
}): any => {
  if (route === tabRouer.HOMETAB) {
    return (
      <TabItem
        tab={tabs}
        color={color}
        iconName="home-outline"
        text={language.Home}
        iconType="Ionicons"
      />
    );
  }

  if (route === tabRouer.CARDTAB) {
    return (
      <TabItem
        tab={tabs}
        color={color}
        iconName="shopping-cart"
        text={language.Card}
        iconType="MaterialIcons"
      />
    );
  }

  if (route === tabRouer.WISHTAB) {
    return (
      <TabItem
        tab={tabs}
        color={color}
        iconName="heart"
        text={language.Wishlist}
        iconType="Ionicons"
      />
    );
  }

  if (route === tabRouer.SETTINGTAB) {
    return (
      <TabItem
        tab={tabs}
        color={color}
        iconName="settings-outline"
        text={language.Settings}
        iconType="Ionicons"
      />
    );
  }
};
