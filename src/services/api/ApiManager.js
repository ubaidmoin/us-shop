import { getData, postData, postDataLogin, postFormData } from './ApiCalls';
import { settings as s } from '../Settings';

export const login = ({ email, password }) => {
  try {
    const response = postDataLogin(
      `${s.auth.login
        .replace('$[email]', email)
        .replace('$[password]', password)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const register = data => {
  try {
    const response = postDataLogin(
      `${s.auth.register
        .replace('$[email]', data.email)
        .replace('$[password]', data.password)
        .replace('$[name]', data.name)
        .replace('$[gender]', data.gender)
        .replace('$[lscode]', data.lscode)
        .replace('$[phone]', data.phone)
        .replace('$[street_address]', data.street_address)
        .replace('$[state]', data.state)
        .replace('$[city]', data.city)
        .replace('$[postal_code]', data.postal_code)
        .replace('$[business_country]', data.business_country)
        .replace('$[password_confirmation]', data.password_confirmation)}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getPreferences = token => {
  try {
    const response = getData(
      `${s.auth.preferences.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const updatePreferences = (token, data) => {
  try {
    const response = postData(
      `${s.auth.updatePreferences
        .replace('$[token]', token)
        .replace('$[language]', data.language)
        .replace('$[currency]', data.currency)
        .replace('$[country]', data.country)}`,
      null
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const uploadFile = (token, data) => {
  try {
    const response = postFormData(
      `${s.upload.upload.replace('$[token]', token)}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getShops = token => {
  try {
    const response = getData(`${s.shops.details.replace('$[token]', token)}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getDashboardDetails = token => {
  try {
    const response = getData(
      `${s.dashboard.dashboard.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const switchShop = (id, token) => {
  try {
    const response = getData(
      `${s.shops.switch.replace('$[id]', id).replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getCreateShipment = token => {
  try {
    const response = getData(
      `${s.shipments.createNewShipment.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const createShipment = (token, data) => {
  try {
    const response = postData(
      `${s.shipments.createShipment.replace('$[token]', token)}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getPaymentCards = token => {
  try {
    const response = getData(`${s.payments.cards.replace('$[token]', token)}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const deletePaymentMethod = (id, token) => {
  try {
    const response = getData(
      `${s.payments.delete.replace('$[id]', id).replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const payNow = (token, id, service, method) => {
  try {
    const response = postData(
      `${s.payments.payNow
        .replace('$[id]', id)
        .replace('$[service]', service)
        .replace('$[method]', method)
        .replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const payNowBillPlz = (token, id, service) => {
  try {
    const response = postData(
      `${s.payments.paymentMalaysia
        .replace('$[id]', id)
        .replace('$[service]', service)
        .replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getCountries = token => {
  try {
    const response = getData(
      `${s.constants.countries.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getShipments = token => {
  try {
    const response = getData(
      `${s.shipments.shipments.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getDelivered = token => {
  try {
    const response = getData(
      `${s.shipments.delivered.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getReceivedPackages = token => {
  try {
    const response = getData(
      `${s.shipments.receivedPackages.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const viewShipment = (token, id) => {
  try {
    const response = getData(
      `${s.shipments.viewShipment
        .replace('$[id]', id)
        .replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const viewDelivered = (token, id) => {
  try {
    const response = getData(
      `${s.shipments.viewDelivered
        .replace('$[id]', id)
        .replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const viewReceivedPackage = (token, id) => {
  try {
    const response = getData(
      `${s.shipments.viewReceivedPackage
        .replace('$[id]', id)
        .replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const updatePassword = data => {
  try {
    const response = postData(`${s.auth.changePassword}`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const buyForMeList = token => {
  try {
    const response = getData(
      `${s.buyForMe.buyForMe.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getNotifications = token => {
  try {
    const response = getData(
      `${s.notifications.notifications.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const createBuyForMe = (token, data) => {
  try {
    const response = postData(
      `${s.buyForMe.store.replace('$[token]', token)}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const viewBuyForMe = (token, id) => {
  try {
    const response = getData(
      `${s.buyForMe.view.replace('$[id]', id).replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteBuyForMe = (token, id) => {
  try {
    const response = postData(
      `${s.buyForMe.delete.replace('$[id]', id).replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const vipServices = token => {
  try {
    const response = getData(
      `${s.vipServices.vipServices.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const createVipServices = (token, data) => {
  try {
    const response = postData(
      `${s.vipServices.store.replace('$[token]', token)}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const vipServicesOrder = token => {
  try {
    const response = getData(
      `${s.vipServices.order.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const viewVipServices = (token, id) => {
  try {
    const response = getData(
      `${s.vipServices.view.replace('$[id]', id).replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteVipServices = (token, id) => {
  try {
    const response = postData(
      `${s.vipServices.delete.replace('$[id]', id).replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const addOnsList = token => {
  try {
    const response = getData(`${s.addOns.addOns.replace('$[token]', token)}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const createAddOns = (token, data) => {
  try {
    const response = postData(
      `${s.addOns.create.replace('$[token]', token)}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const createGetAddon = token => {
  try {
    const response = getData(
      `${s.addOns.createGet.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const viewAddOns = (token, id) => {
  try {
    const response = getData(
      `${s.addOns.view.replace('$[id]', id).replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteAddOns = (token, id) => {
  try {
    const response = postData(
      `${s.addOns.delete.replace('$[id]', id).replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const invoices = token => {
  try {
    const response = getData(
      `${s.invoices.invoices.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const viewInvoice = (token, id) => {
  try {
    const response = getData(
      `${s.invoices.view.replace('$[id]', id).replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const calculator = token => {
  try {
    const response = getData(
      `${s.calculator.calculator.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const calculatorResult = (token, data) => {
  try {
    const response = postData(
      `${s.calculator.results.replace('$[token]', token)}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const supportTicketsList = token => {
  try {
    const response = getData(
      `${s.supportTickets.supportTickets.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const createSupportTickets = (token, data) => {
  try {
    const response = postData(
      `${s.supportTickets.create.replace('$[token]', token)}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const viewSupportTickets = (token, id) => {
  try {
    const response = getData(
      `${s.supportTickets.view.replace('$[id]', id).replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const editSupportTickets = (token, data) => {
  try {
    const response = postData(
      `${s.supportTickets.edit.replace('$[token]', token)}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const redeemCoupons = (token, data) => {
  try {
    const response = postData(
      `${s.redeemCoupons.redeemCoupons.replace('$[token]', token)}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const selectedShops = token => {
  try {
    const response = getData(
      `${s.selectedShops.selectedShops.replace('$[token]', token)}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
