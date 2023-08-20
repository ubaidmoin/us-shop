import moment from 'moment';

export const getPriceByRate = (price, currencyRate) => price * currencyRate;
export const normalizeDate = date => moment(date).format('DD-MM-YYYY');
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
    label: 'MALAYSIA',
    value: '+60',
    code: 'MY'
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
