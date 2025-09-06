export const usePhoneFormatter = () => {
  const formatPhoneForWhatsApp = (phone: string) => {
    // Remove all non-numeric characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Add country code 55 for Brazil if not present
    return `55${cleanPhone}`;
  };

  return { formatPhoneForWhatsApp };
};