import configuration from "../configuration";
import { fileExists, readFromJsonFile, writeToJsonFile } from "../utils";
import { createConfiguration } from "./create-configuration";
import Spinner from "../outputs/spinner";
import {
  AppTypeEnum,
  ClusterProtocolEnum,
  InstanceResponse,
  Organization,
  ProviderEnum,
} from "@spheron/core";
import SpheronApiService from "../services/spheron-api";
import { v4 as uuidv4 } from "uuid";

export async function createMarketplaceInstance() {
  const spinner = new Spinner();
  try {
    spinner.spin("Creating Instance ");
    if (!(await fileExists(configuration.configFilePath))) {
      await createConfiguration();
    }
    const jwtToken = await readFromJsonFile(
      "jwtToken",
      configuration.configFilePath
    );
    if (!jwtToken) {
      console.log(
        "For creating new Instance, you need to login to Spheron first"
      );
      return;
    }

    const instanceResponse: InstanceResponse =
      await SpheronApiService.createMarketplaceInstance({
        templateId: "6344361844c2dae46025ae7c",
        environmentVariables: [],
        organizationId: "64b6aac6a22cea0012583dbb",
        akashImageId: "linuxserver/ipfs",
        uniqueTopicId: uuidv4(),
        region: "any",
        customInstanceSpecs: {
          cpu: 1,
          memory: "2",
          storage: "1",
        },
        instanceCount: 1,
      });

    console.log(instanceResponse);

    await writeToJsonFile(
      "instance",
      instanceResponse.clusterId,
      instanceResponse.clusterInstanceId,
      configuration.configFilePath
    );
    console.log(instanceResponse);
    spinner.success(`Instance is created`);
  } catch (error) {
    console.log(`✖️  Error: ${error.message}`);
    throw error;
  } finally {
    spinner.stop();
  }
}
