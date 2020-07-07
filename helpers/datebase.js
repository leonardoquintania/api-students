import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://userAtlas:123@cluster0-wumzq.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conexão efetuada com sucesso');

    return connection;
  } catch (error) {
    console.log('Não foi possivel a conexão');
    console.log(error.message);
  }
};
export { connectDB };
