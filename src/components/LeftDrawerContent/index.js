import React, { useState } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Text } from 'src/components';

const leftDrawerOptions = [
  {
    id: 1,
    label: 'Dashboard',
    value: 'MainTab',
    icon: <MaterialIcons name="dashboard" color="#3699ff" size={20} />
  },
  {
    id: 10,
    label: 'Membership',
    value: 'Membership',
    icon: <Entypo name="trophy" color="#3699ff" size={20} />
  },
  {
    id: 2,
    header: 'Services',
    label: 'Shipments',
    value: 'ShipmentsTab',
    icon: <FontAwesome name="dropbox" color="#3699ff" size={20} />,
    children: [
      {
        id: 1,
        label: 'Received Packages',
        value: 'ReceivedPackages',
        icon: <Entypo name="dot-single" color="#3699ff" size={20} />
      },
      {
        id: 2,
        label: 'Shipments',
        value: 'Shipments',
        icon: <Entypo name="dot-single" color="#3699ff" size={20} />
      },
      {
        id: 3,
        label: 'Delivered',
        value: 'Delivered',
        icon: <Entypo name="dot-single" color="#3699ff" size={20} />
      }
    ],
    visible: false
  },
  {
    id: 3,
    label: 'Buy for me',
    value: 'BuyForMe',
    icon: <FontAwesome name="shopping-basket" color="#3699ff" size={20} />
  },
  {
    id: 4,
    label: 'Booking VIP service',
    value: 'BookVIPService',
    icon: <AntDesign name="heart" color="#3699ff" size={20} />
  },
  {
    id: 5,
    label: 'Add-ons',
    value: 'AddOns',
    icon: (
      <Ionicons
        name="triangle"
        color="#3699ff"
        size={20}
        style={{ transform: [{ rotate: '180deg' }] }}
      />
    )
  },
  {
    id: 6,
    header: 'Payment',
    label: 'Invoices',
    value: 'Invoices',
    icon: <FontAwesome5 name="ticket-alt" color="#3699ff" size={20} />
  },
  {
    id: 7,
    label: 'Calculator',
    value: 'Calculator',
    icon: <Ionicons name="calculator" color="#3699ff" size={20} />
  },
  {
    id: 8,
    header: 'Help',
    label: 'Support Tickets',
    value: '',
    icon: <Entypo name="chat" color="#3699ff" size={20} />,
    children: [
      {
        id: 1,
        label: 'Create Ticket',
        value: 'CreateTicket',
        icon: <Entypo name="dot-single" color="#3699ff" size={20} />
      },
      {
        id: 2,
        label: 'All Tickets',
        value: 'SupportTickets',
        icon: <Entypo name="dot-single" color="#3699ff" size={20} />
      }
    ],
    visible: false
  },
  {
    id: 9,
    label: 'Help Center',
    value: 'HelpCenter',
    icon: <FontAwesome5 name="book-open" color="#3699ff" size={20} />
  }
];

const LeftDrawerContent = props => {
  const { navigation } = props;
  const [options, setOptions] = useState(leftDrawerOptions);
  const handleOnPressItem = (item, index) => {
    if (item.value === 'HelpCenter') {
      Linking.openURL('https://ushopus.com/market-place');
      return;
    }
    if (item.children) {
      const data = [...leftDrawerOptions];
      data[index].visible = !data[index].visible;
      setOptions([...data]);
    } else {
      if (item.label === 'Dashboard') {
        navigation.navigate(item.value, { screen: 'Dashboard' });
      } else {
        navigation.navigate(item.value);
      }
      navigation.closeDrawer();
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      {options.map((item, index) => (
        <>
          {item && !!item.header && (
            <View style={styles.header}>
              <Text style={styles.headerText}>{item.header}</Text>
            </View>
          )}
          <View style={styles.drawerContainer}>
            <DrawerItem
              key={item.id}
              label={item.label}
              labelStyle={styles.label}
              style={styles.item}
              icon={() => item.icon}
              onPress={() => handleOnPressItem(item, index)}
            />
            {item && item.children && item.visible ? (
              <Entypo
                name="chevron-up"
                color="#3699ff"
                size={20}
                style={styles.icon}
              />
            ) : (
              item &&
              item.children && (
                <Entypo
                  name="chevron-down"
                  color="#3699ff"
                  size={20}
                  style={styles.icon}
                />
              )
            )}
          </View>
          {item &&
            item.visible &&
            item.children.map(child => (
              <DrawerItem
                key={child.id}
                label={child.label}
                labelStyle={styles.label}
                style={styles.childItem}
                icon={() => child.icon}
                onPress={() => {
                  if (item.value === 'ShipmentsTab') {
                    navigation.navigate(item.value, {
                      screen: 'ShipmentStack',
                      params: {
                        screen: child.value
                      }
                    });
                  } else if (item.value) {
                    navigation.navigate(item.value, { screen: child.value });
                  } else {
                    navigation.navigate(child.value);
                  }
                  navigation.closeDrawer();
                }}
              />
            ))}
        </>
      ))}
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  item: {
    width: '83%'
  },
  childItem: {
    width: '83%',
    paddingLeft: 5
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    marginLeft: -15
  },
  drawerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    marginRight: 30
  },
  header: {
    marginTop: 30
  },
  headerText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6c6f8b',
    fontFamily: 'Poppins-Regular',
    textTransform: 'uppercase',
    marginLeft: 10
  }
});

export default LeftDrawerContent;
