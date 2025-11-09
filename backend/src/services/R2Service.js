const uploadImageToStorage = async (base64Image, userId, collectionId) => {
  // TODO: Implement R2 logic
  console.log(`Uploading image for collection ${collectionId} for user ${userId} to R2 (dev fallback)`);

  if (typeof base64Image === 'string' && base64Image.startsWith('data:image')) {
    return base64Image;
  }

  return base64Image || null;
};

module.exports = {
  uploadImageToStorage,
};
