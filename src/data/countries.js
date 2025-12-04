export const countries = [
  { code: '+1', name: 'United States', iso: 'US' },
  { code: '+1', name: 'Canada', iso: 'CA' },
  { code: '+44', name: 'United Kingdom', iso: 'GB' },
  { code: '+33', name: 'France', iso: 'FR' },
  { code: '+49', name: 'Germany', iso: 'DE' },
  { code: '+39', name: 'Italy', iso: 'IT' },
  { code: '+34', name: 'Spain', iso: 'ES' },
  { code: '+31', name: 'Netherlands', iso: 'NL' },
  { code: '+32', name: 'Belgium', iso: 'BE' },
  { code: '+41', name: 'Switzerland', iso: 'CH' },
  { code: '+43', name: 'Austria', iso: 'AT' },
  { code: '+45', name: 'Denmark', iso: 'DK' },
  { code: '+46', name: 'Sweden', iso: 'SE' },
  { code: '+47', name: 'Norway', iso: 'NO' },
  { code: '+358', name: 'Finland', iso: 'FI' },
  { code: '+91', name: 'India', iso: 'IN' },
  { code: '+86', name: 'China', iso: 'CN' },
  { code: '+81', name: 'Japan', iso: 'JP' },
  { code: '+82', name: 'South Korea', iso: 'KR' },
  { code: '+65', name: 'Singapore', iso: 'SG' },
  { code: '+60', name: 'Malaysia', iso: 'MY' },
  { code: '+66', name: 'Thailand', iso: 'TH' },
  { code: '+84', name: 'Vietnam', iso: 'VN' },
  { code: '+62', name: 'Indonesia', iso: 'ID' },
  { code: '+63', name: 'Philippines', iso: 'PH' },
  { code: '+61', name: 'Australia', iso: 'AU' },
  { code: '+64', name: 'New Zealand', iso: 'NZ' },
  { code: '+971', name: 'United Arab Emirates', iso: 'AE' },
  { code: '+966', name: 'Saudi Arabia', iso: 'SA' },
  { code: '+974', name: 'Qatar', iso: 'QA' },
  { code: '+965', name: 'Kuwait', iso: 'KW' },
  { code: '+973', name: 'Bahrain', iso: 'BH' },
  { code: '+968', name: 'Oman', iso: 'OM' },
  { code: '+20', name: 'Egypt', iso: 'EG' },
  { code: '+27', name: 'South Africa', iso: 'ZA' },
  { code: '+234', name: 'Nigeria', iso: 'NG' },
  { code: '+254', name: 'Kenya', iso: 'KE' },
  { code: '+55', name: 'Brazil', iso: 'BR' },
  { code: '+52', name: 'Mexico', iso: 'MX' },
  { code: '+54', name: 'Argentina', iso: 'AR' },
  { code: '+56', name: 'Chile', iso: 'CL' },
  { code: '+57', name: 'Colombia', iso: 'CO' },
  { code: '+51', name: 'Peru', iso: 'PE' },
  { code: '+7', name: 'Russia', iso: 'RU' },
  { code: '+380', name: 'Ukraine', iso: 'UA' },
  { code: '+48', name: 'Poland', iso: 'PL' },
  { code: '+420', name: 'Czech Republic', iso: 'CZ' },
  { code: '+36', name: 'Hungary', iso: 'HU' },
  { code: '+90', name: 'Turkey', iso: 'TR' },
  { code: '+98', name: 'Iran', iso: 'IR' },
  { code: '+92', name: 'Pakistan', iso: 'PK' },
  { code: '+880', name: 'Bangladesh', iso: 'BD' },
  { code: '+94', name: 'Sri Lanka', iso: 'LK' },
  { code: '+977', name: 'Nepal', iso: 'NP' },
  { code: '+975', name: 'Bhutan', iso: 'BT' },
  { code: '+960', name: 'Maldives', iso: 'MV' }
];

// Helper function to get flag URL from flagsapi.com
export const getFlagUrl = (iso, style = 'flat', size = '24') => {
  return `https://flagsapi.com/${iso}/${style}/${size}.png`;
};

export const getCountryByCode = (code) => {
  return countries.find(country => country.code === code);
};

export const getCountryByIso = (iso) => {
  return countries.find(country => country.iso === iso);
};
