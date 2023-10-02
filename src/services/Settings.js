export const settings = {
  baseUrl: 'https://www.ushopus.com/api',
  imagePath: 'https://ushopus.com/uploads/images/',
  auth: {
    login:
      'https://www.ushopus.com/enviorment/login?email=$[email]&password=$[password]',
    register:
      'https://ushopus.com/register/store?email=$[email]&password=$[password]&name=$[name]&gender=$[gender]&lscode=$[lscode]&phone=$[phone]&street_address=$[street_address]&state=$[state]&city=$[city]&postal_code=$[postal_code]&business_country=$[business_country]&ref=app&password_confirmation=$[password_confirmation]',
    changePassword: '/change-password/update',
    preferences: '/preference?token=$[token]',
    updatePreferences:
      '/preference/update?token=$[token]&language=$[language]&country=$[country]&currency=$[currency]'
  },
  dashboard: {
    dashboard: '/dashboard?token=$[token]'
  },
  upload: {
    upload: '/upload?token=$[token]'
  },
  notifications: {
    notifications: '/notifications?token=$[token]'
  },
  constants: {
    countries: '/countries?token=$[token]'
  },
  shops: {
    details: '/shops/detail?token=$[token]',
    switch: '/switch/shop/$[id]?token=$[token]'
  },
  shipments: {
    shipments: '/shipments/show/1?token=$[token]',
    viewShipment: '/shipment/view/$[id]?token=$[token]',
    delivered: '/shipments/show/2?token=$[token]',
    viewDelivered: '/shipment/view/$[id]?token=$[token]',
    receivedPackages: '/recieved-packages/show?token=$[token]',
    viewReceivedPackage: '/recieved-packages/view/$[id]?token=$[token]',
    createNewShipment: '/new-shipment?token=$[token]',
    createShipment: '/new-shipment/store?token=$[token]'
  },
  buyForMe: {
    buyForMe: '/buy-for-me/show?token=$[token]',
    store: '/buy-for-me/order/store?token=$[token]',
    view: '/buy-for-me/view/$[id]?token=$[token]',
    delete: '/buy-for-me/delete/$[id]?token=$[token]'
  },
  vipServices: {
    vipServices: '/vip-service/show?token=$[token]',
    order: '/vip-service/order?token=$[token]',
    store: '/vip-service/order/store?token=$[token]',
    view: '/vip-service/view/$[id]?token=$[token]',
    delete: '/vip-service/delete/$[id]?token=$[token]'
  },
  addOns: {
    addOns: '/add-ons/show?token=$[token]',
    view: '/add-ons/view/$[id]?token=$[token]',
    createGet: '/add-ons/create?token=$[token]',
    create: '/add-ons/create/store?token=$[token]',
    delete: '/add-ons/delete/$[id]?token=$[token]'
  },
  invoices: {
    invoices: '/invoices/show?token=$[token]',
    view: '/invoices/view/$[id]?token=$[token]'
  },
  calculator: {
    calculator: '/calculator?token=$[token]',
    results: '/calculator/results?token=$[token]'
  },
  supportTickets: {
    supportTickets: '/all-support-tickets/show?token=$[token]',
    create: '/create-support-ticket/store?token=$[token]',
    edit: '/edit-ticket/store?token=$[token]',
    view: '/support-ticket/view/$[id]?token=$[token]'
  },
  coupons: {
    redeem: '/redeem-coupon?token=$[token]'
  },
  shop: {
    selectedShop: '/switch/shop/$[id]?token=$[token]'
  },
  payments: {
    cards: '/stripe/payment/cards?token=$[token]',
    delete: '/payment-method/delete/$[id]?token=$[token]',
    payNow:
      '/buy-for-me/order/payment?id=$[id]&method=$[method]&service=$[service]&token=$[token]',
    paymentMalaysia:
      '/payment/malaysian?id=$[id]&service=$[service]&token=$[token]'
  }
};
