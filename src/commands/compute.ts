import configuration from "../configuration";

import SpheronClient, {
  Cluster,
  ComputeMachine,
  Instance,
  MarketplaceApp,
  Organization,
} from "@spheron/compute";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require("chalk");
import {
  readFromJsonFile,
} from "../utils";
import Spinner from "../outputs/spinner";

export async function compute(
) {
  const spinner = new Spinner();
  try {
    spinner.spin(`Something`, 4000);
    const jwtToken = await readFromJsonFile(
      "jwtToken",
      configuration.configFilePath
    );
    if (!jwtToken) {
      throw new Error(
        "Authorization failed. Please execute login command first"
      );
    }
    const client = new SpheronClient({ token: jwtToken });
    // const marketplaceApps: MarketplaceApp[] =
    //   await client.computeMarketplace.getAll();
    // console.log(marketplaceApps);
    const regions: string[] = await client.computeMachine.getRegions();
    console.log(regions);

    const instance: Instance = await client.instance.get("64b37be14a65ee00121d83b1");
    console.log(instance);

    const organization: Organization = await client.organization.get();
    console.log(organization);

    const cluster: Cluster = await client.cluster.get("64b37be14a65ee00121d83b1");
    console.log(cluster)
    
    spinner.success("Upload finished !");
    spinner.stop();

  } catch (error) {
    console.log(`✖️  Error: ${error.message}`);
  } finally {
    spinner.stop();
  }
}
