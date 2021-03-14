import mongoose from 'mongoose';

export default function conntectionDb() {
  mongoose.connect('mongodb://localhost:27017/find-devs', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}
