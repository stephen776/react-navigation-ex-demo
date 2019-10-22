import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
} from 'react-native';
import {
  Drawer,
  DrawerElement,
  MenuItemType,
} from 'react-native-ui-kitten';
import {
  HomeIcon,
  InfoIcon,
  LogoutIcon,
} from '@app-assets/icons';
import { AppRoute } from '@app-navigation/app-routes';

const drawerData: MenuItemType[] = [
  { icon: HomeIcon, title: 'Home' },
  { icon: InfoIcon, title: 'About' },
  { icon: LogoutIcon, title: 'Log Out' },
];

const DrawerHeader = (): React.ReactElement<ImageBackgroundProps> => (
  <ImageBackground
    style={styles.header}
    source={require('../../assets/image-note-background-1.jpg')}
  />
);

// FIXME(REACT-NAVIGATION-5): props type definitions? (used in `home.navigator.tsx`)
export const DrawerHomeScreen = (props): DrawerElement => {

  const onMenuItemSelect = (index: number): void => {
    const { [index]: selectedItem } = drawerData;

    switch (selectedItem.title) {
      case 'Log Out':
        props.navigation.navigate(AppRoute.AUTH);
        break;
      default:
        props.navigation.navigate(selectedItem.title);
        break;
    }

    props.navigation.closeDrawer();
  };

  return (
    <Drawer
      header={DrawerHeader}
      data={drawerData}
      onSelect={onMenuItemSelect}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    height: 160,
  },
});