import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, Header, Label } from 'src/components';

const ProhibitedItems = () => {
  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Label label="Prohibited Items" />
        <View style={styles.body}>
          <Text style={styles.text}>
            There are some items we cannot legally ship due to customs laws and
            delivery company or airline restrictions. Banned items can vary
            depending on which country you're shipping the items to. But in
            general you can't ship the following internationally from the USA:
            The following commodities are not acceptable for transport by
            UshopUs Express under any circumstances:
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Reproductions of any currency note, bank note or coin which are
            currently issued in any country.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Indecent printings, paintings, photographs, books, cards,
            lithographic, engravings, films, video tapes, laser discs, color
            slides, computer disc and any other media.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Any device which intended to be prejudicial to the interest of
            Malaysia or unsuited with peace.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            All genuses of Piranha fish.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Turtle eggs.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Cocoa pods, rambutans, pulasan, longan and nam nam fruits from
            Philippines and Indonesia.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Intoxicating liquors containing more than 3.46 milligrams per liter
            in any lead or in any compound of copper.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Daggers and flick knives.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Broadcast receivers capable of receiving radio communication within
            the ranges (68-87)MHz and (108-174) MHZ.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Sodium arsenate.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Cloth bearing the imprint or duplicate of any verses of the Quran.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Poisonous chemical.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Lightning arresters containing radioactive material.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Jewellery, bullions, antiques, precious metals and stones.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Animal (including insects, hatching eggs, birds, ivory).
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Counterfeit or pirated goods or materials (including CD,VCD, and
            DVD).
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Credit cards, traveller's cheque, or passports.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Live plants.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Firearms, weapons and ammunition.
          </Text>
          <Text style={styles.text}>
            The importations of goods specified below are prohibited except
            under an import license or permit from relevant authorities:
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Egg in the shells.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Any meat, bones, hide, skin, hoofs, horns, offal or any part of the
            animal and poultry.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Live animals-primates including ape, monkey, lemur, galago, potto
            and others.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Explosives and fireworks.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Imitation arms, toy gun / pistols.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Imitation hand grenades.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Arms and ammunition other than personal arms ammunition imported by
            bona fide traveler.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Bullet proof vests, steel helmets and other articles of clothing as
            protection against attack..
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Soil and pests including live insects, rats, snails and cultures of
            plant disease causing organisms..
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Safety helmets (except as worn by motorcyclists or motorcycle
            pillion riders).
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Video machines excluding game watches and video games for use with
            television receiver.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Motor vehicles.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Batik sarong.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Rice and padi including rice products.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Equipment to be connected to a public telecommunication network
            including but is not limited to mobile phones and modem.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Radio communication being used for telecommunication in the
            frequency lower than 3000 GHz.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Saccharin and its salt.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Parabola antenna for outdoor use.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Pests and organisms which are capable of being injurious to plants.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Live fish.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Animal oils and fats.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Plants include parts and plant products.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Household and agricultural pesticides.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Electric domestic equipments that use 50 volt or 120 volt DC or
            more.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Toxic and/or hazardous wastes.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Corals, live or dead.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Apparatus/equipment for the brewing of beer in the home.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Pharmaceutical products.
          </Text>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>
            ILLICIT DRUGS
          </Text>
          <Text style={styles.text}>
            {`THE PUNISHMENT FOR DRUG TRAFFICKING IS DEATH BY HANGING. 

Import and export of illicit drugs (eg: morphine, heroine, candu, marijuana, etc.) are strictly prohibited.Prescribed drugs can only be imported or exported from Malaysia by virtue of a license issued by the Ministry of Health, Malaysia. 

Any items not listed above, please contact Malaysian Customs for further information.`}
          </Text>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>
            Prohibited items for export from USA
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            All tobacco products, including but not limited to Cigars, E-Cigars,
            E-Liquids, etc.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Any type of stand-alone batteries.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Any additional battery/batteries that is packed in the same package
            but separated from the device.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Alcohol products and beverages (Item(s) would be discard at Origin
            and unable to process for returns or redirect to another address)
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Counterfeit goods.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Diamonds.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Electronic device which contains battery purchased from eBay/
            individual seller. (Used items shipped without manufacturer’s
            packaging do not comply and are illegal to ship)
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Engine oils / essential oils.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            External battery / power bank.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Fuels, gasoline and gas torches.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Flammable and toxic content products (e.g. products with Minoxidil,
            zinc oxide, Rosemary Oil and etc.)
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Firearms (or parts thereof).
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Infectious substances.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Lighters with or without fuel and lighter fluid.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Magnets.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Munitions of war.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Meat or animal extracts.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Nail polish and nail polish removers.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Narcotic drugs.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Pornographic materials.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Perishable foods.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Precious metals and gemstones.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Paper currency, coins, credit cards and cheques.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Perfumes, colognes, eau de toilette and fragrance sprays.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Radioactive materials.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Sprays, aerosol cans and compressed gas cylinders.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Sanitizers.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Turpentine and paint thinner.
          </Text>
          <Text style={styles.text}>
            <Entypo name="dot-single" size={15} color="#000" />
            Weapons (swords / knives / guns, etc).
          </Text>
          <Text style={styles.text}>
            This list may be updated from time to time. Please contact the US
            Customs for any enquiry.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  contentContainer: {
    alignItems: 'center'
  },
  body: {
    width: '100%',
    marginBottom: 50
  },
  text: {
    fontSize: 14,
    color: '#5A5A6E',
    marginTop: 15
  }
});

export default ProhibitedItems;
