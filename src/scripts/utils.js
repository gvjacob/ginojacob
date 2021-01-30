export const onDocumentReady = (callback) => {
  console.log('here');
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  }
};
