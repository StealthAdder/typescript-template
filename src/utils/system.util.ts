import ip from 'ip';

// eslint-disable-next-line import/prefer-default-export
export const getLocalIP = () => ip.address();
