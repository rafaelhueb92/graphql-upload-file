const { GraphQLUpload } = require("apollo-upload-server");
const resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    uploadSingleFile: async (root, { file }) => {
      const { stream, mimetype } = await file;
      console.log("File", stream, mimetype);
      // Now use stream to either write file at local disk or CDN
    }
  }
};
