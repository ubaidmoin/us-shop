import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, Header, Label } from 'src/components';

const TermsAndConditionsStackScreen = () => {
  return (
    <>
      <Header isStack />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Label label="Terms and Conditions" />
        <View style={styles.body}>
          <Text style={styles.text}>
            1. UshopUS can help to bring any item from the USA , UK & JAPAN
            except for Prohibited Items internationally.
          </Text>
          <Text style={styles.text}>
            If you break the law on the prohibited items, you will be the sole
            party to be responsible for any legal action, not uShopUS. All items
            responsibility In terms of legality for Any country related is
            solely Under the responsibility of the customer only.
          </Text>
          <Text style={styles.text}>
            2. All of the items ordered will be posted at UshopUS USA , UK &
            JAPAN Warehouse address first, and then shipped to your destination.
            Your packages will be shipped from the USA , UK & JAPAN warehouse
            once full payment has been done. (For Malaysian customer , we ship
            in bulk to our Asia Pacific Facilities UshopUS Malaysia Warehouse
            before ship out to your address). The items will go through our
            process of QC check and repacking (upon request with extra fee)
            before proceeding for postage to our customers. Please note that we
            may provide tracking number for your destination (depending on the
            courier provider) but do not provide any tracking number from USA
            and UK to Malaysia (because of we send in bulk shipment)
          </Text>
          <Text style={styles.text}>
            3. The shipping cost as stated in the Shipping Calculator is only
            estimated to your local country. (Malaysia customer : to uShopUS
            Malaysia warehouse.Additional service apply for door-to-door service
            )
          </Text>
          <Text style={styles.text}>
            Any cancellations and refunds are allowed while the ordered items
            are still at UshopUS USA , UK & JAPAN Warehouse. But we will charge
            a fee of $50 for the handling process. Once the item has been
            shipped, any cancellations will be considered burnt. Detail :
            https://ushopus.com/refund
          </Text>
          <Text style={styles.text}>
            4. UshopUS does not guarantee the quality and authenticity of the
            item purchased from the merchant (this include the buy for me
            service)
          </Text>
          <Text style={styles.text}>
            Please purchase items from reputable merchants and sites to ensure
            you receive the expected quality of item. For “buy for me” service,
            If a seller is believed not to be a legitimate seller or is believed
            to have engaged in fraud, will submit an investigation request with
            PayPal on behalf of our User. PayPal will then attempt to recover
            any funds owed, but fund recovery is not guaranteed. All disputes
            must be submitted within 30 days from when the original payment was
            sent.
          </Text>
          <Text style={styles.text}>
            5. We will have the right to review the Shipping charges from time
            to time and make changes thereof without any or prior notice to you
            and/or to any third party. We will notify you of the amount you have
            to pay for Shipping charges, customs clearance charges, GST or other
            service taxes (if applicable) and any other applicable charges. In
            providing the service, we act as an independent contractor and we
            are not an agent of any Merchant or act in any other capacity unless
            otherwise specifically stated.
          </Text>
          <Text style={styles.text}>
            6. Ushopus shall not in any case be liable for the item purchased
            for any wrongly sent item or any problem done by the merchant unless
            there is an inspection made. We strongly suggest an inspection of
            the item once the item arrives at our warehouse to mitigate this
            risk .
          </Text>
          <Text style={styles.text}>7. If you fail or refuse to</Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            i. accept delivery;
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            ii. pay for delivery; or
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            iii. collect the Item, or the Shipment or Item is deemed
            unacceptable for any reason, we may at our sole discretion:
          </Text>
          <Text style={[styles.text, { marginLeft: 20 }]}>
            a. where appropriate, contact you to discuss and agree on an
            appropriate action to take;
          </Text>
          <Text style={[styles.text, { marginLeft: 20 }]}>
            b. use reasonable efforts to return the Item to Merchant at your
            cost with $50 handling fee; or
          </Text>
          <Text style={[styles.text, { marginLeft: 20 }]}>
            c. deal with the Item in any manner we deem fit without being liable
            to you.
          </Text>
          <Text style={styles.text}>
            8. We shall not in any case be liable for any loss, damage and delay
            of Shipment arising from:
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            any defect in any Item in the Shipment, whether or not known to us
            at any time before delivery to you
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            incomplete, insufficient, or erroneous entry of the UshopUS address
            by you at the Merchant's website;
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            failure by the Merchant to make delivery within a reasonable time to
            the relevant UshopUS address;
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            failure by any party or the Merchant to provide complete and
            sufficient information on your Shipment Item to UshopUS or make an
            accurate declaration for customs clearance, regulatory and delivery
            purposes’
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            insufficient or improper packing or addressing information of any
            Item in the Shipment by your Merchant;
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            improper packing of any Item in the Shipment after having been
            opened by us for verification whether at the request of any customs
            authority or other governmental agencies;
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            insufficient or improper packing of any Item in the Shipment after
            having been re-packed by us (whether at your request or not);
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            any alleged delivery from the Merchant to the UshopUS address
            provided by you, where there is no proof of delivery furnished by
            the Merchant or their delivery agent and where the receipt of the
            Item is not signed and acknowledged at the UshopUS addresses;
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            any loss of confidentiality in communications arising during the
            Shipping;
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            electrical or magnetic damage to, or erasure of electronic or
            photographic images or recordings;
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            the hazardous, fragile or brittle nature or the mechanical
            derangement of any Item in the Shipment; or
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            failure by you to take delivery of or collect the Shipment after
            being notified to do so.
          </Text>
          <Text style={styles.text}>
            9. We reserve the right to terminate or suspend this service at any
            time without assigning any reason.
          </Text>
          <Text style={styles.text}>
            Without prejudice to the generality of the foregoing, we reserve the
            right to terminate or suspend your use of the UshopUS service if
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            there is abuse or misuse of the service by you; or
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            we are of the reasonable opinion that you have breached any of the
            terms and conditions herein contained.
          </Text>
          <Text style={styles.text}>
            10. We reserve the right to refuse service to anyone based on
            company's discretion
          </Text>
          <Text style={styles.text}>
            11. We shall not be liable to you or to any other party for any
            damages, losses, cost or expenses however caused by or arising out
            of such termination or suspension.
          </Text>
          <Text style={styles.text}>
            12. We have the right to assign or transfer or sub-contract all or
            part of our rights or obligations hereunder at our discretion.
          </Text>
          <Text style={styles.text}>
            13. UshopUS have the right to publish or make the items purchased by
            customer seen by others in our own social media.
          </Text>
          <Text style={styles.text}>
            14. We reserve the right to modify these terms and conditions from
            time to time without notice. The revised terms and conditions will
            be posted on this website and shall take effect from the date of
            such posting. We assume no liability or responsibility for any
            errors or omissions in the content of these terms and conditions.
          </Text>
          <Text style={styles.text}>
            15. Any return cost from your home address to the USA , UK & JAPAN
            must be borne by you if there is any.
          </Text>
          <Text style={styles.text}>
            16. Customers are aware that the shipping duration is just an
            estimation. Air shipment will normally take 7-21 working days and
            sea shipment will take 3 months from the shipping date. However if
            there’s any delay from the courier or shipper , uShopUS will notify
            the customer but not be responsible for the delay.
          </Text>
          <Text style={styles.text}>
            17. uShopUS is not responsible for any small defect happening during
            the shipment which may be caused by handling during shipment by
            courier , shipper & logistic provider. Or any minor scratch or
            cosmetic defect which does not considered major and does not change
            the functionality of the item
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Otherwise , customer can opt to do an inspection or repackaging
            service that may cost extra depending on the level of work needed
          </Text>
          <Text style={styles.text}>
            18. For "Buy for me" services , uShopUS will buy the item within 2
            working days . If you want to order a limited item or fast selling
            item , you are advised to just buy it on your own and send it to our
            USA , UK & JAPAN warehouse. For any refund under buy for me, we will
            charge RM2 for processing fee (billplz) and 4% for stripe.
          </Text>
          <Text style={styles.text}>
            19. For customers using “Buy for me” services and pay only 50% of
            the total amount, they are required to make the balance payment
            within 5 days after USA , UK & JAPAN warehouse receive the item. If
            no payment is received within 5 days, Ushopus has the right to
            return the item and we will charge $50 for return and cancellation
            fee.
          </Text>
          <Text style={styles.text}>
            20. If your item is being sold from outside of the UK, you might be
            imposed with import and duty tax. For this scenario, you HAVE to use
            our BUY FOR ME services so that our team will be able to track the
            item and secure the cleareance with the customs
          </Text>
          <Text style={styles.text}>
            21. However, if you purchased the item from outside of the UK and
            JAPAN on your own, you will face the risk of handling the customs
            charges into the UK and Japan on your own and to track the status.
            We strongly urge you to use Buy for me services
          </Text>
          <Text style={styles.text}>
            22. There is an additional 4% charge when using Stripe as the
            payment method. However, if you are from Malaysia and using a
            Malaysian card account, you can avoid these charges by creating an
            account and choosing Malaysia ringgit as your default currency when
          </Text>
          <Text style={styles.text}>
            23. For operation related enquiries , directly email our customer
            service uShopUScom@gmail.com or issue a support ticket from your
            dashboard
          </Text>
          <Text style={styles.text}>
            24. If the item you ordered weighs more than 50kg (110 lbs) or total
            dimension size ( Length x Width x Depth ) more than 10,000 , please
            contact our customer representative to confirm the warehouse
            delivery address first before making any purchases . Email us at
            uShopUScom@gmail.com. Large items need to be sent to a different
            warehouse . We’re not to be responsible if you did not follow this
            instructions
          </Text>
          <Text style={styles.text}>
            25. Shipping weight will be determined by actual or volumetric
            weight (VW), whichever is higher. The Dimensional Weight is (L x W x
            H / 139). All shipments with dimensions greater than 22 in. L x 16
            in. W x 15 in. D will have to pay an extra $55 for every 22 in. L x
            16 in. W x 15 in. D (Volumetric Weight 5280 in.)
          </Text>
          <Text style={styles.text}>
            26. Some websites will have a maximum amount of purchase and if you
            exceed the maximum amount of purchase, we will charge it as a second
            purchasing service fee via the website
          </Text>
          <Text style={styles.text}>
            27. We have the right to put other items in your box if we feel it
            is necessary to do so in order to save the shipping cost to your
            final destination
          </Text>
          <Text style={styles.text}>
            28. UShopUS provides insurance coverage to help offer you financial
            protection against all risks of physical loss or damage of
            goods/items during transit from uShopUS USA , UK & JAPAN Warehouse
            to your destination (or to uShopUS Malaysia Warehouse for customer
            from Malaysian address). The insurance premium is calculated at 5%
            or a minimum of $10, whichever is greater and only open for
            inspected items. The limits of liability for each insured item will
            be limited to $2000USD per item. However, if you do not choose to
            add insurance to your order and receive a damaged product or lost in
            shipping, ushopus.com will not be held responsible for replacement,
            exchange or reimbursement.
          </Text>
          <Text style={styles.text}>
            Please note this is a shipment insurance and not a warranty of the
            item’s functionality
          </Text>
          <Text style={styles.text}>
            It covers physical damage or loss resulted from mishandling from
            courier side if any .
          </Text>
          <Text style={styles.text}>
            Ensure to take picture the same day the item has been delivered or
            picked up that clearly shows the broken physical damage if any .
          </Text>
          <Text style={styles.text}>
            If the item delivered in a reasonable good condition box and per
            delivered by seller , the insurance won’t cover whatever physical
            damage happened inside the box to the item that has been sent by
            seller if no repacking services requested before shipment has been
            created
          </Text>
          <Text style={styles.text}>
            Please note that the insurance will cover on general merchandise,
            except for (but not limited to) the following excluded items:
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            ALL restricted/prohibited items that are exported from US or
            imported into your local country
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Wafer, semiconductor, Integrated Circuits
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Marble and Tiles
          </Text>
          <Text style={styles.text}>Important Policy Exclusions:</Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Rusty, Oxidation, Discoloration unless caused by insured perils
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Mechanical & Electrical Derangement
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Scratching, Denting, Marring, Breakage and Staining.
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Shortages due to ordinary leakage, loss of weight or volume
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Wear & Tear
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Reject/Returned Shipments
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Loss and/or damage arising from acts of dishonesty or fraud of any
            partner, directors or employees of the forwarder/participant
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Mysterious Disappearance or unexplained pilferage/Shortage
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Loss or damage or expense caused by inherent vice or natural of the
            subject matter
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Losses arising as a result of goods not having been professionally
            packed/manufacturing packed
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Pre-existing damage and/or spoilt due to extremely sensitive to
            temperature change
          </Text>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>
            Additional Cost:
          </Text>
          <Text style={styles.text}>
            Purchasing service fee via website : $5 per website
          </Text>
          <Text style={styles.text}>
            VIP Purchasing Service via physical store : $50 per hour
          </Text>
          <Text style={styles.text}>
            Voucher Discount: Enjoy more savings when you use voucher upon
            checkout
          </Text>
          <Text style={styles.text}>
            Holding Fee: Enjoy 30 days free storage at our warehouse.
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            You will be charged $1 per package per day starting on the 31st day.
            We will dispose the package after 60 days
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            If you wish to proceed with another courier or you want to send you
            parcel to another USA and UK address, you will be charged $1 per
            package per day starting on the day your package arrives at our
            warehouse
          </Text>
          <Text style={styles.text}>
            Consolidate Boxes Fee :You can consolidate different boxes from
            different stores into one box also.
          </Text>
          <Text style={styles.text}>
            Fee charged is $10 per 22 in. L x 16 in. W x 15 in. D box (if you
            have 5 small packages to be consolidated into one box, the fee is
            $10)
          </Text>
          <Text style={styles.text}>
            Repack Fee: We will repack you package for added protection and
            security if it is inadequately packed for international shipping.
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Basic repack (Open box and combine all parcels): $10/20 tracking
            number
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Advanced repack (packing with air pillow / paper / cardboards so the
            boxes filled and sturdy): $25 USD/ 10 tracking
          </Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>
            <Entypo name="dot-single" size={15} color="#000" />
            Delicate and extra care repack (bubble wrap each item if small;
            plates,glasses etc, bubble wrap each part if large; bicycle, guitar
            etc) : $50/ tracking number
          </Text>
          <Text style={styles.text}>
            Cancellation/Return Fee : $50 USD/tracking number
          </Text>
          <Text style={styles.text}>
            Photo Request Fee: $5 USD/tracking number (4 different angles)
          </Text>
          <Text style={styles.text}>
            Box Inspection :$10 USD/tracking number
          </Text>
          <Text style={styles.text}>
            Tracking number request from USA and UK website to USA and UK
            warehouse: $10 per website
          </Text>
          <Text style={styles.text}>
            Use tracking / Signature when order and parcel sent back : $1 per
            mile for pick up (minimum charges $15)
          </Text>
          <Text style={styles.text}>
            For pickup charges : $1 per mile (minimum charges $15)
          </Text>
          <Text style={styles.text}>
            Sending to USA , UK & JAPAN address/using another courier : $1 per
            package per day starting on the day your package arrives at USA and
            UK warehouse and
          </Text>
          <Text style={styles.text}>
            $15 if customer provide consignment and courier pickup at warehouse
            or
          </Text>
          <Text style={styles.text}>
            $15 + miles charges if customer provide consignment and ushopus drop
            off the parcel
          </Text>
          <Text style={styles.text}>
            Please note special only for Japan shipment , there will be a $10
            handling charges for each tracking number
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

export default TermsAndConditionsStackScreen;
