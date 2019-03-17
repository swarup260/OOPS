export interface ProductBuilderInterFace {
  name: string;
  sku: string;
  id: number;
  qty?: number;
  price: number;
  specialPrice?: number;
  status?: boolean;
  creationDate?: Date;
  updationDate?: Date;
  type?: string;
  attributSets?: any;
}
