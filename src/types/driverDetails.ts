// Size types
export type AdultStandardSize = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL' | '4XL';
export type AdultNumericSize = '28' | '30' | '32' | '34' | '36' | '38' | '40' | '42' | '44';
export type KidsAgeSize = '0-1' | '2-3' | '3-4' | '4-5' | '5-6' | '6-7' | '7-8' | '8-9' | '9-10' | '10-11' | '11-12';
export type KidsStandardSize = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL';

export type SizeCategory = 'adult' | 'kids';

// Clothing categories
export type GeneralClothingType = 'Shirts' | 'Pants' | 'Jackets' | 'Sweaters' | 'Skirts' | 'Shorts' | 'T-shirts' | 
                                 'Hoodies' | 'Jeans' | 'Blouses' | 'Sweatshirts' | 'Undergarments' | 'Shoes' | 
                                 'Caps' | 'Scarves';
export type PremiumClothingType = 'Sarees' | 'Towels' | 'Curtains' | 'Premium Clothes' | 'Kurtis' | 'Sherwani' | 
                                 'Lehenga' | 'Suits' | 'Dresses';

export type Pattern = 'Solid' | 'Striped' | 'Checked' | 'Floral' | 'Polka Dots' | 'Plaid' | 'Houndstooth' | 
                     'Chevron' | 'Camouflage' | 'Paisley' | 'Geometric' | 'Abstract' | 'Animal Print' | 'Tie-Dye' |
                     'Other';

export type FabricType = 'Cotton' | 'Silk' | 'Wool' | 'Linen' | 'Polyester' | 'Nylon' | 'Denim' | 'Khadi' | 
                        'Velvet' | 'Jersey' | 'Chiffon' | 'Taffeta' | 'Brocade' | 'Rayon' | 'Spandex' | 
                        'Corduroy' | 'Other';

export interface DriverEnteredDetails {
  sizeCategory: SizeCategory;
  size: string;
  colors: string[];
  clothingType: GeneralClothingType | PremiumClothingType;
  brand: string;
  pattern: Pattern;
  fabricType: FabricType;
  customDetails?: {
    color?: string;
    pattern?: string;
    fabricType?: string;
  };
}