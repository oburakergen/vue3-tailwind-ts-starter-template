import CryptoJS from 'crypto-js'

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string

/**
 * AES ile metni şifreler
 * @param text Şifrelemek istediğiniz metin
 * @param key Opsiyonel: Özel bir anahtar (default: SECRET_KEY)
 * @returns Şifrelenmiş metin
 */
export function encrypt(text: string, key: string = SECRET_KEY): string {
  return CryptoJS.AES.encrypt(text, key).toString()
}

/**
 * AES ile şifrelenmiş metni çözer
 * @param cipherText Şifrelenmiş metin
 * @param key Opsiyonel: Özel bir anahtar (default: SECRET_KEY)
 * @returns Çözülmüş metin veya null (başarısızsa)
 */
export function decrypt(cipherText: string, key: string = SECRET_KEY): string | null {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, key)
    return bytes.toString(CryptoJS.enc.Utf8)
  } catch (error) {
    console.error('Decryption failed:', error)
    return null
  }
}
