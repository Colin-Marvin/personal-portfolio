const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID,
  keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
});

const uploadToFirebaseStorage = async (filepath, fileName) => {
  try {
    const gcs = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);
    const storagepath = `uploads/${fileName}`;
    const result = await gcs.upload(filepath, {
      destination: storagepath,
      public: true,
      metadata: {
        contentType: "application/plain",
      },
    });
    return result[0].metadata.mediaLink;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  uploadToFirebaseStorage,
};
