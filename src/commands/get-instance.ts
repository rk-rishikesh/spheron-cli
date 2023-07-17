import SpheronClient, {
  ComputeMachine,
  Instance,
  InstanceDeployment,
  MarketplaceApp,
  Organization,
} from "@spheron/compute";
import Spinner from "../outputs/spinner";
import { readFromJsonFile } from "../utils";
import configuration from "../configuration";

export const InstanceFunctions = {
  async getInstance(id: string) {
    const spinner = new Spinner();
    try {
      spinner.spin("Fetching ");

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

      const instance: Instance = await client.instance.get(id);
      console.log(instance);
      spinner.success(``);
    } catch (error) {
      console.log(`✖️  Error while fetching organization details`);
      throw error;
    } finally {
      spinner.stop();
    }
  },

  async getInstanceDeployment(deploymentId: string) {
    const spinner = new Spinner();
    try {
      spinner.spin("Fetching ");
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

      const deployment: InstanceDeployment = await client.instance.getInstanceDeployment(deploymentId);
      console.log(deployment);

      spinner.success(``);
    } catch (error) {
      console.log(`✖️  Error while fetching user organizations`);
      throw error;
    } finally {
      spinner.stop();
    }
  },

};

export enum InstanceEnum {
  GET = "details",
  GETINSTANCEDEPLOYMENT = "instance-deployment",
  GETINSTANCELOGS = "logs",
  GETDOMAINS = "domains"
}