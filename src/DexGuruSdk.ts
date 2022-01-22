import DexGuru from "dexguru-sdk";

const dexGuruApiKey = "hL47vnitWHGq_emlhB8mGoEgap8GLeKQfQ1WxIM-Xg4";

type AllChainsResponse = unknown;

class DexGuruSdk {
  dexguruSdk: DexGuru;
  constructor() {
    this.dexguruSdk = new DexGuru(dexGuruApiKey, "https://api.dev.dex.guru");
  }

  async getAllChains(): Promise<AllChainsResponse> {
    const response = await this.dexguruSdk.getAllChains();
    return response;
  }
}

export default DexGuruSdk;
