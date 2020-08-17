import Apis from 'apis';
import { createService } from 'utils/serviceFactory';

const UserService = createService(Apis.users, {
  fetchBankItems: {
    method: 'GET',
    url: `${Apis.users}/me/items`,
  },
  fetchBankItemDetails: {
    method: 'GET',
    url: `${Apis.users}/me/items/:itemID`,
  },
  setDefaultBankAccount: {
    method: 'PUT',
    url: `${Apis.users}/me/items/:itemID/account/default`,
  },
  removeBankItem: {
    method: 'DELETE',
    url: `${Apis.users}/me/items/:itemID`,
  },
  addBankItem: {
    method: 'POST',
    url: `${Apis.users}/me/items/add`,
  },
  createPasses: {
    method: 'POST',
    url: `${Apis.users}/me/passes`,
  },
  fetchAccounts: {
    method: 'GET',
    url: `${Apis.users}/me/items/:itemID/accounts`,
  },
  // Fetch User Information for Employee App
  fetchUserInformation: {
    method: 'GET',
    url: `${Apis.users}/:userId`,
  },
  getPublicTokenForPlaid: {
    method: 'POST',
    url: `${Apis.users}/me/items/:itemID/public-token`,
  },
  activeItemIdForPlaid: {
    method: 'PUT',
    url: `${Apis.users}/me/items/:itemID`,
  },
});

export default UserService;
