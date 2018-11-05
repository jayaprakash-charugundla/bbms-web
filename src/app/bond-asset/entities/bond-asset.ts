import {Bond} from './bond';

export class BondAsset {
  $class = 'com.bbms.ledger.bond.BondAsset';
  ISINCode: string;
  bond: Bond;
}
