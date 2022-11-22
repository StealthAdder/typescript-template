import mongoose from 'mongoose';

const randomObjectId = () => new mongoose.Types.ObjectId().toHexString();
// eslint-disable-next-line import/prefer-default-export
export { randomObjectId };
