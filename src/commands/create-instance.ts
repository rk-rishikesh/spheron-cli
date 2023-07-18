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
import SpheronClient from "@spheron/compute";

export async function createInstance() {
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
      await SpheronApiService.createInstance({
        organizationId: "64b6aac6a22cea0012583dbb", // USER INPUT
        uniqueTopicId: uuidv4(),
        configuration: {
          branch: "",
          folderName: "",
          protocol: ClusterProtocolEnum.AKASH,
          image: "crccheck/hello-world", // USER INPUT
          tag: "latest",
          instanceCount: 1, //replicas
          buildImage: false,
          ports: [{ "containerPort": 8000, "exposedPort": 8000 }, { "containerPort": 3000, "exposedPort": 3000 }],
          env: [],
          command: [],
          args: [],
          region: "any",
          akashMachineImageName: "Ventus Nano",
          // customInstanceSpecs: {
          //   cpu: 1,
          //   memory: "2",
          //   storage: "1",
          // },
        },
        instanceName: "hello world", // USER INPUT
        clusterUrl: "crccheck/hello-world", // image USER INPUT
        clusterProvider: ProviderEnum.DOCKERHUB,
        clusterName: "hello world", // USER INPUT
        healthCheckUrl: "/", //path
        healthCheckPort: 8000,
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
