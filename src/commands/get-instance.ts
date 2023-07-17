import SpheronClient, {
  ComputeMachine,
  Domain,
  Instance,
  InstanceDeployment,
  InstanceLogType,
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
      console.log(`✖️  Error while fetching instance details`);
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
      console.log(`✖️  Error while fetching instance deployments`);
      throw error;
    } finally {
      spinner.stop();
    }
  },

  async getInstancelogs(deploymentId: string) {
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

      const instanceLogs: Array<string> = await client.instance.getInstanceLogs(
        deploymentId,
        {
          from: 0,
          to: 1000,
          logType: InstanceLogType.DEPLOYMENT_LOGS,
          search: ""
        });

      console.log(instanceLogs)

      spinner.success(``);
    } catch (error) {
      console.log(`✖️  Error while fetching instance logs`);
      throw error;
    } finally {
      spinner.stop();
    }
  },

  async getDomains(id: string) {
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

      const domains: Domain[] = await client.instance.getDomains(id);
      console.log(domains);

      spinner.success(``);
    } catch (error) {
      console.log(`✖️  Error while fetching domain details`);
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