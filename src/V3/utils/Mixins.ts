import { Constructor } from "./Utils";
import { attributeSetConfig } from "../product";

function AttributeSetsMixins<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    protected attributeSet: attributeSetConfig[] = [];

    public setAttribute(attributeSetConfig: attributeSetConfig) {
      this.attributeSet.push(attributeSetConfig);
    }

    public getAllAttribute(): attributeSetConfig[] {
      return this.attributeSet;
    }
    public getAttributeByKey(key: string): boolean | attributeSetConfig {
      for (const attribute of this.attributeSet) {
        if (key == attribute.key) {
          return attribute;
        }
      }
      return false;
    }
  };
}

export { AttributeSetsMixins };
