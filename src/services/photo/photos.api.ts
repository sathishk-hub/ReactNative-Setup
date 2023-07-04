import config from 'react-native-config';
import makeApi from '../../libs/axios/api';
import { type Photo } from '../../types/photos';

const api = makeApi(config.API_BASE_URL ?? '');

const ADD_PATH = '/photos';

const getPhotos = async (): Promise<Photo[]> => api.get(ADD_PATH);

export default getPhotos;
