export class Bond {
  $class = 'com.bbms.ledger.bond.Bond';
  description: string;
  price: number;
  dateOfMaturity: Date;
  valueOfMaturity: number;
  couponRate: number;
  couponType: string;
}
