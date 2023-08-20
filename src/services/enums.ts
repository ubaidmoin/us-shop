export const SHIPPING_STATUS = {
  0: 'Payment Pending',
  1: 'Shipment Pending',
  2: 'Departed Locker Warehouse',
  3: 'Shipment Dispatched',
  4: 'Delivered',
  5: 'In Transit'
};

export const SHIPPING_TYPE = {
  0: 'Air Freight',
  1: 'Sea Freight'
};

export const SHIPPING_TYPE_ENUM = [
  { value: 1, label: 'Air Freight' },
  { value: 2, label: 'Sea Freight' }
]

export const SHIPPING_UNIT_ENUM = [
  { value: 'kg', label: 'KG' },
  { value: 'lbs', label: 'LBS' }
]

export const SHIPPING_LENGTH_UNIT_ENUM = [
  { value: 'cm', label: 'CM' },
  { value: 'in', label: 'IN' }
]

export const PACKAGE_STATUS = {
  0: 'Process in Buying',
  1: 'Package Received',
  2: 'Product Bought',
  3: 'Shipment Pending',
  4: 'Departed Locker Warehouse',
  5: 'Shipment Dispatched',
  6: 'Delivered',
  7: 'Added to Shipment',
  8: 'Disposed'
};

export const PAYMENT_STATUS = {
  0: 'Payment Pending',
  1: 'Order Confirmed',
  2: 'Order Placed',
  3: 'Not recommended Website',
  4: 'Out of Stock',
  5: 'Order Failed'
};

export const TICKET_STATUS = {
  0: 'Open',
  1: 'Resolved'
};
