export const IOS_APP_STORE_URL = 'https://apps.apple.com/au/app/unepal-hamro-social-network/id6744555192';
export const ANDROID_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.unepal.unepalaustralia';
export const DOWNLOAD_FALLBACK_URL = '/download';

export function getDownloadDestination(fallbackUrl = DOWNLOAD_FALLBACK_URL) {
  if (typeof navigator === 'undefined') {
    return fallbackUrl;
  }

  const userAgent = navigator.userAgent || navigator.vendor;
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return IOS_APP_STORE_URL;
  }

  if (/android/i.test(userAgent)) {
    return ANDROID_PLAY_STORE_URL;
  }

  return fallbackUrl;
}
