import moment from 'moment';

export const getPriceByRate = (price, currencyRate) => price * currencyRate;
export const normalizeDate = date => moment(date).format('DD-MM-YYYY');
export const normalizeTime = date => moment(date).format('hh:mm:ss a');
export const getDay = date => moment(date).format('DD MMM');
export const humanDifferenceDate = date => moment(date).fromNow();
export const toTitleCase = message => {
  let sentence = message.toLowerCase().split(' ');
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(' ');
};

export const stateFreeAddress = [
  {
    title: 'State Tax Free Address',
    code: 'US',
    addressLine1: '101 Berwyck Court',
    addressLine2: 'Unit 7353522',
    city: 'Newark',
    state: 'DE',
    zipCode: 19702,
    country: 'United States',
    phone: '+1 (603) 451-5014'
  },
  {
    title: 'Personal UK Address',
    code: 'GB',
    addressLine1: 'SYS2 Ltd, Storage World, Old Hall Street',
    addressLine2: 'Unit 7353522',
    city: 'Middleton',
    state: 'M24 1AG',
    zipCode: '',
    country: 'United Kingdom',
    phone: '+44 7907 085960'
  },
  {
    title: 'Personal Japan Address',
    code: 'JP',
    addressLine1: 'USE BUY FOR ME',
    addressLine2: '',
    city: 'USE BUY FOR ME',
    state: '',
    zipCode: '',
    country: 'Japan',
    phone: '+81 80 2140 4523'
  }
];

export const insurance = [
  {
    label: 'Yes, I would like to have insurance.',
    value: 1
  },
  {
    label: 'No, I prefer without insurance.',
    value: 0
  }
];

export const taxAndDuty = [
  {
    label: 'Arts & Craft, Books',
    value: 'Arts & Craft, Books'
  },
  {
    label: 'Audio Visual',
    value: 'Audio Visual'
  },
  {
    label: 'Baby Clothing',
    value: 'Baby Clothing'
  },
  {
    label: 'Beauty (Cosmetics Products & Related)',
    value: 'Beauty (Cosmetics Products & Related)'
  },
  {
    label: 'Car Parts',
    value: 'Car Parts'
  },
  {
    label: 'Clothes',
    value: 'Clothes'
  },
  {
    label: 'Electrical',
    value: 'Electrical'
  },
  {
    label: 'Electronics',
    value: 'Electronics'
  },
  {
    label: 'Fashion Accessories (e.g Handbags, Wallets, Purses)',
    value: 'Fashion Accessories (e.g Handbags, Wallets, Purses)'
  },
  {
    label: 'Food Supplements',
    value: 'Food Supplements'
  },
  {
    label: 'Helmets',
    value: 'Helmets'
  },
  {
    label: 'Home Appliance',
    value: 'Home Appliance'
  },
  {
    label: 'Kitchenware & Homeware',
    value: 'Kitchenware & Homeware'
  },
  {
    label: 'Laptop & Computers',
    value: 'Laptop & Computers'
  },
  {
    label: 'Motor Parts',
    value: 'Motor Parts'
  },
  {
    label: 'Product Containing Lithium (Battery) Based Item',
    value: 'Product Containing Lithium (Battery) Based Item'
  },
  {
    label: 'Sneakers & Footwear',
    value: 'Sneakers & Footwear'
  },
  {
    label: 'Sporting Goods (Bicycle, Soccer, Football)',
    value: 'Sporting Goods (Bicycle, Soccer, Football)'
  },
  {
    label: 'Toys & Collectibles',
    value: 'Toys & Collectibles'
  }
];

export const selfPickup = [
  {
    label: 'Self Pickup at Asia Pacific Regional Fulfillment Centre (Malaysia)',
    value: 2
  },
  {
    label: 'My own delivery address',
    value: 0
  }
];

export const paymentSchedules = [
  {
    label: 'Pay 100% (Full Payment)',
    value: 1
  },
  {
    label: 'Pay 50% (Half Payment)',
    value: 2
  }
];

export const addons = [
  {
    label: 'Photo Request',
    value: 0,
    description: '($5 USD for 1 Tracking Number)'
  },
  {
    label: 'Box Inspection',
    value: 1,
    description: '($10 USD for 1 Tracking Number)'
  },
  {
    label: 'Return of items',
    value: 2,
    description: '($50 USD for 1 Tracking Number)'
  },
  {
    label: 'Repacking / Shipping Box. Repack',
    value: 3,
    description:
      '(open box and combine all parcels): ($10 USD for 20 Tracking Numbers)'
  },
  {
    label:
      'Advancing packing (packing with air pillow / paper / cardboards so the boxes filled and sturdy)',
    value: 4,
    description: '($25 USD for 10 Tracking Numbers)'
  },
  {
    label: 'Tracking number request from USA website to USA warehouse',
    value: 5,
    description: '($10 USD for 1 Website)'
  },
  {
    label:
      'Delicate and extra care repack (bubble wrap each item if small; plates,glasses etc, bubble wrap each part if large; bicycle, guitar etc)',
    value: 6,
    description: '($50 USD for 1 Tracking Number)'
  }
];

export const countries = [
  { label: 'AFGHANISTAN', value: 'AF' },
  { label: 'ÅLAND ISLANDS', value: 'AX' },
  { label: 'ALBANIA', value: 'AL' },
  { label: 'ALGERIA', value: 'DZ' },
  { label: 'AMERICAN SAMOA', value: 'AS' },
  { label: 'ANDORRA', value: 'AD' },
  { label: 'ANGOLA', value: 'AO' },
  { label: 'ANGUILLA', value: 'AI' },
  { label: 'ANTARCTICA', value: 'AQ' },
  { label: 'ANTIGUA AND BARBUDA', value: 'AG' },
  { label: 'ARGENTINA', value: 'AR' },
  { label: 'ARMENIA', value: 'AM' },
  { label: 'ARUBA', value: 'AW' },
  { label: 'AUSTRALIA', value: 'AU' },
  { label: 'AUSTRIA', value: 'AT' },
  { label: 'AZERBAIJAN', value: 'AZ' },
  { label: 'BAHAMAS', value: 'BS' },
  { label: 'BAHRAIN', value: 'BH' },
  { label: 'BANGLADESH', value: 'BD' },
  { label: 'BARBADOS', value: 'BB' },
  { label: 'BELARUS', value: 'BY' },
  { label: 'BELGIUM', value: 'BE' },
  { label: 'BELIZE', value: 'BZ' },
  { label: 'BENIN', value: 'BJ' },
  { label: 'BERMUDA', value: 'BM' },
  { label: 'BHUTAN', value: 'BT' },
  { label: 'BOLIVIA, PLURINATIONAL STATE OF', value: 'BO' },
  { label: 'BOSNIA AND HERZEGOVINA', value: 'BA' },
  { label: 'BOTSWANA', value: 'BW' },
  { label: 'BOUVET ISLAND', value: 'BV' },
  { label: 'BRAZIL', value: 'BR' },
  { label: 'BRITISH INDIAN OCEAN TERRITORY', value: 'IO' },
  { label: 'BRUNEI DARUSSALAM', value: 'BN' },
  { label: 'BULGARIA', value: 'BG' },
  { label: 'BURKINA FASO', value: 'BF' },
  { label: 'BURUNDI', value: 'BI' },
  { label: 'CAMBODIA', value: 'KH' },
  { label: 'CAMEROON', value: 'CM' },
  { label: 'CANADA', value: 'CA' },
  { label: 'CAPE VERDE', value: 'CV' },
  { label: 'CAYMAN ISLANDS', value: 'KY' },
  { label: 'CENTRAL AFRICAN REPUBLIC', value: 'CF' },
  { label: 'CHAD', value: 'TD' },
  { label: 'CHILE', value: 'CL' },
  { label: 'CHINA', value: 'CN' },
  { label: 'CHRISTMAS ISLAND', value: 'CX' },
  { label: 'COCOS (KEELING) ISLANDS', value: 'CC' },
  { label: 'COLOMBIA', value: 'CO' },
  { label: 'COMOROS', value: 'KM' },
  { label: 'CONGO', value: 'CG' },
  { label: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', value: 'CD' },
  { label: 'COOK ISLANDS', value: 'CK' },
  { label: 'COSTA RICA', value: 'CR' },
  { label: "CÔTE D'IVOIRE", value: 'CI' },
  { label: 'CROATIA', value: 'HR' },
  { label: 'CUBA', value: 'CU' },
  { label: 'CYPRUS', value: 'CY' },
  { label: 'CZECH REPUBLIC', value: 'CZ' },
  { label: 'DENMARK', value: 'DK' },
  { label: 'DJIBOUTI', value: 'DJ' },
  { label: 'DOMINICA', value: 'DM' },
  { label: 'DOMINICAN REPUBLIC', value: 'DO' },
  { label: 'ECUADOR', value: 'EC' },
  { label: 'EGYPT', value: 'EG' },
  { label: 'EL SALVADOR', value: 'SV' },
  { label: 'EQUATORIAL GUINEA', value: 'GQ' },
  { label: 'ERITREA', value: 'ER' },
  { label: 'ESTONIA', value: 'EE' },
  { label: 'ETHIOPIA', value: 'ET' },
  { label: 'FALKLAND ISLANDS (MALVINAS)', value: 'FK' },
  { label: 'FAROE ISLANDS', value: 'FO' },
  { label: 'FIJI', value: 'FJ' },
  { label: 'FINLAND', value: 'FI' },
  { label: 'FRANCE', value: 'FR' },
  { label: 'FRENCH GUIANA', value: 'GF' },
  { label: 'FRENCH POLYNESIA', value: 'PF' },
  { label: 'FRENCH SOUTHERN TERRITORIES', value: 'TF' },
  { label: 'GABON', value: 'GA' },
  { label: 'GAMBIA', value: 'GM' },
  { label: 'GEORGIA', value: 'GE' },
  { label: 'GERMANY', value: 'DE' },
  { label: 'GHANA', value: 'GH' },
  { label: 'GIBRALTAR', value: 'GI' },
  { label: 'GREECE', value: 'GR' },
  { label: 'GREENLAND', value: 'GL' },
  { label: 'GRENADA', value: 'GD' },
  { label: 'GUADELOUPE', value: 'GP' },
  { label: 'GUAM', value: 'GU' },
  { label: 'GUATEMALA', value: 'GT' },
  { label: 'GUERNSEY', value: 'GG' },
  { label: 'GUINEA', value: 'GN' },
  { label: 'GUINEA-BISSAU', value: 'GW' },
  { label: 'GUYANA', value: 'GY' },
  { label: 'HAITI', value: 'HT' },
  { label: 'HEARD ISLAND AND MCDONALD ISLANDS', value: 'HM' },
  { label: 'HOLY SEE (VATICAN CITY STATE)', value: 'VA' },
  { label: 'HONDURAS', value: 'HN' },
  { label: 'HONG KONG', value: 'HK' },
  { label: 'HUNGARY', value: 'HU' },
  { label: 'ICELAND', value: 'IS' },
  { label: 'INDIA', value: 'IN' },
  { label: 'INDONESIA', value: 'ID' },
  { label: 'IRAN, ISLAMIC REPUBLIC OF', value: 'IR' },
  { label: 'IRAQ', value: 'IQ' },
  { label: 'IRELAND', value: 'IE' },
  { label: 'ISLE OF MAN', value: 'IM' },
  { label: 'ISRAEL', value: 'IL' },
  { label: 'ITALY', value: 'IT' },
  { label: 'JAMAICA', value: 'JM' },
  { label: 'JAPAN', value: 'JP' },
  { label: 'JERSEY', value: 'JE' },
  { label: 'JORDAN', value: 'JO' },
  { label: 'KAZAKHSTAN', value: 'KZ' },
  { label: 'KENYA', value: 'KE' },
  { label: 'KIRIBATI', value: 'KI' },
  { label: "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF", value: 'KP' },
  { label: 'KOREA, REPUBLIC OF', value: 'KR' },
  { label: 'KUWAIT', value: 'KW' },
  { label: 'KYRGYZSTAN', value: 'KG' },
  { label: "LAO PEOPLE'S DEMOCRATIC REPUBLIC", value: 'LA' },
  { label: 'LATVIA', value: 'LV' },
  { label: 'LEBANON', value: 'LB' },
  { label: 'LESOTHO', value: 'LS' },
  { label: 'LIBERIA', value: 'LR' },
  { label: 'LIBYAN ARAB JAMAHIRIYA', value: 'LY' },
  { label: 'LIECHTENSTEIN', value: 'LI' },
  { label: 'LITHUANIA', value: 'LT' },
  { label: 'LUXEMBOURG', value: 'LU' },
  { label: 'MACAO', value: 'MO' },
  { label: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', value: 'MK' },
  { label: 'MADAGASCAR', value: 'MG' },
  { label: 'MALAWI', value: 'MW' },
  { label: 'MALAYSIA', value: 'MY' },
  { label: 'MALDIVES', value: 'MV' },
  { label: 'MALI', value: 'ML' },
  { label: 'MALTA', value: 'MT' },
  { label: 'MARSHALL ISLANDS', value: 'MH' },
  { label: 'MARTINIQUE', value: 'MQ' },
  { label: 'MAURITANIA', value: 'MR' },
  { label: 'MAURITIUS', value: 'MU' },
  { label: 'MAYOTTE', value: 'YT' },
  { label: 'MEXICO', value: 'MX' },
  { label: 'MICRONESIA, FEDERATED STATES OF', value: 'FM' },
  { label: 'MOLDOVA, REPUBLIC OF', value: 'MD' },
  { label: 'MONACO', value: 'MC' },
  { label: 'MONGOLIA', value: 'MN' },
  { label: 'MONTENEGRO', value: 'ME' },
  { label: 'MONTSERRAT', value: 'MS' },
  { label: 'MOROCCO', value: 'MA' },
  { label: 'MOZAMBIQUE', value: 'MZ' },
  { label: 'MYANMAR', value: 'MM' },
  { label: 'NAMIBIA', value: 'NA' },
  { label: 'NAURU', value: 'NR' },
  { label: 'NEPAL', value: 'NP' },
  { label: 'NETHERLANDS', value: 'NL' },
  { label: 'NETHERLANDS ANTILLES', value: 'AN' },
  { label: 'NEW CALEDONIA', value: 'NC' },
  { label: 'NEW ZEALAND', value: 'NZ' },
  { label: 'NICARAGUA', value: 'NI' },
  { label: 'NIGER', value: 'NE' },
  { label: 'NIGERIA', value: 'NG' },
  { label: 'NIUE', value: 'NU' },
  { label: 'NORFOLK ISLAND', value: 'NF' },
  { label: 'NORTHERN MARIANA ISLANDS', value: 'MP' },
  { label: 'NORWAY', value: 'NO' },
  { label: 'OMAN', value: 'OM' },
  { label: 'PAKISTAN', value: 'PK' },
  { label: 'PALAU', value: 'PW' },
  { label: 'PALESTINIAN TERRITORY, OCCUPIED', value: 'PS' },
  { label: 'PANAMA', value: 'PA' },
  { label: 'PAPUA NEW GUINEA', value: 'PG' },
  { label: 'PARAGUAY', value: 'PY' },
  { label: 'PERU', value: 'PE' },
  { label: 'PHILIPPINES', value: 'PH' },
  { label: 'PITCAIRN', value: 'PN' },
  { label: 'POLAND', value: 'PL' },
  { label: 'PORTUGAL', value: 'PT' },
  { label: 'PUERTO RICO', value: 'PR' },
  { label: 'QATAR', value: 'QA' },
  { label: 'RÉUNION', value: 'RE' },
  { label: 'ROMANIA', value: 'RO' },
  { label: 'RUSSIAN FEDERATION', value: 'RU' },
  { label: 'RWANDA', value: 'RW' },
  { label: 'SAINT BARTHÉLEMY', value: 'BL' },
  { label: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA', value: 'SH' },
  { label: 'SAINT KITTS AND NEVIS', value: 'KN' },
  { label: 'SAINT LUCIA', value: 'LC' },
  { label: 'SAINT MARTIN', value: 'MF' },
  { label: 'SAINT PIERRE AND MIQUELON', value: 'PM' },
  { label: 'SAINT VINCENT AND THE GRENADINES', value: 'VC' },
  { label: 'SAMOA', value: 'WS' },
  { label: 'SAN MARINO', value: 'SM' },
  { label: 'SAO TOME AND PRINCIPE', value: 'ST' },
  { label: 'SAUDI ARABIA', value: 'SA' },
  { label: 'SENEGAL', value: 'SN' },
  { label: 'SERBIA', value: 'RS' },
  { label: 'SEYCHELLES', value: 'SC' },
  { label: 'SIERRA LEONE', value: 'SL' },
  { label: 'SINGAPORE', value: 'SG' },
  { label: 'SLOVAKIA', value: 'SK' },
  { label: 'SLOVENIA', value: 'SI' },
  { label: 'SOLOMON ISLANDS', value: 'SB' },
  { label: 'SOMALIA', value: 'SO' },
  { label: 'SOUTH AFRICA', value: 'ZA' },
  { label: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', value: 'GS' },
  { label: 'SPAIN', value: 'ES' },
  { label: 'SRI LANKA', value: 'LK' },
  { label: 'SUDAN', value: 'SD' },
  { label: 'SURINAME', value: 'SR' },
  { label: 'SVALBARD AND JAN MAYEN', value: 'SJ' },
  { label: 'SWAZILAND', value: 'SZ' },
  { label: 'SWEDEN', value: 'SE' },
  { label: 'SWITZERLAND', value: 'CH' },
  { label: 'SYRIAN ARAB REPUBLIC', value: 'SY' },
  { label: 'TAIWAN, PROVINCE OF CHINA', value: 'TW' },
  { label: 'TAJIKISTAN', value: 'TJ' },
  { label: 'TANZANIA, UNITED REPUBLIC OF', value: 'TZ' },
  { label: 'THAILAND', value: 'TH' },
  { label: 'TIMOR-LESTE', value: 'TL' },
  { label: 'TOGO', value: 'TG' },
  { label: 'TOKELAU', value: 'TK' },
  { label: 'TONGA', value: 'TO' },
  { label: 'TRINIDAD AND TOBAGO', value: 'TT' },
  { label: 'TUNISIA', value: 'TN' },
  { label: 'TURKEY', value: 'TR' },
  { label: 'TURKMENISTAN', value: 'TM' },
  { label: 'TURKS AND CAICOS ISLANDS', value: 'TC' },
  { label: 'TUVALU', value: 'TV' },
  { label: 'UGANDA', value: 'UG' },
  { label: 'UKRAINE', value: 'UA' },
  { label: 'UNITED ARAB EMIRATES', value: 'AE' },
  { label: 'UNITED KINGDOM', value: 'GB' },
  { label: 'UNITED STATES', value: 'US' },
  { label: 'UNITED STATES MINOR OUTLYING ISLANDS', value: 'UM' },
  { label: 'URUGUAY', value: 'UY' },
  { label: 'UZBEKISTAN', value: 'UZ' },
  { label: 'VANUATU', value: 'VU' },
  { label: 'VENEZUELA, BOLIVARIAN REPUBLIC OF', value: 'VE' },
  { label: 'VIET NAM', value: 'VN' },
  { label: 'VIRGIN ISLANDS, BRITISH', value: 'VG' },
  { label: 'VIRGIN ISLANDS, U.S.', value: 'VI' },
  { label: 'WALLIS AND FUTUNA', value: 'WF' },
  { label: 'WESTERN SAHARA', value: 'EH' },
  { label: 'YEMEN', value: 'YE' },
  { label: 'ZAMBIA', value: 'ZM' },
  { label: 'ZIMBABWE', value: 'ZW' }
];

export const countryCodes = [
  {
    label: 'MALAYSIA',
    value: '+60',
    code: 'MY'
  },
  {
    label: 'AFGHANISTAN',
    value: '+93',
    code: 'AF'
  },
  {
    label: 'ALAND ISLANDS',
    value: '+358',
    code: 'AX'
  },
  {
    label: 'ALBANIA',
    value: '+355',
    code: 'AL'
  },
  {
    label: 'ALGERIA',
    value: '+213',
    code: 'DZ'
  },
  {
    label: 'AMERICANSAMOA',
    value: '+1684',
    code: 'AS'
  },
  {
    label: 'ANDORRA',
    value: '+376',
    code: 'AD'
  },
  {
    label: 'ANGOLA',
    value: '+244',
    code: 'AO'
  },
  {
    label: 'ANGUILLA',
    value: '+1264',
    code: 'AI'
  },
  {
    label: 'ANTARCTICA',
    value: '+672',
    code: 'AQ'
  },
  {
    label: 'ANTIGUA AND BARBUDA',
    value: '+1268',
    code: 'AG'
  },
  {
    label: 'ARGENTINA',
    value: '+54',
    code: 'AR'
  },
  {
    label: 'ARMENIA',
    value: '+374',
    code: 'AM'
  },
  {
    label: 'ARUBA',
    value: '+297',
    code: 'AW'
  },
  {
    label: 'AUSTRALIA',
    value: '+61',
    code: 'AU'
  },
  {
    label: 'AUSTRIA',
    value: '+43',
    code: 'AT'
  },
  {
    label: 'AZERBAIJAN',
    value: '+994',
    code: 'AZ'
  },
  {
    label: 'BAHAMAS',
    value: '+1242',
    code: 'BS'
  },
  {
    label: 'BAHRAIN',
    value: '+973',
    code: 'BH'
  },
  {
    label: 'BANGLADESH',
    value: '+880',
    code: 'BD'
  },
  {
    label: 'BARBADOS',
    value: '+1246',
    code: 'BB'
  },
  {
    label: 'BELARUS',
    value: '+375',
    code: 'BY'
  },
  {
    label: 'BELGIUM',
    value: '+32',
    code: 'BE'
  },
  {
    label: 'BELIZE',
    value: '+501',
    code: 'BZ'
  },
  {
    label: 'BENIN',
    value: '+229',
    code: 'BJ'
  },
  {
    label: 'BERMUDA',
    value: '+1441',
    code: 'BM'
  },
  {
    label: 'BHUTAN',
    value: '+975',
    code: 'BT'
  },
  {
    label: 'BOLIVIA, PLURINATIONAL STATE OF',
    value: '+591',
    code: 'BO'
  },
  {
    label: 'BOSNIA AND HERZEGOVINA',
    value: '+387',
    code: 'BA'
  },
  {
    label: 'BOTSWANA',
    value: '+267',
    code: 'BW'
  },
  {
    label: 'BRAZIL',
    value: '+55',
    code: 'BR'
  },
  {
    label: 'BRITISH INDIAN OCEAN TERRITORY',
    value: '+246',
    code: 'IO'
  },
  {
    label: 'BRUNEI DARUSSALAM',
    value: '+673',
    code: 'BN'
  },
  {
    label: 'BULGARIA',
    value: '+359',
    code: 'BG'
  },
  {
    label: 'BURKINA FASO',
    value: '+226',
    code: 'BF'
  },
  {
    label: 'BURUNDI',
    value: '+257',
    code: 'BI'
  },
  {
    label: 'CAMBODIA',
    value: '+855',
    code: 'KH'
  },
  {
    label: 'CAMEROON',
    value: '+237',
    code: 'CM'
  },
  {
    label: 'CANADA',
    value: '+1',
    code: 'CA'
  },
  {
    label: 'CAPE VERDE',
    value: '+238',
    code: 'CV'
  },
  {
    label: 'CAYMAN ISLANDS',
    value: '+ 345',
    code: 'KY'
  },
  {
    label: 'CENTRAL AFRICAN REPUBLIC',
    value: '+236',
    code: 'CF'
  },
  {
    label: 'CHAD',
    value: '+235',
    code: 'TD'
  },
  {
    label: 'CHILE',
    value: '+56',
    code: 'CL'
  },
  {
    label: 'CHINA',
    value: '+86',
    code: 'CN'
  },
  {
    label: 'CHRISTMAS ISLAND',
    value: '+61',
    code: 'CX'
  },
  {
    label: 'COCOS (KEELING) ISLANDS',
    value: '+61',
    code: 'CC'
  },
  {
    label: 'COLOMBIA',
    value: '+57',
    code: 'CO'
  },
  {
    label: 'COMOROS',
    value: '+269',
    code: 'KM'
  },
  {
    label: 'CONGO',
    value: '+242',
    code: 'CG'
  },
  {
    label: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE CONGO',
    value: '+243',
    code: 'CD'
  },
  {
    label: 'COOK ISLANDS',
    value: '+682',
    code: 'CK'
  },
  {
    label: 'COSTA RICA',
    value: '+506',
    code: 'CR'
  },
  {
    label: "COTE D'IVOIRE",
    value: '+225',
    code: 'CI'
  },
  {
    label: 'CROATIA',
    value: '+385',
    code: 'HR'
  },
  {
    label: 'CUBA',
    value: '+53',
    code: 'CU'
  },
  {
    label: 'CYPRUS',
    value: '+357',
    code: 'CY'
  },
  {
    label: 'CZECH REPUBLIC',
    value: '+420',
    code: 'CZ'
  },
  {
    label: 'DENMARK',
    value: '+45',
    code: 'DK'
  },
  {
    label: 'DJIBOUTI',
    value: '+253',
    code: 'DJ'
  },
  {
    label: 'DOMINICA',
    value: '+1767',
    code: 'DM'
  },
  {
    label: 'DOMINICAN REPUBLIC',
    value: '+1849',
    code: 'DO'
  },
  {
    label: 'ECUADOR',
    value: '+593',
    code: 'EC'
  },
  {
    label: 'EGYPT',
    value: '+20',
    code: 'EG'
  },
  {
    label: 'EL SALVADOR',
    value: '+503',
    code: 'SV'
  },
  {
    label: 'EQUATORIAL GUINEA',
    value: '+240',
    code: 'GQ'
  },
  {
    label: 'ERITREA',
    value: '+291',
    code: 'ER'
  },
  {
    label: 'ESTONIA',
    value: '+372',
    code: 'EE'
  },
  {
    label: 'ETHIOPIA',
    value: '+251',
    code: 'ET'
  },
  {
    label: 'FALKLAND ISLANDS (MALVINAS)',
    value: '+500',
    code: 'FK'
  },
  {
    label: 'FAROE ISLANDS',
    value: '+298',
    code: 'FO'
  },
  {
    label: 'FIJI',
    value: '+679',
    code: 'FJ'
  },
  {
    label: 'FINLAND',
    value: '+358',
    code: 'FI'
  },
  {
    label: 'FRANCE',
    value: '+33',
    code: 'FR'
  },
  {
    label: 'FRENCH GUIANA',
    value: '+594',
    code: 'GF'
  },
  {
    label: 'FRENCH POLYNESIA',
    value: '+689',
    code: 'PF'
  },
  {
    label: 'GABON',
    value: '+241',
    code: 'GA'
  },
  {
    label: 'GAMBIA',
    value: '+220',
    code: 'GM'
  },
  {
    label: 'GEORGIA',
    value: '+995',
    code: 'GE'
  },
  {
    label: 'GERMANY',
    value: '+49',
    code: 'DE'
  },
  {
    label: 'GHANA',
    value: '+233',
    code: 'GH'
  },
  {
    label: 'GIBRALTAR',
    value: '+350',
    code: 'GI'
  },
  {
    label: 'GREECE',
    value: '+30',
    code: 'GR'
  },
  {
    label: 'GREENLAND',
    value: '+299',
    code: 'GL'
  },
  {
    label: 'GRENADA',
    value: '+1473',
    code: 'GD'
  },
  {
    label: 'GUADELOUPE',
    value: '+590',
    code: 'GP'
  },
  {
    label: 'GUAM',
    value: '+1671',
    code: 'GU'
  },
  {
    label: 'GUATEMALA',
    value: '+502',
    code: 'GT'
  },
  {
    label: 'GUERNSEY',
    value: '+44',
    code: 'GG'
  },
  {
    label: 'GUINEA',
    value: '+224',
    code: 'GN'
  },
  {
    label: 'GUINEA-BISSAU',
    value: '+245',
    code: 'GW'
  },
  {
    label: 'GUYANA',
    value: '+595',
    code: 'GY'
  },
  {
    label: 'HAITI',
    value: '+509',
    code: 'HT'
  },
  {
    label: 'HOLY SEE (VATICAN CITY STATE)',
    value: '+379',
    code: 'VA'
  },
  {
    label: 'HONDURAS',
    value: '+504',
    code: 'HN'
  },
  {
    label: 'HONG KONG',
    value: '+852',
    code: 'HK'
  },
  {
    label: 'HUNGARY',
    value: '+36',
    code: 'HU'
  },
  {
    label: 'ICELAND',
    value: '+354',
    code: 'IS'
  },
  {
    label: 'INDIA',
    value: '+91',
    code: 'IN'
  },
  {
    label: 'INDONESIA',
    value: '+62',
    code: 'ID'
  },
  {
    label: 'IRAN, ISLAMIC REPUBLIC OF PERSIAN GULF',
    value: '+98',
    code: 'IR'
  },
  {
    label: 'IRAQ',
    value: '+964',
    code: 'IQ'
  },
  {
    label: 'IRELAND',
    value: '+353',
    code: 'IE'
  },
  {
    label: 'ISLE OF MAN',
    value: '+44',
    code: 'IM'
  },
  {
    label: 'ISRAEL',
    value: '+972',
    code: 'IL'
  },
  {
    label: 'ITALY',
    value: '+39',
    code: 'IT'
  },
  {
    label: 'JAMAICA',
    value: '+1876',
    code: 'JM'
  },
  {
    label: 'JAPAN',
    value: '+81',
    code: 'JP'
  },
  {
    label: 'JERSEY',
    value: '+44',
    code: 'JE'
  },
  {
    label: 'JORDAN',
    value: '+962',
    code: 'JO'
  },
  {
    label: 'KAZAKHSTAN',
    value: '+77',
    code: 'KZ'
  },
  {
    label: 'KENYA',
    value: '+254',
    code: 'KE'
  },
  {
    label: 'KIRIBATI',
    value: '+686',
    code: 'KI'
  },
  {
    label: "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",
    value: '+850',
    code: 'KP'
  },
  {
    label: 'KOREA, REPUBLIC OF SOUTH KOREA',
    value: '+82',
    code: 'KR'
  },
  {
    label: 'KUWAIT',
    value: '+965',
    code: 'KW'
  },
  {
    label: 'KYRGYZSTAN',
    value: '+996',
    code: 'KG'
  },
  {
    label: 'LAOS',
    value: '+856',
    code: 'LA'
  },
  {
    label: 'LATVIA',
    value: '+371',
    code: 'LV'
  },
  {
    label: 'LEBANON',
    value: '+961',
    code: 'LB'
  },
  {
    label: 'LESOTHO',
    value: '+266',
    code: 'LS'
  },
  {
    label: 'LIBERIA',
    value: '+231',
    code: 'LR'
  },
  {
    label: 'LIBYAN ARAB JAMAHIRIYA',
    value: '+218',
    code: 'LY'
  },
  {
    label: 'LIECHTENSTEIN',
    value: '+423',
    code: 'LI'
  },
  {
    label: 'LITHUANIA',
    value: '+370',
    code: 'LT'
  },
  {
    label: 'LUXEMBOURG',
    value: '+352',
    code: 'LU'
  },
  {
    label: 'MACAO',
    value: '+853',
    code: 'MO'
  },
  {
    label: 'MACEDONIA',
    value: '+389',
    code: 'MK'
  },
  {
    label: 'MADAGASCAR',
    value: '+261',
    code: 'MG'
  },
  {
    label: 'MALAWI',
    value: '+265',
    code: 'MW'
  },
  {
    label: 'MALDIVES',
    value: '+960',
    code: 'MV'
  },
  {
    label: 'MALI',
    value: '+223',
    code: 'ML'
  },
  {
    label: 'MALTA',
    value: '+356',
    code: 'MT'
  },
  {
    label: 'MARSHALL ISLANDS',
    value: '+692',
    code: 'MH'
  },
  {
    label: 'MARTINIQUE',
    value: '+596',
    code: 'MQ'
  },
  {
    label: 'MAURITANIA',
    value: '+222',
    code: 'MR'
  },
  {
    label: 'MAURITIUS',
    value: '+230',
    code: 'MU'
  },
  {
    label: 'MAYOTTE',
    value: '+262',
    code: 'YT'
  },
  {
    label: 'MEXICO',
    value: '+52',
    code: 'MX'
  },
  {
    label: 'MICRONESIA, FEDERATED STATES OF MICRONESIA',
    value: '+691',
    code: 'FM'
  },
  {
    label: 'MOLDOVA',
    value: '+373',
    code: 'MD'
  },
  {
    label: 'MONACO',
    value: '+377',
    code: 'MC'
  },
  {
    label: 'MONGOLIA',
    value: '+976',
    code: 'MN'
  },
  {
    label: 'MONTENEGRO',
    value: '+382',
    code: 'ME'
  },
  {
    label: 'MONTSERRAT',
    value: '+1664',
    code: 'MS'
  },
  {
    label: 'MOROCCO',
    value: '+212',
    code: 'MA'
  },
  {
    label: 'MOZAMBIQUE',
    value: '+258',
    code: 'MZ'
  },
  {
    label: 'MYANMAR',
    value: '+95',
    code: 'MM'
  },
  {
    label: 'NAMIBIA',
    value: '+264',
    code: 'NA'
  },
  {
    label: 'NAURU',
    value: '+674',
    code: 'NR'
  },
  {
    label: 'NEPAL',
    value: '+977',
    code: 'NP'
  },
  {
    label: 'NETHERLANDS',
    value: '+31',
    code: 'NL'
  },
  {
    label: 'NETHERLANDS ANTILLES',
    value: '+599',
    code: 'AN'
  },
  {
    label: 'NEW CALEDONIA',
    value: '+687',
    code: 'NC'
  },
  {
    label: 'NEW ZEALAND',
    value: '+64',
    code: 'NZ'
  },
  {
    label: 'NICARAGUA',
    value: '+505',
    code: 'NI'
  },
  {
    label: 'NIGER',
    value: '+227',
    code: 'NE'
  },
  {
    label: 'NIGERIA',
    value: '+234',
    code: 'NG'
  },
  {
    label: 'NIUE',
    value: '+683',
    code: 'NU'
  },
  {
    label: 'NORFOLK ISLAND',
    value: '+672',
    code: 'NF'
  },
  {
    label: 'NORTHERN MARIANA ISLANDS',
    value: '+1670',
    code: 'MP'
  },
  {
    label: 'NORWAY',
    value: '+47',
    code: 'NO'
  },
  {
    label: 'OMAN',
    value: '+968',
    code: 'OM'
  },
  {
    label: 'PAKISTAN',
    value: '+92',
    code: 'PK'
  },
  {
    label: 'PALAU',
    value: '+680',
    code: 'PW'
  },
  {
    label: 'PALESTINIAN TERRITORY, OCCUPIED',
    value: '+970',
    code: 'PS'
  },
  {
    label: 'PANAMA',
    value: '+507',
    code: 'PA'
  },
  {
    label: 'PAPUA NEW GUINEA',
    value: '+675',
    code: 'PG'
  },
  {
    label: 'PARAGUAY',
    value: '+595',
    code: 'PY'
  },
  {
    label: 'PERU',
    value: '+51',
    code: 'PE'
  },
  {
    label: 'PHILIPPINES',
    value: '+63',
    code: 'PH'
  },
  {
    label: 'PITCAIRN',
    value: '+872',
    code: 'PN'
  },
  {
    label: 'POLAND',
    value: '+48',
    code: 'PL'
  },
  {
    label: 'PORTUGAL',
    value: '+351',
    code: 'PT'
  },
  {
    label: 'PUERTO RICO',
    value: '+1939',
    code: 'PR'
  },
  {
    label: 'QATAR',
    value: '+974',
    code: 'QA'
  },
  {
    label: 'ROMANIA',
    value: '+40',
    code: 'RO'
  },
  {
    label: 'RUSSIA',
    value: '+7',
    code: 'RU'
  },
  {
    label: 'RWANDA',
    value: '+250',
    code: 'RW'
  },
  {
    label: 'REUNION',
    value: '+262',
    code: 'RE'
  },
  {
    label: 'SAINT BARTHELEMY',
    value: '+590',
    code: 'BL'
  },
  {
    label: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA',
    value: '+290',
    code: 'SH'
  },
  {
    label: 'SAINT KITTS AND NEVIS',
    value: '+1869',
    code: 'KN'
  },
  {
    label: 'SAINT LUCIA',
    value: '+1758',
    code: 'LC'
  },
  {
    label: 'SAINT MARTIN',
    value: '+590',
    code: 'MF'
  },
  {
    label: 'SAINT PIERRE AND MIQUELON',
    value: '+508',
    code: 'PM'
  },
  {
    label: 'SAINT VINCENT AND THE GRENADINES',
    value: '+1784',
    code: 'VC'
  },
  {
    label: 'SAMOA',
    value: '+685',
    code: 'WS'
  },
  {
    label: 'SAN MARINO',
    value: '+378',
    code: 'SM'
  },
  {
    label: 'SAO TOME AND PRINCIPE',
    value: '+239',
    code: 'ST'
  },
  {
    label: 'SAUDI ARABIA',
    value: '+966',
    code: 'SA'
  },
  {
    label: 'SENEGAL',
    value: '+221',
    code: 'SN'
  },
  {
    label: 'SERBIA',
    value: '+381',
    code: 'RS'
  },
  {
    label: 'SEYCHELLES',
    value: '+248',
    code: 'SC'
  },
  {
    label: 'SIERRA LEONE',
    value: '+232',
    code: 'SL'
  },
  {
    label: 'SINGAPORE',
    value: '+65',
    code: 'SG'
  },
  {
    label: 'SLOVAKIA',
    value: '+421',
    code: 'SK'
  },
  {
    label: 'SLOVENIA',
    value: '+386',
    code: 'SI'
  },
  {
    label: 'SOLOMON ISLANDS',
    value: '+677',
    code: 'SB'
  },
  {
    label: 'SOMALIA',
    value: '+252',
    code: 'SO'
  },
  {
    label: 'SOUTH AFRICA',
    value: '+27',
    code: 'ZA'
  },
  {
    label: 'SOUTH SUDAN',
    value: '+211',
    code: 'SS'
  },
  {
    label: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS',
    value: '+500',
    code: 'GS'
  },
  {
    label: 'SPAIN',
    value: '+34',
    code: 'ES'
  },
  {
    label: 'SRI LANKA',
    value: '+94',
    code: 'LK'
  },
  {
    label: 'SUDAN',
    value: '+249',
    code: 'SD'
  },
  {
    label: 'SURINAME',
    value: '+597',
    code: 'SR'
  },
  {
    label: 'SVALBARD AND JAN MAYEN',
    value: '+47',
    code: 'SJ'
  },
  {
    label: 'SWAZILAND',
    value: '+268',
    code: 'SZ'
  },
  {
    label: 'SWEDEN',
    value: '+46',
    code: 'SE'
  },
  {
    label: 'SWITZERLAND',
    value: '+41',
    code: 'CH'
  },
  {
    label: 'SYRIAN ARAB REPUBLIC',
    value: '+963',
    code: 'SY'
  },
  {
    label: 'TAIWAN',
    value: '+886',
    code: 'TW'
  },
  {
    label: 'TAJIKISTAN',
    value: '+992',
    code: 'TJ'
  },
  {
    label: 'TANZANIA, UNITED REPUBLIC OF TANZANIA',
    value: '+255',
    code: 'TZ'
  },
  {
    label: 'THAILAND',
    value: '+66',
    code: 'TH'
  },
  {
    label: 'TIMOR-LESTE',
    value: '+670',
    code: 'TL'
  },
  {
    label: 'TOGO',
    value: '+228',
    code: 'TG'
  },
  {
    label: 'TOKELAU',
    value: '+690',
    code: 'TK'
  },
  {
    label: 'TONGA',
    value: '+676',
    code: 'TO'
  },
  {
    label: 'TRINIDAD AND TOBAGO',
    value: '+1868',
    code: 'TT'
  },
  {
    label: 'TUNISIA',
    value: '+216',
    code: 'TN'
  },
  {
    label: 'TURKEY',
    value: '+90',
    code: 'TR'
  },
  {
    label: 'TURKMENISTAN',
    value: '+993',
    code: 'TM'
  },
  {
    label: 'TURKS AND CAICOS ISLANDS',
    value: '+1649',
    code: 'TC'
  },
  {
    label: 'TUVALU',
    value: '+688',
    code: 'TV'
  },
  {
    label: 'UGANDA',
    value: '+256',
    code: 'UG'
  },
  {
    label: 'UKRAINE',
    value: '+380',
    code: 'UA'
  },
  {
    label: 'UNITED ARAB EMIRATES',
    value: '+971',
    code: 'AE'
  },
  {
    label: 'UNITED KINGDOM',
    value: '+44',
    code: 'GB'
  },
  {
    label: 'UNITED STATES',
    value: '+1',
    code: 'US'
  },
  {
    label: 'URUGUAY',
    value: '+598',
    code: 'UY'
  },
  {
    label: 'UZBEKISTAN',
    value: '+998',
    code: 'UZ'
  },
  {
    label: 'VANUATU',
    value: '+678',
    code: 'VU'
  },
  {
    label: 'VENEZUELA, BOLIVARIAN REPUBLIC OF VENEZUELA',
    value: '+58',
    code: 'VE'
  },
  {
    label: 'VIETNAM',
    value: '+84',
    code: 'VN'
  },
  {
    label: 'VIRGIN ISLANDS, BRITISH',
    value: '+1284',
    code: 'VG'
  },
  {
    label: 'VIRGIN ISLANDS, U.S.',
    value: '+1340',
    code: 'VI'
  },
  {
    label: 'WALLIS AND FUTUNA',
    value: '+681',
    code: 'WF'
  },
  {
    label: 'YEMEN',
    value: '+967',
    code: 'YE'
  },
  {
    label: 'ZAMBIA',
    value: '+260',
    code: 'ZM'
  },
  {
    label: 'ZIMBABWE',
    value: '+263',
    code: 'ZW'
  }
];

export const countryList = [
  {
    id: 17,
    name: 'Malaysia',
    code: 'MY',
    language: 'Malay',
    currency_code: 'MYR',
    currency_rate: '4.74',
    currency_cents: 100,
    sea_freight: '[9, 30, 19]',
    tel_code: '60',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 187,
    name: 'Afghanistan',
    code: 'AF',
    language: null,
    currency_code: 'AFN',
    currency_rate: '79.37',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '93',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 155,
    name: 'Albania',
    code: 'AL',
    language: null,
    currency_code: 'ALL',
    currency_rate: '100.73',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '355',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 94,
    name: 'Algeria',
    code: 'DZ',
    language: null,
    currency_code: 'DZD',
    currency_rate: '138.68',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '213',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 156,
    name: 'Andorra',
    code: 'AD',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '376',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 95,
    name: 'Angola',
    code: 'AO',
    language: null,
    currency_code: 'AOA',
    currency_rate: '839.31',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '244',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 64,
    name: 'Antigua and Barbuda',
    code: 'AG',
    language: null,
    currency_code: 'XCD',
    currency_rate: '2.73',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1268',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 51,
    name: 'Argentina',
    code: 'AR',
    language: null,
    currency_code: 'ARS',
    currency_rate: '352.27',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '54',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 168,
    name: 'Armenia',
    code: 'AM',
    language: null,
    currency_code: 'AMD',
    currency_rate: '386.74',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '374',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 3,
    name: 'Australia',
    code: 'AU',
    language: null,
    currency_code: 'AUD',
    currency_rate: '1.57',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '61',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 2,
    name: 'Austria',
    code: 'AT',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '43',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 169,
    name: 'Azerbaijan',
    code: 'AZ',
    language: null,
    currency_code: 'AZN',
    currency_rate: '1.72',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '994',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 66,
    name: 'Bahamas',
    code: 'BS',
    language: null,
    currency_code: 'BSD',
    currency_rate: '1.01',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1242',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 170,
    name: 'Bahrain',
    code: 'BH',
    language: null,
    currency_code: 'BHD',
    currency_rate: '0.38',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '973',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 188,
    name: 'Bangladesh',
    code: 'BD',
    language: null,
    currency_code: 'BDT',
    currency_rate: '110.45',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '880',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 67,
    name: 'Barbados',
    code: 'BB',
    language: null,
    currency_code: 'BBD',
    currency_rate: '2.03',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1246',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 57,
    name: 'Belarus',
    code: 'BY',
    language: null,
    currency_code: 'BYN',
    currency_rate: '2.54',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '375',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 5,
    name: 'Belgium',
    code: 'BE',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '32',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 68,
    name: 'Belize',
    code: 'BZ',
    language: null,
    currency_code: 'BZD',
    currency_rate: '2.03',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '501',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 96,
    name: 'Benin',
    code: 'BJ',
    language: null,
    currency_code: 'XOF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '229',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 189,
    name: 'Bhutan',
    code: 'BT',
    language: null,
    currency_code: 'BTN',
    currency_rate: '83.44',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '975',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 177,
    name: 'Bolivia',
    code: 'BO',
    language: null,
    currency_code: 'BOB',
    currency_rate: '6.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '591',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 157,
    name: 'Bosnia and Herzegovina',
    code: 'BA',
    language: null,
    currency_code: 'BAM',
    currency_rate: '1.85',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '387',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 97,
    name: 'Botswana',
    code: 'BW',
    language: null,
    currency_code: 'BWP',
    currency_rate: '13.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '267',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 4,
    name: 'Brazil',
    code: 'BR',
    language: null,
    currency_code: 'BRL',
    currency_rate: '4.97',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '55',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 199,
    name: 'Brunei',
    code: 'BN',
    language: null,
    currency_code: 'BND',
    currency_rate: '1.37',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '673',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 47,
    name: 'Bulgaria',
    code: 'BG',
    language: null,
    currency_code: 'BGN',
    currency_rate: '1.85',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '359',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 99,
    name: 'Burkina faso',
    code: 'BF',
    language: null,
    currency_code: 'XOF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '226',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 100,
    name: 'Burundi',
    code: 'BI',
    language: null,
    currency_code: 'BIF',
    currency_rate: '2852.15',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '257',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 58,
    name: 'Cambodia',
    code: 'KH',
    language: null,
    currency_code: 'KHR',
    currency_rate: '4140.87',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '855',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 101,
    name: 'Cameroon',
    code: 'CM',
    language: null,
    currency_code: 'XAF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '237',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 15,
    name: 'Canada',
    code: 'CA',
    language: null,
    currency_code: 'CAD',
    currency_rate: '1.36',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 102,
    name: 'Cape verde',
    code: 'CV',
    language: null,
    currency_code: 'CVE',
    currency_rate: '104.34',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '238',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 103,
    name: 'Central African Republic',
    code: 'CF',
    language: null,
    currency_code: 'XAF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '236',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 104,
    name: 'Chad',
    code: 'TD',
    language: null,
    currency_code: 'XAF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '235',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 50,
    name: 'Chile',
    code: 'CL',
    language: null,
    currency_code: 'CLP',
    currency_rate: '894.14',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '56',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 230,
    name: 'China',
    code: 'CN',
    language: null,
    currency_code: 'CNY',
    currency_rate: '7.37',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '86',
    created_at: '2019-07-18 05:19:09',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 178,
    name: 'Colombia',
    code: 'CO',
    language: null,
    currency_code: 'COP',
    currency_rate: '3978.30',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '57',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 105,
    name: 'Comoros',
    code: 'KM',
    language: null,
    currency_code: 'KMF',
    currency_rate: '466.17',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '269',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 72,
    name: 'Costa Rica',
    code: 'CR',
    language: null,
    currency_code: 'CRC',
    currency_rate: '539.37',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '506',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 48,
    name: 'Croatia',
    code: 'HR',
    language: null,
    currency_code: 'HRK',
    currency_rate: '7.08',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '385',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 49,
    name: 'Cyprus',
    code: 'CY',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '357',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 42,
    name: 'Czech republic',
    code: 'CZ',
    language: null,
    currency_code: 'CZK',
    currency_rate: '23.15',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '420',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 7,
    name: 'Denmark',
    code: 'DK',
    language: null,
    currency_code: 'DKK',
    currency_rate: '7.07',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '45',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 107,
    name: 'Djibouti',
    code: 'DJ',
    language: null,
    currency_code: 'DJF',
    currency_rate: '179.19',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '253',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 74,
    name: 'Dominica',
    code: 'DM',
    language: null,
    currency_code: 'XCD',
    currency_rate: '2.73',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1767',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 75,
    name: 'Dominican Republic',
    code: 'DO',
    language: null,
    currency_code: 'DOP',
    currency_rate: '57.12',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1809',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 179,
    name: 'Ecuador',
    code: 'EC',
    language: null,
    currency_code: 'USD',
    currency_rate: '1.01',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '593',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2022-05-06 08:05:12'
  },
  {
    id: 60,
    name: 'Egypt',
    code: 'EG',
    language: null,
    currency_code: 'EGP',
    currency_rate: '31.10',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '20',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 76,
    name: 'El Salvador',
    code: 'SV',
    language: null,
    currency_code: 'USD',
    currency_rate: '1.01',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '503',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2022-05-06 08:05:12'
  },
  {
    id: 108,
    name: 'Equatorial Guinea',
    code: 'GQ',
    language: null,
    currency_code: 'XAF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '240',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 56,
    name: 'Estonia',
    code: 'EE',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '372',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 109,
    name: 'Ethiopia',
    code: 'ET',
    language: null,
    currency_code: 'ETB',
    currency_rate: '55.66',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '251',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 142,
    name: 'Fiji',
    code: 'FJ',
    language: null,
    currency_code: 'FJD',
    currency_rate: '2.29',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '679',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 11,
    name: 'Finland',
    code: 'FI',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '358',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 10,
    name: 'France',
    code: 'FR',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '33',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 110,
    name: 'Gabon',
    code: 'GA',
    language: null,
    currency_code: 'XAF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '241',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 111,
    name: 'Gambia',
    code: 'GM',
    language: null,
    currency_code: 'GMD',
    currency_rate: '65.15',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '220',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 171,
    name: 'Georgia',
    code: 'GE',
    language: null,
    currency_code: 'GEL',
    currency_rate: '2.72',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '995',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 8,
    name: 'Germany',
    code: 'DE',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '49',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 112,
    name: 'Ghana',
    code: 'GH',
    language: null,
    currency_code: 'GHS',
    currency_rate: '11.60',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '233',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 30,
    name: 'Greece',
    code: 'GR',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '30',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 77,
    name: 'Grenada',
    code: 'GD',
    language: null,
    currency_code: 'XCD',
    currency_rate: '2.73',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1473',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 79,
    name: 'Guatemala',
    code: 'GT',
    language: null,
    currency_code: 'GTQ',
    currency_rate: '7.92',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '502',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 113,
    name: 'Guinea',
    code: 'GN',
    language: null,
    currency_code: 'GNF',
    currency_rate: '8642.27',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '224',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 114,
    name: 'Guinea-Bissau',
    code: 'GW',
    language: null,
    currency_code: 'XOF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '245',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 181,
    name: 'Guyana',
    code: 'GY',
    language: null,
    currency_code: 'GYD',
    currency_rate: '210.55',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '592',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 80,
    name: 'Haiti',
    code: 'HT',
    language: null,
    currency_code: 'HTG',
    currency_rate: '135.87',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '509',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 81,
    name: 'Honduras',
    code: 'HN',
    language: null,
    currency_code: 'HNL',
    currency_rate: '24.80',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '504',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 39,
    name: 'Hong Kong',
    code: 'HK',
    language: null,
    currency_code: 'HKD',
    currency_rate: '7.90',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '852',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 33,
    name: 'Hungary',
    code: 'HU',
    language: null,
    currency_code: 'HUF',
    currency_rate: '369.37',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '36',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 46,
    name: 'Iceland',
    code: 'IS',
    language: null,
    currency_code: 'ISK',
    currency_rate: '137.82',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '354',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 59,
    name: 'India',
    code: 'IN',
    language: null,
    currency_code: 'INR',
    currency_rate: '83.94',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '91',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 36,
    name: 'Indonesia',
    code: 'ID',
    language: null,
    currency_code: 'IDR',
    currency_rate: '15510.62',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '62',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 172,
    name: 'Iraq',
    code: 'IQ',
    language: null,
    currency_code: 'IQD',
    currency_rate: '1317.96',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '964',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 1,
    name: 'Ireland',
    code: 'IE',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '353',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 34,
    name: 'Israel',
    code: 'IL',
    language: null,
    currency_code: 'ILS',
    currency_rate: '3.85',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '972',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 35,
    name: 'Italy',
    code: 'IT',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '39',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 82,
    name: 'Jamaica',
    code: 'JM',
    language: null,
    currency_code: 'JMD',
    currency_rate: '155.84',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1876',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 22,
    name: 'Japan',
    code: 'JP',
    language: null,
    currency_code: 'JPY',
    currency_rate: '149.76',
    currency_cents: 1,
    sea_freight: null,
    tel_code: '81',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 173,
    name: 'Jordan',
    code: 'JO',
    language: null,
    currency_code: 'JOD',
    currency_rate: '0.72',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '962',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 12,
    name: 'Kazakhstan',
    code: 'KZ',
    language: null,
    currency_code: 'KZT',
    currency_rate: '478.23',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '7',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 115,
    name: 'Kenya',
    code: 'KE',
    language: null,
    currency_code: 'KES',
    currency_rate: '146.66',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '254',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 144,
    name: 'Kiribati',
    code: 'KI',
    language: null,
    currency_code: 'AUD',
    currency_rate: '1.57',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '686',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 13,
    name: 'Korea (Rep.)',
    code: 'KR',
    language: null,
    currency_code: 'KRW',
    currency_rate: '1349.01',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '82',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 159,
    name: 'Kosovo',
    code: 'XZ',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '383',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 61,
    name: 'Kuwait',
    code: 'KW',
    language: null,
    currency_code: 'KWD',
    currency_rate: '0.31',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '965',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 190,
    name: 'Kyrgyzstan',
    code: 'KG',
    language: null,
    currency_code: 'KGS',
    currency_rate: '89.60',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '996',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 191,
    name: 'Laos',
    code: 'LA',
    language: null,
    currency_code: 'LAK',
    currency_rate: '20254.88',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '856',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 55,
    name: 'Latvia',
    code: 'LV',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '371',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 174,
    name: 'Lebanon',
    code: 'LB',
    language: null,
    currency_code: 'LBP',
    currency_rate: '15126.30',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '961',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 116,
    name: 'Lesotho',
    code: 'LS',
    language: null,
    currency_code: 'LSL',
    currency_rate: '19.08',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '266',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 160,
    name: 'Liechtenstein',
    code: 'LI',
    language: null,
    currency_code: 'CHF',
    currency_rate: '0.92',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '423',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 54,
    name: 'Lithuania',
    code: 'LT',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '370',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 16,
    name: 'Luxembourg',
    code: 'LU',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '352',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 118,
    name: 'Madagascar',
    code: 'MG',
    language: null,
    currency_code: 'MGA',
    currency_rate: '4569.53',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '261',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 119,
    name: 'Malawi',
    code: 'MW',
    language: null,
    currency_code: 'MWK',
    currency_rate: '1090.20',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '265',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 192,
    name: 'Maldives',
    code: 'MV',
    language: null,
    currency_code: 'MVR',
    currency_rate: '15.56',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '960',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 120,
    name: 'Mali',
    code: 'ML',
    language: null,
    currency_code: 'XOF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '223',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 204,
    name: 'Malta',
    code: 'MT',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '356',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 218,
    name: 'Marshall Islands',
    code: 'MH',
    language: null,
    currency_code: 'USD',
    currency_rate: '1.01',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '692',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2022-05-06 08:05:12'
  },
  {
    id: 121,
    name: 'Mauritania',
    code: 'MR',
    language: null,
    currency_code: 'MRO',
    currency_rate: '360.57',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '222',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 122,
    name: 'Mauritius',
    code: 'MU',
    language: null,
    currency_code: 'MUR',
    currency_rate: '45.10',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '230',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 19,
    name: 'Mexico',
    code: 'MX',
    language: null,
    currency_code: 'MXN',
    currency_rate: '17.39',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '52',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 162,
    name: 'Moldova',
    code: 'MD',
    language: null,
    currency_code: 'MDL',
    currency_rate: '18.31',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '373',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 163,
    name: 'Monaco',
    code: 'MC',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '377',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 193,
    name: 'Mongolia',
    code: 'MN',
    language: null,
    currency_code: 'MNT',
    currency_rate: '3513.32',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '976',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 123,
    name: 'Morocco',
    code: 'MA',
    language: null,
    currency_code: 'MAD',
    currency_rate: '10.38',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '212',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 124,
    name: 'Mozambique',
    code: 'MZ',
    language: null,
    currency_code: 'MZN',
    currency_rate: '63.88',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '258',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 194,
    name: 'Myanmar',
    code: 'MM',
    language: null,
    currency_code: 'MMK',
    currency_rate: '2113.49',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '95',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 125,
    name: 'Namibia',
    code: 'NA',
    language: null,
    currency_code: 'NAD',
    currency_rate: '19.08',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '264',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 145,
    name: 'Nauru',
    code: 'NR',
    language: null,
    currency_code: 'AUD',
    currency_rate: '1.57',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '674',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 195,
    name: 'Nepal',
    code: 'NP',
    language: null,
    currency_code: 'NPR',
    currency_rate: '133.51',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '977',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 14,
    name: 'Netherlands',
    code: 'NL',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '31',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 32,
    name: 'New Zealand',
    code: 'NZ',
    language: null,
    currency_code: 'NZD',
    currency_rate: '1.70',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '64',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 85,
    name: 'Nicaragua',
    code: 'NI',
    language: null,
    currency_code: 'NIO',
    currency_rate: '36.83',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '505',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 126,
    name: 'Niger',
    code: 'NE',
    language: null,
    currency_code: 'XOF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '227',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 127,
    name: 'Nigeria',
    code: 'NG',
    language: null,
    currency_code: 'NGN',
    currency_rate: '778.21',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '234',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 20,
    name: 'Norway',
    code: 'NO',
    language: null,
    currency_code: 'NOK',
    currency_rate: '10.87',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '47',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 175,
    name: 'Oman',
    code: 'OM',
    language: null,
    currency_code: 'OMR',
    currency_rate: '0.39',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '968',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 205,
    name: 'Pakistan',
    code: 'PK',
    language: null,
    currency_code: 'PKR',
    currency_rate: '290.10',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '92',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 222,
    name: 'Palau',
    code: 'PW',
    language: null,
    currency_code: 'USD',
    currency_rate: '1.01',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '680',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2022-05-06 08:05:12'
  },
  {
    id: 148,
    name: 'Papua New Guinea',
    code: 'PG',
    language: null,
    currency_code: 'PGK',
    currency_rate: '3.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '675',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 182,
    name: 'Paraguay',
    code: 'PY',
    language: null,
    currency_code: 'PYG',
    currency_rate: '7324.12',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '595',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 183,
    name: 'Peru',
    code: 'PE',
    language: null,
    currency_code: 'PEN',
    currency_rate: '3.76',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '51',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 206,
    name: 'Philippines',
    code: 'PH',
    language: null,
    currency_code: 'PHP',
    currency_rate: '57.41',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '63',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 6,
    name: 'Poland',
    code: 'PL',
    language: null,
    currency_code: 'PLN',
    currency_rate: '4.37',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '48',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 21,
    name: 'Portugal',
    code: 'PT',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '351',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 62,
    name: 'Qatar',
    code: 'QA',
    language: null,
    currency_code: 'QAR',
    currency_rate: '3.68',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '974',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 44,
    name: 'Romania',
    code: 'RO',
    language: null,
    currency_code: 'RON',
    currency_rate: '4.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '40',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 9,
    name: 'Russia',
    code: 'RU',
    language: null,
    currency_code: 'RUB',
    currency_rate: '97.27',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '7',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 129,
    name: 'Rwanda',
    code: 'RW',
    language: null,
    currency_code: 'RWF',
    currency_rate: '1219.93',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '250',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 88,
    name: 'Saint Lucia',
    code: 'LC',
    language: null,
    currency_code: 'XCD',
    currency_rate: '2.73',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1758',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 89,
    name: 'Saint Vincent and the Grenadines',
    code: 'VC',
    language: null,
    currency_code: 'XCD',
    currency_rate: '2.73',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1784',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 149,
    name: 'Samoa',
    code: 'WS',
    language: null,
    currency_code: 'WST',
    currency_rate: '2.81',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '685',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 165,
    name: 'San Marino',
    code: 'SM',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '378',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 130,
    name: 'Sao Tome and Principe',
    code: 'ST',
    language: null,
    currency_code: 'STD',
    currency_rate: '20904.96',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '239',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 25,
    name: 'Saudi Arabia',
    code: 'SA',
    language: null,
    currency_code: 'SAR',
    currency_rate: '3.79',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '966',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 131,
    name: 'Senegal',
    code: 'SN',
    language: null,
    currency_code: 'XOF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '221',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 166,
    name: 'Serbia (Rep.)',
    code: 'RS',
    language: null,
    currency_code: 'RSD',
    currency_rate: '110.97',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '381',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 132,
    name: 'Seychelles',
    code: 'SC',
    language: null,
    currency_code: 'SCR',
    currency_rate: '13.14',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '248',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 31,
    name: 'Singapore',
    code: 'SG',
    language: null,
    currency_code: 'SGD',
    currency_rate: '1.38',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '65',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 43,
    name: 'Slovakia republic',
    code: 'SK',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '421',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 45,
    name: 'Slovenia',
    code: 'SI',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '386',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 150,
    name: 'Solomon Islands',
    code: 'SB',
    language: null,
    currency_code: 'SBD',
    currency_rate: '8.49',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '677',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 52,
    name: 'South africa',
    code: 'ZA',
    language: null,
    currency_code: 'ZAR',
    currency_rate: '18.94',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '27',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 29,
    name: 'Spain',
    code: 'ES',
    language: null,
    currency_code: 'EUR',
    currency_rate: '0.95',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '34',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 200,
    name: 'Sri Lanka',
    code: 'LK',
    language: null,
    currency_code: 'LKR',
    currency_rate: '326.34',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '94',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 184,
    name: 'Suriname',
    code: 'SR',
    language: null,
    currency_code: 'SRD',
    currency_rate: '38.77',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '597',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 23,
    name: 'Sweden',
    code: 'SE',
    language: null,
    currency_code: 'SEK',
    currency_rate: '11.25',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '46',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 24,
    name: 'Switzerland',
    code: 'CH',
    language: null,
    currency_code: 'CHF',
    currency_rate: '0.92',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '41',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 415,
    name: 'Taiwan',
    code: 'TW',
    language: null,
    currency_code: 'TWD',
    currency_rate: '32.48',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '+886',
    created_at: '2021-07-16 17:32:20',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 196,
    name: 'Tajikistan',
    code: 'TJ',
    language: null,
    currency_code: 'TJS',
    currency_rate: '11.06',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '992',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 26,
    name: 'Thailand',
    code: 'TH',
    language: null,
    currency_code: 'THB',
    currency_rate: '36.33',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '66',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 135,
    name: 'Togo',
    code: 'TG',
    language: null,
    currency_code: 'XOF',
    currency_rate: '620.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '228',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 152,
    name: 'Tonga',
    code: 'TO',
    language: null,
    currency_code: 'TOP',
    currency_rate: '2.41',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '676',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 91,
    name: 'Trinidad and Tobago',
    code: 'TT',
    language: null,
    currency_code: 'TTD',
    currency_rate: '6.83',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1868',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 136,
    name: 'Tunisia',
    code: 'TN',
    language: null,
    currency_code: 'TND',
    currency_rate: '3.18',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '216',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 27,
    name: 'Turkey',
    code: 'TR',
    language: null,
    currency_code: 'TRY',
    currency_rate: '27.44',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '90',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 197,
    name: 'Turkmenistan',
    code: 'TM',
    language: null,
    currency_code: 'TMT',
    currency_rate: '3.54',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '993',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 137,
    name: 'Uganda',
    code: 'UG',
    language: null,
    currency_code: 'UGX',
    currency_rate: '3779.40',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '256',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 28,
    name: 'Ukraine',
    code: 'UA',
    language: null,
    currency_code: 'UAH',
    currency_rate: '37.17',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '380',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 53,
    name: 'United arab emirates',
    code: 'AE',
    language: null,
    currency_code: 'AED',
    currency_rate: '3.71',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '971',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 41,
    name: 'United Kingdom',
    code: 'GB',
    language: null,
    currency_code: 'GBP',
    currency_rate: '0.83',
    currency_cents: 100,
    sea_freight: '[2, 45, 30]',
    tel_code: '44',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 18,
    name: 'United States',
    code: 'US',
    language: 'English',
    currency_code: 'USD',
    currency_rate: '1.00',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '1',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2022-05-06 08:05:12'
  },
  {
    id: 185,
    name: 'Uruguay',
    code: 'UY',
    language: null,
    currency_code: 'UYU',
    currency_rate: '38.31',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '598',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 198,
    name: 'Uzbekistan',
    code: 'UZ',
    language: null,
    currency_code: 'UZS',
    currency_rate: '12290.14',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '998',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 153,
    name: 'Vanuatu',
    code: 'VU',
    language: null,
    currency_code: 'VUV',
    currency_rate: '123.22',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '678',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 38,
    name: 'Vietnam',
    code: 'VN',
    language: null,
    currency_code: 'VND',
    currency_rate: '24616.23',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '84',
    created_at: '2019-07-02 12:00:04',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 201,
    name: 'Vietnam',
    code: 'VN',
    language: null,
    currency_code: 'VND',
    currency_rate: '24616.23',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '84',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 176,
    name: 'Yemen',
    code: 'YE',
    language: null,
    currency_code: 'YER',
    currency_rate: '252.83',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '967',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 139,
    name: 'Zambia',
    code: 'ZM',
    language: null,
    currency_code: 'ZMW',
    currency_rate: '21.06',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '260',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2023-09-23 18:00:06'
  },
  {
    id: 140,
    name: 'Zimbabwe',
    code: 'ZW',
    language: null,
    currency_code: 'USD',
    currency_rate: '1.01',
    currency_cents: 100,
    sea_freight: null,
    tel_code: '263',
    created_at: '2019-07-03 12:00:50',
    updated_at: '2022-05-06 08:05:12'
  }
];
