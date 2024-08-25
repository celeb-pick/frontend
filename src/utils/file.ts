export const blobToFile = (theBlob: Blob): File => {
  const extensionName = theBlob.type.split('/')[1];

  return new File([theBlob], `${crypto.randomUUID()}.${extensionName}`, {
    lastModified: new Date().getTime(),
    type: theBlob.type,
  });
};
