// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */




/**
 * Details of backup enabled on databases in YugabyteDB cluster
 * @export
 * @interface BackupDetails
 */
export interface BackupDetails  {
  /**
   * 
   * @type {string}
   * @memberof BackupDetails
   */
  ybc_task_id: string;
  /**
   *
   * @type {string}
   * @memberof BackupDetails
   */
  tserver_ip: string;
  /**
   *
   * @type {string}
   * @memberof BackupDetails
   */
  user_operation: string;
  /**
   *
   * @type {string}
   * @memberof BackupDetails
   */
  ybdb_api: string;
  /**
   *
   * @type {string}
   * @memberof BackupDetails
   */
  database_keyspace: string;
  /**
   *
   * @type {string}
   * @memberof BackupDetails
   */
  task_start_time: string;
  /**
   *
   * @type {string}
   * @memberof BackupDetails
   */
  task_status: string;
  /**
   *
   * @type {string}
   * @memberof BackupDetails
   */
  time_taken: string;
  /**
   *
   * @type {string}
   * @memberof BackupDetails
   */
  bytes_transferred: string;
  /**
   *
   * @type {string}
   * @memberof BackupDetails
   */
  actual_size: string;
}


