import { Account, Client,ID } from 'react-native-appwrite';

export const Config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aora',
  projectId: '6638a22b001f32c27bf5',
  databaseId: '6638a447000c901e635d',
  userCollectionId: '6638a447000c901e635d',
  videoCollectionId: '6638a4c5003882804389',
  storageId: '6638a8b300339627e0c0',
};

const client = new Client();

client
  .setEndpoint(Config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

  const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
